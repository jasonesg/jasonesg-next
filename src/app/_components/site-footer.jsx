import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="mt-[40px] pt-2 border-t border-border text-[10pt] opacity-70 flex items-center justify-between">
            <Link href="/sitemap" className="hover:underline whitespace-nowrap">
                Sitemap
            </Link>
            <a href="https://instagram.com/jasonesg/" target="_blank" rel="noopener" className="hover:underline">
                Jason Esguerra
            </a>
        </footer>
    );
}
