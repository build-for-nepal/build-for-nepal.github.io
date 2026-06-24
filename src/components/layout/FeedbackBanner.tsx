import { Mail } from "lucide-react";
import bannerImg from "@/assets/feedback-people.webp";
import { Link } from "react-router-dom";

export default function FeedbackBanner() {
  return (
    <section aria-labelledby="feedback-heading" className="page-wrapper py-0">
      <div className="relative flex min-h-[200px] items-center overflow-hidden rounded-2xl bg-feedback lg:min-h-[240px]">
        <img
          src={bannerImg}
          alt=""
          loading="lazy"
          decoding="async"
          width={1600}
          height={400}
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto object-cover object-left"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-feedback from-30% via-feedback/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-lg px-6 py-8 sm:px-10">
          <h2
            id="feedback-heading"
            className="text-2xl font-bold text-dark sm:text-3xl"
          >
            Built Together, For All of Us
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Build For Nepal is more than code
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Drop Feedback
          </Link>
        </div>
      </div>
    </section>
  );
}
