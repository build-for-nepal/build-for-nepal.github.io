import type { InnovationItem } from "@/types/innovation";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  item: InnovationItem;
  /** Sizing classes from the parent (height, width). */
  className?: string;
}

/**
 * Illustration slot for the active Innovation Hub project.
 *
 * The wrapper accepts the size from the parent (so every item occupies
 * exactly the same box). The image inside uses object-contain so SVGs
 * with different aspect ratios scale to fit without distortion or
 * pushing the layout around.
 */
export default function ProjectImage({ item, className }: ProjectImageProps) {
  const { image, id } = item;

  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      {image.src ? (
        <img
          key={id}
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-contain"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-full w-full items-center justify-center rounded-md bg-white text-xs text-slate-300"
        >
          Illustration
        </div>
      )}
    </div>
  );
}
