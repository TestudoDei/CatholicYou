import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="CatholicYou home">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span>Catholic<span className="brand-dot">.</span>You</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#today">Today</Link>
        <Link href="/#calendar">Calendar</Link>
        <Link href="/#novena">Novenas</Link>
        <Link className="nav-cta" href="/#subscribe">Get daily reminders</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/">
        <span className="brand-mark" aria-hidden="true">✦</span>
        Catholic<span className="brand-dot">.</span>You
      </Link>
      <p>A companion for living the Catholic year.</p>
      <p>© 2026 Catholic.You</p>
    </footer>
  );
}
