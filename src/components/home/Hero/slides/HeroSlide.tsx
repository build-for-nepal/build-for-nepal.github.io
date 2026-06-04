import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SlideData } from "../hero.constants";
import { Link } from "react-router-dom";
import cityFullImg from "@/assets/city.svg";

interface HeroSlideProps {
  slide: SlideData;
  onPrev: () => void;
  onNext: () => void;
}

export default function HeroSlide({ slide, onPrev, onNext }: HeroSlideProps) {
  const { heading, subtitle, ctaLabel, ctaHref, illustration } = slide;
  const background = "background" in slide ? slide.background : undefined;
  const hasPhoto = Boolean(background?.image);

  return (
    <div
      className="relative flex min-h-[calc(100dvh-5.25rem)] w-full items-center justify-center overflow-hidden bg-primary bg-cover bg-center sm:items-center sm:justify-start sm:px-10 lg:px-20"
      style={
        hasPhoto ?
          { backgroundImage: `url('${background!.image}')` }
        : undefined
      }
    >
      {/* ── OVERLAYS ──────────────────────────────────────────────────── */}
      {/* Mobile: heavy primary tint — mountain barely visible */}
      {hasPhoto && <div className="absolute inset-0 bg-primary/85 sm:hidden" />}
      {/* Desktop: primary gradient, dark on text side for readability */}
      {hasPhoto && (
        <div className="absolute inset-0 hidden bg-linear-to-r from-primary/90 via-primary/75 to-primary/50 sm:block" />
      )}

      {/* ── ILLUSTRATION (background layer, always absolute) ─────────── */}
      {/* Mobile: bottom-right for hiker, bottom-center for city SVG    */}
      {/* Desktop: right half                                            */}
      {/* Hiker (photo slides) */}
      {hasPhoto && (
        <div className="absolute bottom-0 right-0 z-10 h-[100dvh] sm:h-[calc(100dvh-5.25rem)] sm:w-1/2 lg:w-full">
          <img
            src={illustration.src}
            alt={illustration.alt}
            className="object-bottom h-full w-auto object-contain sm:h-full sm:w-full sm:object-contain"
          />
        </div>
      )}

      {/* City SVG — mobile: full city, full width, 1/3 height */}
      {!hasPhoto && (
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[33dvh] sm:hidden">
          <img
            src={cityFullImg}
            alt={illustration.alt}
            className="h-full w-full object-contain object-bottom"
          />
        </div>
      )}

      {/* City SVG — desktop: half city, bottom right */}
      {!hasPhoto && (
        <div className="absolute bottom-0 right-0 z-10 hidden w-max sm:block">
          <img
            src={illustration.src}
            alt={illustration.alt}
            className="block aspect-680/287 sm:h-[64dvh]"
          />
        </div>
      )}

      {/* ── TEXT (slightly below centre on mobile, left-aligned on desktop) */}
      <div className="relative z-10 mt-[10dvh] flex flex-col items-center px-8 text-center sm:mt-0 sm:w-1/2 sm:max-w-[52%] sm:items-start sm:text-left">
        <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          {heading}
        </h1>
        <p className="mt-2.5 text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base lg:mt-6 lg:text-lg">
          {subtitle}
        </p>

        {/* Nav arrows */}
        <div className="mt-5 flex items-center gap-1">
          <button
            onClick={onPrev}
            aria-label="Previous slide"
            className="flex h-8 w-8 items-center justify-center text-white/50 transition-colors hover:text-white sm:h-9 sm:w-9"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNext}
            aria-label="Next slide"
            className="flex h-8 w-8 items-center justify-center text-white/50 transition-colors hover:text-white sm:h-9 sm:w-9"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <Link
          to={ctaHref}
          className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-5 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-transparent hover:text-white sm:mt-5 sm:px-8 sm:py-3 sm:text-base"
        >
          {ctaLabel}
          <ChevronRight size={16} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
