"use client";

import { useState } from 'react';
import { ambientPlayer } from '../utils/audio';

interface RetroHeaderProps {
    onOpenNextJsGuide: () => void;
}

export default function RetroHeader({ onOpenNextJsGuide }: RetroHeaderProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [windowState, setWindowState] = useState<'normal' | 'minimized'>('normal');

    const toggleMusic = () => {
        const nextState = ambientPlayer.toggle();
        setIsPlaying(nextState);
    };

    return (
        <header
            id="retro-chrome-header"
            className="bg-[#8FA87B] border-b-2 border-garden-sage p-2.5 sm:px-4 flex flex-wrap items-center justify-between gap-3 select-none"
        >
            {/* Window Control Buttons & Mascot */}
            <div className="flex items-center space-x-2">
                <button
                    type="button"
                    onClick={() => setWindowState(windowState === 'normal' ? 'minimized' : 'normal')}
                    className="w-3.5 h-3.5 rounded-full bg-[#E8A598] border border-garden-sage inline-block hover:scale-110 active:scale-95 transition cursor-pointer"
                    title={windowState === 'normal' ? 'Minimalkan Window' : 'Pulihkan Window'}
                    aria-label="Minimize"
                />
                <button
                    type="button"
                    onClick={() => alert('Secret Garden Portfolio — Screen Zoom set to 100%')}
                    className="w-3.5 h-3.5 rounded-full bg-[#E6D48F] border border-garden-sage inline-block hover:scale-110 active:scale-95 transition cursor-pointer"
                    title="Zoom Mode"
                    aria-label="Zoom"
                />
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-3.5 h-3.5 rounded-full bg-[#A3C49B] border border-garden-sage inline-block hover:scale-110 active:scale-95 transition cursor-pointer"
                    title="Scroll to Top"
                    aria-label="Back to Top"
                />
                <span className="text-xs font-mono font-bold text-garden-cream pl-2 flex items-center gap-1.5">
                    <span>🌱</span>
                    <span className="tracking-tight">malya.garden/portfolio</span>
                </span>
            </div>

            {/* Address Bar & Audio Indicator */}
            <div className="flex-1 max-w-md mx-2 hidden md:flex items-center justify-center">
                <div className="w-full bg-garden-cream border border-garden-sage rounded-full py-1 px-4 text-xs font-mono text-garden-sage flex items-center justify-between shadow-inner">
                    <span className="truncate flex items-center gap-1.5 font-medium">
                        <span className="text-sm">🌸</span>
                        <span>https://satu.ac.id/students/malya-maritza</span>
                    </span>
                    <span className="text-[10px] bg-garden-pastel text-garden-dark px-2 py-0.5 rounded-full font-sans font-bold">
                        2026 Ready
                    </span>
                </div>
            </div>

            {/* Right controls: Next.js Guide pill & BGM Audio Widget */}
            <div className="flex items-center space-x-2">
                <button
                    type="button"
                    onClick={onOpenNextJsGuide}
                    className="hidden sm:inline-flex items-center gap-1.5 bg-[#455c3e] hover:bg-[#384b32] text-garden-cream border border-garden-pastel/40 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition shadow-sm cursor-pointer"
                    title="Lihat Komponen & Panduan Setup Next.js + Tailwind"
                >
                    <span>⚡</span>
                    <span>Next.js Guide</span>
                </button>

                <div className="flex items-center space-x-2 bg-garden-cream/95 border border-garden-sage/50 rounded-full px-3 py-1 text-xs text-garden-dark font-sans shadow-sm">
                    <span className={`text-xs ${isPlaying ? 'animate-bounce' : ''}`}>🎵</span>
                    <span className="truncate max-w-[130px] sm:max-w-none text-[11px] font-medium text-garden-dark">
                        One Summer's Day — Joe Hisaishi
                    </span>
                    <button
                        type="button"
                        onClick={toggleMusic}
                        className={`text-[11px] font-bold underline ml-1 cursor-pointer transition ${isPlaying ? 'text-garden-sage font-extrabold' : 'text-stone-500 hover:text-garden-dark'
                            }`}
                    >
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
            </div>
        </header>
    );
}
