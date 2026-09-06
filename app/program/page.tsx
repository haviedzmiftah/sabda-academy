import Link from "next/link";
import { getContentList } from "@/lib/content";

export default function ProgramPage() {
  const programs = getContentList("program");
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Program</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">Temukan program yang sesuai.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <article key={program.slug} className="rounded-2xl bg-white p-6 shadow-card">
            <p className="text-sm font-semibold text-coral">{program.category}</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">{program.title}</h2>
            <p className="mt-3 text-slate-600">{program.description}</p>
            <Link href={`/program/${program.slug}`} className="focus-ring mt-5 inline-block font-bold text-blue-700">
              Lihat detail →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
