"use client";

import profileData from '../data/profile.json';

interface AboutContactSectionProps {
    onOpenResumeModal: () => void;
}

export default function AboutContactSection({ onOpenResumeModal }: AboutContactSectionProps) {
    return (
        <section id="about-contact" className="scroll-mt-6 pt-6">
            <div className="max-w-4xl mx-auto bg-white border-2 border-garden-sage rounded-2xl p-6 sm:p-8 shadow-scrapbook relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Academic Persona & Skills */}
                    <div className="lg:col-span-7 space-y-5">
                        <div>
                            <span className="text-xs font-mono text-garden-sage uppercase font-bold tracking-wider">
                                Demographic Profile
                            </span>
                            <h2 className="text-2xl font-bold text-garden-dark mt-0.5">
                                About {profileData.name.split(' ')[0]} {profileData.name.split(' ')[1]}
                            </h2>
                            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-sans">
                                Information Systems undergraduate at Satu University who blends analytical rigor with empathetic interface design. Specialized in decomposing ambiguous business processes into normalized relational schemas, UML diagrams, and high-fidelity prototype flows.
                            </p>
                        </div>

                        {/* Tech Stack Botanical Pills */}
                        <div>
                            <h3 className="text-xs font-mono font-bold text-garden-dark uppercase mb-2 flex items-center gap-1.5">
                                <span>🌱</span> Technical Stack &amp; Tooling
                            </h3>
                            <div className="flex flex-wrap gap-2 text-xs">
                                {profileData.techStack.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className={`px-3 py-1 rounded-full font-medium shadow-xs transition-transform hover:scale-105 select-none ${tech.featured
                                                ? 'bg-garden-pastel border border-garden-moss text-garden-dark font-bold'
                                                : 'bg-[#FAF7EE] border border-garden-sage text-garden-dark'
                                            }`}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Academic Accreditations */}
                        <div className="bg-garden-sand/60 border border-dashed border-garden-sage p-3.5 rounded-xl text-xs space-y-1">
                            <div className="font-bold text-garden-dark flex items-center gap-1.5">
                                <span>🎓</span>
                                <span>{profileData.education.institution}</span>
                            </div>
                            <div className="text-stone-600 pl-5">
                                {profileData.education.focusAreas}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stamp & Contact Envelope */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-garden-sand border border-garden-sage/70 rounded-xl p-5 relative">
                        {/* Vintage Postage Stamp */}
                        <div className="absolute top-4 right-4 w-14 h-16 border-2 border-dashed border-garden-terracotta bg-garden-peachLight flex flex-col items-center justify-center p-1 rotate-3 shadow-sm select-none pointer-events-none">
                            <span className="text-lg">🌿</span>
                            <span className="text-[8px] font-mono text-garden-terracotta font-bold uppercase mt-0.5">
                                AIR MAIL
                            </span>
                            <span className="text-[7px] text-stone-500 font-mono">2026 POST</span>
                        </div>

                        <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-garden-terracotta font-bold">
                                Dispatch A Letter
                            </span>
                            <h3 className="text-lg font-bold text-garden-dark mt-1">
                                Let's Connect &amp; Collaborate
                            </h3>
                            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                                Open for frontend engineering roles, UI/UX architecture internships, and academic research collaborations.
                            </p>
                        </div>

                        {/* Contact Buttons / Actions */}
                        <div className="space-y-2.5 mt-6">
                            <a
                                href={`mailto:${profileData.email}`}
                                className="w-full flex items-center justify-between bg-white hover:bg-garden-cream border border-garden-sage px-4 py-2.5 rounded-xl text-xs font-bold text-garden-dark shadow-sm transition transform hover:-translate-y-0.5"
                            >
                                <span className="flex items-center gap-2 truncate">
                                    <span>💌</span>
                                    <span className="truncate">{profileData.email}</span>
                                </span>
                                <span>↗</span>
                            </a>

                            <a
                                href={profileData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-between bg-white hover:bg-garden-cream border border-garden-sage px-4 py-2.5 rounded-xl text-xs font-bold text-garden-dark shadow-sm transition transform hover:-translate-y-0.5"
                            >
                                <span className="flex items-center gap-2">
                                    <span>💼</span>
                                    <span>LinkedIn Profile</span>
                                </span>
                                <span>↗</span>
                            </a>

                            <a
                                href={profileData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-between bg-white hover:bg-garden-cream border border-garden-sage px-4 py-2.5 rounded-xl text-xs font-bold text-garden-dark shadow-sm transition transform hover:-translate-y-0.5"
                            >
                                <span className="flex items-center gap-2">
                                    <span>🐙</span>
                                    <span>GitHub Repository</span>
                                </span>
                                <span>↗</span>
                            </a>

                            {/* Download Resume CTA */}
                            <button
                                type="button"
                                onClick={onOpenResumeModal}
                                className="w-full mt-2 flex items-center justify-center gap-2 bg-garden-sage hover:bg-garden-moss text-garden-cream px-4 py-2.5 rounded-xl text-xs font-bold shadow transition transform hover:-translate-y-0.5 cursor-pointer"
                            >
                                <span>Download Complete Resume (PDF)</span>
                                <span>📑</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
