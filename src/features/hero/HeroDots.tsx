import { cn } from "@/lib/utils";

interface HeroDotsProps {
  count: number;
  current: number;
  onSelect: (index: number) => void;
}

export default function HeroDots({ count, current, onSelect }: HeroDotsProps) {
  return (
    <nav aria-label="Slide navigation" className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === current ? true : undefined}
          className={cn(
            "h-2 rounded-full transition-all duration-300 sm:h-2.5",
            i === current
              ? "w-5 bg-accent sm:w-6"
              : "w-2 bg-white/50 hover:bg-white/75 sm:w-2.5",
          )}
        />
      ))}
    </nav>
  );
}
