import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import {
  getDateKeyInTimeZone,
  getObservanceForDate,
  isValidDateKey,
} from "../lib/liturgical-calendar";

const upcoming = [
  { day: "26", month: "JUL", name: "Seventeenth Sunday in Ordinary Time", rank: "Sunday" },
  { day: "29", month: "JUL", name: "Saints Martha, Mary and Lazarus", rank: "Memorial" },
  { day: "31", month: "JUL", name: "Saint Ignatius of Loyola", rank: "Memorial" },
];

const devotions = [
  {
    eyebrow: "Begins August 6",
    title: "Assumption Novena",
    copy: "Nine days of prayer preparing for the Solemnity of the Assumption of the Blessed Virgin Mary.",
  },
  {
    eyebrow: "Begins August 18",
    title: "Saint Monica Novena",
    copy: "Pray with Saint Monica for loved ones who are far from the faith and for the grace of perseverance.",
  },
];

interface HomeProps {
  searchParams: Promise<QueryParameters>;
}

type QueryParameters =
  | Record<string, string | string[] | undefined>
  | { get(name: string): string | null };

function getQueryValue(query: QueryParameters, key: string): string | undefined {
  if ("get" in query && typeof query.get === "function") {
    return query.get(key) ?? undefined;
  }
  const value = query[key];
  return Array.isArray(value) ? value[0] : value;
}

function formatDate(dateKey: string) {
  const date = new Date(`${dateKey}T12:00:00Z`);
  return {
    weekday: new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "UTC" })
      .format(date)
      .toUpperCase(),
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit", timeZone: "UTC" }).format(date),
    monthYear: new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date).toUpperCase(),
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const query = await searchParams;
  const requestedDateValue = getQueryValue(query, "date");
  const requestedDate = requestedDateValue && isValidDateKey(requestedDateValue)
    ? requestedDateValue
    : null;
  const previewMode = getQueryValue(query, "preview") === "1";
  const dateKey = requestedDate ?? getDateKeyInTimeZone(new Date());
  const date = formatDate(dateKey);
  const observance = getObservanceForDate(dateKey, {
    includePrivatePreview: previewMode,
  });
  const detailUrl = observance
    ? previewMode
      ? `/preview/saints/${observance.slug}`
      : `/saints/${observance.slug}`
    : null;

  return (
    <main>
      <SiteHeader />

      {previewMode && observance ? (
        <div className="preview-banner" role="status">
          Private editorial preview · Fact-checked · Awaiting human review
        </div>
      ) : null}

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">The Church’s calendar, made personal</p>
          <h1>Meet the saints.<br /><em>Keep the feasts.</em></h1>
          <p className="hero-lede">
            A quiet, trustworthy companion for the Catholic year—saints,
            solemnities, and novenas presented with care.
          </p>
          <div className="hero-actions">
            {detailUrl ? (
              <Link className="button button-primary" href={detailUrl}>Discover today’s saint</Link>
            ) : (
              <Link className="button button-primary" href="/?date=2026-07-25&preview=1">
                Preview our first researched entry
              </Link>
            )}
            <a className="text-link" href="#calendar">Explore the calendar <span>→</span></a>
          </div>
        </div>

        <div className={`today-card ${observance ? "" : "today-card-empty"}`} id="today">
          <div className="card-date">
            <span>{date.weekday}</span>
            <strong>{date.day}</strong>
            <span>{date.monthYear}</span>
          </div>
          <div className="card-content">
            {observance ? (
              <>
                <p className="card-label">{observance.observance.rank} of the day</p>
                <h2>{observance.title}</h2>
                <p className="card-meta">{observance.descriptor}</p>
                <blockquote>
                  “Whoever wishes to be great among you shall be your servant.”
                  <cite>— Matthew 20:26</cite>
                </blockquote>
                <Link href={detailUrl ?? "#"}>Read the sourced story <span>→</span></Link>
              </>
            ) : (
              <>
                <p className="card-label">The calendar is growing</p>
                <h2>No reviewed entry<br />for this date yet</h2>
                <p className="card-meta">Quality before quantity</p>
                <p className="empty-card-copy">
                  CatholicYou will show an observance here only after its sources,
                  calendar scope, and editorial status have been verified.
                </p>
                <Link href="/?date=2026-07-25&preview=1">Preview Saint James <span>→</span></Link>
              </>
            )}
          </div>
          <div className="sunburst" aria-hidden="true" />
        </div>
      </section>

      <section className="trust-strip" aria-label="Editorial principles">
        <span>Carefully sourced</span>
        <span>Liturgically grounded</span>
        <span>Respectfully written</span>
      </section>

      {observance ? (
        <section className="story section-shell" id="about-james">
          <div className="section-heading">
            <p className="kicker">Today in the Church</p>
            <h2>{observance.theme}</h2>
          </div>
          <div className="story-grid">
            <p className="drop-cap">
              {observance.preview.origin} {observance.preview.distinctiveSignificance}
            </p>
            <p>{observance.preview.livingDevotion}</p>
            <aside>
              <span>For prayer today</span>
              <p>{observance.prayerPrompt}</p>
            </aside>
          </div>
          <a className="story-cta" href={detailUrl ?? "#"}>
            Read the complete entry and its sources <span>→</span>
          </a>
        </section>
      ) : (
        <section className="quality-section section-shell">
          <div className="section-heading">
            <p className="kicker">How CatholicYou is being built</p>
            <h2>A smaller calendar we can stand behind.</h2>
          </div>
          <div className="quality-grid">
            <p>
              We are beginning with individual, sourced entries rather than
              filling the calendar with automatically generated biographies.
            </p>
            <p>
              Scripture, documented history, later tradition, and devotional
              reflection are labeled separately. Human review remains a
              requirement for publication.
            </p>
          </div>
        </section>
      )}

      <section className="calendar-section" id="calendar">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">Coming up</p>
              <h2>Walk with the Church</h2>
            </div>
            <a className="text-link" href="#subscribe">Never miss a feast <span>→</span></a>
          </div>
          <div className="date-list">
            {upcoming.map((item) => (
              <article key={item.name}>
                <div className="mini-date"><strong>{item.day}</strong><span>{item.month}</span></div>
                <div><h3>{item.name}</h3><p>{item.rank}</p></div>
                <span className="arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="novena-section section-shell" id="novena">
        <div className="section-heading">
          <p className="kicker">Pray in communion</p>
          <h2>Upcoming novenas</h2>
          <p>Begin on time. We’ll remind you before the first day, then walk with you through all nine.</p>
        </div>
        <div className="devotion-grid">
          {devotions.map((item, index) => (
            <article key={item.title} className={index === 0 ? "gold-card" : "blue-card"}>
              <p className="card-label">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href="#subscribe">Remind me <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="signup" id="subscribe">
        <div>
          <p className="kicker">A gentle rhythm for your inbox</p>
          <h2>Stay close to the Catholic year.</h2>
          <p>Join the early list for saint stories, feast-day notes, and timely novena reminders.</p>
        </div>
        <form action="mailto:hello@catholic.you" method="post" encType="text/plain">
          <label htmlFor="email">Email address</label>
          <div className="form-row">
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
            <button type="submit">Join the early list</button>
          </div>
          <small>No noise. No pressure. Unsubscribe whenever you wish.</small>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
