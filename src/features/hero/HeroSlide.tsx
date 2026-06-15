import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SlideData } from "@/data/hero";
import { Link } from "react-router-dom";
import cityFullImg from "@/assets/city.svg";

// hash → native <a> (smooth scroll), external → new tab, else → React Router Link
function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("#"))
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  if (href.startsWith("http"))
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

interface HeroSlideProps {
  slide: SlideData;
  onPrev: () => void;
  onNext: () => void;
}

interface SlideArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

function SlideArrowButton({ direction, onClick }: SlideArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-8 w-8 cursor-pointer items-center justify-center text-white/50 transition-colors hover:text-white sm:h-9 sm:w-9"
    >
      {direction === "prev" ?
        <ChevronLeft size={20} />
      : <ChevronRight size={20} />}
    </button>
  );
}

export default function HeroSlide({ slide, onPrev, onNext }: HeroSlideProps) {
  const { heading, subtitle, ctaLabel, ctaHref, illustration } = slide;
  const background = "background" in slide ? slide.background : undefined;
  const hasPhoto = Boolean(background?.image);

  return (
    <div
      className="relative flex h-hero w-full items-center justify-center overflow-hidden bg-primary bg-cover bg-center sm:h-auto sm:min-h-hero sm:justify-start"
      style={
        hasPhoto ?
          { backgroundImage: `url('${background!.image}')` }
        : undefined
      }
    >
      {hasPhoto && <div className="absolute inset-0 bg-primary/85 sm:hidden" />}
      {hasPhoto && (
        <div className="absolute inset-0 hidden bg-linear-to-r from-primary/90 via-primary/75 to-primary/50 sm:block" />
      )}

      <div className="page-wrapper relative z-20">
        <div className="flex flex-col items-center pb-[4dvh] text-center sm:max-w-[52%] sm:items-start sm:pb-0 sm:text-left">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            {heading}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base lg:mt-6 lg:text-lg">
            {subtitle}
          </p>

          <div className="mt-5 flex items-center gap-1">
            <SlideArrowButton direction="prev" onClick={onPrev} />
            <SlideArrowButton direction="next" onClick={onNext} />
          </div>

          <CtaLink
            href={ctaHref}
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border-2 border-white bg-white px-5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-transparent hover:text-white sm:mt-5 sm:px-8 sm:text-base"
          >
            {ctaLabel}
            <ChevronRight size={16} aria-hidden />
          </CtaLink>
        </div>
      </div>

      {/* Photo slides: hiker absolute-positioned, fills bottom-right */}
      {hasPhoto && (
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-[50dvh] w-full sm:h-hero sm:w-full lg:w-full">
          <img
            src={illustration.src}
            alt={illustration.alt}
            className="h-full w-full object-contain object-bottom sm:object-contain"
          />
        </div>
      )}

      {/* Non-photo slides: full city on mobile */}
      {!hasPhoto && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[45dvh] sm:hidden">
          <img
            src={cityFullImg}
            alt={illustration.alt}
            className="h-full w-full object-cover object-bottom"
          />
        </div>
      )}

      {/* Non-photo slides: half-city bottom-right on desktop */}
      {!hasPhoto && (
        <div className="absolute bottom-0 right-0 z-10 hidden w-max sm:block">
          <img
            src={illustration.src}
            alt={illustration.alt}
            className="block aspect-680/287  sm:h-[64dvh]"
          />
        </div>
      )}
    </div>
  );
}
