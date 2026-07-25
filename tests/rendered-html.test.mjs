import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://catholic.you/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the CatholicYou homepage and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Catholic\.You — Meet the saints\. Keep the feasts\.<\/title>/i);
  assert.match(html, /Saint James/);
  assert.match(html, /Upcoming novenas/);
  assert.match(html, /Carefully sourced/);
  assert.match(html, /<meta property="og:image" content="https?:\/\/[^"]+\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
