import type { InnovationItem } from "@/types/innovation";
import InnovationTab from "./InnovationTab";

interface InnovationTabListProps {
  items: InnovationItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

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
        className="scrollbar-thin flex gap-1 overflow-x-auto xl:flex-col xl:gap-0 xl:overflow-visible"
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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg to-transparent xl:hidden"
      />
    </div>
  );
}
