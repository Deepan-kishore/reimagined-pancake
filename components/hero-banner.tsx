import Link from "next/link";
import type { Title } from "@/lib/data";

type HeroBannerProps = {
  title: Title;
};

export default function HeroBanner({ title }: HeroBannerProps) {
  return (
    <section className="hero" style={{ backgroundImage: `${title.bg}, radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16) 0%, rgba(0,0,0,0) 35%)` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Featured</p>
        <h1>{title.name}</h1>
        <div className="meta">
          <span>{title.year}</span>
          <span>{title.maturity}</span>
          <span>{title.duration}</span>
          <span>{title.genre}</span>
        </div>
        <p>{title.synopsis}</p>
        <div className="hero-actions">
          <Link href={`/watch/${title.id}`} className="play-btn">Play</Link>
          <button type="button" className="info-btn">More Info</button>
        </div>
      </div>
    </section>
  );
}