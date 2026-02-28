import type { CharacterData, SupportingCharacterData } from "../types";

export const JASON: CharacterData = {
  name: "Jason Duval",
  title: "Jason wants an easy life, but things just keep getting harder.",
  description:
    "Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.",
  images: [
    "/images/jason-1.webp",
    "/images/jason-2.webp",
    "/images/jason-3.webp",
  ],
};

export const LUCIA: CharacterData = {
  name: "Lucia Caminos",
  title: "Lucia's father taught her to fight as soon as she could walk.",
  description:
    "Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out. Lucia's learned her lesson — only smart moves from here.",
  quote:
    "More than anything, Lucia wants the good life her mom has dreamed of since their days in Liberty City — but instead of half-baked fantasies, Lucia is prepared to take matters into her own hands.",
  images: [
    "/images/lucia-1.webp",
    "/images/lucia-2.webp",
    "/images/lucia-3.webp",
  ],
};

export const SUPPORTING_CHARACTERS: SupportingCharacterData[] = [
  {
    name: "Cal Hampton",
    role: "The Information Man",
    description:
      "A paranoid information gatherer who knows everyone's secrets in Vice City.",
    image: "/images/characters/cal-hampton.jpg",
  },
  {
    name: "Boobie Ike",
    role: "The Entrepreneur",
    description:
      "A Vice City entrepreneur with deep ties to the music industry.",
    image: "/images/characters/boobie-ike.jpg",
  },
  {
    name: "Dre'Quan Priest",
    role: "The Label Boss",
    description:
      "Runs a music label that serves as a front for larger operations.",
    image: "/images/characters/drequan-priest.jpg",
  },
  {
    name: "Real Dimez",
    role: "The Social Star",
    description:
      "Female rappers leveraging social media fame into something more dangerous.",
    image: "/images/characters/real-dimez.jpg",
  },
  {
    name: "Raul Bautista",
    role: "The Bank Man",
    description:
      "An experienced bank robber whose methods are as old-school as they come.",
    image: "/images/characters/raul-bautista.jpg",
  },
  {
    name: "Brian Heder",
    role: "The Smuggler",
    description:
      "A legacy drug smuggler whose family has run the Keys for decades.",
    image: "/images/characters/brian-heder.jpg",
  },
];
