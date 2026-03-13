import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="mt-[40px] pt-[40px] border-t border-border">
      <h2 className="mb-[30px] text-[1.5em] font-bold tracking-tight">
        Older Stories
      </h2>
      <div className="flex flex-col gap-[40px]">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
