import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeaturedArtworkBlock } from "../../../../components/featured-artwork";
import { SiteFooter, SiteHeader } from "../../../../components/site-chrome";
import { getEntryBySlug } from "../../../../content";

interface SaintPageProps {
  params: Promise<{ slug: string }>;
}

function titleCase(value: string) {
  return value
    .split("_")
    .map((part) => `${part[0]?.toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function formatMonthDay(month: number, day: number) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2026, month - 1, day)));
}

export async function generateMetadata({ params }: SaintPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug, { includePrivatePreview: true });
  return entry
    ? {
        title: `${entry.title} — Catholic.You editorial preview`,
        description: entry.summary,
        robots: { index: false, follow: false },
      }
    : {};
}

export default async function SaintPreviewPage({ params }: SaintPageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug, { includePrivatePreview: true });

  if (!entry) notFound();

  return (
    <main>
      <SiteHeader />
      <div className="preview-banner" role="status">
        Private editorial preview · Fact-checked · Awaiting human review
      </div>

      <article className="saint-profile">
        <header className="saint-hero">
          <div className="saint-hero-inner">
            <Link className="breadcrumb" href="/">← Back to CatholicYou</Link>
            <div className="saint-hero-grid">
              <div>
                <p className="kicker">
                  {formatMonthDay(entry.observance.month, entry.observance.day)}
                  {" · "}
                  {titleCase(entry.observance.rank)}
                  {" · "}
                  {entry.observance.color} vestments at Mass
                </p>
                <h1>{entry.title}</h1>
                <p className="saint-deck">{entry.summary}</p>
              </div>
              <aside className="identity-card" aria-label="Entry summary">
                <p className="card-label">At a glance</p>
                <dl>
                  {entry.atAGlance.map((fact) => (
                    <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </header>

        <div className="article-shell">
          <nav className="article-rail" aria-label="On this page">
            <p>On this page</p>
            {entry.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.label === "For prayer" ? "Prayer" : section.heading}
              </a>
            ))}
            {entry.featuredArtwork ? <a href="#featured-artwork">Sacred art</a> : null}
            <a href="#sources">Sources</a>
          </nav>

          <div className="article-body">
            {entry.sections.map((section) =>
              section.label === "For prayer" ? (
                <aside
                  className="article-prayer"
                  id={section.id}
                  key={section.id}
                  aria-label="Prayer"
                >
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </aside>
              ) : (
                <section id={section.id} key={section.id}>
                  <p className="section-label">{section.label}</p>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ),
            )}

            {entry.featuredArtwork ? (
              <FeaturedArtworkBlock
                artwork={entry.featuredArtwork}
                variant="article"
              />
            ) : null}

            <section className="scripture-ledger" id="scripture">
              <p className="section-label">{entry.scriptureSection.label}</p>
              <h2>{entry.scriptureSection.heading}</h2>
              <div>
                {entry.scriptureReferences.map((reference) => (
                  <a href={reference.url} target="_blank" rel="noreferrer" key={reference.citation}>
                    <strong>{reference.citation}</strong>
                    <span>{reference.description}</span>
                    <i aria-hidden="true">↗</i>
                  </a>
                ))}
              </div>
            </section>

            <section className="sources-section" id="sources">
              <h2>Sources</h2>
              <ol>
                {entry.sources.map((source) => (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
                    <span>{source.publisher}{source.publishedDate ? ` · ${source.publishedDate}` : ""}</span>
                    <p>{source.note}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
