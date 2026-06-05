import type { InnovationItem } from "@/types/innovation";
import InnovationTab from "./InnovationTab";

interface InnovationTabListProps {
  items: InnovationItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

/**
 * Left-side (desktop) / top (mobile) tab list. On mobile it scrolls
 * horizontally with a thin scrollbar; a soft fade on the right edge
 * hints at off-screen content.
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
        className="scrollbar-thin flex gap-1 overflow-x-auto md:flex-col md:gap-0 md:overflow-visible"
      >
        {items.map((item) => (
          <InnovationTab
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* Mobile-only fade hint that there's more content to the right.
          Matches the section background (bg-bg). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg to-transparent md:hidden"
      />
    </div>
  );
}
