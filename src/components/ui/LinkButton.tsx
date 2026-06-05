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
    "inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2",
    "text-sm font-medium text-primary",
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
