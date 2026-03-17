import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { TweetEmbed } from "@/app/_components/tweet-embed";
import { SiteFooter } from "@/app/_components/site-footer";
import { NewsletterSubscribe } from "@/app/_components/newsletter-subscribe";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  // Split the rendered HTML on tweet placeholders: <!--tweet:ID-->
  const parts = content.split(/<!--tweet:(\d+)-->/);

  return (
    <>
      <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
        <div className="pt-[80px] pb-[50px] lg:pt-[80px]">
          <article>
            <PostHeader
              title={post.title}
              date={post.date}
              twitter={post.twitter}
              slug={post.slug}
            />
            {parts.map((part, i) =>
              i % 2 === 0 ? (
                part ? <PostBody key={i} content={part} /> : null
              ) : (
                <TweetEmbed key={i} id={part} />
              )
            )}
            
            {/* Newsletter Subscribe Section */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center">
               <NewsletterSubscribe />
            </div>
          </article>

          <SiteFooter />
        </div>
      </div>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
    openGraph: {
      title,
      ...(post.ogImage?.url ? { images: [post.ogImage.url] } : {}),
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
