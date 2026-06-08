import type { LucideIcon } from "lucide-react";

// One "channel" you can reach us through — one card on the right of the form.
export interface ContactChannel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  email: string;
}

// Allowed values for the form's <select> "Subject" dropdown.
// Literal union = TS catches typos at compile time, zero runtime cost.
export type ContactSubject =
  | "general"
  | "product-support"
  | "collaboration"
  | "other";

// What the form hands off when submitted.
// Shared so the future submit handler (API, Formspree, etc.) types cleanly.
export interface ContactFormPayload {
  fullName: string;
  email: string;
  subject: ContactSubject;
  message: string;
}
