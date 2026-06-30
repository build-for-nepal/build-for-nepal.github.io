import type { InnovationItem } from "@/types/innovation";
import LinkButton from "@/components/ui/LinkButton";
import { cn } from "@/lib/utils";

interface ProjectActionsProps {
  item: InnovationItem;
  className?: string;
}

export default function ProjectActions({ item, className }: ProjectActionsProps) {
  if (item.links.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {item.links.map((link) => (
        <LinkButton
          key={link.href + link.label}
          href={link.href}
          icon={link.icon}
          external={link.external}
        >
          {link.label}
        </LinkButton>
      ))}
    </div>
  );
}
