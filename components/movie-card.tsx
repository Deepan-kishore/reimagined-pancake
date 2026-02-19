"use client";

import Link from "next/link";
import type { Title } from "@/lib/data";

type MovieCardProps = {
  title: Title;
};

export default function MovieCard({ title }: MovieCardProps) {
  return (
    <article className="movie-card" style={{ backgroundImage: title.bg }}>
      <div className="movie-dim" />
      <div className="movie-base">
        <h3>{title.name}</h3>
      </div>
      <div className="movie-hover">
        <h4>{title.name}</h4>
        <p>{title.genre} - {title.year}</p>
        <div className="hover-actions">
          <Link href={`/watch/${title.id}`} className="icon-action">Play</Link>
          <button type="button" className="icon-action">+</button>
          <button type="button" className="icon-action">Like</button>
        </div>
      </div>
    </article>
  );
}