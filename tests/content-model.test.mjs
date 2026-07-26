import assert from "node:assert/strict";
import test from "node:test";
import {
  canTransitionEditorialStatus,
  getEntryBySlug,
  isPubliclyVisible,
} from "../content/index.ts";
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
  assert.match(preview.preview.livedWitness, /Transfiguration/);
  assert.match(preview.preview.enduringRelevance, /Camino de Santiago/);
  assert.doesNotMatch(
    `${preview.preview.origin} ${preview.preview.livedWitness} ${preview.preview.enduringRelevance}`,
    /^(this|that|these|those)\b/i,
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
