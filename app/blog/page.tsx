import Link from "next/link";
import { getContentList } from "@/lib/content";

export default function BlogPage() {
  const posts = getContentList("blog");
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Blog</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">Ide belajar untuk orang tua dan anak.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl bg-white p-6 shadow-card">
            <p className="text-sm font-semibold text-coral">{post.category}</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">{post.title}</h2>
            <p className="mt-3 text-slate-600">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="focus-ring mt-5 inline-block font-bold text-blue-700">
              Baca artikel →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
