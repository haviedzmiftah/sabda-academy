import Link from "next/link";

const navigation = [
  { href: "/program", label: "Program" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200/80 bg-canvas/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="focus-ring font-display text-xl font-bold text-ink">
          Sabda<span className="text-coral">.</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring text-sm font-semibold text-slate-600 hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/daftar-trial" className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white">
            Daftar Trial
          </Link>
        </nav>
        <Link href="/daftar-trial" className="focus-ring rounded-full bg-ink px-4 py-2 text-sm font-bold text-white md:hidden">
          Trial
        </Link>
      </div>
    </header>
  );
}
