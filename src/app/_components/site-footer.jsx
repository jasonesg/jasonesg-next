import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="mt-[40px] pt-5 border-t border-border text-[10pt] opacity-70 flex items-center justify-between">
            <p>&copy; {new Date().getFullYear()}.</p>
            <Link href="/sitemap" className="hover:underline whitespace-nowrap">
                Sitemap
            </Link>
        </footer>
    );
}
