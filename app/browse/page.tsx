import ContentRail from "@/components/content-rail";
import HeroBanner from "@/components/hero-banner";
import TopNav from "@/components/top-nav";
import { rails } from "@/lib/data";

export default function BrowsePage() {
  const featured = rails.flatMap((rail) => rail.titles).find((title) => title.featured) ?? rails[0].titles[0];

  return (
    <main className="browse-page">
      <TopNav />
      <HeroBanner title={featured} />
      <section className="rails-stack">
        {rails.map((rail) => (
          <ContentRail key={rail.id} rail={rail} />
        ))}
      </section>
    </main>
  );
}