import type { InnovationItem } from "@/types/innovation";
import { useState } from "react";

export default function useInnovationTabs(items: InnovationItem[]) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  // falls back to first item if activeId goes stale
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return { active, activeId, setActiveId };
}
