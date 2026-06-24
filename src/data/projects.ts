import {
  ArrowLeftRight,
  Calendar,
  ExternalLink,
  MapPin,
  Mountain,
  Package,
} from "lucide-react";
import type { Project } from "@/types/project";

// SVGs for Innovation Hub illustrations
import adBsImg from "@/assets/ad-bs.svg";
import nepalMapImg from "@/assets/nepal-map.svg";
import nepaliCalendarImg from "@/assets/nepali-calander.svg";
import trailNepalIllustration from "@/assets/trail-nepal.svg";

// Photos for Core Products featured card
import trailNepalPhoto from "@/assets/trailNepal.webp";
export const PROJECTS: Project[] = [
  {
    id: "trails-nepal",
    title: "Trails Nepal",
    label: "Trail Nepal",
    description:
      "Discover Nepal's diverse hiking and trekking routes for different regions, designed for both locals and tourists.",
    icon: Mountain,
    isLive: true,
    image: {
      src: trailNepalIllustration,
      alt: "Hiker on a mountain trail illustration",
    },
    featuredImage: {
      src: trailNepalPhoto,
      alt: "Mountain trail in Nepal",
    },
    links: [
      {
        label: "Visit Site",
        href: "https://trails.buildfornepal.org/",
        icon: Mountain,
        external: true,
      },
      // {
      //   label: "GitHub",
      //   href: "https://github.com/build-for-nepal/trail-nepal",
      //   icon: ExternalLink,
      //   external: true,
      // },
    ],
  },
  {
    id: "ad-bs-converter",
    title: "AD-BS Converter",
    description:
      "Convert dates between the Gregorian (AD) and Bikram Sambat (BS) calendars instantly, with accurate results for everyday use.",
    icon: ArrowLeftRight,
    image: { src: adBsImg, alt: "AD to BS date converter illustration" },
    links: [
      {
        label: "NPM",
        href: "https://www.npmjs.com/package/ad-bs-converter",
        icon: Package,
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/build-for-nepal/ad-bs-converter",
        icon: ExternalLink,
        external: true,
      },
    ],
  },
  {
    id: "nepali-calendar",
    title: "Nepali Calendar",
    description:
      "Track Nepali dates with a detailed Bikram Sambat calendar, showing the month, day, and year through an easy-to-use component.",
    icon: Calendar,
    image: {
      src: nepaliCalendarImg,
      alt: "Person interacting with a large Nepali calendar",
    },
    links: [
      {
        label: "NPM",
        href: "https://www.npmjs.com/package/nepali-calendar",
        icon: Package,
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/build-for-nepal/bikram-samvat-calendar",
        icon: ExternalLink,
        external: true,
      },
    ],
  },
  {
    id: "nepal-map",
    title: "Nepal Map",
    description:
      "Explore Nepal's provinces, districts, and key landmarks on an interactive map, built ready to drop into any Nepali web app.",
    icon: MapPin,
    image: { src: nepalMapImg, alt: "Stylised map of Nepal illustration" },
    links: [
      {
        label: "NPM",
        href: "https://www.npmjs.com/package/nepal-map",
        icon: Package,
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/build-for-nepal/nepal-map",
        icon: ExternalLink,
        external: true,
      },
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
