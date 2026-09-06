import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return getContentSlugs("program").map((slug) => ({ slug }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta, source } = getContentBySlug("program", slug);
    return (
      <article className="prose prose-slate mx-auto max-w-3xl px-5 py-16 prose-headings:font-display prose-headings:text-ink">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: meta.title,
          description: meta.description,
          provider: { "@type": "EducationalOrganization", name: "Sabda Academy", url: absoluteUrl("/") },
          url: absoluteUrl(`/program/${meta.slug}`),
        }} />
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
