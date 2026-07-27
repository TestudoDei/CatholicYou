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

## Homepage preview standard

The homepage preview is written specifically for its limited space. It is not an excerpt cut from the full article.

Each saint preview follows the same narrative sequence:

1. **Origin:** who the saint was and how the story begins.
2. **Distinctive significance:** the best-supported tradition, patronage, witness, or story that makes this saint memorable.
3. **Living devotion:** a concrete way Catholics encounter the saint now, such as a shrine, pilgrimage, novena, feast-day custom, work of mercy, or established devotion.

The preview should normally use one sentence for origin, one for distinctive significance, and no more than two for living devotion. A separate prayer prompt turns the story toward reflection. Avoid context-dependent openings such as "this failure" or "this event"; every preview must stand on its own.

Do not spend reader-facing space announcing that a saint is absent from Scripture. When Scripture does not supply the biographical story, pivot to the best-supported tradition, intercession, patronage, reported miracle, shrine, pilgrimage, or devotional practice. Preserve the evidence boundary in source notes and editorial review, and use proportionate language such as "tradition remembers" or "the shrine records."

## Complete-story standard

Every saint entry names one primary story arc and may name one distinct secondary arc. The evidence determines the arc; an editor must never select an appealing narrative first and bend the saint's life to fit it.

The arc guides the order and emphasis of the complete story without replacing editorial judgment. All complete stories still require historical grounding, proportionate treatment of Scripture and tradition when relevant, spiritual movement, enduring relevance, an invitation to prayer, and a reviewable source record.

See [Editorial story arcs](./EDITORIAL_STORY_ARCS.md) for the available arcs, section sequences, and selection rules.

## Calendar scope

An observance identifies both its liturgical rank and its scope. Initial scope values are the General Roman Calendar, the United States calendar, regional calendars, and local calendars. A future calendar engine must resolve precedence within a selected scope rather than assuming every observance applies identically everywhere.

## Persistence boundary

The first entry lives in typed source files so the editorial model can be inspected before any database migration. Once the model has survived several representative entries—a saint, a solemnity, a movable observance, and a local observance—we can review and approve a persistent database schema.
