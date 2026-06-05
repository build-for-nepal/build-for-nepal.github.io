import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;

  external?: boolean;

  className?: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href,
  icon: Icon,
  external,
  className,
  children,
}: LinkButtonProps) {
  const baseClasses = cn(
    // Layout — tighter on mobile, roomier on tablet+.
    "inline-flex items-center justify-center gap-1.5 rounded-md border border-primary",
    "px-3 py-1.5 text-xs sm:gap-2 sm:px-4 sm:py-2 sm:text-sm",
    "font-medium text-primary",
    "transition-colors hover:bg-primary hover:text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    className,
  );

  const content = (
    <>
      <Icon className="h-4 w-4" aria-hidden />
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={baseClasses}>
      {content}
    </Link>
  );
}
