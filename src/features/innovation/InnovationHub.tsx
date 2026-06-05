import useInnovationTabs from "@/hooks/useInnovationTabs";
import { INNOVATION_ITEMS } from "@/data/innovation";
import InnovationTabList from "./InnovationTabList";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import ProjectActions from "./ProjectActions";

/**
 * "Innovation Hub" section.
 *
 * Mobile / tablet (< lg):
 *   [ tabs (horizontal scroll)            ]
 *   [ title + desc      | image           ]
 *   [ CTAs (full width)                   ]
 *
 * Desktop (>= lg):
 *   [ tabs | image | title + desc + CTAs ]
 */
export default function InnovationHub() {
  const { active, activeId, setActiveId } = useInnovationTabs(INNOVATION_ITEMS);

  return (
    <section aria-labelledby="innovation-hub-heading" className="bg-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20 lg:px-8">
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
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[200px_minmax(0,360px)_1fr] lg:gap-12">
          {/* Tabs: full-width row on mobile, left column on desktop. */}
          <InnovationTabList
            items={INNOVATION_ITEMS}
            activeId={activeId}
            onSelect={setActiveId}
          />

          {/* MOBILE / TABLET: text takes 3/5, image takes 2/5.
              Hidden on lg — desktop renders the parts in dedicated columns below. */}
          <div className="grid grid-cols-5 items-center gap-4 lg:hidden">
            <ProjectInfo item={active} className="col-span-3 min-w-0" />
            <ProjectImage
              item={active}
              className="col-span-2 max-h-48 w-full"
            />
          </div>

          {/* MOBILE / TABLET: CTAs full width below the row above. */}
          <ProjectActions item={active} className="lg:hidden" />

          {/* DESKTOP: middle column — the illustration. */}
          <ProjectImage
            item={active}
            className="hidden h-full max-h-72 lg:flex"
          />

          {/* DESKTOP: right column — info + CTAs stacked. */}
          <div className="hidden flex-col gap-4 lg:flex">
            <ProjectInfo item={active} />
            <ProjectActions item={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
