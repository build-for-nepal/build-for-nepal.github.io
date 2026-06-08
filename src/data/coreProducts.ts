import { ArrowLeftRight, Calendar, Mountain } from "lucide-react";
import type { Product } from "@/types/product";
import trailNepalImg from "@/assets/trailNepal.png";

export const FEATURED_PRODUCT_ID = "trails-nepal";

export const CORE_PRODUCTS: Product[] = [
  {
    id: "trails-nepal",
    title: "Trails Nepal",
    description:
      "Discover Nepal's diverse hiking and trekking routes for different regions, designed for both locals and tourists.",
    href: "/projects/trail-nepal",
    icon: Mountain,
    isLive: true,
    image: {
      src: trailNepalImg,
      alt: "Mountain trail in Nepal",
    },
  },
  {
    id: "ad-bs-converter",
    title: "AD-BS Converter",
    description:
      "Effortlessly convert dates between Bikram Sambat and Gregorian calendars with high precision and developer API support.",
    href: "#",
    icon: ArrowLeftRight,
  },
  {
    id: "nepali-calendar",
    title: "Nepali Calendar",
    description:
      "A lightweight easy-to-use Nepali calendar featuring Bikram Sambat dates, available across web and mobile platforms.",
    href: "#",
    icon: Calendar,
  },
];
