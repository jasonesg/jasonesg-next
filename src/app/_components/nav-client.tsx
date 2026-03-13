"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function NavClient() {
    const [timeString, setTimeString] = useState("00:00:00 AM");
    const [themeIcon, setThemeIcon] = useState("🫩");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 1. Clock Functionality
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
        updateClock(); // Set immediately on load
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // 2. Auto-Theming (Tailwind 'dark' class)
    useEffect(() => {
        const htmlElement = document.documentElement;
        const currentHour = new Date().getHours();

        // 8 AM is 8, 8 PM is 20. Day time is >= 8 and < 20.
        const timeBasedTheme = currentHour >= 8 && currentHour < 20 ? "light" : "dark";
        const savedTheme = localStorage.getItem("theme");
        const activeTheme = savedTheme ? savedTheme : timeBasedTheme;

        if (activeTheme === "dark") {
            htmlElement.classList.add("dark");
        } else {
            htmlElement.classList.remove("dark");
        }

        setThemeIcon(activeTheme === "dark" ? "🤠" : "🫩");
    }, []);

    // 3. Handle Manual Toggles
    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        const isDark = htmlElement.classList.contains("dark");

        if (isDark) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setThemeIcon("🫩");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setThemeIcon("🤠");
        }
    };

    return (
        <nav className="fixed left-0 top-0 w-full px-[20px] py-[10px] border-b border-border bg-nav z-[100] transition-colors duration-300 lg:block lg:left-[40px] lg:top-[40px] lg:w-[150px] lg:!p-0 lg:border-none lg:bg-transparent md:w-full">
            {/* Mobile Header Row */}
            <div className="flex items-center justify-between lg:hidden w-full">
                <div className="flex items-center gap-[10px]">
                    <button
                        className="text-[14pt] leading-none transition-all duration-200 mt-0 px-[5px]"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                    >
                        {themeIcon}
                    </button>
                    <div className="font-mono text-[10pt] opacity-80" id="clock">{timeString}</div>
                </div>

                <button
                    className="p-2 border border-border rounded text-[14pt] leading-none hover:bg-black/5 dark:hover:bg-white/5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Navigation Links Area */}
            <div className={`${isMenuOpen ? "block" : "hidden"} mt-4 overflow-hidden w-full lg:block lg:mt-0`}>
                <Link href="/" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5">Home</Link>
                <Link href="/about" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5">About me</Link>
                <Link href="/blog" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5">Blog</Link>
                <Link href="/contact" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5">Contact</Link>
            </div>

            {/* Desktop Extras Area (Hidden on mobile via lg:block wrapper) */}
            <div className="hidden mt-0 items-center gap-2.5 lg:mt-[30px] lg:block">
                <div className="font-mono text-[10pt] opacity-80" id="desktop-clock">{timeString}</div>
                <button
                    className="text-[14pt] leading-none transition-all duration-200 mt-0 px-[5px] lg:mt-2.5 lg:px-0"
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                >
                    {themeIcon}
                </button>
            </div>
        </nav>
    );
}
