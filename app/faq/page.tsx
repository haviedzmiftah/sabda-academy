import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function FaqPage() {
  const groups = [
    {
      title: "Program dan usia",
      items: [
        ["Apakah anak harus sudah bisa coding?", "Tidak. Anak dapat mulai dari level yang sesuai usia dan pengalaman."],
        ["Bagaimana memilih program yang tepat?", "Trial class membantu kami memahami minat dan kesiapan anak sebelum merekomendasikan program."],
      ],
    },
    {
      title: "Kelas dan perangkat",
      items: [
        ["Apa yang dibutuhkan untuk mengikuti kelas?", "Laptop atau komputer dan koneksi internet yang stabil. Detail perangkat akan dijelaskan sebelum kelas dimulai."],
        ["Apakah kelas dilakukan online?", "Format dan jadwal kelas tersedia pada detail program. Hubungi kami untuk pilihan yang tersedia."],
      ],
    },
    {
      title: "Trial class",
      items: [
        ["Apa yang dilakukan saat trial?", "Anak mengikuti project singkat bersama mentor untuk merasakan metode belajar Sabda Academy."],
        ["Bagaimana cara mendaftar?", "Isi form trial class, lalu tim kami akan menghubungi orang tua melalui kanal yang dipilih."],
      ],
    },
  ];
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan." description="Belum menemukan jawaban yang dicari? Tim kami siap membantu." />
      <div className="mt-12 space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-2xl font-bold text-ink">{group.title}</h2>
            <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {group.items.map(([question, answer]) => (
                <details key={question} className="group p-6">
                  <summary className="focus-ring cursor-pointer list-none pr-8 font-bold text-ink">{question}</summary>
                  <p className="mt-3 leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-slate-600">Masih punya pertanyaan? <Link href="/kontak" className="focus-ring font-bold text-blue-700">Hubungi kami &rarr;</Link></p>
    </section>
  );
}
