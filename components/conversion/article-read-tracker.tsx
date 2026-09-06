"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ArticleReadTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackEvent("article_view", { slug });
  }, [slug]);

  return null;
}
