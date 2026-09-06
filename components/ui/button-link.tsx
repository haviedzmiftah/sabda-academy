 "use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-800 text-white hover:bg-blue-900"
      : variant === "accent"
        ? "bg-yellow-300 text-ink hover:bg-yellow-200"
        : "border border-slate-300 bg-white text-ink hover:border-ink";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 font-bold transition-colors ${styles} ${className}`}
      onClick={() => trackEvent("cta_click", { destination: href })}
    >
      {children}
    </Link>
  );
}
