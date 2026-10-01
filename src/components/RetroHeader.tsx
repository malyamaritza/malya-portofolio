"use client";

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function RetroHeader() {
    const { language, setLanguage, t } = useLanguage();
    const [windowState, setWindowState] = useState<'normal' | 'minimized'>('normal');

    return (
        <header
            id="retro-chrome-header"
            className="bg-[#8FA87B] border-b-2 border-garden-sage p-2 sm:px-4 flex items-center justify-between gap-2 select-none rounded-t-[10px] sm:rounded-t-[14px]"
        >
            {/* Window Control Buttons & Mascot */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                <button
                    type="button"
                    onClick={() => setWindowState(windowState === 'normal' ? 'minimized' : 'normal')}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#E8A598] border border-garden-sage inline-block hover:scale-110 active:scale-95 transition cursor-pointer"
                    title={windowState === 'normal' ? t.minimizeWindow : t.restoreWindow}
                    aria-label={windowState === 'normal' ? t.minimizeWindow : t.restoreWindow}
                />
                <button
                    type="button"
                    onClick={() => {
                        const container = document.getElementById('retro-browser-container');
                        if (container) {
                            container.classList.toggle('max-w-6xl');
                            container.classList.toggle('max-w-7xl');
                        }
                    }}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#E6D48F] border border-garden-sage inline-block hover:scale-110 active:scale-95 transition cursor-pointer"
                    title={t.zoomMode}
                    aria-label={t.zoomMode}
                />
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#A3C49B] border border-garden-sage inline-block hover:scale-110 active:scale-95 transition cursor-pointer"
                    title={t.scrollToTop}
                    aria-label={t.scrollToTop}
                />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-garden-cream pl-1 sm:pl-2 flex items-center gap-1 truncate">
                    <span>🌱</span>
                    <span className="tracking-tight hidden xs:inline">malya.garden/portfolio</span>
                    <span className="tracking-tight xs:hidden">portfolio</span>
                </span>
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-md mx-2 hidden md:flex items-center justify-center">
                <div className="w-full bg-garden-cream border border-garden-sage rounded-full py-1 px-4 text-xs font-mono text-garden-sage flex items-center justify-between shadow-inner">
                    <span className="truncate flex items-center gap-1.5 font-medium">
                        <span className="text-sm">🌸</span>
                        <span>{t.portfolioUrl}</span>
                    </span>
                </div>
            </div>

            {/* Right controls: Language Switcher Toggle (ID / EN) */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                <div
                    role="group"
                    aria-label="Language selection"
                    className="flex items-center bg-garden-cream/95 border border-garden-sage/70 rounded-full p-0.5 shadow-sm text-xs font-mono"
                >
                    <button
                        type="button"
                        onClick={() => setLanguage('id')}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${language === 'id'
                                ? 'bg-[#5B7553] text-[#FAF7EE] shadow-xs'
                                : 'text-garden-dark hover:bg-garden-pastel/60'
                            }`}
                        title="Bahasa Indonesia"
                        aria-pressed={language === 'id'}
                    >
                        <span>🇮🇩</span>
                        <span className="font-semibold">ID</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setLanguage('en')}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${language === 'en'
                                ? 'bg-[#5B7553] text-[#FAF7EE] shadow-xs'
                                : 'text-garden-dark hover:bg-garden-pastel/60'
                            }`}
                        title="English"
                        aria-pressed={language === 'en'}
                    >
                        <span>🇬🇧</span>
                        <span className="font-semibold">EN</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
