"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavClient() {
    const [timeString, setTimeString] = useState("00:00:00 AM");
    const [themeIcon, setThemeIcon] = useState("🫩");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // 0. Auto-close menu on navigation
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

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
        
        // Initial icon sync (the head script handled the classList)
        const isDark = htmlElement.classList.contains("dark");
        setThemeIcon(isDark ? "🤠" : "🫩");

        // Listen for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            // Only auto-change if the user hasn't explicitly set a preference
            if (!localStorage.getItem("theme")) {
                const newTheme = e.matches ? "dark" : "light";
                if (newTheme === "dark") {
                    htmlElement.classList.add("dark");
                } else {
                    htmlElement.classList.remove("dark");
                }
                setThemeIcon(newTheme === "dark" ? "🤠" : "🫩");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
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
                <Link href="/about" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5 text-right lg:text-left">About me</Link>
                <Link href="/blog" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5 text-right lg:text-left">Blog</Link>
                <Link href="/contact" className="block mb-2.5 text-link hover:underline lg:block lg:mb-2.5 text-right lg:text-left">Contact</Link>
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
