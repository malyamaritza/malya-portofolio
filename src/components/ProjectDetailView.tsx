"use client";

import { useState } from 'react';
import { ProjectTab, ProjectCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { resolveImage } from '../lib/imageMap';

interface ProjectDetailViewProps {
    project: ProjectTab;
    category: ProjectCategory;
    onBack: () => void;
}

export default function ProjectDetailView({
    project,
    category,
    onBack,
}: ProjectDetailViewProps) {
    const { t, language } = useLanguage();
    const [imageError, setImageError] = useState(false);

    return (
        <div className="space-y-8 paper-texture animate-in fade-in duration-300">
            {/* Top Breadcrumb & Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-dashed border-garden-sage/40">
                <button
                    type="button"
                    onClick={onBack}
                    className="inline-flex items-center gap-2 bg-white hover:bg-garden-cream text-garden-dark border-2 border-garden-sage px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition transform active:scale-95 hover:-translate-y-0.5 cursor-pointer group"
                >
                    <span className="text-garden-sage group-hover:-translate-x-1 transition-transform">←</span>
                    <span>{t.backToHomeBtn}</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-stone-600">
                    <span className="text-stone-400">{language === 'id' ? 'Portofolio' : 'Portfolio'}</span>
                    <span className="text-stone-300">/</span>
                    <span className="text-garden-sage font-bold">{category.volumeLabel}</span>
                    <span className="text-stone-300">/</span>
                    <span className="text-garden-dark font-bold truncate max-w-[180px] sm:max-w-none">
                        {project.tabName.replace('🔖 ', '')}
                    </span>
                </div>
            </div>

            {/* Project Hero Header Card */}
            <div className="bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook relative overflow-hidden">
                {/* Decorative Top Washi Tapes */}
                <div className="absolute -top-3 left-8 w-24 h-5 washi-tape-green -rotate-2 rounded-xs border border-garden-moss/20 pointer-events-none"></div>
                <div className="absolute -top-3 right-8 w-20 h-5 washi-tape-peach rotate-2 rounded-xs border border-garden-peach/30 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Metadata, Title, Overview, Academic Meta, System Impact */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-garden-sand border border-garden-sage/40 text-garden-dark font-mono text-[11px] font-bold px-2.5 py-0.5 rounded uppercase">
                                {category.volumeLabel}
                            </span>
                            <span className="bg-garden-pastel text-garden-dark font-mono text-[11px] font-bold px-2.5 py-0.5 rounded">
                                {project.category}
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-garden-dark leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                            {project.overview}
                        </p>

                        {/* Academic / Team Meta Card (if available) */}
                        {project.academicMeta && (
                            <div className="bg-garden-sand/50 border border-garden-sage/40 rounded-xl p-3.5 text-xs space-y-1 font-mono">
                                <div className="font-bold text-garden-dark flex items-center gap-1.5">
                                    <span>🎓</span>
                                    <span>{project.academicMeta.institution}</span>
                                </div>
                                <div className="text-stone-600 pl-5 text-[11px]">
                                    <strong>Mata Kuliah / Bidang:</strong> {project.academicMeta.course} ({project.academicMeta.year})
                                </div>
                                {project.academicMeta.team && (
                                    <div className="text-stone-600 pl-5 text-[11px]">
                                        <strong>Tim / Author:</strong> {project.academicMeta.team}
                                    </div>
                                )}
                                {project.academicMeta.role && (
                                    <div className="text-garden-sage pl-5 text-[11px] font-bold">
                                        <strong>Peran Malya:</strong> {project.academicMeta.role}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* System Impact Banner */}
                        <div className="bg-garden-pastel/40 border-2 border-garden-sage/60 rounded-xl p-3.5 text-xs text-garden-dark leading-relaxed">
                            <span className="font-bold text-garden-sage uppercase font-mono mr-1">🎯 Dampak &amp; Nilai Tambah:</span>
                            <span>{project.metrics}</span>
                        </div>
                    </div>

                    {/* Right: Project Thumbnail Frame */}
                    <div className="lg:col-span-5 space-y-3 flex flex-col items-center">
                        <div className="bg-garden-cream p-3 border-2 border-garden-sage rounded-2xl shadow-sm relative w-full max-w-[420px] mx-auto">
                            <div className="relative w-full overflow-hidden rounded-xl bg-white border border-garden-sage/30 flex items-center justify-center p-2 min-h-[200px]">
                                {project.thumbnail && !imageError ? (
                                    <img
                                        src={resolveImage(project.thumbnail)}
                                        alt={project.thumbnailAlt || project.title}
                                        onError={() => setImageError(true)}
                                        className="w-[320px] sm:w-[360px] max-w-full h-auto object-contain rounded-lg"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center p-6 text-center">
                                        <span className="text-4xl mb-1">🌿</span>
                                        <span className="text-xs font-mono font-bold text-garden-sage">{project.title}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="text-center text-[11px] font-mono text-stone-500 bg-garden-sand/40 border border-garden-sage/30 py-1.5 px-3 rounded-xl w-full max-w-[420px]">
                            💡 Seluruh tautan prototype &amp; dokumentasi lengkap berada di bagian bawah halaman.
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1: Analisis Permasalahan & Solusi (Problem Statement) */}
            {project.problemStatement && (
                <section className="bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook space-y-4">
                    <div className="flex items-center gap-2 border-b-2 border-dashed border-garden-sand pb-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-garden-dark">
                                Latar Belakang &amp; Permasalahan yang Diselesaikan
                            </h2>
                            <p className="text-xs text-stone-600 font-sans mt-0.5">
                                Identifikasi celah sistematis, proses manual, dan titik friksi operasional sebelumnya.
                            </p>
                        </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans bg-garden-sand/40 p-4 rounded-xl border border-garden-sage/30">
                        {project.problemStatement.summary}
                    </p>

                    {project.problemStatement.painPoints && project.problemStatement.painPoints.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            {project.problemStatement.painPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="bg-garden-cream/60 border border-garden-sage/40 rounded-xl p-4 shadow-xs flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="inline-block text-[10px] font-mono uppercase bg-[#C86D51]/15 text-[#C86D51] font-bold px-2 py-0.5 rounded mb-1.5">
                                            Pain Point #{index + 1}
                                        </span>
                                        <h3 className="text-xs sm:text-sm font-bold text-garden-dark">
                                            {point.title}
                                        </h3>
                                        <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-sans">
                                            {point.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* Section 2: Arsitektur & Rincian Modul Utama (Key Modules) */}
            {project.keyModules && project.keyModules.length > 0 && (
                <section className="bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook space-y-6">
                    <div className="flex items-center gap-2 border-b-2 border-dashed border-garden-sand pb-3">
                        <span className="text-2xl">🧩</span>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-garden-dark">
                                Arsitektur Inti &amp; Rincian Modul Sistem
                            </h2>
                            <p className="text-xs text-stone-600 font-sans mt-0.5">
                                Struktur modular yang dibangun untuk menjamin skalabilitas, akurasi, dan kepuasan pengguna.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {project.keyModules.map((mod, index) => (
                            <div
                                key={index}
                                className="border-2 border-garden-sage/60 rounded-xl p-5 bg-[#FAF7EE] shadow-xs hover:shadow-md transition-shadow relative"
                            >
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-sm font-bold text-garden-dark leading-snug">
                                        {mod.name}
                                    </h3>
                                    {mod.tag && (
                                        <span className="text-[10px] font-mono bg-garden-sand border border-garden-sage/40 text-garden-sage px-2 py-0.5 rounded font-bold shrink-0">
                                            {mod.tag}
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs text-stone-700 leading-relaxed font-sans mb-3">
                                    {mod.description}
                                </p>

                                {mod.highlights && mod.highlights.length > 0 && (
                                    <ul className="text-xs text-stone-700 space-y-1.5 border-t border-garden-sage/30 pt-3">
                                        {mod.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-1.5">
                                                <span className="text-garden-sage font-bold">✓</span>
                                                <span className="leading-snug">{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Section 3: Alur Kerja Bisnis End-to-End (Business Workflow) */}
            {project.businessWorkflow && project.businessWorkflow.length > 0 && (
                <section className="bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook space-y-6">
                    <div className="flex items-center gap-2 border-b-2 border-dashed border-garden-sand pb-3">
                        <span className="text-2xl">🔄</span>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-garden-dark">
                                Alur Proses Bisnis Terintegrasi (End-to-End)
                            </h2>
                            <p className="text-xs text-stone-600 font-sans mt-0.5">
                                Transformasi siklus kerja dari penerimaan instruksi hingga evaluasi eksekutif.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                        {project.businessWorkflow.map((flow) => (
                            <div
                                key={flow.stepNumber}
                                className="bg-garden-cream border border-garden-sage/60 rounded-xl p-3.5 flex flex-col justify-between shadow-xs"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-mono font-bold bg-garden-sage text-garden-cream px-2 py-0.5 rounded">
                                            {flow.stepNumber}
                                        </span>
                                        <span className="text-[10px] font-mono text-garden-sage truncate max-w-[100px] text-right font-medium">
                                            {flow.actor}
                                        </span>
                                    </div>
                                    <h4 className="text-xs font-bold text-garden-dark leading-snug">
                                        {flow.title}
                                    </h4>
                                    <p className="text-[11px] text-stone-600 mt-1.5 leading-relaxed">
                                        {flow.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Section 4: Teknologi & Deliverables */}
            <section className="bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-garden-dark mb-3 flex items-center gap-1.5">
                            <span>🛠️</span> Teknologi &amp; Metode yang Digunakan
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-garden-sand border border-garden-sage/50 text-garden-dark px-3 py-1 rounded-full text-xs font-mono font-medium shadow-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Key Deliverables */}
                    <div>
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-garden-dark mb-3 flex items-center gap-1.5">
                            <span>📋</span> Artefak &amp; Deliverables Utama
                        </h3>
                        <ul className="text-xs text-stone-700 space-y-2">
                            {project.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-garden-sage font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 5: Bagian Dokumentasi & Seluruh Tautan Proyek */}
            <section className="bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook space-y-7">
                {/* Sub-section 5A: Kolom Dokumentasi Proyek (Button Google Drive di Kiri & Label Konten di Kanan) */}
                <div>
                    <div className="flex items-center gap-2 border-b-2 border-dashed border-garden-sand pb-3 mb-4">
                        <span className="text-2xl">📁</span>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-garden-dark">
                                Dokumentasi Proyek &amp; Spesifikasi Sistem
                            </h2>
                            <p className="text-xs text-stone-600 font-sans mt-0.5">
                                Arsip berkas lengkap, diagram pemodelan sistem, dan dokumen spesifikasi terpusat di Google Drive.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#FAF7EE] border-2 border-garden-sage/70 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
                        {/* Button Google Drive di sebelah kiri */}
                        <div className="shrink-0 w-full md:w-auto">
                            <a
                                href={project.gdriveDocumentationUrl || '#'}
                                target={project.gdriveDocumentationUrl ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    if (!project.gdriveDocumentationUrl || project.gdriveDocumentationUrl === '#') {
                                        e.preventDefault();
                                    }
                                }}
                                className="inline-flex items-center justify-center gap-3 bg-[#5B7553] hover:bg-[#4a6344] text-[#FAF7EE] border-2 border-[#3d5038] px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold shadow-scrapbook transition-all transform active:scale-98 hover:-translate-y-0.5 w-full md:w-auto cursor-pointer group"
                            >
                                <span className="text-xl">📂</span>
                                <div className="text-left">
                                    <div className="leading-tight">Akses Google Drive</div>
                                    <div className="text-[10px] font-sans opacity-80 font-normal">Berkas &amp; Laporan Lengkap</div>
                                </div>
                                <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform ml-1">
                                    ↗
                                </span>
                            </a>
                        </div>

                        {/* Label-label konten dokumentasi di sebelah kanan */}
                        <div className="flex-1 border-t md:border-t-0 md:border-l border-garden-sage/30 pt-3 md:pt-0 md:pl-5 w-full">
                            <div className="text-[11px] font-mono font-bold text-stone-600 mb-2 flex items-center gap-1.5">
                                <span>📋</span>
                                <span>Isi Konten &amp; Artefak Dokumentasi:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {(project.documentationLabels && project.documentationLabels.length > 0
                                    ? project.documentationLabels
                                    : ['Dokumen Spesifikasi (SRS)', 'Diagram Pemodelan Sistem', 'Laporan Proyek']
                                ).map((label, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-white border border-garden-sage/60 text-garden-dark px-3 py-1 rounded-lg text-xs font-mono font-medium shadow-2xs flex items-center gap-1.5"
                                    >
                                        <span className="text-garden-sage font-bold text-[11px]">✓</span>
                                        <span>{label}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-section 5B: Kolom Tautan Website / Prototype (Fleksibel: 1 link atau banyak link) */}
                <div className="pt-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-garden-sand pb-3 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🚀</span>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-garden-dark">
                                    Tautan Website &amp; Interactive Prototype
                                </h3>
                                <p className="text-xs text-stone-600 font-sans mt-0.5">
                                    Akses langsung ke prototipe interaktif (Figma), live website demo, atau repositori source code.
                                </p>
                            </div>
                        </div>
                        {project.projectLinks && project.projectLinks.length > 0 && (
                            <span className="text-[11px] font-mono bg-garden-sand text-garden-sage px-2.5 py-1 rounded-md border border-garden-sage/30 font-semibold">
                                {project.projectLinks.length} Tautan Tersedia
                            </span>
                        )}
                    </div>

                    {project.projectLinks && project.projectLinks.length > 0 ? (
                        <div
                            className={`grid gap-3.5 ${project.projectLinks.length === 1
                                ? 'grid-cols-1 sm:grid-cols-2 max-w-xl'
                                : project.projectLinks.length === 2
                                    ? 'grid-cols-1 sm:grid-cols-2'
                                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                }`}
                        >
                            {project.projectLinks.map((link, idx) => {
                                const isPrimary = link.isPrimary ?? idx === 0;
                                const typeLabel =
                                    link.type === 'figma'
                                        ? 'Figma Prototype'
                                        : link.type === 'live'
                                            ? 'Live Website'
                                            : link.type === 'github'
                                                ? 'Source Code'
                                                : link.type === 'docs'
                                                    ? 'Dokumentasi Eksternal'
                                                    : 'Akses Tautan';

                                return (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex flex-col justify-between p-4 rounded-xl border-2 transition-all transform active:scale-98 hover:-translate-y-1 group shadow-xs ${isPrimary
                                            ? 'bg-[#5B7553] hover:bg-[#4a6344] text-[#FAF7EE] border-[#3d5038] shadow-scrapbook'
                                            : 'bg-[#FAF7EE] hover:bg-white text-garden-dark border-garden-sage hover:border-garden-dark'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between gap-2 mb-3">
                                            <span className="text-2xl">
                                                {link.icon ||
                                                    (link.type === 'figma'
                                                        ? '🎨'
                                                        : link.type === 'live'
                                                            ? '🌐'
                                                            : link.type === 'github'
                                                                ? '🐙'
                                                                : '🔗')}
                                            </span>
                                            <span
                                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${isPrimary
                                                    ? 'bg-[#455c3e] text-garden-pastel'
                                                    : 'bg-garden-sand text-garden-sage'
                                                    }`}
                                            >
                                                {typeLabel}
                                            </span>
                                        </div>

                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold leading-snug">
                                                {link.label}
                                            </h4>
                                            {link.description && (
                                                <p className={`text-[11px] font-sans mt-1.5 leading-relaxed line-clamp-2 ${isPrimary ? 'text-garden-cream/90' : 'text-stone-600'}`}>
                                                    {link.description}
                                                </p>
                                            )}
                                            <div className="mt-3 pt-2 border-t border-current/20 flex items-center justify-between text-[11px] font-mono">
                                                <span className="opacity-80 truncate max-w-[170px]">
                                                    Buka Tautan
                                                </span>
                                                <span className="font-bold text-sm group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                                                    ↗
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center p-5 bg-garden-sand/30 rounded-xl border border-dashed border-garden-sage/50 text-xs text-stone-500 font-mono">
                            Belum ada tautan website/prototype publik untuk proyek ini.
                        </div>
                    )}
                </div>

                {/* Diagram & Galeri Tambahan jika ada
                {project.galleryDocumentation && project.galleryDocumentation.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-garden-sand space-y-3">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-garden-dark flex items-center gap-1.5">
                            <span>📸</span> Catatan Diagram &amp; Spesifikasi Terlampir
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {project.galleryDocumentation.map((doc, idx) => (
                                <div
                                    key={idx}
                                    className="bg-garden-cream/60 border border-garden-sage/40 rounded-xl p-3.5 text-xs"
                                >
                                    <span className="text-[10px] font-mono uppercase bg-garden-sage text-white px-2 py-0.5 rounded font-bold inline-block mb-1.5">
                                        {doc.tag}
                                    </span>
                                    <h4 className="font-bold text-garden-dark">{doc.caption}</h4>
                                    <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                                        {doc.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )} */}
            </section>

            {/* Bottom Floating/Fixed Return Action */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-garden-sand">
                <button
                    type="button"
                    onClick={onBack}
                    className="inline-flex items-center gap-2 bg-garden-sage hover:bg-garden-moss text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-scrapbook transition transform active:scale-95 hover:-translate-y-0.5 cursor-pointer"
                >
                    <span>← Kembali ke Landscape Archive Books</span>
                </button>

                <span className="text-xs font-mono text-stone-500">
                    Malya Maritza Rahadiani • Academic Dossier Series 2026
                </span>
            </div>
        </div>
    );
}
