"use client";

import { useState } from 'react';
import projectsDataRaw from '../data/projects.json';
import { ProjectCategory, ProjectTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import RevealOnScroll from './RevealOnScroll';
import { resolveImage } from '../lib/imageMap';

interface ArchiveBooksSectionProps {
    selectedCategory: 'catA' | 'catB' | 'catC';
    selectedTabId: string;
    onSelectCategory: (catKey: 'catA' | 'catB' | 'catC') => void;
    onSelectTab: (tabId: string) => void;
    onSelectProjectDetail?: (project: ProjectTab, category: ProjectCategory) => void;
}

const projectsData = projectsDataRaw as Record<'catA' | 'catB' | 'catC', ProjectCategory>;

export default function ArchiveBooksSection({
    selectedCategory,
    onSelectCategory,
    onSelectProjectDetail,
}: ArchiveBooksSectionProps) {
    const { t, language } = useLanguage();
    const isId = language === 'id';
    const currentCategory = projectsData[selectedCategory] || projectsData.catA;

    // Track image load errors per project card
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    const handleImageError = (id: string) => {
        setImageErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <section id="projects-archive" className="scroll-mt-24 sm:scroll-mt-28 pt-4 sm:pt-6">
            {/* Section Title with Scrapbook Label */}
            <RevealOnScroll delay={50} duration={600}>
                <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 px-2">
                    <div className="inline-block bg-garden-sage text-garden-cream font-mono text-[11px] sm:text-xs font-bold uppercase px-3 py-1 rounded-md shadow-sm mb-2">
                        {t.dossierBadge}
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-garden-dark">
                        {t.archiveTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans leading-relaxed">
                        {t.archiveSubtitle}
                    </p>
                </div>
            </RevealOnScroll>

            {/* The Three Compact Archive Book Folders */}
            <RevealOnScroll delay={100} duration={650}>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 mb-4 sm:mb-6 pt-1 px-1">
                    {(['catA', 'catB', 'catC'] as const).map((catKey) => {
                        const cat = projectsData[catKey];
                        const isSelected = selectedCategory === catKey;

                        return (
                            <button
                                key={catKey}
                                type="button"
                                onClick={() => onSelectCategory(catKey)}
                                className={`text-left rounded-xl p-3 border-2 border-garden-dark shadow-scrapbook relative overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between ${catKey === 'catA'
                                        ? 'bg-[#5B7553] text-[#FAF7EE]'
                                        : catKey === 'catB'
                                            ? 'bg-[#94B4C1] text-slate-900'
                                            : 'bg-[#E8A598] text-stone-900'
                                    } ${isSelected
                                        ? 'ring-4 ring-garden-sage scale-[1.01] -translate-y-0.5 shadow-md'
                                        : 'opacity-85 hover:opacity-100 hover:-translate-y-0.5'
                                    }`}
                            >
                                {/* Spine Accent Strip */}
                                <div
                                    className={`absolute left-0 top-0 bottom-0 w-2.5 ${catKey === 'catA'
                                            ? 'bg-[#455c3e]'
                                            : catKey === 'catB'
                                                ? 'bg-[#7b9da9]'
                                                : 'bg-[#c8877b]'
                                        }`}
                                />

                                <div className="pl-2.5">
                                    {/* Archive Vol & Status Indicator */}
                                    <div className="flex items-center justify-between gap-1 mb-1">
                                        <span
                                            className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded font-bold ${catKey === 'catA'
                                                    ? 'bg-[#455c3e] text-garden-pastel'
                                                    : catKey === 'catB'
                                                        ? 'bg-[#7b9da9] text-white'
                                                        : 'bg-[#c8877b] text-white'
                                                }`}
                                        >
                                            {cat.volumeLabel}
                                        </span>
                                        <span className="text-xs font-mono font-bold">
                                            {isSelected ? '●' : '○'}
                                        </span>
                                    </div>

                                    {/* Nama Folder */}
                                    <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-1">
                                        {cat.title}
                                    </h3>

                                    {/* Jumlah Projek */}
                                    <div className="mt-1.5 pt-1 border-t border-black/10 flex items-center justify-between text-[11px] font-mono">
                                        <span>{cat.countLabel}</span>
                                        <span className="text-[10px] font-bold">
                                            {isSelected ? (isId ? 'Terbuka' : 'Active') : (isId ? 'Pilih' : 'Select')}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </RevealOnScroll>

            {/* Selected Folder Header Status Banner */}
            <RevealOnScroll delay={150} duration={650}>
                <div className="max-w-5xl mx-auto px-1 mb-4 sm:mb-5 flex items-center justify-between border-b border-garden-sand pb-2.5">
                    <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl">📂</span>
                        <div>
                            <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-garden-dark">
                                {currentCategory.volumeLabel} : {currentCategory.title}
                            </h3>
                        </div>
                    </div>
                    <span className="text-[11px] font-mono text-garden-sage font-bold bg-[#FAF7EE] border border-garden-sage/30 px-2.5 py-0.5 rounded-full shadow-2xs">
                        {currentCategory.tabs.length} {isId ? 'Projek Tersedia' : 'Projects'}
                    </span>
                </div>
            </RevealOnScroll>

            {/* 2-Grid Responsive Project Cards Layout (Layout 2 Kisi) */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-1 items-stretch">
                {currentCategory.tabs.map((project, idx) => {
                    // Identify the primary prototype or live website link
                    const prototypeLink =
                        project.projectLinks?.find((l) => l.type === 'figma' || l.type === 'live' || l.isPrimary) ||
                        project.projectLinks?.[0];

                    return (
                        <RevealOnScroll
                            key={project.id}
                            delay={(idx % 2) * 100 + 50}
                            duration={650}
                            className="h-full flex flex-col"
                        >
                            <div
                                onClick={() => onSelectProjectDetail?.(project, currentCategory)}
                                className="bg-white border-2 border-garden-sage rounded-2xl p-4 sm:p-5 shadow-scrapbook hover:shadow-scrapbook-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group/card relative cursor-pointer h-full"
                            >
                                {/* Card Top: Thumbnail, Title, Description, and Impact */}
                                <div className="flex flex-col">
                                    {/* 1. Thumbnail Specimen Frame */}
                                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-garden-sand/40 border border-garden-sage/30 flex items-center justify-center mb-3.5 group/img">
                                        {project.thumbnail && !imageErrors[project.id] ? (
                                            <img
                                                src={resolveImage(project.thumbnail)}
                                                alt={project.thumbnailAlt || project.title}
                                                onError={() => handleImageError(project.id)}
                                                className="w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-105"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center p-4 text-center">
                                                <span className="text-3xl mb-1">🌿</span>
                                                <span className="text-xs font-mono font-bold text-garden-sage truncate max-w-full">
                                                    {project.title}
                                                </span>
                                                <span className="text-[10px] text-stone-500 mt-0.5">
                                                    Pratinjau tidak tersedia
                                                </span>
                                            </div>
                                        )}

                                        {/* Caption overlay */}
                                        <div className="absolute bottom-2 left-2 right-2 bg-garden-dark/70 backdrop-blur-xs text-garden-cream px-2 py-0.5 rounded-md text-[10px] font-mono flex items-center justify-between opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                                            <span className="truncate pr-1 font-medium">{project.thumbnailAlt || project.title}</span>
                                            <span className="shrink-0 text-garden-pastel/80 text-[9px]">↗ lihat detail</span>
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="mb-1.5">
                                        <span className="inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-garden-sand border border-garden-sage/30 text-garden-sage font-bold tracking-wider truncate max-w-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* 2. Nama Projek */}
                                    <h3 className="text-base sm:text-lg font-bold text-garden-dark group-hover/card:text-garden-sage transition-colors leading-snug min-h-[2.6rem] sm:min-h-[3.25rem]">
                                        {project.title}
                                    </h3>

                                    {/* 3. Deskripsi Singkat — expands on hover */}
                                    <div className="relative mt-2">
                                        <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-[2.75rem] group-hover/card:max-h-72">
                                            <p className="text-xs text-stone-600 leading-relaxed font-sans">
                                                {project.overview}
                                            </p>
                                        </div>
                                        {/* Subtle resting-state fade cue, smoothly vanishes on hover */}
                                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent opacity-100 group-hover/card:opacity-0 transition-opacity duration-300" />
                                    </div>

                                    {/* 4. Impactnya */}
                                    <div className="mt-3 bg-[#FAF7EE] border border-garden-sage/40 rounded-xl p-2.5 sm:p-3 text-xs text-garden-dark leading-relaxed shadow-2xs">
                                        <div className="text-[10px] font-mono font-bold text-garden-sage uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                                            <span>🎯</span>
                                            <span>{t.impactLabel}</span>
                                        </div>
                                        <p className="text-stone-700 font-medium font-sans leading-relaxed text-[11px] sm:text-xs line-clamp-2">
                                            {project.metrics}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Bottom: 5. Link Prototype & 6. View Detail Button */}
                                <div className="mt-auto pt-3 border-t border-garden-sand flex items-center gap-2">
                                    {project.id === 'clevago' ? (
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); onSelectProjectDetail?.(project, currentCategory); }}
                                            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-sans text-xs font-bold bg-[#FAF7EE] hover:bg-[#5B7553] hover:text-[#FAF7EE] text-garden-dark border border-garden-dark hover:border-[#3d5038] shadow-xs transition-all transform active:scale-98 hover:-translate-y-0.5 cursor-pointer text-center group/btn"
                                        >
                                            <span>📑</span>
                                            <span>{t.viewDetailBtn}</span>
                                            <span className="text-xs font-mono transition-transform group-hover/btn:translate-x-0.5">→</span>
                                        </button>
                                    ) : (
                                        <>
                                            {/* View Detail Button */}
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); onSelectProjectDetail?.(project, currentCategory); }}
                                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-sans text-xs font-bold bg-[#FAF7EE] hover:bg-white text-garden-dark border border-garden-dark shadow-xs transition-all transform active:scale-98 hover:-translate-y-0.5 cursor-pointer truncate text-left"
                                            >
                                                <span>📑</span>
                                                <span className="truncate">{t.viewDetailBtn}</span>
                                            </button>

                                            {/* Link Prototype Button */}
                                            {prototypeLink ? (
                                                <a
                                                    href={prototypeLink.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-sans text-xs font-bold bg-[#5B7553] hover:bg-[#4a6344] text-[#FAF7EE] border border-[#3d5038] shadow-xs transition-all transform active:scale-98 hover:-translate-y-0.5 cursor-pointer truncate group/btn text-left"
                                                >
                                                    <span>{prototypeLink.icon || (prototypeLink.type === 'figma' ? '🎨' : '🌐')}</span>
                                                    <span className="truncate">{prototypeLink.label || t.prototypeBtn}</span>
                                                    <span className="text-xs font-mono transition-transform group-hover/btn:translate-x-0.5 shrink-0">↗</span>
                                                </a>
                                            ) : (
                                                <span className="flex-1 text-center py-2 px-2 text-[10px] font-mono text-stone-400 bg-garden-sand/40 rounded-xl border border-dashed border-garden-sage/30 truncate">
                                                    {t.noLinkConfigured}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </RevealOnScroll>
                    );
                })}
            </div>
        </section>
    );
}
