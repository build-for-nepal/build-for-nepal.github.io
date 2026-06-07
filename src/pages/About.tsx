import Mission from "@/features/mission/Mission";
import { INNOVATION_ITEMS } from "@/data/innovation";

export default function About() {
  const activeProductCount = INNOVATION_ITEMS.length;

  return (
    <main>
      <Mission activeProductCount={activeProductCount} />
    </main>
  );
}
