import { getAllPosts } from "@/lib/api";
import { HeroPost } from "../_components/hero-post";
import { MoreStories } from "../_components/more-stories";
import { SiteFooter } from "../_components/site-footer";
import { Button } from "@/components/ui/button";
import { NewsletterSubscribe } from "../_components/newsletter-subscribe";
import { LikeButton } from "@/uicapsule/like-button/like-button";

export default function Blog() {
    const allPosts = getAllPosts();
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <>
            <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
                <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
                    <header>
                        <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">Blog</h1>
                        <p className="mb-6 text-[1.1em] opacity-80 leading-relaxed max-w-[500px]">
                            Just some casual thoughts, technical write-ups, and portfolio updates.
                        </p>
                    </header>

                    <main role="main">
                        <div className="pt-[10px] border-t border-border">
                            {heroPost && (
                                <HeroPost
                                    title={heroPost.title}
                                    date={heroPost.date}
                                    slug={heroPost.slug}
                                    excerpt={heroPost.excerpt}
                                />
                            )}
                            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                        </div>
                    </main>

                    <SiteFooter />
                </div>
            </div>
        </>
    );
}
