import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../../components/site-chrome";
import { getEntryBySlug } from "../../../../content";

interface SaintPageProps {
  params: Promise<{ slug: string }>;
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
            <Link className="breadcrumb" href="/?date=2026-07-25&preview=1">← Back to July 25</Link>
            <div className="saint-hero-grid">
              <div>
                <p className="kicker">July 25 · Feast · Red</p>
                <h1>{entry.title}</h1>
                <p className="saint-deck">{entry.summary}</p>
              </div>
              <aside className="identity-card" aria-label="Entry summary">
                <p className="card-label">At a glance</p>
                <dl>
                  <div><dt>Known as</dt><dd>{entry.alternateNames.join("; ")}</dd></div>
                  <div><dt>In Scripture</dt><dd>Son of Zebedee; brother of John</dd></div>
                  <div><dt>Witness</dt><dd>Apostle and martyr</dd></div>
                  <div><dt>Calendar</dt><dd>General Roman; United States</dd></div>
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
