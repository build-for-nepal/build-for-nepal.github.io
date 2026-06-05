import type { InnovationItem } from "@/types/innovation";
import { cn } from "@/lib/utils";

interface ProjectInfoProps {
  item: InnovationItem;
  className?: string;
}

export default function ProjectInfo({ item, className }: ProjectInfoProps) {
  const { id, title, description } = item;
  return (
    <div
      role="tabpanel"
      id={`innovation-panel-${id}`}
      aria-labelledby={`innovation-tab-${id}`}
      className={cn("flex flex-col gap-2 sm:gap-3", className)}
    >
      <h3 className="text-xl font-bold text-dark sm:text-2xl">{title}</h3>
      <p className="text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}
