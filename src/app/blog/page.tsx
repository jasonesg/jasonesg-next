import { getAllPosts } from "@/lib/api";
import { SiteFooter } from "../_components/site-footer";
import Link from "next/link";
import DateFormatter from "../_components/date-formatter";

export default function Blog() {
    const allPosts = getAllPosts();

    return (
        <>
            <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
                <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
                    <header>
                        <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">Blog</h1>
                        <p className="mb-6 text-[1.1em] opacity-80 leading-relaxed max-w-[500px]">
                            My observations and write-ups about the world around me.
                        </p>
                    </header>

                    <main role="main">
                        <div className="pt-[10px] border-t border-border mt-8 flex flex-col gap-4">
                            {allPosts.map((post) => (
                                <div key={post.slug} className="flex justify-between items-baseline">
                                    <Link href={`/posts/${post.slug}`} className="text-[1.1em] text-link hover:underline truncate mr-4">
                                        {post.title}
                                    </Link>
                                    <div className="text-[0.9em] opacity-60 whitespace-nowrap">
                                        <DateFormatter dateString={post.date} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                    <SiteFooter />
                </div>
            </div>
        </>
    );
}
