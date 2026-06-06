import type { InnovationItem } from "@/types/innovation";
import InnovationTab from "./InnovationTab";

interface InnovationTabListProps {
  items: InnovationItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

/**
 * Tab list container.
 *
 * The rail is a dedicated absolutely-positioned <div> — guaranteed to be
 * one continuous element. Each tab paints a teal accent over the rail
 * when active. No borders involved → no anti-aliasing seams between items.
 *
 * - Mobile (< xl): rail is a horizontal line at the bottom.
 * - Desktop (xl+): rail is a vertical line on the left.
 */
export default function InnovationTabList({
  items,
  activeId,
  onSelect,
}: InnovationTabListProps) {
  return (
    <div className="relative">
      <div
        role="tablist"
        aria-label="Innovation Hub projects"
        aria-orientation="vertical"
        className="scrollbar-thin relative flex gap-1 overflow-x-auto xl:flex-col xl:gap-0 xl:overflow-visible"
      >
        {/* THE RAIL — single continuous element, no seams possible. */}
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute bg-slate-200",
            // Mobile: thin horizontal line along the bottom.
            "inset-x-0 bottom-0 h-[2px]",
            // Desktop: thin vertical line on the left.
            "xl:inset-x-auto xl:left-0 xl:inset-y-0 xl:h-full xl:w-[2px]",
          ].join(" ")}
        />

        {items.map((item) => (
          <InnovationTab
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* Mobile-only fade hint that there's more content to the right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg to-transparent xl:hidden"
      />
    </div>
  );
}
