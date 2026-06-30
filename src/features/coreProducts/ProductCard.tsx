import type { Project } from "@/types/project";
import LinkButton from "@/components/ui/LinkButton";

interface ProductCardProps {
  product: Project;
  iconTileClass?: string;
}

export default function ProductCard({
  product,
  iconTileClass = "bg-primary/10 text-primary",
}: ProductCardProps) {
  const { title, description, icon: Icon } = product;

  return (
    <article className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${iconTileClass}`}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-primary sm:text-2xl">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-muted sm:text-base">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
        {product.links.map((link) => (
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
    </article>
  );
}
