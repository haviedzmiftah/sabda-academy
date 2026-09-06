import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-20">
      <div className="max-w-3xl">
        <p className="mb-5 font-mono text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          Belajar coding dengan cara yang menyenangkan
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
          Bantu anak menciptakan karya digitalnya sendiri.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Di Sabda Academy, anak belajar logika, kreativitas, dan problem solving melalui project
          coding yang sesuai usia, didampingi mentor yang suportif.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/daftar-trial" className="focus-ring rounded-full bg-ink px-6 py-3 font-bold text-white">
            Daftar Trial Class
          </Link>
          <Link href="/program" className="focus-ring rounded-full border border-slate-300 px-6 py-3 font-bold text-ink">
            Lihat Program
          </Link>
        </div>
      </div>
    </section>
  );
}
