import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <Link href="/" className="font-display font-bold text-ink">Sabda Academy</Link>
          <p className="mt-1">Belajar, membuat, dan percaya diri.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://maps.app.goo.gl/Pmgyi5PEvrtFArhKA"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-ink"
          >
            <svg
              className="h-4 w-4 text-coral shrink-0 transition-transform duration-200 group-hover:scale-110"
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
            <span>Google Maps</span>
          </a>

          <a
            href="https://www.instagram.com/sabda.academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-pink-600"
            aria-label="Instagram Sabda Academy"
          >
            <svg
              className="h-4 w-4 text-pink-600 shrink-0 transition-transform duration-200 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@sabda.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-ink"
            aria-label="TikTok Sabda Academy"
          >
            <svg
              className="h-4 w-4 text-slate-900 shrink-0 transition-transform duration-200 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.9 2.9 0 0 1-2.9-2.89 2.9 2.9 0 0 1 2.9-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.35 6.35 0 0 0 6.34 6.35 6.34 6.34 0 0 0 6.34-6.35V8.05a8.21 8.21 0 0 0 3.76.92V5.51a4.81 4.81 0 0 1 0-1.18v2.36z" />
            </svg>
            <span>TikTok</span>
          </a>
        </div>

        <div className="text-center sm:text-right">
          <p>© {new Date().getFullYear()} Sabda Academy</p>
        </div>
      </div>
    </footer>
  );
}
