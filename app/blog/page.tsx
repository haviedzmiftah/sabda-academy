import Link from "next/link";
import { getContentList } from "@/lib/content";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel dan panduan belajar coding untuk anak dan orang tua.",
  alternates: { canonical: absoluteUrl("/blog") },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date(`${date}T00:00:00`));
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const posts = getContentList("blog");
  const { category } = await searchParams;
  const categories = [...new Set(posts.map((post) => post.category))];
  const filteredPosts = category ? posts.filter((post) => post.category === category) : posts;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Blog</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">Ide belajar untuk orang tua dan anak.</h1>
      <nav aria-label="Filter kategori artikel" className="mt-8 flex flex-wrap gap-2">
        <Link href="/blog" className={`focus-ring rounded-full px-4 py-2 text-sm font-bold ${!category ? "bg-ink text-white" : "bg-slate-100 text-slate-600"}`}>
          Semua
        </Link>
        {categories.map((item) => (
          <Link key={item} href={`/blog?category=${encodeURIComponent(item)}`} className={`focus-ring rounded-full px-4 py-2 text-sm font-bold ${category === item ? "bg-ink text-white" : "bg-slate-100 text-slate-600"}`}>
            {item}
          </Link>
        ))}
      </nav>
      {filteredPosts.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl bg-white p-6 shadow-card">
              <p className="text-sm font-semibold text-coral">{post.category}</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink">{post.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
                <span>{formatDate(post.date)}</span><span aria-hidden="true">·</span><span>{post.readingTime} baca</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="focus-ring mt-5 inline-block font-bold text-blue-700">
                Baca artikel &rarr;
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <h2 className="font-display text-xl font-bold text-ink">Belum ada artikel di kategori ini.</h2>
          <Link href="/blog" className="focus-ring mt-4 inline-block font-bold text-blue-700">Lihat semua artikel &rarr;</Link>
        </div>
      )}
    </section>
  );
}
