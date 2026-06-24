import Mission from "@/features/mission/Mission";
import CoreProducts from "@/features/coreProducts/CoreProducts";
import { INNOVATION_ITEMS } from "@/data/innovation";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function About() {
  usePageTitle("About");
  const activeProductCount = INNOVATION_ITEMS.length;

  return (
    <main>
      <Mission activeProductCount={activeProductCount} />
      <CoreProducts />
    </main>
  );
}
