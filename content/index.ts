import { saintJamesTheApostle } from "./entries/saint-james-the-apostle.ts";
import type { ContentEntry, EditorialStatus } from "./types.ts";

export const contentEntries: readonly ContentEntry[] = [saintJamesTheApostle];

const editorialOrder: readonly EditorialStatus[] = [
  "draft",
  "fact_checked",
  "human_reviewed",
  "published",
];

export function canTransitionEditorialStatus(
  current: EditorialStatus,
  next: EditorialStatus,
): boolean {
  return editorialOrder.indexOf(next) === editorialOrder.indexOf(current) + 1;
}

export function isPubliclyVisible(entry: ContentEntry): boolean {
  return (
    entry.editorial.status === "published" &&
    entry.editorial.humanReviewedAt !== null &&
    entry.editorial.humanReviewedBy !== null
  );
}

export function getEntryBySlug(
  slug: string,
  options: { includePrivatePreview?: boolean } = {},
): ContentEntry | undefined {
  const entry = contentEntries.find((candidate) => candidate.slug === slug);
  if (!entry) return undefined;
  if (options.includePrivatePreview || isPubliclyVisible(entry)) return entry;
  return undefined;
}
