import assert from "node:assert/strict";
import test from "node:test";
import {
  canTransitionEditorialStatus,
  getEntryBySlug,
  isPubliclyVisible,
} from "../content/index.ts";
import {
  getStoryArcDefinition,
  getStoryArcIssues,
  storyArcDefinitions,
} from "../content/story-arcs.ts";
import {
  getArtworkEditorialScore,
  hasPublicationReadyArtworkRights,
  MAX_ARTWORK_EDITORIAL_SCORE,
} from "../content/artwork.ts";
import {
  getDateKeyInTimeZone,
  getObservanceForDate,
  isValidDateKey,
} from "../lib/liturgical-calendar.ts";

test("requires sequential editorial review", () => {
  assert.equal(canTransitionEditorialStatus("draft", "fact_checked"), true);
  assert.equal(canTransitionEditorialStatus("fact_checked", "human_reviewed"), true);
  assert.equal(canTransitionEditorialStatus("human_reviewed", "published"), true);
  assert.equal(canTransitionEditorialStatus("fact_checked", "published"), false);
  assert.equal(canTransitionEditorialStatus("published", "human_reviewed"), false);
});

test("does not expose fact-checked content as published", () => {
  const preview = getEntryBySlug("saint-james-the-apostle", {
    includePrivatePreview: true,
  });
  assert.ok(preview);
  assert.equal(preview.editorial.status, "fact_checked");
  assert.equal(isPubliclyVisible(preview), false);
  assert.equal(getEntryBySlug("saint-james-the-apostle"), undefined);
});

test("gives every saint preview a complete narrative arc", () => {
  const preview = getEntryBySlug("saint-james-the-apostle", {
    includePrivatePreview: true,
  });
  assert.ok(preview);
  assert.match(preview.preview.origin, /son of Zebedee/);
  assert.match(preview.preview.distinctiveSignificance, /Transfiguration/);
  assert.match(preview.preview.livingDevotion, /Camino de Santiago/);
  assert.equal(preview.featuredScripture?.citation, "Matthew 20:26");
  assert.doesNotMatch(
    `${preview.preview.origin} ${preview.preview.distinctiveSignificance} ${preview.preview.livingDevotion}`,
    /^(this|that|these|those)\b/i,
  );
});

test("records rights-cleared and ranked artwork for both pilot entries", () => {
  for (const slug of [
    "saint-james-the-apostle",
    "saints-joachim-and-anne",
  ]) {
    const entry = getEntryBySlug(slug, { includePrivatePreview: true });
    assert.ok(entry?.featuredArtwork);
    assert.equal(hasPublicationReadyArtworkRights(entry.featuredArtwork), true);
    const score = getArtworkEditorialScore(entry.featuredArtwork);
    assert.ok(score >= 5);
    assert.ok(score <= MAX_ARTWORK_EDITORIAL_SCORE);
    assert.match(entry.featuredArtwork.imagePath, /^\/art\/.+\.jpg$/);
    assert.match(entry.featuredArtwork.objectUrl, /^https:\/\/www\./);
  }

  const james = getEntryBySlug("saint-james-the-apostle", {
    includePrivatePreview: true,
  });
  const joachimAndAnne = getEntryBySlug("saints-joachim-and-anne", {
    includePrivatePreview: true,
  });
  assert.equal(getArtworkEditorialScore(james.featuredArtwork), 22);
  assert.equal(
    getArtworkEditorialScore(joachimAndAnne.featuredArtwork),
    MAX_ARTWORK_EDITORIAL_SCORE,
  );
  assert.equal(
    joachimAndAnne.featuredArtwork.sourceTitle,
    "Joachim and Anna at the Golden Gate",
  );
  assert.equal(
    joachimAndAnne.featuredArtwork.title,
    "Joachim and Anne at the Golden Gate",
  );
});

