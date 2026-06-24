import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("404 Not Found");

  return (
    <main className="flex flex-col items-center justify-center gap-6 py-40 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg text-muted">Page not found.</p>
      <Link
        to="/"
        className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        Back to home
      </Link>
    </main>
  );
}
