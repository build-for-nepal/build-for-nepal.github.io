import { MessageCircle, Wrench, Users } from "lucide-react";
import type { ContactChannel } from "@/types/contact";

export const CONTACT_EMAIL = "hello@buildfornepal.org";

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "general-inquiries",
    title: "General Inquiries",
    description: "For questions about our mission and general community info.",
    icon: MessageCircle,
    email: CONTACT_EMAIL,
  },
  {
    id: "product-support",
    title: "Product Support",
    description: "Facing issues with our apps? Our dev team is here to help.",
    icon: Wrench,
    email: CONTACT_EMAIL,
  },
  {
    id: "collaborate",
    title: "Collaborate with Us",
    description:
      "Open-source enthusiast? Let's build something great together.",
    icon: Users,
    email: CONTACT_EMAIL,
  },
];
