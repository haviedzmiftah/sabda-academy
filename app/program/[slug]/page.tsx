import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { getContentBySlug, getContentSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getContentSlugs("program").map((slug) => ({ slug }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta, source } = getContentBySlug("program", slug);
    return (
      <article className="prose prose-slate mx-auto max-w-3xl px-5 py-16 prose-headings:font-display prose-headings:text-ink">
        <p className="not-prose font-mono text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{meta.category}</p>
        <h1>{meta.title}</h1>
        <p className="not-prose text-slate-600">{meta.description}</p>
        <MDXRemote source={source} components={getMDXComponents({})} />
      </article>
    );
  } catch {
    notFound();
  }
}
