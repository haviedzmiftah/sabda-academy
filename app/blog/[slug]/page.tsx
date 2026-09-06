import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { ArticleReadTracker } from "@/components/conversion/article-read-tracker";
import { getContentBySlug, getContentList, getContentSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getContentBySlug("blog", slug);
    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        type: "article",
        title: meta.title,
        description: meta.description,
        publishedTime: meta.date,
        authors: [meta.author],
        section: meta.category,
        images: meta.image ? [meta.image] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta, source } = getContentBySlug("blog", slug);
    const relatedPosts = getContentList("blog")
      .filter((post) => post.slug !== meta.slug && post.category === meta.category)
      .slice(0, 2);
    return (
      <div className="mx-auto max-w-6xl px-5 py-16">
        <ArticleReadTracker slug={meta.slug} />
        <article className="prose prose-slate mx-auto max-w-3xl prose-headings:font-display prose-headings:text-ink">
          <Link href="/blog" className="not-prose focus-ring inline-block font-bold text-blue-700">&larr; Kembali ke blog</Link>
          <p className="not-prose mt-8 font-mono text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{meta.category}</p>
          <h1>{meta.title}</h1>
          <div className="not-prose flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
            <span>{meta.author}</span><span aria-hidden="true">·</span><span>{meta.date}</span><span aria-hidden="true">·</span><span>{meta.readingTime} baca</span>
          </div>
          <p className="not-prose mt-6 text-lg leading-8 text-slate-600">{meta.description}</p>
          <MDXRemote source={source} components={getMDXComponents({})} />
        </article>
        {relatedPosts.length > 0 ? (
          <aside className="mx-auto mt-16 max-w-3xl border-t border-slate-200 pt-10">
            <h2 className="font-display text-2xl font-bold text-ink">Artikel terkait</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="focus-ring rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                  <p className="text-sm font-semibold text-coral">{post.category}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{post.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{post.description}</p>
                </Link>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    );
  } catch {
    notFound();
  }
}
