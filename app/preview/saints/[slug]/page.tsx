import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeaturedArtworkBlock } from "../../../../components/featured-artwork";
import { SiteFooter, SiteHeader } from "../../../../components/site-chrome";
import { getEntryBySlug } from "../../../../content";
import { getStoryArcDefinition } from "../../../../content/story-arcs";

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

  const storyArc = entry.storyArc
    ? getStoryArcDefinition(entry.storyArc.primary)
    : null;

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
                  {" · Liturgical color: "}
                  {titleCase(entry.observance.color)}
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
                  {storyArc ? <div><dt>Story arc</dt><dd>{storyArc.label}</dd></div> : null}
                </dl>
              </aside>
            </div>
          </div>
        </header>

        <div className="article-shell">
          <nav className="article-rail" aria-label="On this page">
            <p>On this page</p>
            {entry.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>{section.heading}</a>
            ))}
            {entry.featuredArtwork ? <a href="#featured-artwork">Featured artwork</a> : null}
            <a href="#sources">Sources</a>
          </nav>

          <div className="article-body">
            {entry.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <p className="section-label">{section.label}</p>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.sourceIds.length ? (
                  <p className="source-marker">
                    Supported by {section.sourceIds.length} {section.sourceIds.length === 1 ? "source" : "sources"} listed below.
                  </p>
                ) : null}
              </section>
            ))}

            {entry.featuredArtwork ? (
              <FeaturedArtworkBlock
                artwork={entry.featuredArtwork}
                variant="article"
              />
            ) : null}

            <section className="scripture-ledger" id="scripture">
              <p className="section-label">Read in Scripture</p>
              <h2>The biblical witness</h2>
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
              <p className="section-label">Editorial record</p>
              <h2>Sources and review status</h2>
              <p>
                These sources support this entry; they do not imply endorsement of
                CatholicYou. Links open the original publisher.
              </p>
              <ol>
                {entry.sources.map((source) => (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
                    <span>{source.publisher}{source.publishedDate ? ` · ${source.publishedDate}` : ""}</span>
                    <p>{source.note}</p>
                  </li>
                ))}
              </ol>
              <div className="review-card">
                <div>
                  <span>Current status</span>
                  <strong>{entry.editorial.status.replace("_", " ")}</strong>
                </div>
                <p>
                  This entry has been checked against its listed sources. It remains
                  a private preview and cannot be published until a human reviewer
                  is recorded.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
