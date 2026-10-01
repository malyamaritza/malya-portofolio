"use client";

import profileDataRaw from '../data/profile.json';
import { ProfileData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import RevealOnScroll from './RevealOnScroll';
import profilePhotoSrc from '../assets/profile_photo.jpg';

const profileData = profileDataRaw as ProfileData;

interface HeroSectionProps {
    onSelectHighlight?: (category: 'catA' | 'catB' | 'catC', tabId: string) => void;
    onOpenResumeModal: () => void;
}

export default function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
    const { language, t } = useLanguage();

    const isId = language === 'id';

    return (
        <section id="hero" className="scroll-mt-24 sm:scroll-mt-28 space-y-6 sm:space-y-8">
            {/* Botanical Washi Tape Accent on Top of Profile Card */}
            <RevealOnScroll delay={50} duration={600}>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute -top-2.5 sm:-top-3 left-4 sm:left-8 w-20 sm:w-28 h-5 sm:h-6 washi-tape-green -rotate-3 z-10 rounded-sm border-dashed border border-garden-moss/40 pointer-events-none hidden xs:block"></div>
                    <div className="absolute -top-2.5 sm:-top-3 right-4 sm:right-8 w-18 sm:w-24 h-5 sm:h-6 washi-tape-peach rotate-2 z-10 rounded-sm border-dashed border border-garden-peach/50 pointer-events-none hidden xs:block"></div>

                    <div className="bg-white border-2 border-garden-sage rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-scrapbook relative">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
                            {/* Avatar Profile / Illustrated Badge */}
                            <div className="md:col-span-4 flex flex-col items-center text-center">
                                <div className="relative group">
                                    <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-48 sm:h-48 rounded-full border-4 border-dashed border-garden-moss bg-garden-pastel/40 p-1.5 sm:p-2 flex items-center justify-center overflow-hidden shadow-inner">
                                        {/* Botanical / Cat Garden Illustration Avatar */}
                                        <img
                                            src={typeof profilePhotoSrc === 'string' ? profilePhotoSrc : profilePhotoSrc.src}
                                            alt={profileData.shortName}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    {/* Status Pin */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-garden-dark text-garden-cream text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-0.5 rounded-full border border-garden-cream shadow whitespace-nowrap">
                                        {profileData.campusBadge}
                                    </div>
                                </div>

                                <div className="mt-3.5 sm:mt-4 font-mono text-[11px] sm:text-xs text-garden-sage flex items-center gap-1">
                                    <span>📍</span>
                                    <span>{profileData.location}</span>
                                </div>
                            </div>

                            {/* Main Biography Content */}
                            <div className="md:col-span-8 space-y-2.5 sm:space-y-3">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-garden-dark leading-tight">
                                    {profileData.name}
                                </h1>

                                <p className="text-xs sm:text-sm md:text-base text-garden-moss font-semibold leading-relaxed">
                                    {t.roleHeadline}
                                </p>

                                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                                    {t.bioText}
                                </p>

                                {/* Action CTAs */}
                                <div className="pt-2 sm:pt-3 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
                                    <a
                                        href="#projects-archive"
                                        className="inline-flex items-center justify-center gap-2 bg-garden-sage hover:bg-garden-moss text-garden-cream font-bold px-4 py-2.5 rounded-xl border border-garden-dark shadow-sm transition transform hover:-translate-y-0.5 text-xs sm:text-sm cursor-pointer"
                                    >
                                        <span>{t.exploreArchiveBtn}</span>
                                        <span>📖</span>
                                    </a>
                                    <button
                                        type="button"
                                        onClick={onOpenResumeModal}
                                        className="inline-flex items-center justify-center gap-2 bg-garden-sand hover:bg-garden-pastel text-garden-dark font-bold px-4 py-2.5 rounded-xl border border-garden-sage shadow-sm transition transform hover:-translate-y-0.5 text-xs sm:text-sm cursor-pointer"
                                    >
                                        <span>{t.contactResumeBtn}</span>
                                        <span>📄</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Horizontal Education Timeline Tracker */}
            <RevealOnScroll delay={150} duration={650}>
                <div className="max-w-4xl mx-auto px-1">
                    <div className="bg-white border-2 border-garden-sage rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-scrapbook">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5 sm:mb-6 border-b border-garden-sand pb-2.5">
                            <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-garden-dark flex items-center gap-2">
                                <span>🎓</span>
                                <span>{t.educationTitle}</span>
                            </h2>
                            <span className="text-[11px] font-mono text-stone-500">
                                2021 — {isId ? 'Sekarang' : 'Present'}
                            </span>
                        </div>

                        {/* Clean Horizontal Timeline Tracker */}
                        <div className="relative pt-1 pb-2">
                            {/* Horizontal Track Line */}
                            <div className="absolute top-3 left-3 right-3 h-0.5 bg-garden-sand border-t-2 border-garden-sage/30 z-0"></div>

                            <div className="grid grid-cols-2 gap-4 sm:gap-10 relative z-10">
                                {/* Point 1: SMA */}
                                <div className="flex flex-col items-start pr-1 sm:pr-4">
                                    {/* Tracker Node & Period */}
                                    <div className="flex items-center gap-2 mb-2 bg-white pr-2">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-garden-sage bg-[#FAF7EE] flex items-center justify-center shadow-2xs shrink-0">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-garden-sage"></div>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-garden-sage">
                                            {t.highSchoolYear}
                                        </span>
                                    </div>

                                    {/* Point 1 Details */}
                                    <div className="space-y-0.5 pl-0.5 sm:pl-1">
                                        <h3 className="text-sm sm:text-base font-bold text-garden-dark">
                                            {t.highSchoolTitle}
                                        </h3>
                                        <p className="text-xs text-stone-600 font-sans">
                                            {isId ? 'Sekolah Menengah Atas' : 'Senior High School'}
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2: Universitas */}
                                <div className="flex flex-col items-start pl-1 sm:pl-4">
                                    {/* Tracker Node & Period */}
                                    <div className="flex items-center gap-2 mb-2 bg-white pr-2">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#5B7553] bg-[#5B7553] flex items-center justify-center shadow-2xs shrink-0 ring-2 ring-garden-pastel">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FAF7EE]"></div>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-garden-dark">
                                            {t.universityYear}
                                        </span>
                                    </div>

                                    {/* Point 2 Details */}
                                    <div className="space-y-0.5 pl-0.5 sm:pl-1">
                                        <h3 className="text-sm sm:text-base font-bold text-garden-dark">
                                            {t.universityTitle}
                                        </h3>
                                        <p className="text-xs font-semibold text-garden-sage font-sans">
                                            {isId ? 'Jurusan Sistem Informasi' : 'Information Systems'}
                                        </p>
                                        <p className="text-[11px] text-stone-500 font-sans">
                                            {isId ? 'Program Sarjana (S1)' : 'Undergraduate (B.S.)'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
