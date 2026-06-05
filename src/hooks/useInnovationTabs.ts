import type { InnovationItem } from "@/types/innovation";
import { useState } from "react";

export default function useInnovationTabs(items: InnovationItem[]) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  //Fallback the first item if the id ever goes stale
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return { active, activeId, setActiveId };
}
