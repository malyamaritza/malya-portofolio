"use client";

import profileDataRaw from '../data/profile.json';
import { ProfileData, QuickHighlight } from '../types';

const profileData = profileDataRaw as ProfileData;

interface HeroSectionProps {
    onSelectHighlight: (category: 'catA' | 'catB' | 'catC', tabId: string) => void;
    onOpenResumeModal: () => void;
}

export default function HeroSection({ onSelectHighlight, onOpenResumeModal }: HeroSectionProps) {
    return (
        <section id="hero" className="scroll-mt-6">
            {/* Botanical Washi Tape Accent */}
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute -top-3 left-8 w-28 h-6 washi-tape-green -rotate-3 z-10 rounded-sm border-dashed border border-garden-moss/40 pointer-events-none"></div>
                <div className="absolute -top-3 right-8 w-24 h-6 washi-tape-peach rotate-2 z-10 rounded-sm border-dashed border border-garden-peach/50 pointer-events-none"></div>

                <div className="bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook relative">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Avatar Profile / Illustrated Badge */}
                        <div className="md:col-span-4 flex flex-col items-center text-center">
                            <div className="relative group">
                                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-dashed border-garden-moss bg-garden-pastel/40 p-2 flex items-center justify-center overflow-hidden shadow-inner">
                                    {/* Botanical / Cat Garden Illustration Avatar */}
                                    <div className="w-full h-full rounded-full bg-[#FAF7EE] border border-garden-sage flex flex-col items-center justify-center text-garden-sage p-2 relative shadow-sm">
                                        <span className="text-5xl mb-1 select-none">🐱🌱</span>
                                        <span className="font-hand text-lg text-garden-dark font-bold leading-tight">
                                            {profileData.shortName}
                                        </span>
                                    </div>
                                </div>

                                {/* Status Pin */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-garden-dark text-garden-cream text-[11px] font-mono px-3 py-0.5 rounded-full border border-garden-cream shadow whitespace-nowrap">
                                    {profileData.campusBadge}
                                </div>
                            </div>

                            <div className="mt-4 font-mono text-xs text-garden-sage flex items-center gap-1">
                                <span>📍</span>
                                <span>{profileData.location}</span>
                            </div>
                        </div>

                        {/* Main Biography Content */}
                        <div className="md:col-span-8 space-y-3">
                            <div className="inline-flex items-center gap-2 bg-garden-pastel/60 border border-garden-sage/30 px-3 py-1 rounded-full text-xs font-semibold text-garden-dark">
                                <span className="text-xs">✨</span>
                                <span>{profileData.taglineBadge}</span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-garden-dark">
                                {profileData.name}
                            </h1>

                            <p className="text-sm sm:text-base text-garden-moss font-semibold leading-relaxed">
                                {profileData.roleHeadline}
                            </p>

                            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                                {profileData.bio}
                            </p>

                            {/* Action CTAs */}
                            <div className="pt-3 flex flex-wrap items-center gap-3">
                                <a
                                    href="#projects-archive"
                                    className="inline-flex items-center gap-2 bg-garden-sage hover:bg-garden-moss text-garden-cream font-bold px-4 py-2.5 rounded-xl border border-garden-dark shadow-sm transition transform hover:-translate-y-0.5 text-xs sm:text-sm cursor-pointer"
                                >
                                    <span>Explore Archive Books</span>
                                    <span>📖</span>
                                </a>
                                <button
                                    type="button"
                                    onClick={onOpenResumeModal}
                                    className="inline-flex items-center gap-2 bg-garden-sand hover:bg-garden-pastel text-garden-dark font-bold px-4 py-2.5 rounded-xl border border-garden-sage shadow-sm transition transform hover:-translate-y-0.5 text-xs sm:text-sm cursor-pointer"
                                >
                                    <span>Contact &amp; Resume</span>
                                    <span>📄</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Snapshot Cards (Pinned Highlights) */}
            <div className="max-w-4xl mx-auto mt-6">
                <div className="flex items-center justify-between mb-3 px-1">
                    <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-garden-sage flex items-center gap-1.5">
                        <span>📌</span> Quick Highlights / Pinned Artifacts
                    </h2>
                    <span className="text-xs font-hand text-stone-500">Tap card to jump into deep dossier</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {profileData.highlights.map((item: QuickHighlight) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelectHighlight(item.targetCategory, item.targetTabId)}
                            className="text-left bg-white/90 hover:bg-white border border-garden-sage/60 hover:border-garden-dark rounded-xl p-3.5 shadow-sm hover:shadow-md transition cursor-pointer group"
                        >
                            <div className="flex items-center justify-between text-[11px] font-mono text-garden-sage mb-1.5">
                                <span className={`px-2 py-0.5 rounded text-[10px] ${item.categoryBadgeClass}`}>
                                    {item.category}
                                </span>
                                <span className="text-stone-500 text-[10px]">{item.type}</span>
                            </div>
                            <h3 className="text-sm font-bold text-garden-dark group-hover:text-garden-sage transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-snug">
                                {item.description}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
