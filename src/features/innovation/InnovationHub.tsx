import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useInnovationTabs from "@/hooks/useInnovationTabs";
import { INNOVATION_ITEMS } from "@/data/innovation";
import InnovationTabList from "./InnovationTabList";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import ProjectActions from "./ProjectActions";

gsap.registerPlugin(useGSAP);

const AUTO_ADVANCE_MS = 6000;

/**
 * "Innovation Hub" section.
 *
 * Mobile / tablet (< xl):
 *   [ tabs (horizontal scroll)            ]
 *   [ title + desc (3/5) | image (2/5)    ]
 *   [ CTAs (full width)                   ]
 *
 * Desktop (>= xl):
 *   [ tabs | image | title + desc + CTAs  ]
 *
 * Image and content boxes use fixed dimensions so swapping items
 * never shifts the surrounding layout.
 */
export default function InnovationHub() {
  const { active, activeId, setActiveId } = useInnovationTabs(INNOVATION_ITEMS);
  const [isPaused, setIsPaused] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Advance to the next item, wrapping at the end.
  const next = useCallback(() => {
    const i = INNOVATION_ITEMS.findIndex((item) => item.id === activeId);
    const nextItem = INNOVATION_ITEMS[(i + 1) % INNOVATION_ITEMS.length];
    setActiveId(nextItem.id);
  }, [activeId, setActiveId]);

  // Auto-advance. Each tab change resets the interval.
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isPaused, next]);

  // Slow, smooth fade-up on every active item change. Scoped to the
  // body so only the changing content animates — tabs stay put.
  useGSAP(
    () => {
      gsap.fromTo(
        ".js-innovation-fade",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: "auto",
        },
      );
    },
    { dependencies: [activeId], scope: bodyRef },
  );

  return (
    <section
      aria-labelledby="innovation-hub-heading"
      className="bg-bg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="page-wrapper py-16 sm:py-20">
        {/* ── HEADER ──────────────────────────────────────────────── */}
        <header className="mb-10 text-center">
          <h2
            id="innovation-hub-heading"
            className="text-3xl font-bold text-dark sm:text-4xl"
          >
            Innovation Hub
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">
            Smart solutions supporting Nepal&apos;s growing digital landscape.
          </p>
        </header>

        {/* ── BODY ────────────────────────────────────────────────── */}
        <div
          ref={bodyRef}
          className="mx-auto flex w-full max-w-2xl flex-col gap-6 xl:max-w-none xl:grid xl:grid-cols-[240px_360px_1fr] xl:items-start xl:gap-16"
        >
          {/* Tabs — never animated, never shifts. */}
          <InnovationTabList
            items={INNOVATION_ITEMS}
            activeId={activeId}
            onSelect={setActiveId}
          />

          {/* MOBILE / TABLET: fixed-height row, text 3/5, image 2/5. */}
          <div className="grid grid-cols-5 items-center gap-4 xl:hidden">
            <ProjectInfo
              item={active}
              className="js-innovation-fade col-span-3 min-w-0"
            />
            <ProjectImage
              item={active}
              className="js-innovation-fade col-span-2 h-40 w-full"
            />
          </div>

          {/* MOBILE / TABLET: CTAs full width below. */}
          <ProjectActions
            item={active}
            className="js-innovation-fade xl:hidden"
          />

          {/* DESKTOP: middle column — illustration in a fixed box. */}
          <ProjectImage
            item={active}
            className="js-innovation-fade hidden h-80 w-full xl:flex"
          />

          {/* DESKTOP: right column — info + CTAs stacked.
              min-h reserves vertical space so descriptions of different
              lengths never push CTAs around. pt offset drops the title
              slightly below the image top for a softer alignment. */}
          <div className="hidden min-h-80 flex-col justify-start gap-6 pt-8 xl:flex">
            <ProjectInfo item={active} className="js-innovation-fade" />
            <ProjectActions item={active} className="js-innovation-fade" />
          </div>
        </div>
      </div>
    </section>
  );
}
