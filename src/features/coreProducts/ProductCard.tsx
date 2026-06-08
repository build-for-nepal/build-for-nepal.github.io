import type { Product } from "@/types/product";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  iconTileClass?: string;
}

export default function ProductCard({
  product,
  iconTileClass = "bg-primary/10 text-primary",
}: ProductCardProps) {
  const { id, title, description, href, icon: Icon } = product;

  return (
    <article className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8">
      {/*icon*/}
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconTileClass}`}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>
      {/*title*/}
      <h3 className="mt-6 text-xl font-bold text-primary sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm text-muted sm:text-base">{description}</p>
      <a
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-hover sm:mt-8"
      >
        View Project
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
