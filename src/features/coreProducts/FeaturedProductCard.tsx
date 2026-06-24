import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

interface FeaturedProductCardProps {
  product: Project;
}

export default function FeaturedProductCard({
  product,
}: FeaturedProductCardProps) {
  const { title, description, isLive, featuredImage } = product;
  const primaryLink = product.links[0];

  return (
    <article className="relative flex h-full min-h-60 flex-col justify-end overflow-hidden rounded-2xl sm:min-h-68 lg:min-h-80">
      {featuredImage && (
        <img
          src={featuredImage.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"
        aria-hidden="true"
      />

      {isLive && (
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white sm:left-6 sm:top-6">
          Live Now
        </span>
      )}

      <div className="relative z-10 p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>

        <p className="mt-3 max-w-md text-sm text-white/90 sm:text-base">
          {description}
        </p>

        <a
          href={primaryLink.href}
          target={primaryLink.external ? "_blank" : undefined}
          rel={primaryLink.external ? "noreferrer noopener" : undefined}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg border border-white/80 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:mt-8"
        >
          {primaryLink.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
