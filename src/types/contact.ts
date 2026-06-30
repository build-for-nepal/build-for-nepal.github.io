import type { LucideIcon } from "lucide-react";

export interface ContactChannel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  email: string;
}

// Literal union so TS catches typos at compile time.
export type ContactSubject =
  | "general"
  | "product-support"
  | "collaboration"
  | "other";

export interface ContactFormPayload {
  fullName: string;
  email: string;
  subject: ContactSubject;
  message: string;
}
