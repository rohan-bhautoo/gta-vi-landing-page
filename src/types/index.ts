export interface MaskSettings {
  initialMaskPos: string;
  initialMaskSize: string;
  maskPos: string;
  maskSize: string;
}

export interface CharacterData {
  name: string;
  title: string;
  description: string;
  quote?: string;
  images: string[];
}

export interface LocationData {
  name: string;
  description: string;
  image: string;
}

export interface SupportingCharacterData {
  name: string;
  role: string;
  description: string;
  image: string;
}
