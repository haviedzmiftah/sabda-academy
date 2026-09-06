import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="Tentang Sabda Academy" title="Belajar, membuat, dan percaya diri." description="Kami menciptakan ruang belajar coding yang membantu anak mengubah rasa ingin tahu menjadi karya." />
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl bg-ink p-8 text-white">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">Misi kami</p>
          <h2 className="mt-5 font-display text-3xl font-bold">Membuat coding terasa dekat, seru, dan bermakna.</h2>
          <p className="mt-5 leading-8 text-blue-100">Anak tidak hanya belajar mengikuti instruksi. Mereka mengeksplorasi ide, memecahkan masalah, dan melihat hasil dari prosesnya sendiri.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            ["Project first", "Setiap konsep terhubung dengan project yang dapat dilihat."],
            ["Mentor suportif", "Pertanyaan dan kesalahan adalah bagian penting dari belajar."],
            ["Sesuai usia", "Tantangan dirancang bertahap agar anak tetap tertantang."],
            ["Progress terlihat", "Orang tua memahami proses dan perkembangan anak."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 rounded-3xl bg-yellow-100/70 p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-ink">Ingin mengenal cara belajar kami?</h2>
        <ButtonLink href="/daftar-trial" className="mt-6">Coba Trial Class</ButtonLink>
      </div>
    </section>
  );
}
