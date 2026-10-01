"use client";

import profileData from '../data/profile.json';
import orgsData from '../data/organizations.json';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-garden-sage">
            {children}
        </h3>
    );
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs"
            onClick={onClose}
        >
            <div
                className="bg-[#FAF7EE] w-full sm:max-w-xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border-t-2 sm:border-2 border-garden-sage shadow-scrapbook-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky top bar */}
                <div className="sticky top-0 z-10 bg-[#FAF7EE] border-b border-garden-sand flex items-center justify-between px-5 py-3">
                    <span className="text-[11px] font-mono font-bold text-garden-sage uppercase tracking-widest">
                        Curriculum Vitae
                    </span>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Tutup"
                        className="w-7 h-7 rounded-full bg-garden-sand hover:bg-garden-pastel border border-garden-sage/50 text-garden-dark text-xs font-bold flex items-center justify-center cursor-pointer transition"
                    >
                        ✕
                    </button>
                </div>

                <div className="px-5 sm:px-7 py-5 space-y-5">

                    {/* Identity */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-garden-dark tracking-tight leading-tight">
                            {profileData.name}
                        </h2>
                        <p className="text-xs text-garden-moss font-semibold mt-0.5 leading-relaxed">
                            {profileData.roleHeadline}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-stone-500">
                            <span>📍 {profileData.location}</span>
                            <a href={`mailto:${profileData.email}`} className="hover:text-garden-sage transition">
                                ✉ {profileData.email}
                            </a>
                            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-garden-sage transition">
                                in linkedin.com/in/malyamaritza
                            </a>
                            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hover:text-garden-sage transition">
                                ⌥ github.com/malyamaritza
                            </a>
                        </div>
                    </div>

                    <hr className="border-garden-sage/20" />

                    {/* Profil */}
                    <div>
                        <SectionLabel>Profil</SectionLabel>
                        <p className="text-xs text-stone-700 leading-relaxed mt-1.5">
                            {profileData.bio}
                        </p>
                    </div>

                    <hr className="border-garden-sage/20" />

                    {/* Pendidikan */}
                    <div>
                        <SectionLabel>Pendidikan</SectionLabel>
                        <div className="mt-2 space-y-3">
                            {profileData.educationTimeline.map((edu) => (
                                <div key={edu.id} className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-bold text-garden-dark">{edu.institution}</p>
                                        <p className="text-[11px] text-garden-sage font-semibold">{edu.major}</p>
                                        <p className="text-[10px] text-stone-400 font-mono mt-0.5">{edu.level} · {edu.status}</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-stone-400 whitespace-nowrap shrink-0 pt-0.5">
                                        {edu.period}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="border-garden-sage/20" />

                    {/* Keahlian Teknis */}
                    <div>
                        <SectionLabel>Keahlian Teknis</SectionLabel>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {profileData.techStack.map((tech) => (
                                <span
                                    key={tech.name}
                                    className={`text-[11px] px-2.5 py-0.5 rounded-full border font-mono ${
                                        tech.featured
                                            ? 'bg-garden-pastel border-garden-moss text-garden-dark font-bold'
                                            : 'bg-white border-garden-sage/40 text-stone-600'
                                    }`}
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <hr className="border-garden-sage/20" />

                    {/* Proyek Pilihan */}
                    <div>
                        <SectionLabel>Proyek Pilihan</SectionLabel>
                        <div className="mt-2 space-y-3">
                            {profileData.highlights.map((h) => (
                                <div key={h.id}>
                                    <div className="flex items-start justify-between gap-2">
                                        <p className="text-xs font-bold text-garden-dark">{h.title}</p>
                                        <span className="text-[10px] font-mono text-garden-sage shrink-0">{h.category}</span>
                                    </div>
                                    <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">{h.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="border-garden-sage/20" />

                    {/* Organisasi & Kepanitiaan */}
                    <div>
                        <SectionLabel>Organisasi & Kepanitiaan</SectionLabel>
                        <div className="mt-2 space-y-3">
                            {orgsData.map((org) => (
                                <div key={org.id} className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-bold text-garden-dark">{org.name}</p>
                                        <p className="text-[11px] text-garden-sage font-semibold">{org.currentRole} · {org.currentRolePeriod}</p>
                                        <p className="text-[10px] text-stone-400 mt-0.5">{org.shortDescription}</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-stone-400 whitespace-nowrap shrink-0 pt-0.5">
                                        {org.activeYears}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 pb-1 border-t border-garden-sage/20 flex items-center justify-between gap-3">
                        <p className="text-[10px] font-mono text-stone-400 hidden sm:block">
                            Malya Maritza Portfolio · 2026
                        </p>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <button
                                type="button"
                                onClick={() => window.print()}
                                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-garden-sage hover:bg-garden-moss text-white font-bold text-xs shadow cursor-pointer transition"
                            >
                                Cetak / PDF 🖨️
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white hover:bg-garden-sand text-garden-dark font-bold text-xs border border-garden-sage/50 cursor-pointer transition"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
