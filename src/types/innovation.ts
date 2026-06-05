import type { LucideIcon } from "lucide-react";

export interface InnovationLinks {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export interface InnovationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: { src: string; alt: string };
  links: InnovationLinks[];
}
