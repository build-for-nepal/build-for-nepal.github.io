import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroNavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

export default function HeroNavButton({
  direction,
  onClick,
}: HeroNavButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-dark/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-dark/75 hover:scale-110"
    >
      {direction === "left" ?
        <ChevronLeft size={20} />
      : <ChevronRight size={20} />}
    </button>
  );
}
