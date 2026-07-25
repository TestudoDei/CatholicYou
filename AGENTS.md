# CatholicYou project guidance

## Product

CatholicYou is a calm, trustworthy companion for living the Catholic liturgical year. The first release focuses on saint and feast pages, novena timing, and explicit email preferences.

## Engineering

- Keep TypeScript strict and components accessible.
- Prefer server components; add client state only for genuine interaction.
- Treat dates, time zones, subscription preferences, and duplicate email prevention as high-risk logic that requires tests.
- Never commit credentials or production subscriber data.
- Keep content data separate from presentation.
- Require review before database migrations, production email sends, or public content publication.

## Editorial

- Do not invent quotations, patronages, miracles, dates, or historical details.
- Distinguish Scripture, documented history, tradition, and private revelation.
- Identify whether observances are universal, national, regional, or local.
- Cite authoritative sources for substantive claims.
- Treat AI review as editorial assistance, never ecclesiastical approval.
- Content may be `draft`, `fact_checked`, `human_reviewed`, or `published`; only `human_reviewed` content can become `published`.
