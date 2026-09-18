"use client";

import profileData from '../data/profile.json';
import orgsData from '../data/organizations.json';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div
                className="bg-white border-2 border-garden-sage rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-scrapbook-lg p-6 sm:p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-garden-sand border border-garden-sage text-garden-dark font-bold hover:bg-garden-pastel flex items-center justify-center cursor-pointer"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="border-b-2 border-dashed border-garden-sage pb-4 mb-6">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🌿</span>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-garden-dark">
                                {profileData.name}
                            </h2>
                            <p className="text-xs text-garden-sage font-mono">
                                {profileData.roleHeadline}
                            </p>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-mono text-stone-600">
                        <span>📍 {profileData.location}</span>
                        <span>💌 {profileData.email}</span>
                        <span>🎓 {profileData.education.institution}</span>
                    </div>
                </div>

                {/* Summary */}
                <div className="mb-6">
                    <h3 className="text-xs font-mono font-bold uppercase text-garden-sage tracking-wider mb-1.5">
                        Executive Summary
                    </h3>
                    <p className="text-xs text-stone-700 leading-relaxed">
                        {profileData.bio}
                    </p>
                </div>

                {/* Education */}
                <div className="mb-6">
                    <h3 className="text-xs font-mono font-bold uppercase text-garden-sage tracking-wider mb-2">
                        Education
                    </h3>
                    <div className="bg-garden-sand/40 border border-garden-sage/30 rounded-xl p-3 text-xs">
                        <div className="font-bold text-garden-dark">
                            {profileData.education.institution}
                        </div>
                        <div className="text-stone-600 mt-0.5">
                            {profileData.education.focusAreas}
                        </div>
                    </div>
                </div>

                {/* Key Projects */}
                <div className="mb-6">
                    <h3 className="text-xs font-mono font-bold uppercase text-garden-sage tracking-wider mb-2">
                        Selected Core Projects
                    </h3>
                    <div className="space-y-2.5 text-xs">
                        {profileData.highlights.map((h) => (
                            <div
                                key={h.id}
                                className="border border-garden-sage/40 rounded-lg p-2.5 bg-garden-cream/30"
                            >
                                <div className="flex justify-between font-bold text-garden-dark">
                                    <span>{h.title}</span>
                                    <span className="text-garden-sage font-mono text-[11px]">{h.category}</span>
                                </div>
                                <div className="text-stone-600 mt-1">{h.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Organizational Experience */}
                <div className="mb-6">
                    <h3 className="text-xs font-mono font-bold uppercase text-garden-sage tracking-wider mb-2">
                        Leadership &amp; Involvements
                    </h3>
                    <div className="space-y-2.5 text-xs">
                        {orgsData.map((org) => (
                            <div key={org.id} className="border-l-2 border-garden-sage pl-3 py-1">
                                <div className="flex justify-between">
                                    <span className="font-bold text-garden-dark">{org.organization}</span>
                                    <span className="text-[10px] font-mono text-stone-500">{org.period}</span>
                                </div>
                                <div className="text-garden-sage font-semibold text-[11px]">{org.role}</div>
                                <p className="text-stone-600 mt-0.5 leading-relaxed">{org.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-6">
                    <h3 className="text-xs font-mono font-bold uppercase text-garden-sage tracking-wider mb-2">
                        Technical Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                        {profileData.techStack.map((tech) => (
                            <span
                                key={tech.name}
                                className="bg-garden-sand border border-garden-sage/40 px-2 py-0.5 rounded text-[11px] text-garden-dark"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-garden-sage/40 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="px-4 py-2 rounded-xl bg-garden-sage hover:bg-garden-moss text-white font-bold text-xs shadow cursor-pointer transition"
                    >
                        Print / Save as PDF 🖨️
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded-xl bg-garden-sand hover:bg-stone-200 text-garden-dark font-bold text-xs border border-garden-sage cursor-pointer transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
