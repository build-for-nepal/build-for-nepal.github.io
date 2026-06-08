import { CheckCircle2, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import type { ContactFormPayload, ContactSubject } from "@/types/contact";

const SUBJECT_OPTIONS: { value: ContactSubject; label: string }[] = [
  { value: "general", label: "General Inquiry" },
  { value: "product-support", label: "Product Support" },
  { value: "collaboration", label: "Collaboration" },
  { value: "other", label: "Other" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = Omit<ContactFormPayload, "subject"> & {
  subject: ContactSubject | "";
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormState>({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjectValue = useWatch({ control, name: "subject" });

  const onSubmit = (data: FormState) => {
    if (!data.subject) return;

    const payload: ContactFormPayload = { ...data, subject: data.subject };

    // TODO(backend): swap console.log for a real submit handler
    console.log("Contact form submitted:", payload);

    setIsSubmitted(true);
    reset();
    // No auto-dismiss — user clicks "Send another message" to come back.
    // Industry standard: don't yank confirmation away before the user reads it.
  };

  // Lets the user go back to the form after seeing the success state.
  const handleSendAnother = () => setIsSubmitted(false);

  // SUCCESS STATE — replaces the form entirely once a submission lands.
  // Same card shell as the form so the layout doesn't jump.
  if (isSubmitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-md sm:p-12"
      >
        {/* Soft teal halo behind the icon for a "celebratory" hit without being noisy. */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-dark sm:text-3xl">
          Message sent
        </h3>

        <p className="mt-3 max-w-sm text-sm text-muted sm:text-base">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>

        <button
          type="button"
          onClick={handleSendAnother}
          className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-dark transition-colors hover:border-primary hover:text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
      <h3 className="text-2xl font-bold text-primary sm:text-3xl">
        Drop us a Line
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-6 space-y-5"
      >
        {/* Name + Email row. */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Full Name"
            htmlFor="fullName"
            error={errors.fullName?.message}
          >
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="input-base"
              {...register("fullName", {
                required: "Please tell us your name",
                minLength: { value: 2, message: "Name is too short" },
              })}
            />
          </Field>

          <Field
            label="Email Address"
            htmlFor="email"
            error={errors.email?.message}
          >
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="input-base"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: EMAIL_PATTERN,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </Field>
        </div>

        <Field
          label="Subject"
          htmlFor="subject"
          error={errors.subject?.message}
        >
          <select
            id="subject"
            className={`input-base ${subjectValue === "" ? "text-gray-400" : "text-dark"}`}
            {...register("subject", { required: "Please choose a subject" })}
          >
            <option value="" disabled hidden>
              General Inquiry
            </option>
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-dark">
                {opt.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
        >
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            className="input-base resize-y"
            {...register("message", {
              required: "Don't forget your message",
              minLength: { value: 10, message: "Message is a bit too short" },
            })}
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-dark"
      >
        {label}
      </label>
      {children}

      {error && (
        <p
          role="alert"
          aria-live="polite"
          className="mt-1.5 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
