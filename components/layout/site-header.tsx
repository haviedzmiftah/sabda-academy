"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/program", label: "Program" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="focus-ring font-display text-xl font-bold text-ink">
          Sabda<span className="text-coral"> Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring text-sm font-semibold transition-colors hover:text-ink ${
                pathname === item.href ? "text-ink font-bold" : "text-slate-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/daftar-trial"
            className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Daftar Trial
          </Link>
        </nav>

        {/* Mobile Action & Hamburger Button */}
        <div className="flex items-center gap-2.5 md:hidden">
          <Link
            href="/daftar-trial"
            className="focus-ring rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white"
          >
            Trial
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-ink transition hover:bg-slate-50 active:bg-slate-100"
          >
            {isOpen ? (
              /* Close Icon (X) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {isOpen && (
        <div className="border-t border-slate-200/80 bg-canvas px-5 py-6 shadow-elevated md:hidden">
          <nav aria-label="Navigasi mobile" className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`focus-ring rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  pathname === item.href
                    ? "bg-amber-100/60 font-bold text-ink"
                    : "text-slate-700 hover:bg-white hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-slate-200/60">
              <Link
                href="/daftar-trial"
                onClick={() => setIsOpen(false)}
                className="focus-ring flex w-full items-center justify-center rounded-xl bg-ink py-3.5 text-center text-sm font-bold text-white shadow-sm"
              >
                Daftar Trial Class Gratis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
