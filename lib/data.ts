export type Title = {
  id: string;
  name: string;
  synopsis: string;
  maturity: string;
  year: number;
  duration: string;
  genre: string;
  featured?: boolean;
  bg: string;
};

export type Rail = {
  id: string;
  label: string;
  titles: Title[];
};

export const rails: Rail[] = [
  {
    id: "continue",
    label: "Continue Watching",
    titles: [
      {
        id: "night-protocol",
        name: "Night Protocol",
        synopsis: "A cybercrime investigator tracks an invisible network hidden inside city infrastructure.",
        maturity: "U/A 16+",
        year: 2025,
        duration: "2h 08m",
        genre: "Sci-Fi Thriller",
        featured: true,
        bg: "linear-gradient(140deg, #0f172a 0%, #1d4ed8 55%, #06b6d4 100%)"
      },
      {
        id: "salt-wind",
        name: "Salt Wind",
        synopsis: "A shipping heir uncovers family secrets buried across three ports.",
        maturity: "U/A 13+",
        year: 2024,
        duration: "1h 44m",
        genre: "Drama",
        bg: "linear-gradient(140deg, #1f2937 0%, #b45309 55%, #f97316 100%)"
      },
      {
        id: "atlas-room",
        name: "Atlas Room",
        synopsis: "Engineers in orbit race to stop a rogue AI from rewriting Earth weather controls.",
        maturity: "U/A 16+",
        year: 2026,
        duration: "2h 15m",
        genre: "Action",
        bg: "linear-gradient(140deg, #111827 0%, #047857 50%, #34d399 100%)"
      }
    ]
  },
  {
    id: "trending",
    label: "Trending Now",
    titles: [
      {
        id: "echo-shore",
        name: "Echo Shore",
        synopsis: "A detective revisits a coastal town where every witness tells a different truth.",
        maturity: "U/A 16+",
        year: 2025,
        duration: "6 Episodes",
        genre: "Mystery",
        bg: "linear-gradient(140deg, #111827 0%, #7c3aed 60%, #ec4899 100%)"
      },
      {
        id: "fracture-point",
        name: "Fracture Point",
        synopsis: "Extreme climbers discover an abandoned military relay at the summit.",
        maturity: "U/A 13+",
        year: 2026,
        duration: "1h 52m",
        genre: "Adventure",
        bg: "linear-gradient(140deg, #1e1b4b 0%, #3730a3 55%, #38bdf8 100%)"
      },
      {
        id: "meridian",
        name: "Meridian",
        synopsis: "A world-class surgeon rebuilds her life in a floating city clinic.",
        maturity: "U/A 13+",
        year: 2025,
        duration: "8 Episodes",
        genre: "Drama",
        bg: "linear-gradient(140deg, #0f172a 0%, #3b82f6 45%, #22d3ee 100%)"
      },
      {
        id: "vector-9",
        name: "Vector 9",
        synopsis: "A hidden test pilot program becomes a planetary rescue mission.",
        maturity: "U/A 16+",
        year: 2026,
        duration: "2h 01m",
        genre: "Action",
        bg: "linear-gradient(140deg, #312e81 0%, #db2777 58%, #f97316 100%)"
      }
    ]
  },
  {
    id: "my-list",
    label: "My List",
    titles: [
      {
        id: "copper-rain",
        name: "Copper Rain",
        synopsis: "Two journalists uncover industrial sabotage in a megacity monsoon zone.",
        maturity: "A",
        year: 2024,
        duration: "1h 59m",
        genre: "Crime",
        bg: "linear-gradient(140deg, #1f2937 0%, #be123c 58%, #f59e0b 100%)"
      },
      {
        id: "gravity-market",
        name: "Gravity Market",
        synopsis: "A broker in a low-orbit bazaar manipulates trade routes to stop a war.",
        maturity: "U/A 16+",
        year: 2026,
        duration: "2h 22m",
        genre: "Sci-Fi",
        bg: "linear-gradient(140deg, #111827 0%, #0ea5e9 50%, #a855f7 100%)"
      },
      {
        id: "paper-crown",
        name: "Paper Crown",
        synopsis: "A campaign strategist fights disinformation and loyalty wars in election season.",
        maturity: "U/A 13+",
        year: 2025,
        duration: "10 Episodes",
        genre: "Political Drama",
        bg: "linear-gradient(140deg, #1f2937 0%, #dc2626 60%, #fbbf24 100%)"
      }
    ]
  }
];

export const allTitles = rails.flatMap((r) => r.titles);