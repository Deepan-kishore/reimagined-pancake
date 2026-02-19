import Link from "next/link";
import { allTitles } from "@/lib/data";

export default async function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const title = allTitles.find((entry) => entry.id === id);

  if (!title) {
    return (
      <main className="watch-page">
        <div className="player-shell">
          <p>Title not found.</p>
          <Link href="/browse" className="primary-cta">Back to Browse</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="watch-page">
      <div className="player-shell" style={{ backgroundImage: title.bg }}>
        <div className="player-overlay" />
        <Link href="/browse" className="back-link">Back</Link>
        <div className="player-meta">
          <h1>{title.name}</h1>
          <p>{title.synopsis}</p>
          <p>{title.genre} • {title.duration} • {title.maturity}</p>
        </div>
      </div>
    </main>
  );
}