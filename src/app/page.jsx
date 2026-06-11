"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteFooter } from "./_components/site-footer";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/uicapsule/tooltip-grid/tooltip";

export default function Home() {
  const [isSFOpen, setIsSFOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[690px]">
        <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
          <header>
            <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">Hi, i'm @jasonesg</h1>
          </header>

          <main role="main">
            <div className="flex flex-col gap-[30px] my-[30px] lg:flex-row lg:items-start lg:gap-[40px]">
              {/* Photo container */}
              <div className="relative w-[180px] h-[180px] rounded-3xl overflow-hidden cursor-pointer shrink-0 group">
                <Image
                  src="/images/fill-color-1.png"
                  alt="svg photo of Jason"
                  fill
                  className="object-cover"
                  priority
                />
                <Image
                  src="/images/jason-irl.jpg"
                  alt="irl photo of Jason"
                  fill
                  className="object-cover transition-all duration-[400ms] ease-in-out opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-[1.15]"
                />
              </div>

              {/* About section */}
              <div className="body space-y-4 relative">
                <p>
                  I'm a creative director by intuition and a technologist by trade. I'm based in{" "}
                  <Tooltip open={isSFOpen} onOpenChange={setIsSFOpen}>
                    <TooltipTrigger asChild>
                      <span className={`cursor-help font-medium transition-all duration-300 ease-in-out ${isSFOpen ? 'relative z-[25]' : 'text-inherit border-b border-muted-foreground/30'}`}>
                        San Francisco, California.
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
                          <h3 className="text-white font-bold text-lg mb-0.5 tracking-tight opacity-95">Currently in</h3>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Building and exploring in the bay area.
                          </p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </p>
                <p>
                  Pre-chatGPT, I spent most of my time growing up in Los Angeles as a{" "}
                  <a href="https://www.youtube.com/watch?v=Cdy5FhxY34A" target="_blank" rel="noopener" className="text-link hover:underline">
                    photographer
                  </a>{" "}
                  and{" "}
                  <a href="https://collegepreppodcast.com/2017/07/170-wise-budgeting-advice-teenager/" target="_blank" rel="noopener" className="text-link hover:underline">
                    flipping DotA2 skins
                  </a>{" "}
                  to get through university.
                </p>
                <p>
                  Post-college in LA, I landed my first full-time job as a digital marketer for a{" "}
                  <a href="https://ismbags.com/" target="_blank" rel="noopener" className="text-link hover:underline">
                    fashion brand
                  </a>{" "}
                  that scaled to $1.6m at 20 years old.
                </p>
                <p>
                  After all that, I started working for{" "}
                  <a href="https://goat.com/" target="_blank" rel="noopener" className="text-link hover:underline">
                    GOAT
                  </a>{" "}
                  focused on CX. During this tenure, I've also contributed to a{" "}
                  <a href="https://nano.org/en" target="_blank" rel="noopener" className="text-link hover:underline">
                    non-profit cryptocurrency
                  </a>. We later rebranded it to{" "}
                  <a href="https://xno.nano.org/" target="_blank" rel="noopener" className="text-link hover:underline">
                    Ӿ
                  </a>
                  , empowering the foundation's reach and compliance.
                </p>
                <p>
                  From there, the board commissioned me to produce video content that made highly technical concepts digestible for everyday people.
                </p>
                <p>
                  This led me to collaborate with the team at{" "}
                  <a href="https://www.coindesk.com/business/2021/11/17/a16z-leads-31m-funding-round-for-mems-social-media-protocol" target="_blank" rel="noopener" className="text-link hover:underline">
                    Mem
                  </a>{" "}
                  as an IC that focused on video content. We created an in-house production playbook and designed a fully functioning{" "}
                  <a href="https://x.com/jasonesg/status/2016445178035487194?s=46" target="_blank" rel="noopener" className="text-link hover:underline">
                    modular studio
                  </a>.
                </p>
                <p>
                  I owe a lot of my craft to the internet and the people that have also starved with me side-by-side.
                </p>
                <p>
                  My pursuits span the spectrum from web development, video production, brand marketing, AND a good yap sesh in-between.
                </p>
                <p>
                  Continuously in search of like-minded people that are gritty and witty. Building for the undercards and the underdogs.
                </p>

                {/* Targeted Focus Blur Layer */}
                <div
                  className={`absolute -inset-4 z-10 pointer-events-none transition-all duration-300 ease-in-out ${isSFOpen ? 'opacity-100 backdrop-blur-[0.4px] dark:backdrop-blur-[1.5px] bg-transparent' : 'opacity-0 backdrop-blur-none bg-transparent'}`}
                  style={{ willChange: 'opacity, backdrop-filter, background-color' }}
                />
              </div>
            </div>
          </main>

          <SiteFooter />
        </div>
      </div>
    </>
  );
}
