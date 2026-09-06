import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-slate-200 bg-canvas">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_0.9fr] md:py-24">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Belajar coding dengan cara yang menyenangkan
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
              Bantu anak menciptakan karya digitalnya sendiri.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Di Sabda Academy, anak belajar logika, kreativitas, dan problem solving melalui
              project coding yang sesuai usia, didampingi mentor yang suportif.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/daftar-trial">Daftar Trial Class</ButtonLink>
              <ButtonLink href="/program" variant="secondary">Lihat Program</ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate-500">Cocok untuk pemula. Tidak perlu pengalaman coding.</p>
          </div>
          <div aria-label="Ilustrasi project coding siswa" className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-5 top-10 h-20 w-20 rounded-3xl bg-accent/70" />
            <div className="absolute -right-5 bottom-4 h-24 w-24 rounded-full bg-coral/20" />
            <div className="relative rounded-[2rem] bg-ink p-4 shadow-elevated">
              <div className="flex items-center gap-2 border-b border-white/10 px-3 pb-4">
                <span className="h-3 w-3 rounded-full bg-coral" />
                <span className="h-3 w-3 rounded-full bg-accent" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-auto font-mono text-xs text-blue-200">my-first-project</span>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.8fr]">
                <div className="space-y-3 font-mono text-sm text-blue-200">
                  <p><span className="text-coral">when</span> clicked</p>
                  <p className="ml-4 rounded-lg bg-blue-900/70 px-3 py-2 text-white">say &quot;Hello!&quot;</p>
                  <p className="ml-4 rounded-lg bg-blue-900/70 px-3 py-2 text-white">make something cool</p>
                </div>
                <div className="flex min-h-32 items-center justify-center rounded-2xl bg-yellow-300 text-5xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {["Project yang bisa dibanggakan", "Mentor yang suportif", "Belajar sesuai usia"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-bold text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-coral">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading eyebrow="Program belajar" title="Mulai dari rasa ingin tahu, lanjutkan menjadi karya." description="Pilih jalur belajar yang sesuai usia dan pengalaman anak." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Scratch Coding", "7–10 tahun", "Membuat game dan animasi sambil mengenal logika pemrograman."],
            ["02", "Game Development", "10–14 tahun", "Mengubah ide menjadi game interaktif yang seru dimainkan."],
            ["03", "Web Development", "13–17 tahun", "Membangun website pertama dengan HTML, CSS, dan JavaScript."],
          ].map(([number, title, age, description]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition-transform hover:-translate-y-1">
              <p className="font-mono text-sm font-bold text-coral">{number}</p>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-blue-700">{age}</p>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
              <Link href="/program" className="focus-ring mt-6 inline-block font-bold text-blue-700">Lihat program →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-yellow-100/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Kenapa Sabda Academy" title="Lebih dari sekadar belajar mengetik kode." />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["✦", "Project-based", "Anak belajar melalui karya nyata, bukan hafalan teori."],
              ["◌", "Sesuai tahap", "Tantangan berkembang bersama usia dan kemampuan anak."],
              ["↗", "Mentor mendampingi", "Ada ruang untuk bertanya, mencoba, dan memperbaiki."],
              ["♡", "Berani presentasi", "Anak belajar menjelaskan karya dan menghargai prosesnya."],
            ].map(([icon, title, description]) => (
              <div key={title}>
                <span className="text-3xl text-coral">{icon}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading align="center" eyebrow="Cara belajar" title="Explore. Learn. Build. Present." description="Empat langkah yang membuat proses belajar terasa bermakna." />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Explore", "Temukan hal yang membuat anak penasaran."],
            ["02", "Learn", "Pelajari konsep melalui contoh yang dekat."],
            ["03", "Build", "Ubah ide menjadi project milik sendiri."],
            ["04", "Present", "Ceritakan karya dan rayakan prosesnya."],
          ].map(([number, title, description]) => (
            <div key={title} className="relative rounded-2xl bg-slate-50 p-6">
              <span className="font-mono text-sm font-bold text-coral">{number}</span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading eyebrow="Cerita dari orang tua" title="“Sekarang anak saya punya ide, lalu tahu cara membuatnya.”" description="Kami percaya rasa percaya diri tumbuh ketika anak diberi ruang untuk mencoba." />
          </div>
          <blockquote className="rounded-3xl bg-white/10 p-8">
            <p className="text-lg leading-8 text-blue-50">“Awalnya hanya ikut trial. Setelah itu, ia mulai membuat game sendiri dan dengan bangga menceritakannya di rumah.”</p>
            <footer className="mt-6 text-sm font-bold text-yellow-300">— Rani, orang tua siswa</footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading eyebrow="Pertanyaan umum" title="Masih ingin tahu lebih banyak?" />
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {[
            ["Apakah anak harus sudah bisa coding?", "Tidak. Program dimulai dari level yang sesuai usia dan pengalaman."],
            ["Apa yang dibutuhkan untuk mengikuti kelas?", "Anak membutuhkan laptop atau komputer dan koneksi internet yang stabil."],
            ["Bagaimana memilih program yang tepat?", "Mulai dengan trial class agar kami dapat memahami minat dan kesiapan anak."],
          ].map(([question, answer]) => (
            <details key={question} className="group p-6">
              <summary className="focus-ring cursor-pointer list-none pr-8 font-bold text-ink">{question}</summary>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
        <Link href="/faq" className="focus-ring mt-6 inline-block font-bold text-blue-700">Lihat semua FAQ →</Link>
      </section>

      <section className="mx-5 mb-20 overflow-hidden rounded-[2rem] bg-coral px-6 py-14 text-center text-white sm:px-12">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Siap melihat anak membuat karya pertamanya?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-orange-50">Kenali minat anak melalui pengalaman trial class bersama mentor Sabda Academy.</p>
        <ButtonLink href="/daftar-trial" className="mt-8 bg-white text-ink hover:bg-orange-50">Daftar Trial Class</ButtonLink>
      </section>
    </>
  );
}
