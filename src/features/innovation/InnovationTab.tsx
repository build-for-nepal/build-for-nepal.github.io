import { cn } from "@/lib/utils";
import type { InnovationItem } from "@/types/innovation";

interface InnovationTabProps {
  item: InnovationItem;
  isActive: boolean;
  onSelect: (id: string) => void;
}

/**
 * One row in the Innovation Hub's tab list.
 *
 * The rail (continuous gray line) lives on the parent. Each tab paints
 * a teal accent over its segment of the rail when active — same exact
 * positioning as the rail itself, so it covers cleanly.
 */
export default function InnovationTab({
  item,
  isActive,
  onSelect,
}: InnovationTabProps) {
  const { id, label, icon: Icon } = item;
  return (
    <button
      type="button"
      role="tab"
      id={`innovation-tab-${id}`}
      aria-selected={isActive}
      aria-controls={`innovation-panel-${id}`}
      tabIndex={isActive ? 0 : -1}
      onClick={() => onSelect(id)}
      className={cn(
        // `relative` so the accent overlay positions against this button.
        "relative flex shrink-0 items-center gap-2 whitespace-nowrap text-left text-sm transition-colors",
        // Padding only — the rail is on the parent.
        "px-3 py-2 xl:w-full xl:px-5 xl:py-5 xl:text-base",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        isActive
          ? "font-semibold text-primary"
          : "text-slate-400 hover:text-slate-600",
      )}
    >
      {/* Active accent — paints teal over the rail at this tab's
          segment. Positioning matches the rail exactly. */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bg-primary transition-opacity",
          // Mobile: bottom line.
          "inset-x-0 bottom-0 h-[2px]",
          // Desktop: left line.
          "xl:inset-x-auto xl:left-0 xl:inset-y-0 xl:h-full xl:w-[2px]",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />
      <Icon className="h-4 w-4 shrink-0 xl:h-5 xl:w-5" aria-hidden />
      <span className="truncate">{label}</span>
    </button>
  );
}
