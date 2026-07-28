# CatholicYou content model

CatholicYou treats content as reviewed records, not as page-shaped prose. The website, future email composer, calendar, and search experience should all read from the same structured entries.

## Editorial lifecycle

`draft → fact_checked → human_reviewed → published`

Each transition is explicit. An entry cannot be publicly visible unless it has reached `published` and records both the date and identity of its human reviewer. AI assistance may draft or flag material, but may not supply the human-review record.

## Evidence categories

- **Scripture:** claims directly supported by the biblical text.
- **Documented history:** claims supported by reliable historical or ecclesiastical sources.
- **Tradition:** devotional or historical traditions presented with proportionate language.
- **For prayer:** original devotional application, clearly separate from factual claims.

Every substantive section lists the sources that support it. Sources record their publisher, URL or bibliographic location, access date, and the reason they were used.

## Copyright and source use

Sources support CatholicYou’s reporting; they are not a library of copy to republish. Write original prose that synthesizes and attributes factual claims, then link readers to the source. Use a direct quotation only when its exact wording materially matters, keep it brief, and preserve the required attribution.

Do not reproduce Scripture translations, liturgical texts, prayers, articles, photographs, artwork, or substantial excerpts unless their license expressly permits the intended use or written permission has been recorded. A source’s availability on a Church website does not make it public domain, and attribution does not replace permission. Treat an ancient work and a modern translation or photograph of that work as separate copyright questions.

Before public or commercial launch, review every quotation and media asset, confirm any publisher-specific terms, and retain a permissions record for licensed material. When the license is unclear, paraphrase the underlying facts in original language, link to the source, or omit the material pending review.

## Featured artwork standard

A featured artwork should add meaning to the saint’s story, not merely fill visual space. Prefer a work that makes a documented episode, later tradition, devotional symbol, pilgrimage, or enduring Catholic reception more intelligible. The homepage uses the artwork as a visual doorway into the entry; the complete page provides a concise interpretation that distinguishes what the artwork depicts from what the historical record establishes.

Artwork selection records five internal scores from 1–5: story relevance, art-historical significance, reproduction quality, interpretive richness, and audience appeal. Their 25-point total helps editors compare candidates for the future weekly sacred-art email. Scores are editorial signals rather than objective judgments of artistic worth, and they never publish automatically.

Rights clearance is a gate, not a scoring category. Each selected image records its supplying institution, object page, accession number, image source, rights designation, policy page, credit line, and verification date. Use only the exact digital image expressly marked CC0 or Public Domain by its supplying institution. A high score cannot compensate for uncertain rights.

Not every saint needs an artwork immediately. Leave the field empty when no meaningful, rights-cleared image has been found; a weak or generic image lowers trust more than an intentional absence.

## Homepage preview standard

The homepage preview is written specifically for its limited space. It is not an excerpt cut from the full article.

Each saint preview follows the same narrative sequence:

1. **Origin:** who the saint was and how the story begins.
2. **Distinctive significance:** the best-supported tradition, patronage, witness, or story that makes this saint memorable.
3. **Living devotion:** a concrete way Catholics encounter the saint now, such as a shrine, pilgrimage, novena, feast-day custom, work of mercy, or established devotion.

The preview should normally use one sentence for origin, one for distinctive significance, and no more than two for living devotion. A separate prayer prompt turns the story toward reflection. Avoid context-dependent openings such as "this failure" or "this event"; every preview must stand on its own.

Featured Scripture on the homepage is optional and entry-specific. Include it only when the passage directly illuminates the saint, the documented story arc, or the proper readings of the observance. Never fill a quotation-shaped design slot with a merely adjacent verse; the layout must remain complete when no featured passage is selected.

The prayer panel stands apart through its visual treatment rather than a recurring title. Its body should open naturally and name intentions directly connected to the saint’s documented patronage, established intercession, story, or living devotion. Do not infer a generalized emotional struggle merely to make the application feel universal.

Do not spend reader-facing space announcing that a saint is absent from Scripture. When Scripture does not supply the biographical story, pivot to the best-supported tradition, intercession, patronage, reported miracle, shrine, pilgrimage, or devotional practice. Preserve the evidence boundary in source notes and editorial review, and use proportionate language such as "tradition remembers" or "the shrine records."

## Complete-story standard

Every saint entry names one primary story arc and may name one distinct secondary arc. The evidence determines the arc; an editor must never select an appealing narrative first and bend the saint's life to fit it.

The arc guides the order and emphasis of the complete story without replacing editorial judgment. All complete stories still require historical grounding, proportionate treatment of Scripture and tradition when relevant, spiritual movement, enduring relevance, an invitation to prayer, and a reviewable source record.

See [Editorial story arcs](./EDITORIAL_STORY_ARCS.md) for the available arcs, section sequences, and selection rules.

## Calendar scope

An observance identifies both its liturgical rank and its scope. Initial scope values are the General Roman Calendar, the United States calendar, regional calendars, and local calendars. A future calendar engine must resolve precedence within a selected scope rather than assuming every observance applies identically everywhere.

## Persistence boundary

The first entry lives in typed source files so the editorial model can be inspected before any database migration. Once the model has survived several representative entries—a saint, a solemnity, a movable observance, and a local observance—we can review and approve a persistent database schema.
