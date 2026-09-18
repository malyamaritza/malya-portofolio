"use client";

import { useState, useEffect } from 'react';
import projectsDataRaw from '../data/projects.json';
import { ProjectCategory, ProjectTab } from '../types';
import InteractiveDossierViewer from './InteractiveDossierViewer';

interface ArchiveBooksSectionProps {
    selectedCategory: 'catA' | 'catB' | 'catC';
    selectedTabId: string;
    onSelectCategory: (catKey: 'catA' | 'catB' | 'catC') => void;
    onSelectTab: (tabId: string) => void;
}

const projectsData = projectsDataRaw as Record<'catA' | 'catB' | 'catC', ProjectCategory>;

export default function ArchiveBooksSection({
    selectedCategory,
    selectedTabId,
    onSelectCategory,
    onSelectTab,
}: ArchiveBooksSectionProps) {
    const currentCategory = projectsData[selectedCategory] || projectsData.catA;

    // Find active tab
    const activeTab: ProjectTab =
        currentCategory.tabs.find((t) => t.id === selectedTabId) || currentCategory.tabs[0];

    return (
        <section id="projects-archive" className="scroll-mt-6 pt-4">
            {/* Section Title with Scrapbook Label */}
            <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-block bg-garden-sage text-garden-cream font-mono text-xs font-bold uppercase px-3 py-1 rounded-md shadow-sm mb-2">
                    Interactive Dossier Series
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-garden-dark">
                    The Landscape Archive Books
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
                    Select a physical category binder below to inspect full requirements analysis, prototypes, and technical architectures.
                </p>
            </div>

            {/* The Three Archive Book Covers (Pickers) */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {/* Category A Cover */}
                <button
                    type="button"
                    onClick={() => onSelectCategory('catA')}
                    className={`text-left bg-[#5B7553] text-garden-cream border-2 border-garden-dark rounded-xl p-5 shadow-scrapbook relative overflow-hidden group cursor-pointer transition-all duration-200 ${selectedCategory === 'catA' ? 'ring-4 ring-garden-sage scale-[1.02]' : 'hover:-translate-y-1'
                        }`}
                >
                    {/* Spine Decoration */}
                    <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-[#455c3e] border-r border-garden-cream/20"></div>
                    <div className="pl-3">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono tracking-widest uppercase bg-[#455c3e] px-2 py-0.5 rounded text-garden-pastel font-bold">
                                {projectsData.catA.volumeLabel}
                            </span>
                            <span className="text-xl">🌿</span>
                        </div>
                        <h3 className="mt-4 text-base sm:text-lg font-bold leading-snug">
                            {projectsData.catA.title}
                        </h3>
                        <p className="mt-1 text-xs text-garden-pastel/90 font-sans">
                            {projectsData.catA.subtitle}
                        </p>
                        <div className="mt-4 pt-3 border-t border-garden-moss/40 flex items-center justify-between text-[11px] font-mono">
                            <span>{projectsData.catA.countLabel}</span>
                            <span className="font-bold underline group-hover:translate-x-1 transition-transform inline-block">
                                Open Dossier →
                            </span>
                        </div>
                    </div>
                </button>

                {/* Category B Cover */}
                <button
                    type="button"
                    onClick={() => onSelectCategory('catB')}
                    className={`text-left bg-[#94B4C1] text-slate-900 border-2 border-garden-dark rounded-xl p-5 shadow-scrapbook relative overflow-hidden group cursor-pointer transition-all duration-200 ${selectedCategory === 'catB' ? 'ring-4 ring-garden-pond scale-[1.02]' : 'hover:-translate-y-1'
                        }`}
                >
                    {/* Spine Decoration */}
                    <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-[#7b9da9] border-r border-slate-900/20"></div>
                    <div className="pl-3">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono tracking-widest uppercase bg-[#7b9da9] px-2 py-0.5 rounded text-white font-bold">
                                {projectsData.catB.volumeLabel}
                            </span>
                            <span className="text-xl">💻</span>
                        </div>
                        <h3 className="mt-4 text-base sm:text-lg font-bold leading-snug">
                            {projectsData.catB.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-800 font-sans">
                            {projectsData.catB.subtitle}
                        </p>
                        <div className="mt-4 pt-3 border-t border-slate-700/30 flex items-center justify-between text-[11px] font-mono">
                            <span>{projectsData.catB.countLabel}</span>
                            <span className="font-bold underline group-hover:translate-x-1 transition-transform inline-block">
                                Open Dossier →
                            </span>
                        </div>
                    </div>
                </button>

                {/* Category C Cover */}
                <button
                    type="button"
                    onClick={() => onSelectCategory('catC')}
                    className={`text-left bg-[#E8A598] text-stone-900 border-2 border-garden-dark rounded-xl p-5 shadow-scrapbook relative overflow-hidden group cursor-pointer transition-all duration-200 ${selectedCategory === 'catC' ? 'ring-4 ring-garden-peach scale-[1.02]' : 'hover:-translate-y-1'
                        }`}
                >
                    {/* Spine Decoration */}
                    <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-[#c8877b] border-r border-stone-900/20"></div>
                    <div className="pl-3">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono tracking-widest uppercase bg-[#c8877b] px-2 py-0.5 rounded text-white font-bold">
                                {projectsData.catC.volumeLabel}
                            </span>
                            <span className="text-xl">🎮</span>
                        </div>
                        <h3 className="mt-4 text-base sm:text-lg font-bold leading-snug">
                            {projectsData.catC.title}
                        </h3>
                        <p className="mt-1 text-xs text-stone-800 font-sans">
                            {projectsData.catC.subtitle}
                        </p>
                        <div className="mt-4 pt-3 border-t border-stone-700/20 flex items-center justify-between text-[11px] font-mono">
                            <span>{projectsData.catC.countLabel}</span>
                            <span className="font-bold underline group-hover:translate-x-1 transition-transform inline-block">
                                Open Dossier →
                            </span>
                        </div>
                    </div>
                </button>
            </div>

            {/* The Open Landscape Binder Container */}
            <div className="max-w-5xl mx-auto">
                {/* Bookmark Tabs Container */}
                <div className="flex flex-wrap gap-2 px-6 relative z-10 -mb-[2px]">
                    {currentCategory.tabs.map((tab) => {
                        const isActive = tab.id === activeTab.id;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => onSelectTab(tab.id)}
                                className={`px-4 py-2 rounded-t-xl text-xs sm:text-sm border-2 border-garden-dark font-sans tracking-wide cursor-pointer transition-all ${tab.tabColor
                                    } ${isActive
                                        ? '-translate-y-1.5 font-bold shadow-md border-b-0'
                                        : 'opacity-85 hover:opacity-100 hover:-translate-y-0.5'
                                    }`}
                            >
                                {tab.tabName}
                            </button>
                        );
                    })}
                </div>

                {/* Physical Binder Body */}
                <div className="bg-[#FFFDF9] border-2 border-garden-dark rounded-2xl p-5 sm:p-8 shadow-scrapbook-lg relative overflow-hidden">
                    {/* Spiral / Binder Ring Simulation on Left Edge */}
                    <div className="hidden sm:flex flex-col justify-between absolute left-3 top-8 bottom-8 w-4 pointer-events-none select-none z-20">
                        {[1, 2, 3, 4, 5, 6].map((ring) => (
                            <div
                                key={ring}
                                className="w-3.5 h-3.5 rounded-full bg-stone-300 border border-stone-500 shadow-inner"
                            />
                        ))}
                    </div>

                    {/* Internal Content Paper */}
                    <div className="sm:pl-6 space-y-6">
                        {/* Header Dossier Meta */}
                        <div className="border-b-2 border-garden-sand pb-4">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-garden-sand border border-garden-sage/30 text-garden-sage font-bold tracking-wider">
                                    {activeTab.category}
                                </span>
                                <span className="text-xs font-mono text-stone-500 font-semibold">
                                    Artifact Dossier #{currentCategory.tabs.findIndex((t) => t.id === activeTab.id) + 1}
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-garden-dark mt-2 leading-tight">
                                {activeTab.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                                {activeTab.overview}
                            </p>
                        </div>

                        {/* Two-Column Layout for Technical Breakdown */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            {/* Left: Deliverables & Specs */}
                            <div className="lg:col-span-7 space-y-4">
                                <div>
                                    <h4 className="text-xs font-mono uppercase font-bold text-garden-dark tracking-wide mb-2 flex items-center gap-1.5">
                                        <span>📋</span> Key Architectural Deliverables
                                    </h4>
                                    <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                                        {activeTab.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-garden-sage font-bold">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <h4 className="text-xs font-mono uppercase font-bold text-garden-dark tracking-wide mb-2 flex items-center gap-1.5">
                                        <span>🛠️</span> Technologies &amp; Methods Deployed
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeTab.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-garden-cream border border-garden-sage/50 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-garden-dark shadow-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-garden-pastel/40 border border-garden-moss/40 rounded-xl p-3 text-xs text-garden-dark leading-relaxed">
                                    <span className="font-bold">System Impact:</span> {activeTab.metrics}
                                </div>
                            </div>

                            {/* Right: Interactive Visual Mock / Architecture Schema */}
                            <div className="lg:col-span-5 space-y-3">
                                <h4 className="text-xs font-mono uppercase font-bold text-garden-dark tracking-wide flex items-center gap-1.5">
                                    <span>🔍</span> {activeTab.interactiveDemoTitle}
                                </h4>
                                <InteractiveDossierViewer tab={activeTab} />
                            </div>
                        </div>

                        {/* Documentation Status Banner */}
                        <div className="mt-8 pt-4 border-t-2 border-dashed border-garden-sand flex items-center justify-between text-[11px] text-stone-500 font-mono">
                            <div className="flex items-center gap-1.5">
                                <span className="text-garden-sage text-sm">📌</span>
                                <span>
                                    Catatan: Modul SI Damakara, Clevago, dan GOCAMP sedang dalam tahap finalisasi dokumentasi visual akhir.
                                </span>
                            </div>
                            <span className="hidden md:inline text-garden-moss font-bold">
                                Confidential Academic Portfolio
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
