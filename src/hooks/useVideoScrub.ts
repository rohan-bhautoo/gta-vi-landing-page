import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface VideoScrubOptions {
  trigger: RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  duration?: number;
}

export function useVideoScrub({
  trigger,
  start = "top top",
  end = "bottom bottom",
  scrub = true,
  pin = false,
  duration = 3,
}: VideoScrubOptions) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      const triggerEl = trigger.current;
      if (!video || !triggerEl) return;

      const onMetadata = () => {
        gsap.to(video, {
          currentTime: video.duration,
          duration,
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start,
            end,
            scrub,
            pin,
          },
        });
      };

      if (video.readyState >= 1) {
        onMetadata();
      } else {
        video.addEventListener("loadedmetadata", onMetadata, { once: true });
      }

      return () => {
        video.removeEventListener("loadedmetadata", onMetadata);
      };
    },
    { dependencies: [], scope: trigger },
  );

  return videoRef;
}
