import Link from "next/link";
import DateFormatter from "./date-formatter";
import { ViewsCounter } from "./views-counter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <article>
      <div className="mb-[10px] text-[1em] opacity-70 flex justify-between items-center w-full">
        <DateFormatter dateString={date} />
        <ViewsCounter slug={slug} noIncrement={true} />
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
