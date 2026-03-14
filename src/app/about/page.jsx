"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiteFooter } from "../_components/site-footer";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/uicapsule/tooltip-grid/tooltip";

export default function About() {
    const [isSFOpen, setIsSFOpen] = useState(false);

    return (
        <>
            <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
                <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
                    <header>
                        <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">So.. about me.</h1>
                    </header>

                    <main role="main">
                        <div className="body space-y-4 relative">
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
                                in Los Angeles, pre-pandemic. Now crashing in{" "}
                                <Tooltip open={isSFOpen} onOpenChange={setIsSFOpen}>
                                    <TooltipTrigger asChild>
                                        <span className={`cursor-help font-medium transition-all duration-300 ease-in-out ${isSFOpen ? 'relative z-[25]' : 'text-inherit border-b border-muted-foreground/30'}`}>
                                            San Francisco.
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent 
                                        type="block" 
                                        style={{ position: 'fixed', top: '15%', left: '75%', transform: 'none' }}
                                        className="p-0 overflow-hidden border-none bg-transparent z-[25]"
                                    >
                                        <div className="relative w-[320px] h-[200px] rounded-lg overflow-hidden bg-slate-900/40 border border-white/5 shadow-none backdrop-blur-sm">
                                            <img 
                                                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" 
                                                alt="San Francisco" 
                                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-5 w-full">
                                                <h3 className="text-white font-bold text-lg mb-0.5 tracking-tight opacity-95">Current Base</h3>
                                                <p className="text-white/70 text-sm leading-relaxed">
                                                    Building and exploring in the Fog City.
                                                </p>
                                            </div>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
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

                            {/* Targeted Focus Blur Layer */}
                            <div 
                                className={`absolute -inset-4 bg-transparent z-10 pointer-events-none transition-[opacity,backdrop-filter] duration-300 ease-in-out ${isSFOpen ? 'opacity-100 backdrop-blur-[0.8px]' : 'opacity-0 backdrop-blur-none'}`}
                                style={{ willChange: 'opacity, backdrop-filter' }}
                            />
                        </div>
                    </main>

                    <SiteFooter />
                </div>
            </div>
        </>
    );
}
