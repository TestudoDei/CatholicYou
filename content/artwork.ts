import type { FeaturedArtwork } from "./types.ts";

export const MAX_ARTWORK_EDITORIAL_SCORE = 25;

export function getArtworkEditorialScore(artwork: FeaturedArtwork): number {
  return Object.values(artwork.editorialScores).reduce(
    (total, score) => total + score,
    0,
  );
}

export function hasPublicationReadyArtworkRights(
  artwork: FeaturedArtwork,
): boolean {
  return (
    (artwork.rights.designation === "CC0" ||
      artwork.rights.designation === "Public Domain") &&
    artwork.rights.policyUrl.startsWith("https://") &&
    artwork.rights.verifiedAt.length > 0
  );
}
