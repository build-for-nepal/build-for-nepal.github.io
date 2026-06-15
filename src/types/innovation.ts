import type { Project, ProjectLink } from "./project";

/**
 * @deprecated Use `Project` from "@/types/project" directly.
 * Kept as an alias so existing Innovation Hub components compile
 * without a sweeping rename.
 */
export type InnovationItem = Project;

/**
 * @deprecated Use `ProjectLink` from "@/types/project" directly.
 */
export type InnovationLinks = ProjectLink;
