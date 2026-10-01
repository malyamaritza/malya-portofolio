import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer
            id="site-footer"
            className="bg-garden-sand border-t border-garden-sage/40 py-4 px-6 text-center text-xs font-mono text-garden-sage select-none rounded-b-[10px] sm:rounded-b-[14px]"
        >
            <p className="flex items-center justify-center gap-1.5 flex-wrap">
                <span>🍵</span>
                <span>( {t.footerText} )</span>
                <span>🌱</span>
            </p>
        </footer>
    );
}
