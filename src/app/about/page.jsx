import { NavClient } from "../_components/nav-client";
import { SiteFooter } from "../_components/site-footer";

export default function About() {
    return (
        <>
            <NavClient />
            <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
                <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
                    <header>
                        <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">So.. about me.</h1>
                    </header>

                    <main role="main">
                        <div className="body space-y-4">
                            <p>
                                Was a{" "}
                                <a
                                    href="https://www.youtube.com/watch?v=Cdy5FhxY34A"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-link hover:underline"
                                >
                                    photographer
                                </a>{" "}
                                in Los Angeles, pre-pandemic. Now crashing in San Francisco.
                            </p>
                            <p>
                                Spent most of my time growing up{" "}
                                <a
                                    href="https://collegepreppodcast.com/2017/07/170-wise-budgeting-advice-teenager/"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-link hover:underline"
                                >
                                    flipping video game skins
                                </a>
                                , and.. close enough to{" "}
                                <a
                                    href="https://www.youtube.com/watch?v=nPQdI2OD0IA"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-link hover:underline"
                                >
                                    things that mattered.
                                </a>
                            </p>
                            <p>
                                I make videos that share what{" "}
                                <a
                                    href="https://open.spotify.com/episode/4uDoJSpjXKiFINcUOtUliR"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-link hover:underline"
                                >
                                    i'm learning.
                                </a>
                            </p>
                            <p>
                                Deeply inspired by wonderful people who've made time for me, and a few{" "}
                                <a href="/inspo" className="text-link hover:underline">
                                    things online.
                                </a>
                            </p>
                        </div>
                    </main>

                    <SiteFooter />
                </div>
            </div>
        </>
    );
}
