import { PostTitle } from "@/app/_components/post-title";
import { parseISO, format } from "date-fns";

type Props = {
  title: string;
  date: string;
  twitter?: string;
};

function timeAgo(dateString: string): string {
  const now = new Date();
  const then = new Date(dateString);
  const diffDays = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor(diffDays / 30);
  if (diffYears > 0) return `${diffYears}y ago`;
  if (diffMonths > 0) return `${diffMonths}mo ago`;
  if (diffDays > 0) return `${diffDays}d ago`;
  return "today";
}

export function PostHeader({ title, date, twitter }: Props) {
  const ago = timeAgo(date);
  const formatted = format(parseISO(date), "MMMM d, yyyy");

  return (
    <header className="mb-[40px]">
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-row items-center justify-between mt-[10px] text-[0.85em] opacity-60 gap-4">
        <span className="whitespace-nowrap flex items-center gap-[6px] flex-wrap">
          {twitter && (
            <>
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                @{twitter}
              </a>
              <span>|</span>
            </>
          )}
          <span className="whitespace-nowrap">{formatted} ({ago})</span>
        </span>
      </div>
    </header>
  );
}
