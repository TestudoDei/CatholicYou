const upcoming = [
  { day: "26", month: "JUL", name: "Saints Joachim and Anne", rank: "Memorial" },
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
    eyebrow: "Begins August 13",
    title: "Saint Monica Novena",
    copy: "Pray with Saint Monica for loved ones who are far from the faith and for the grace of perseverance.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CatholicYou home">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span>Catholic<span className="brand-dot">.</span>You</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#today">Today</a>
          <a href="#calendar">Calendar</a>
          <a href="#novena">Novenas</a>
          <a className="nav-cta" href="#subscribe">Get daily reminders</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">The Church’s calendar, made personal</p>
          <h1>Meet the saints.<br /><em>Keep the feasts.</em></h1>
          <p className="hero-lede">
            A quiet, trustworthy companion for the Catholic year—saints,
            solemnities, and novenas delivered when they matter.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#today">Discover today’s saint</a>
            <a className="text-link" href="#calendar">Explore the calendar <span>→</span></a>
          </div>
        </div>
        <div className="today-card" id="today">
          <div className="card-date">
            <span>FRIDAY</span>
            <strong>25</strong>
            <span>JULY 2026</span>
          </div>
          <div className="card-content">
            <p className="card-label">Feast of the day</p>
            <h2>Saint James<br />the Apostle</h2>
            <p className="card-meta">Apostle · Martyr · Patron of pilgrims</p>
            <blockquote>
              “Whoever wishes to be great among you shall be your servant.”
              <cite>— Matthew 20:26</cite>
            </blockquote>
            <a href="#about-james">Read his story <span>→</span></a>
          </div>
          <div className="sunburst" aria-hidden="true" />
        </div>
      </section>

      <section className="trust-strip" aria-label="Editorial principles">
        <span>Carefully sourced</span>
        <span>Liturgically grounded</span>
        <span>Respectfully written</span>
      </section>

      <section className="story section-shell" id="about-james">
        <div className="section-heading">
          <p className="kicker">Today in the Church</p>
          <h2>A faith worth walking for</h2>
        </div>
        <div className="story-grid">
          <p className="drop-cap">
            James, the son of Zebedee and brother of John, was among the first
            disciples called by Jesus. Scripture places him at the
            Transfiguration and in Gethsemane, close to Christ at moments of
            glory and anguish.
          </p>
          <p>
            Tradition remembers him as the first of the Twelve to suffer
            martyrdom. For centuries, pilgrims have walked the Camino de
            Santiago in his honor—a long road that turns every step into prayer.
          </p>
          <aside>
            <span>For prayer today</span>
            <p>Ask for the courage to follow Christ generously, especially when the road is difficult.</p>
          </aside>
        </div>
      </section>

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

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">✦</span>Catholic<span className="brand-dot">.</span>You</a>
        <p>A companion for living the Catholic year.</p>
        <p>© 2026 Catholic.You</p>
      </footer>
    </main>
  );
}
