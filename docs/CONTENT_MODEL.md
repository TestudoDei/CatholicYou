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

## Calendar scope

An observance identifies both its liturgical rank and its scope. Initial scope values are the General Roman Calendar, the United States calendar, regional calendars, and local calendars. A future calendar engine must resolve precedence within a selected scope rather than assuming every observance applies identically everywhere.

## Persistence boundary

The first entry lives in typed source files so the editorial model can be inspected before any database migration. Once the model has survived several representative entries—a saint, a solemnity, a movable observance, and a local observance—we can review and approve a persistent database schema.
