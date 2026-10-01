import { useState, useEffect } from 'react';
import orgsData from '../data/organizations.json';
import { OrganizationExperience } from '../types';
import { useLanguage } from '../context/LanguageContext';
import RevealOnScroll from './RevealOnScroll';
import { resolveImage } from '../lib/imageMap';

const organizations = orgsData as OrganizationExperience[];

export default function ExperienceSection() {
    const { t } = useLanguage();
    const [selectedOrg, setSelectedOrg] = useState<OrganizationExperience | null>(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedOrg(null);
            }
        };

        if (selectedOrg) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedOrg]);

    return (
        <section id="experience" className="scroll-mt-24 sm:scroll-mt-28 pt-6">
            {/* Section Header */}
            <RevealOnScroll delay={50} duration={600}>
                <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-garden-dark">
                        {t.expTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-garden-dark/90 font-medium mt-1 font-sans leading-relaxed">
                        {t.expSubtitle}
                    </p>
                </div>
            </RevealOnScroll>

            {/* Grid of Concise Organization Cards - 2 Kisi on Small Screens */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-5 px-1">
                {organizations.map((org, idx) => {
                    // Determine washi tape class
                    const washiClass =
                        org.washiColor === 'green' ? 'washi-tape-green' : 'washi-tape-peach';

                    return (
                        <RevealOnScroll key={org.id} delay={(idx % 2) * 80 + 50} duration={650}>
                            <div
                                onClick={() => setSelectedOrg(org)}
                                className="bg-white border sm:border-2 border-garden-sage rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 shadow-scrapbook relative hover:shadow-scrapbook-lg hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between h-full"
                            >
                                {/* Washi Tape Accent */}
                                <div
                                    className={`absolute -top-2 sm:-top-3 ${org.id.includes('onelish') || org.id.includes('carita')
                                            ? 'right-4 sm:right-6'
                                            : 'left-4 sm:left-6'
                                        } w-12 sm:w-20 h-3.5 sm:h-5 ${washiClass} ${org.washiRotation || '-rotate-1'} rounded-sm border-dashed border border-garden-moss/30 pointer-events-none hidden xs:block`}
                                ></div>

                                <div>
                                    {/* Header: Logo & Active Years Badge */}
                                    <div className="flex items-start justify-between gap-1.5 sm:gap-3 mb-2 sm:mb-3">
                                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden border border-garden-sage/40 sm:border-2 bg-[#FAF7EE] shadow-2xs shrink-0 flex items-center justify-center">
                                            {org.logo && resolveImage(org.logo) ? (
                                                <img
                                                    src={resolveImage(org.logo)}
                                                alt={org.logoAlt || org.name}
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                                onError={(e) => {
                                                    // Graceful fallback if image is unreachable
                                                    const target = e.currentTarget;
                                                    target.style.display = 'none';
                                                    if (target.parentElement) {
                                                        target.parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center font-mono font-bold text-xs sm:text-base text-garden-sage bg-garden-sand">
                                ${org.name.slice(0, 2).toUpperCase()}
                              </div>
                            `;
                                                    }
                                                }}
                                            />
                                        ) : (
                                                <div className="w-full h-full flex items-center justify-center font-mono font-bold text-xs sm:text-base text-garden-sage bg-garden-sand">
                                                    {org.name.slice(0, 2).toUpperCase()}
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-[9px] sm:text-[11px] font-mono px-1.5 sm:px-2.5 py-0.5 rounded-full font-bold bg-garden-pastel text-garden-dark border border-garden-sage/30 truncate max-w-[65%] sm:max-w-none text-center">
                                            {org.activeYears}
                                        </span>
                                    </div>

                                    {/* Organization / Event Name */}
                                    <h3 className="text-xs sm:text-base md:text-lg font-bold text-garden-dark group-hover:text-garden-sage transition-colors leading-snug line-clamp-2">
                                        {org.name}
                                    </h3>

                                    {/* Short Description */}
                                    <p className="text-[11px] sm:text-xs text-stone-600 font-sans mt-1 leading-relaxed line-clamp-2 sm:line-clamp-3">
                                        {org.shortDescription}
                                    </p>

                                    {/* Current Role & Period */}
                                    <div className="mt-2 sm:mt-3 bg-[#FAF7EE] border border-garden-sage/30 rounded-lg sm:rounded-xl p-2 sm:p-2.5 shadow-2xs">
                                        <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-stone-500 font-semibold truncate">
                                            Posisi
                                        </div>
                                        <div className="text-[11px] sm:text-xs md:text-sm font-bold text-garden-dark mt-0.5 truncate">
                                            {org.currentRole}
                                        </div>
                                        <div className="text-[10px] sm:text-[11px] font-mono text-garden-sage font-medium truncate">
                                            {org.currentRolePeriod}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Interactive Action Indicator */}
                                <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-dashed border-garden-sand flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold text-garden-sage group-hover:text-garden-dark transition-colors">
                                    <span className="flex items-center gap-1 truncate">
                                        <span>🗺️</span>
                                        <span className="truncate">Journey Map</span>
                                    </span>
                                    <span className="group-hover:translate-x-1 transition-transform shrink-0 ml-1">
                                        ➔
                                    </span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    );
                })}
            </div>

            {/* Pop-up Modal: Journey Map Detail */}
            {selectedOrg && (
                <div
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setSelectedOrg(null)}
                    className="fixed inset-0 z-50 bg-[#2d3b2a]/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#FAF7EE] border-2 border-garden-sage rounded-2xl shadow-scrapbook-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 relative paper-texture my-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedOrg(null)}
                            aria-label="Tutup Detail Organisasi"
                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-garden-sage text-garden-dark hover:bg-garden-terracotta hover:text-white hover:border-garden-terracotta flex items-center justify-center font-bold text-sm shadow-xs transition-colors cursor-pointer z-10"
                        >
                            ✕
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-start gap-4 border-b-2 border-dashed border-garden-sand pb-5 pr-8">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-garden-sage bg-white shadow-2xs shrink-0 flex items-center justify-center">
                                {selectedOrg.logo && resolveImage(selectedOrg.logo) ? (
                                    <img
                                        src={resolveImage(selectedOrg.logo)}
                                        alt={selectedOrg.logoAlt || selectedOrg.name}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            if (target.parentElement) {
                                                target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center font-mono font-bold text-lg text-garden-sage bg-garden-sand">
                              ${selectedOrg.name.slice(0, 2).toUpperCase()}
                            </div>
                          `;
                                            }
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center font-mono font-bold text-lg text-garden-sage bg-garden-sand">
                                        {selectedOrg.name.slice(0, 2).toUpperCase()}
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className="text-[11px] font-mono font-bold bg-garden-pastel text-garden-dark px-2.5 py-0.5 rounded-full border border-garden-sage/30">
                                        Tahun Aktif: {selectedOrg.activeYears}
                                    </span>
                                    <span className="text-[10px] font-mono uppercase bg-garden-sand text-garden-sage px-2 py-0.5 rounded font-bold border border-garden-sage/20">
                                        {selectedOrg.type === 'event' ? 'Event & Project' : 'Organisasi Mahasiswa'}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-garden-dark leading-tight">
                                    {selectedOrg.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
                                    {selectedOrg.shortDescription}
                                </p>
                                <div className="mt-2 text-xs font-mono font-semibold text-garden-sage flex items-center gap-1">
                                    <span>📌 Posisi Saat Ini:</span>
                                    <span className="text-garden-dark font-bold">
                                        {selectedOrg.currentRole} ({selectedOrg.currentRolePeriod})
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Journey Map Title & Description */}
                        <div className="pt-5 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🗺️</span>
                                <h4 className="text-base sm:text-lg font-bold text-garden-dark">
                                    Peta Perjalanan &amp; Rekam Jejak
                                </h4>
                            </div>
                            <p className="text-xs text-stone-600 font-sans mt-0.5">
                                Urutan kronologis aktivitas dari tahun lama ke baru, mencakup peran kunci, tanggung jawab, dan dokumentasi.
                            </p>
                        </div>

                        {/* Vertical Chronological Journey Map */}
                        <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-7 before:content-[''] before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-garden-sage/40">
                            {selectedOrg.journey.map((step, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Timeline Pin / Marker */}
                                    <div className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#5B7553] text-[#FAF7EE] border-2 border-[#FAF7EE] shadow-xs flex items-center justify-center text-[10px] font-mono font-bold">
                                        {idx + 1}
                                    </div>

                                    {/* Step Content Card */}
                                    <div className="bg-white border border-garden-sage/60 rounded-xl p-4 sm:p-5 shadow-xs">
                                        {/* Step Header: Year Badge & Role */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <span className="text-xs font-mono font-bold bg-garden-sand text-garden-dark px-2.5 py-0.5 rounded-md border border-garden-sage/40">
                                                {step.year}
                                            </span>
                                            {step.role && (
                                                <span className="text-[11px] font-mono text-garden-sage font-bold bg-garden-cream px-2 py-0.5 rounded border border-garden-sage/20">
                                                    {step.role}
                                                </span>
                                            )}
                                        </div>

                                        {/* Step Title */}
                                        <h5 className="text-sm sm:text-base font-bold text-garden-dark leading-snug">
                                            {step.title}
                                        </h5>

                                        {/* Step Description */}
                                        <p className="text-xs sm:text-sm text-stone-700 font-sans mt-1.5 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Tags if available */}
                                        {step.tags && step.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mt-2.5">
                                                {step.tags.map((tag, tagIdx) => (
                                                    <span
                                                        key={tagIdx}
                                                        className="text-[10px] font-mono bg-garden-sand/70 text-garden-dark px-2 py-0.5 rounded border border-garden-sage/20"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Image / Documentation Container (Wadah Gambar) */}
                                        {step.image && step.image.trim() !== '' && (
                                            <div className="mt-3.5 pt-3 border-t border-dashed border-garden-sand">
                                                <div className="rounded-xl overflow-hidden border-2 border-garden-sage/50 bg-[#FAF7EE] p-1.5 sm:p-2 shadow-2xs">
                                                    <img
                                                        src={resolveImage(step.image)}
                                                        alt={step.imageCaption || step.title}
                                                        referrerPolicy="no-referrer"
                                                        className="w-full h-44 sm:h-56 object-cover rounded-lg"
                                                        onError={(e) => {
                                                            // Hide broken image frame gracefully if URL fails
                                                            e.currentTarget.style.display = 'none';
                                                        }}
                                                    />
                                                    {step.imageCaption && (
                                                        <p className="text-[11px] font-sans text-stone-600 italic mt-1.5 px-1 flex items-center gap-1.5">
                                                            <span>📷</span>
                                                            <span>{step.imageCaption}</span>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Modal Footer Note */}
                        <div className="mt-6 pt-4 border-t border-dashed border-garden-sand text-center">
                            <button
                                onClick={() => setSelectedOrg(null)}
                                className="bg-[#5B7553] hover:bg-[#4a6344] text-[#FAF7EE] border border-[#3d5038] px-5 py-2 rounded-xl font-mono text-xs font-bold shadow-scrapbook transition-all transform active:scale-98 cursor-pointer"
                            >
                                Tutup Journey Map
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
