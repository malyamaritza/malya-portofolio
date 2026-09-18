interface NavigationProps {
    onOpenNextJsGuide: () => void;
}

export default function Navigation({ onOpenNextJsGuide }: NavigationProps) {
    return (
        <nav
            id="main-site-navigation"
            className="bg-garden-sand border-b border-garden-sage/40 px-4 py-2 flex flex-wrap items-center justify-between text-sm font-semibold gap-2"
        >
            <div className="flex items-center gap-1.5 text-garden-dark font-bold tracking-wide">
                <span className="text-lg">🌿</span>
                <span>Malya's Portfolio Dossier</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2.5 text-xs sm:text-sm flex-wrap">
                <a
                    href="#hero"
                    className="px-3 py-1 rounded-lg hover:bg-garden-pastel text-garden-dark transition-all duration-150 font-medium"
                >
                    Home
                </a>
                <a
                    href="#projects-archive"
                    className="px-3 py-1 rounded-lg bg-garden-sage text-garden-cream shadow-sm hover:bg-garden-moss transition-all duration-150 font-bold"
                >
                    Projects Archive
                </a>
                <a
                    href="#experience"
                    className="px-3 py-1 rounded-lg hover:bg-garden-pastel text-garden-dark transition-all duration-150 font-medium"
                >
                    Experience
                </a>
                <a
                    href="#about-contact"
                    className="px-3 py-1 rounded-lg hover:bg-garden-pastel text-garden-dark transition-all duration-150 font-medium"
                >
                    About &amp; Contact
                </a>
                <button
                    type="button"
                    onClick={onOpenNextJsGuide}
                    className="sm:hidden px-2.5 py-1 rounded-lg bg-garden-dark text-garden-cream text-xs font-mono font-bold"
                >
                    Next.js Guide
                </button>
            </div>
        </nav>
    );
}
