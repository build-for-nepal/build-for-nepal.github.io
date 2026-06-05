import type { InnovationItem } from "@/types/innovation";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  item: InnovationItem;
  className?: string;
}

/**
 * Illustration for the active Innovation Hub project, with a graceful
 * fallback when the image src is empty.
 */
export default function ProjectImage({ item, className }: ProjectImageProps) {
  const { image, id } = item;

  if (!image.src) {
    return (
      <div
        aria-hidden
        className={cn(
          "flex items-center justify-center rounded-md bg-white text-xs text-slate-300",
          className,
        )}
      >
        Illustration
      </div>
    );
  }

  return (
    <img
      key={id}
      src={image.src}
      alt={image.alt}
      className={cn("h-auto w-full object-contain", className)}
    />
  );
}
