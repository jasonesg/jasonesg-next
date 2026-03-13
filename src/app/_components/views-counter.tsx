"use client";

import { useEffect, useState } from "react";
import { useViews } from "./views-provider";

interface Props {
  slug: string;
  noIncrement?: boolean;
}

export function ViewsCounter({ slug, noIncrement = false }: Props) {
  const contextViews = useViews();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // If we have views in context, use them
    if (contextViews[slug] !== undefined) {
      setViews(contextViews[slug]);
      return;
    }

    // 1. Fetch current views if not in context
    fetch(`/api/views/${slug}`)
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => {});

    // 2. Increment views (only in production)
    if (process.env.NODE_ENV === "production" && !noIncrement) {
      fetch(`/api/views/${slug}`, { method: "POST" });
    }
  }, [slug, noIncrement, contextViews]);

  if (views === null) {
    return <span className="opacity-0">--- views</span>;
  }

  return <span>{views.toLocaleString()} views</span>;
}
