import { NavClient } from "../_components/nav-client";
import { SiteFooter } from "../_components/site-footer";

export default function Inspo() {
    return (
        <>
            <NavClient />
            <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
                <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
                    <header>
                        <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">Inspo</h1>
                    </header>

                    <main role="main">
                        <div className="space-y-6">
                            <p className="opacity-80">
                                This is a living and breathing list of stuff on the internet that I admire.
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-[1.2em] font-bold">Sites</h3>
                                <ul className="list-disc list-inside space-y-2 lg:list-outside">
                                    <li>
                                        <a
                                            href="https://ssi.inc/"
                                            target="_blank"
                                            rel="noopener"
                                            className="text-link hover:underline"
                                        >
                                            ssi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rh-ude.com/"
                                            target="_blank"
                                            rel="noopener"
                                            className="text-link hover:underline"
                                        >
                                            rhude
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://sandwich.co/"
                                            target="_blank"
                                            rel="noopener"
                                            className="text-link hover:underline"
                                        >
                                            sandwich
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://idrinkvybes.com/"
                                            target="_blank"
                                            rel="noopener"
                                            className="text-link hover:underline"
                                        >
                                            idrinkvybes
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://abhi.nyc/living-in-fear/"
                                            target="_blank"
                                            rel="noopener"
                                            className="text-link hover:underline"
                                        >
                                            "Living in fear."
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </main>

                    <SiteFooter />
                </div>
            </div>
        </>
    );
}
