import { NavClient } from "../_components/nav-client";
import { SiteFooter } from "../_components/site-footer";
import Link from "next/link";

const pages = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Sitemap() {
    return (
        <>
            <NavClient />
            <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
                <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
                    <header>
                        <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">Sitemap</h1>
                    </header>

                    <main role="main">
                        <div className="pt-[10px] border-t border-border">
                            {pages.map((page) => (
                                <div key={page.href} className="mb-[12px]">
                                    <Link href={page.href} className="text-link hover:underline">
                                        {page.label}
                                    </Link>
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
