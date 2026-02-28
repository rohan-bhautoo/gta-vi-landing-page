import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRAILER_URL =
  "https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&rel=0";

export default function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center bg-black/95"
      style={{ zIndex: 9999 }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close trailer"
        className="absolute top-4 right-4 md:top-8 md:right-8 size-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl cursor-pointer transition-colors"
      >
        &times;
      </button>

      <div className="w-[90vw] max-w-5xl aspect-video">
        <iframe
          src={TRAILER_URL}
          title="Grand Theft Auto VI Trailer"
          className="size-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body,
  );
}
