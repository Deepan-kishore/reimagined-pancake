import MovieCard from "@/components/movie-card";
import type { Rail } from "@/lib/data";

type ContentRailProps = {
  rail: Rail;
};

export default function ContentRail({ rail }: ContentRailProps) {
  return (
    <section className="content-rail" aria-labelledby={`rail-${rail.id}`}>
      <h2 id={`rail-${rail.id}`}>{rail.label}</h2>
      <div className="rail-scroll" role="list">
        {rail.titles.map((title) => (
          <div key={title.id} role="listitem">
            <MovieCard title={title} />
          </div>
        ))}
      </div>
    </section>
  );
}