import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  views?: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  views,
  excerpt,
  slug,
}: Props) {
  return (
    <article>
      <div className="mb-[10px] text-[1em] opacity-70">
        <DateFormatter dateString={date} views={views} />
      </div>
      <h3 className="text-[1.25em] font-bold mb-[10px] leading-snug">
        <Link href={`/posts/${slug}`} className="text-link hover:underline">
          {title}
        </Link>
      </h3>
      <p className="leading-relaxed opacity-90">{excerpt}</p>
    </article>
  );
}
