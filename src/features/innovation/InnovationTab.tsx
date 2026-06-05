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
 * Visual treatment: a thin divider line (bottom on mobile, left on
 * desktop) that changes color when active. No background fill.
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
        // Layout
        "flex shrink-0 items-center gap-2 whitespace-nowrap text-left text-sm transition-colors",
        // Mobile: bottom border, horizontal padding. Desktop: left border, vertical padding.
        "border-b-2 px-3 py-2 md:w-full md:border-b-0 md:border-l-2 md:px-4 md:py-3",
        // Focus ring
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        // Active vs inactive
        isActive
          ? "border-primary font-semibold text-primary"
          : "border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      <span className="truncate">{label}</span>
    </button>
  );
}
