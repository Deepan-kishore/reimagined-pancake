import Link from "next/link";

const profiles = [
  { id: "deepan", label: "Deepan", accent: "#16a34a" },
  { id: "guest", label: "Guest", accent: "#2563eb" },
  { id: "kids", label: "Kids", accent: "#ea580c" }
];

export default function ProfilesPage() {
  return (
    <main className="profiles-page">
      <h1>Who&apos;s watching?</h1>
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <Link href="/browse" key={profile.id} className="profile-card">
            <span className="avatar" style={{ backgroundColor: profile.accent }}>
              {profile.label.slice(0, 1)}
            </span>
            <span>{profile.label}</span>
          </Link>
        ))}
      </div>
      <button type="button" className="ghost-outline">Manage Profiles</button>
    </main>
  );
}