test("assigns every saint a source-grounded complete-story arc", () => {
  const entry = getEntryBySlug("saint-james-the-apostle", {
    includePrivatePreview: true,
  });
  assert.ok(entry);
  assert.deepEqual(getStoryArcIssues(entry), []);
  assert.equal(entry.storyArc?.primary, "correction_and_transformation");
  assert.match(entry.storyArc?.rationale ?? "", /Christ's correction/);

  const definition = getStoryArcDefinition("correction_and_transformation");
  assert.equal(definition.label, "Correction and transformation");
  assert.deepEqual(definition.sequence.slice(0, 3), [
    "Origin and calling",
    "Early gifts or privileged witness",
    "Documented misunderstanding, weakness, or misdirected desire",
  ]);
  assert.equal(Object.keys(storyArcDefinitions).length, 7);
});

test("rejects missing or duplicate saint story arcs", () => {
  assert.deepEqual(
    getStoryArcIssues({ kind: "saint", storyArc: undefined }),
    ["Saint entries require a primary story arc."],
  );
  assert.deepEqual(
    getStoryArcIssues({
      kind: "saint",
      storyArc: {
        primary: "conversion",
        secondary: "conversion",
        rationale: "The documented conversion supplies the primary narrative movement.",
      },
    }),
    ["A secondary story arc must differ from the primary arc."],
  );
});

test("selects Saint James by month and day only for private preview", () => {
  assert.equal(getObservanceForDate("2026-07-25"), undefined);
  assert.equal(
    getObservanceForDate("2026-07-25", { includePrivatePreview: true })?.slug,
    "saint-james-the-apostle",
  );
  assert.equal(
    getObservanceForDate("2031-07-25", { includePrivatePreview: true })?.slug,
    "saint-james-the-apostle",
  );
});

test("lets Sunday take precedence over a saint feast or memorial", () => {
  assert.equal(
    getObservanceForDate("2026-07-26", { includePrivatePreview: true }),
    undefined,
  );
  assert.equal(
    getObservanceForDate("2027-07-26", { includePrivatePreview: true })?.slug,
    "saints-joachim-and-anne",
  );
});

test("leads Joachim and Anne with significance while preserving evidence notes", () => {
  const entry = getEntryBySlug("saints-joachim-and-anne", {
    includePrivatePreview: true,
  });
  assert.ok(entry);
  assert.equal(entry.storyArc?.primary, "hidden_faithfulness");
  assert.equal(entry.featuredScripture, undefined);
  assert.deepEqual(getStoryArcIssues(entry), []);
  assert.match(
    entry.preview.distinctiveSignificance,
    /long prayer for a child had been heard/,
  );
  assert.doesNotMatch(entry.preview.distinctiveSignificance, /^Ancient\b/);
  assert.match(entry.prayerPrompt, /^In prayer, remember married couples/);
  assert.doesNotMatch(
    entry.preview.distinctiveSignificance,
    /learn(?:ed|ing) (?:that )?they would become Mary’s parents/i,
  );
  assert.match(entry.sections[1]?.paragraphs[1] ?? "", /Golden Gate/);
  assert.match(entry.preview.livingDevotion, /Sainte-Anne-de-Beaupré/);
  assert.match(entry.sections[1]?.paragraphs[0] ?? "", /years without a child/);
  assert.match(entry.sections[3]?.paragraphs[0] ?? "", /Louis Guimont/);
  assert.doesNotMatch(
    entry.sections.flatMap((section) => section.paragraphs).join(" "),
    /does not name|not (?:in|mentioned in) Scripture|not through the canonical/i,
  );
  assert.equal(isPubliclyVisible(entry), false);
});

test("validates plain calendar dates without timezone coercion", () => {
  assert.equal(isValidDateKey("2026-07-25"), true);
  assert.equal(isValidDateKey("2026-02-29"), false);
  assert.equal(isValidDateKey("2028-02-29"), true);
  assert.equal(isValidDateKey("07-25-2026"), false);
});

test("derives the date in the subscriber timezone", () => {
  const instant = new Date("2026-07-26T02:30:00Z");
  assert.equal(getDateKeyInTimeZone(instant, "America/New_York"), "2026-07-25");
  assert.equal(getDateKeyInTimeZone(instant, "Europe/Rome"), "2026-07-26");
});
