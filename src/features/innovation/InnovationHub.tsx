import { useCallback, useEffect, useState } from "react";
import useInnovationTabs from "@/hooks/useInnovationTabs";
import { INNOVATION_ITEMS } from "@/data/innovation";
import InnovationTabList from "./InnovationTabList";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import ProjectActions from "./ProjectActions";

/**
 * Auto-advance interval for the tab carousel.
 * 6s is a sweet spot — long enough to read a short paragraph,
 * short enough to keep the section feeling alive.
 */
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
 */
export default function InnovationHub() {
  const { active, activeId, setActiveId } = useInnovationTabs(INNOVATION_ITEMS);
  const [isPaused, setIsPaused] = useState(false);

  // Advance to the next item, wrapping at the end.
  const next = useCallback(() => {
    const i = INNOVATION_ITEMS.findIndex((item) => item.id === activeId);
    const nextItem = INNOVATION_ITEMS[(i + 1) % INNOVATION_ITEMS.length];
    setActiveId(nextItem.id);
  }, [activeId, setActiveId]);

  // Auto-advance. Resets whenever `activeId` changes (user click or auto)
  // so manual selection always gets a full interval before the next swap.
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isPaused, next]);

  return (
    <section
      aria-labelledby="innovation-hub-heading"
      className="bg-bg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20 xl:px-8">
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
        {/* Below xl: cap at a comfortable reading width and center.
            xl+: release to the full 3-column grid. */}
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 xl:max-w-none xl:grid xl:grid-cols-[200px_minmax(0,360px)_1fr] xl:gap-12">
          {/* Tabs: full-width row below xl, left column on xl+. */}
          <InnovationTabList
            items={INNOVATION_ITEMS}
            activeId={activeId}
            onSelect={setActiveId}
          />

          {/* MOBILE / TABLET: text 3/5, image 2/5. */}
          <div className="grid grid-cols-5 items-center gap-4 xl:hidden">
            <ProjectInfo item={active} className="col-span-3 min-w-0" />
            <ProjectImage
              item={active}
              className="col-span-2 max-h-48 w-full"
            />
          </div>

          {/* MOBILE / TABLET: CTAs full width below. */}
          <ProjectActions item={active} className="xl:hidden" />

          {/* DESKTOP: middle column — illustration. */}
          <ProjectImage
            item={active}
            className="hidden h-full max-h-72 xl:flex"
          />

          {/* DESKTOP: right column — info + CTAs stacked. */}
          <div className="hidden flex-col gap-4 xl:flex">
            <ProjectInfo item={active} />
            <ProjectActions item={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
