import Link from "next/link";
import TopNav from "@/components/top-nav";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <TopNav compact />
      <section className="auth-card">
        <h1>Sign In</h1>
        <form>
          <label htmlFor="email">Email or phone number</label>
          <input id="email" name="email" type="text" autoComplete="username" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" />

          <Link href="/profiles" className="primary-cta full">Sign In</Link>
        </form>
      </section>
    </main>
  );
}