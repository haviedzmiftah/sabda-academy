import { getContentCategories, getContentList } from "@/lib/content";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel dan panduan belajar coding untuk anak dan orang tua.",
  alternates: { canonical: absoluteUrl("/blog") },
};

export default function BlogPage() {
  const posts = getContentList("blog");
  const categories = getContentCategories("blog");

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Blog</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">Ide belajar untuk orang tua dan anak.</h1>
      <BlogList posts={posts} categories={categories} />
    </section>
  );
}
