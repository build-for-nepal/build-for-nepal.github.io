import {
  ArrowLeftRight,
  Calendar,
  ExternalLink,
  MapPin,
  Mountain,
  Package,
} from "lucide-react";
import type { InnovationItem } from "@/types/innovation";
import adBsImg from "@/assets/ad-bs.svg";
import nepalMapImg from "@/assets/nepal-map.svg";
import nepaliCalendarImg from "@/assets/nepali-calander.svg";
import trailNepalImg from "@/assets/trail-nepal.svg";

export const INNOVATION_ITEMS: InnovationItem[] = [
  {
    id: "ad-bs-converter",
    label: "AD-BS Converter",
    icon: ArrowLeftRight,
    title: "AD-BS Converter",
    description:
      "Convert dates between the Gregorian (AD) and Bikram Sambat (BS) calendars instantly, with accurate results for everyday use.",
    image: { src: adBsImg, alt: "AD to BS date converter illustration" },
    links: [
      { label: "Try Converter", href: "#", icon: ArrowLeftRight },
      { label: "NPM", href: "#", icon: Package, external: true },
      { label: "GitHub", href: "#", icon: ExternalLink, external: true },
    ],
  },
  {
    id: "nepal-map",
    label: "Nepal Map",
    icon: MapPin,
    title: "Nepal Map",
    description:
      "Interactive map of Nepal with provinces, districts, and key landmarks — ready to drop into any Nepali web app.",
    image: { src: nepalMapImg, alt: "Stylised map of Nepal illustration" },
    links: [
      { label: "Explore Map", href: "#", icon: MapPin },
      { label: "NPM", href: "#", icon: Package, external: true },
      { label: "GitHub", href: "#", icon: ExternalLink, external: true },
    ],
  },
  {
    id: "nepali-calendar",
    label: "Nepali Calendar",
    icon: Calendar,
    title: "Nepali Calendar",
    description:
      "Keep track of Nepali dates with a detailed calendar. Know the month, day, and year in Bikram Sambat with our easy-to-use Nepali Calendar component.",
    image: {
      src: nepaliCalendarImg,
      alt: "Person interacting with a large Nepali calendar",
    },
    links: [
      { label: "Explore Calendar", href: "#", icon: Calendar },
      { label: "NPM", href: "#", icon: Package, external: true },
      { label: "GitHub", href: "#", icon: ExternalLink, external: true },
    ],
  },
  {
    id: "trail-nepal",
    label: "Trail Nepal",
    icon: Mountain,
    title: "Trail Nepal",
    description:
      "Your all-in-one guide to Nepal's best hiking trails — detailed maps, cost breakdowns, and local insights for every trekker.",
    image: { src: trailNepalImg, alt: "Hiker on a mountain trail illustration" },
    links: [
      { label: "Visit Site", href: "/projects/trail-nepal", icon: Mountain },
      { label: "GitHub", href: "#", icon: ExternalLink, external: true },
    ],
  },
];
