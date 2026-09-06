import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="Kontak" title="Mari ngobrol tentang minat anak." description="Kami siap membantu orang tua memilih pengalaman belajar yang paling sesuai." />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-ink p-8 text-white">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">Kanal utama</p>
          <h2 className="mt-5 font-display text-3xl font-bold">Chat dengan tim Sabda Academy.</h2>
          <p className="mt-4 leading-8 text-blue-100">Ceritakan usia dan minat anak. Kami akan membantu menjawab pertanyaan serta merekomendasikan langkah berikutnya.</p>
          <ButtonLink href="/daftar-trial" variant="accent" className="mt-8">Daftar Trial Class</ButtonLink>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
          <h2 className="font-display text-2xl font-bold text-ink">Informasi kontak</h2>
          <dl className="mt-6 space-y-5">
            <div><dt className="text-sm text-slate-500">WhatsApp</dt><dd className="mt-1 font-bold text-ink">Akan tersedia segera</dd></div>
            <div><dt className="text-sm text-slate-500">Email</dt><dd className="mt-1 font-bold text-ink">hello@sabda.academy</dd></div>
            <div><dt className="text-sm text-slate-500">Jam respons</dt><dd className="mt-1 font-bold text-ink">Senin–Jumat, 09.00–17.00 WIB</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
