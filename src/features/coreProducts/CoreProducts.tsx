import { CORE_PRODUCTS, FEATURED_PRODUCT_ID } from "@/data/coreProducts";
import ProductCard from "./ProductCard";
import FeaturedProductCard from "./FeaturedProductCard";
import MoreInDevCard from "./MoreInDevCard";

const featured = CORE_PRODUCTS.find((p) => p.id === FEATURED_PRODUCT_ID);

const standard = CORE_PRODUCTS.filter((p) => p.id !== FEATURED_PRODUCT_ID);

export default function CoreProducts() {
  if (!featured) return null;

  const [adBs, calendar] = standard;

  return (
    <section aria-labelledby="core-products-heading" className="bg-bg">
      <div className="page-wrapper py-16 sm:py-20">
        <header className="mb-10 text-center sm:mb-12">
          <h2
            id="core-products-heading"
            className="text-3xl font-bold text-dark sm:text-4xl"
          >
            Our Core Products
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">
            Explore the tools we&apos;ve built
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:auto-rows-fr lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FeaturedProductCard product={featured} />
          </div>

          <ProductCard
            product={adBs}
            iconTileClass="bg-indigo-100 text-indigo-600"
          />

          <ProductCard product={calendar} />

          <div className="lg:col-span-2">
            <MoreInDevCard />
          </div>
        </div>
      </div>
    </section>
  );
}
