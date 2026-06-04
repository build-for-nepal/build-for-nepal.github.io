import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES_DATA } from "./hero.constants";
import HeroDots from "./components/HeroDots";
import HeroSlide from "./slides/HeroSlide";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [paused, setPaused] = useState(false);
  const transitioning = useRef(false);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number, dir: "right" | "left") => {
    if (transitioning.current || index === current) return;
    transitioning.current = true;
    setDirection(dir);
    setCurrent(index);
    setTimeout(() => { transitioning.current = false; }, 450);
  }, [current]);

  const prev = useCallback(
    () => goTo((current - 1 + SLIDES_DATA.length) % SLIDES_DATA.length, "left"),
    [current, goTo],
  );

  const next = useCallback(
    () => goTo((current + 1) % SLIDES_DATA.length, "right"),
    [current, goTo],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[calc(100dvh-5.25rem)] w-full overflow-visible sm:overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
      }}
    >
      <div
        key={current}
        className={`w-full ${direction === "right" ? "animate-slide-from-right" : "animate-slide-from-left"}`}
      >
        <HeroSlide slide={SLIDES_DATA[current]} onPrev={prev} onNext={next} />
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
        <HeroDots
          count={SLIDES_DATA.length}
          current={current}
          onSelect={(i) => goTo(i, i > current ? "right" : "left")}
        />
      </div>
    </section>
  );
}
