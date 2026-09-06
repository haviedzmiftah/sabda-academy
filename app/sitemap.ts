import type { MetadataRoute } from "next";
import { getContentSlugs } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/program", "/tentang-kami", "/blog", "/faq", "/kontak", "/daftar-trial"];
  const programRoutes = getContentSlugs("program").map((slug) => `/program/${slug}`);
  const blogRoutes = getContentSlugs("blog").map((slug) => `/blog/${slug}`);

  return [...routes, ...programRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
