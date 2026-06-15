import cityImg from "@/assets/city-half.svg";
import hikerImg from "@/assets/Hiker boy.svg";
import mountainImg from "@/assets/mountain.png";

export const SLIDES_DATA = [
  {
    id: "build-for-nepal",
    heading: "Build for Nepal",
    subtitle:
      "Explore our collection of Nepali-focused applications designed to make daily tasks simpler and more accessible for everyone!",
    ctaLabel: "Explore Projects",
    ctaHref: "#innovation-hub",
    illustration: {
      src: cityImg,
      alt: "Illustrated Kathmandu skyline with mountains",
    },
  },
  {
    id: "trail-nepal",
    heading: "Trail Nepal",
    subtitle:
      "Your all-in-one guide to Nepal's best hiking trails, detailed maps, cost breakdowns and local insights for every trekker.",
    ctaLabel: "Explore Project",
    ctaHref: "https://trails.buildfornepal.org/",
    illustration: {
      src: hikerImg,
      alt: "Illustrated hiker with backpack standing on rocky terrain",
    },
    background: {
      image: mountainImg,
    },
  },
] as const;

export type SlideData = (typeof SLIDES_DATA)[number];
