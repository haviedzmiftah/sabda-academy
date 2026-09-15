"use client";

import { useState } from "react";
import Link from "next/link";
import type { ContentMeta } from "@/lib/content";

function formatDate(date: string) {
  if (!date) return "";
  try {
    return new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date(`${date}T00:00:00`));
  } catch {
    return date;
  }
}

export function BlogList({ posts, categories }: { posts: ContentMeta[]; categories: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <>
      <nav aria-label="Filter kategori artikel" className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory(null)}
          className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition-colors ${
            !selectedCategory ? "bg-ink text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Semua
        </button>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setSelectedCategory(item)}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              selectedCategory === item ? "bg-ink text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {item}
          </button>
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
                <span>{formatDate(post.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime} baca</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="focus-ring mt-5 inline-block font-bold text-blue-700"
              >
                Baca artikel &rarr;
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <h2 className="font-display text-xl font-bold text-ink">Belum ada artikel di kategori ini.</h2>
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className="focus-ring mt-4 inline-block font-bold text-blue-700"
          >
            Lihat semua artikel &rarr;
          </button>
        </div>
      )}
    </>
  );
}
