import Link from "next/link";
import DateFormatter from "./date-formatter";
import { ViewsCounter } from "./views-counter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({
  title,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <section className="mb-[60px]">
      <div className="mb-[10px] text-[1em] opacity-70 flex justify-between items-center w-full">
        <DateFormatter dateString={date} />
        <ViewsCounter slug={slug} noIncrement={true} />
      </div>
      <h3 className="mb-[15px] text-[1.5em] font-bold leading-tight">
        <Link href={`/posts/${slug}`} className="text-link hover:underline">
          {title}
        </Link>
      </h3>
      <p className="leading-relaxed mb-[20px] opacity-90">{excerpt}</p>
    </section>
  );
}
