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
          className={`rounded-full transition-all duration-300 h-2 sm:h-2.5 ${
            i === current
              ? "w-5 sm:w-6 bg-accent"
              : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/75"
          }`}
        />
      ))}
    </nav>
  );
}
