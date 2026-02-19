import Link from "next/link";

export default function HomePage() {
  return (
    <main className="landing">
      <div className="landing-overlay" />
      <header className="landing-header">
        <div className="brand">NEXTFLIX</div>
        <Link href="/login" className="signin-btn">Sign In</Link>
      </header>

      <section className="landing-hero">
        <h1>Unlimited movies, TV shows and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Start by selecting your profile.</p>
        <div className="landing-cta">
          <Link href="/profiles" className="primary-cta">Get Started</Link>
        </div>
      </section>
    </main>
  );
}