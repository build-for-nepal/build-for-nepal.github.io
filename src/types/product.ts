import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  isLive?: boolean;
  image?: {
    src: string;
    alt: string;
  };
}
