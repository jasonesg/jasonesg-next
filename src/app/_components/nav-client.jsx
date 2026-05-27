"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavClient() {
    const [timeString, setTimeString] = useState("00:00:00 AM");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTimeString(
                now.toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const htmlElement = document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            if (!localStorage.getItem("theme")) {
                const newTheme = e.matches ? "dark" : "light";
                if (newTheme === "dark") {
                    htmlElement.classList.add("dark");
                } else {
                    htmlElement.classList.remove("dark");
                }
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <nav className="fixed left-0 top-0 w-full px-[20px] py-[10px] border-b border-border bg-nav z-[100] transition-colors duration-300 lg:sticky lg:top-[40px] lg:left-0 lg:self-start lg:shrink-0 lg:w-[190px] lg:!p-0 lg:!pl-[40px] lg:border-none lg:bg-transparent lg:block">
            {/* Mobile Header Row */}
            <div className="flex items-center justify-between lg:hidden w-full">
                <div className="flex items-center gap-[10px]">
                    <div className="font-mono text-[10pt] opacity-80" id="clock">{timeString}</div>
                </div>
                <button
                    className="p-2 text-[18pt] leading-none hover:bg-black/5 dark:hover:bg-white/5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Navigation Links Area */}
            <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-end mt-4 overflow-hidden w-full lg:block lg:mt-0 lg:items-start`}>
                <Link href="/" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5 text-right lg:text-left">Home</Link>
                <Link href="/contact" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5 text-right lg:text-left">Contact</Link>
            </div>

            {/* Desktop Clock */}
            <div className="hidden mt-0 items-center gap-2.5 lg:mt-[30px] lg:block">
                <div className="font-mono text-[10pt] opacity-80" id="desktop-clock">{timeString}</div>
            </div>
        </nav>
    );
}
