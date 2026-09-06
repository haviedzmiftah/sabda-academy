import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentType = "blog" | "program" | "faq" | "updates";

export type ContentMeta = {
  title: string;
  slug: string;
  description: string;
  image?: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
};

const contentRoot = path.join(process.cwd(), "content");

function contentDirectory(type: ContentType) {
  return path.join(contentRoot, type);
}

function parseMeta(fileName: string, type: ContentType): ContentMeta {
  const slug = fileName.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(contentDirectory(type), fileName), "utf8");
  const { data } = matter(source);

  return {
    title: String(data.title ?? ""),
    slug: String(data.slug ?? slug),
    description: String(data.description ?? ""),
    image: data.image ? String(data.image) : undefined,
    category: String(data.category ?? type),
    date: String(data.date ?? ""),
    author: String(data.author ?? "Sabda Academy"),
    readingTime: String(data.readingTime ?? "5 menit"),
  };
}

export function getContentSlugs(type: ContentType) {
  return fs
    .readdirSync(contentDirectory(type))
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getContentList(type: ContentType) {
  return getContentSlugs(type)
    .map((slug) => getContentBySlug(type, slug).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getContentCategories(type: ContentType) {
  return [...new Set(getContentList(type).map((content) => content.category))];
}

export function getContentBySlug(type: ContentType, slug: string) {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(contentDirectory(type), fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content not found: ${type}/${slug}`);
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content } = matter(source);
  return { meta: parseMeta(fileName, type), source: content };
}
