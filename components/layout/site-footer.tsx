import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-display font-bold text-ink">Sabda Academy</Link>
          <p className="mt-1">Belajar, membuat, dan percaya diri.</p>
        </div>
        <p>© {new Date().getFullYear()} Sabda Academy</p>
      </div>
    </footer>
  );
}
