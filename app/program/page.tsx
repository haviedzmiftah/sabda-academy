import Link from "next/link";
import { getContentList } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ProgramPage() {
  const programs = getContentList("program");
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="Program belajar" title="Temukan program yang sesuai." description="Semua program dirancang agar anak belajar dengan membuat karya yang nyata dan menyenangkan." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <article key={program.slug} className="rounded-2xl bg-white p-6 shadow-card">
            <p className="text-sm font-semibold text-coral">{program.category}</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">{program.title}</h2>
            <p className="mt-3 text-slate-600">{program.description}</p>
            <Link href={`/program/${program.slug}`} className="focus-ring mt-5 inline-block font-bold text-blue-700">
              Lihat detail &rarr;
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-3xl bg-yellow-100/70 p-8 sm:p-10">
        <h2 className="font-display text-2xl font-bold text-ink">Belum yakin memilih level?</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">Mulai dari trial class. Tim kami akan membantu merekomendasikan program berdasarkan usia dan minat anak.</p>
        <ButtonLink href="/daftar-trial" className="mt-6">Daftar Trial Class</ButtonLink>
      </div>
    </section>
  );
}
