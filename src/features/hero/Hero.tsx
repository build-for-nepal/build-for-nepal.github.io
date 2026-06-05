import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SLIDES_DATA } from "@/data/hero";
import HeroDots from "./HeroDots";
import HeroSlide from "./HeroSlide";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [paused, setPaused] = useState(false);
  const transitioning = useRef(false);
  const touchStartX = useRef(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number, dir: "right" | "left") => {
      if (transitioning.current || index === current) return;
      transitioning.current = true;
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => {
        transitioning.current = false;
      }, 450);
    },
    [current],
  );

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

  useGSAP(
    () => {
      gsap.killTweensOf(slideRef.current);
      gsap.set(slideRef.current, { opacity: 0, x: direction === "right" ? 40 : -40 });
      gsap.to(slideRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.55,
        ease: "power3.out",
      });
    },
    { dependencies: [current] },
  );

  return (
    <section
      aria-label="Hero"
      className="relative min-h-hero w-full overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
      }}
    >
      <div ref={slideRef} className="w-full">
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
