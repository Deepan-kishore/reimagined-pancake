"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type TopNavProps = {
  compact?: boolean;
};

export default function TopNav({ compact = false }: TopNavProps) {
  const [solid, setSolid] = useState(compact);

  useEffect(() => {
    if (compact) return;

    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact]);

  return (
    <header className={`top-nav ${solid ? "solid" : ""}`}>
      <div className="brand">NEXTFLIX</div>
      <nav aria-label="Primary navigation">
        <Link href="/browse">Home</Link>
        <Link href="/browse">TV Shows</Link>
        <Link href="/browse">Movies</Link>
        <Link href="/browse">New & Popular</Link>
        <Link href="/browse">My List</Link>
      </nav>
      <div className="actions">
        <button type="button" className="ghost-btn">Search</button>
        <button type="button" className="ghost-btn">Kids</button>
        <Link href="/profiles" className="avatar" aria-label="Profiles">DS</Link>
      </div>
    </header>
  );
}