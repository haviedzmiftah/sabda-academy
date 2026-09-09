import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <Link href="/" className="font-display font-bold text-ink">Sabda Academy</Link>
          <p className="mt-1">Belajar, membuat, dan percaya diri.</p>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="https://maps.app.goo.gl/Pmgyi5PEvrtFArhKA"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-ink transition-colors"
          >
            <svg
              className="h-4 w-4 text-coral shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Lokasi: Google Maps</span>
          </a>
        </div>

        <div className="text-center sm:text-right">
          <p>© {new Date().getFullYear()} Sabda Academy</p>
        </div>
      </div>
    </footer>
  );
}
