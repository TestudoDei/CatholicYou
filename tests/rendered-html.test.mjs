import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://catholic.you${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders a quality-first fallback when no reviewed entry exists", async () => {
  const response = await render("/?date=2026-07-26");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /No reviewed entry/);
  assert.match(html, /Quality before quantity/);
  assert.doesNotMatch(html, /Private editorial preview/);
});

test("renders the private Saint James homepage preview from structured content", async () => {
  const response = await render("/?date=2026-07-25&preview=1");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Saint James/);
  assert.match(html, /A faith worth walking for/);
  assert.match(
    html,
    /Discover Scripture, tradition, and the lives of the saints through/,
  );
  assert.match(html, /rhythm of the Church’s calendar/);
  assert.match(html, /among the first disciples called by Jesus/);
  assert.match(html, /Transfiguration and in Gethsemane/);
  assert.match(html, /Camino de Santiago/);
  assert.match(html, /every step into prayer/);
  assert.match(html, /Manuscript Leaf with Saint James the Greater/);
  assert.match(html, /Look more closely/);
  assert.match(html, /Whoever wishes to be great among you shall be your servant/);
  assert.match(html, /Saints &amp; Feasts/);
  assert.match(html, /Scripture &amp; Tradition/);
  assert.match(html, /Sacred Art &amp; Devotion/);
  assert.match(html, /Read the complete entry/);
  assert.doesNotMatch(html, /The Church’s calendar, made personal/);
  assert.doesNotMatch(html, /Read the sourced story/);
  assert.doesNotMatch(html, /complete entry and its sources/);
  assert.doesNotMatch(
    html,
    /Carefully sourced|Liturgically grounded|Respectfully written/,
  );
  assert.doesNotMatch(html, /This failure is not incidental/);
  assert.match(html, /Private editorial preview/);
  assert.match(html, /preview\/saints\/saint-james-the-apostle/);
});

test("renders the sourced Saint James entry only in preview mode", async () => {
  const privateResponse = await render("/preview/saints/saint-james-the-apostle");
  assert.equal(privateResponse.status, 200);
  const html = await privateResponse.text();

  assert.match(html, /Liturgical color:.*Red/);
  assert.match(html, /Called into the company of Jesus/);
  assert.match(html, /An ambition corrected by the Gospel/);
  assert.match(html, /Documented history/);
  assert.match(html, /Later traditions connect James/);
  assert.match(html, /Sources and review status/);
  assert.match(html, /Awaiting human review/);
  assert.match(html, /Story arc/);
  assert.match(html, /Correction and transformation/);
  assert.match(html, /General Audience: James, the Greater/);
  assert.match(html, /James dressed for the road/);
  assert.match(html, /View the museum record/);
  assert.match(html, /Public Domain/);

  const publicResponse = await render("/saints/saint-james-the-apostle");
  assert.equal(publicResponse.status, 404);
});

test("renders Joachim and Anne through tradition and living devotion", async () => {
  const privateResponse = await render("/preview/saints/saints-joachim-and-anne");
  assert.equal(privateResponse.status, 200);
  const html = await privateResponse.text();

  assert.match(html, /Saints Joachim and Anne/);
  assert.match(html, /Liturgical color:.*White/);
  assert.match(html, /The parents of Mary/);
  assert.match(html, /The promise of a long-awaited child/);
  assert.match(html, /Who asks for their prayers/);
  assert.match(html, /A living pilgrimage to Saint Anne/);
  assert.match(html, /Sainte-Anne-de-Beaupré/);
  assert.match(html, /Louis Guimont/);
  assert.match(html, /Hidden faithfulness/);
  assert.match(html, /grandparents and elders who feel forgotten/i);
  assert.match(html, /The reunion that artists made unforgettable/);
  assert.match(html, /Albrecht Dürer/);
  assert.match(html, /Joachim and Anne at the Golden Gate/);
  assert.doesNotMatch(html, /Joachim and Anna/);
  assert.doesNotMatch(
    html,
    /A silence that asks for honesty|Scripture does not|does not name her parents|not through the canonical/i,
  );

  const publicResponse = await render("/saints/saints-joachim-and-anne");
  assert.equal(publicResponse.status, 404);
});

test("previews Joachim and Anne only when the memorial is not displaced", async () => {
  const sundayResponse = await render("/?date=2026-07-26&preview=1");
  const sundayHtml = await sundayResponse.text();
  assert.doesNotMatch(sundayHtml, /The faith handed on at home/);

  const weekdayResponse = await render("/?date=2027-07-26&preview=1");
  const weekdayHtml = await weekdayResponse.text();
  assert.match(weekdayHtml, /The faith handed on at home/);
  assert.match(weekdayHtml, /Saints Joachim and Anne/);
  assert.match(weekdayHtml, /Sainte-Anne-de-Beaupré/);
  assert.doesNotMatch(
    weekdayHtml,
    /Whoever wishes to be great among you shall be your servant/,
  );
  assert.match(
    weekdayHtml,
    /beneath the city gate, Joachim and Anne embrace after learning that their prayer for a child has been heard/,
  );
  assert.doesNotMatch(weekdayHtml, /the Apostle/);
});

test("keeps CatholicYou metadata and removes starter markers", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /<title>Catholic\.You — Meet the saints\. Keep the feasts\.<\/title>/i);
  assert.match(html, /<meta property="og:image" content="https?:\/\/[^"]+\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
