import { SiteFooter } from "../_components/site-footer";

export default function Contact() {
    return (
        <>
            <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
                <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
                    <header>
                        <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">Contact me</h1>
                    </header>

                    <main role="main">
                        <div className="space-y-4">
                            <p>
                                For other queries please email me directly @{" "}
                                <a href="mailto:jason@taskboard.org" className="text-link hover:underline">
                                    jason@taskboard.org
                                </a>
                            </p>

                            <div className="socials opacity-80" aria-label="Social links">
                                Check out my{" "}
                                <a
                                    href="https://twitter.com/jasonesg"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-link hover:underline mr-[10px]"
                                >
                                    twtr
                                </a>
                                <a
                                    href="https://instagram.com/jasonesg/"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-link hover:underline mr-[10px]"
                                >
                                    insta
                                </a>
                                <a
                                    href="https://tiktok.com/@jasonesg"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-link hover:underline mr-[10px]"
                                >
                                    tiktok
                                </a>
                            </div>
                        </div>
                    </main>

                    <SiteFooter />
                </div>
            </div>
        </>
    );
}
