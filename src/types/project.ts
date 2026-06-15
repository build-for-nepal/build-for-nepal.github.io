import type { LucideIcon } from "lucide-react";

export interface ProjectLink {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  /** Tab strip label in Innovation Hub. Falls back to title if omitted. */
  label?: string;
  description: string;
  icon: LucideIcon;
  /** SVG illustration used by Innovation Hub. */
  image?: { src: string; alt: string };
  /** Photo used by Core Products featured card. */
  featuredImage?: { src: string; alt: string };
  isLive?: boolean;
  /** links[0] is the primary CTA. */
  links: ProjectLink[];
}
