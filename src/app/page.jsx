import Image from "next/image";
import { NavClient } from "./_components/nav-client";
import { SiteFooter } from "./_components/site-footer";

export default function Home() {
  return (
    <>
      <NavClient />

      {/* Main content wrapping: padding-top accounts for mobile fixed nav, lg:padding removes it for desktop side nav. */}
      <div className="w-full max-w-full px-[20px] mx-auto transition-colors duration-300 lg:max-w-[700px] lg:pl-[50px] lg:pr-0">
        <div className="pt-[80px] pb-[50px] lg:pt-[40px]">
          <header>
            <h1 className="text-[2em] font-bold tracking-tight mb-[30px] leading-[1.2]">Howdy, i'm @jasonesg!</h1>
          </header>

          <main role="main">
            {/* Photo container */}
            <div className="relative w-[180px] h-[180px] rounded-3xl overflow-hidden cursor-pointer my-[30px] group">
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
          </main>

          <SiteFooter />
        </div>
      </div>
    </>
  );
}
