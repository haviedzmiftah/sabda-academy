import { TrialForm } from "@/components/conversion/trial-form";

export default function TrialPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start md:py-20">
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Trial class</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">Mulai dari satu project.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">Isi data singkat berikut. Tim Sabda Academy akan membantu menemukan program yang sesuai dengan minat dan usia anak.</p>
        <ul className="mt-8 space-y-4 text-sm font-semibold text-ink">
          {["Konsultasi program sesuai usia", "Pengalaman belajar bersama mentor", "Tidak perlu pengalaman coding"].map((item) => (
            <li key={item} className="flex items-center gap-3"><span className="text-coral">✓</span>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-elevated sm:p-8">
        <h2 className="font-display text-2xl font-bold text-ink">Daftar trial class</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Data digunakan hanya untuk menindaklanjuti pendaftaran trial class.</p>
        <div className="mt-8"><TrialForm /></div>
      </div>
    </section>
  );
}
