import { useState, useEffect, useRef } from 'react';
import certificatesDataRaw from '../data/certificates.json';
import { CertificateItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import RevealOnScroll from './RevealOnScroll';
import {
    ChevronLeft,
    ChevronRight,
    X,
    ExternalLink,
    Award,
    Search
} from 'lucide-react';
import { resolveImage } from '../lib/imageMap';

const certificatesData = certificatesDataRaw as CertificateItem[];

export default function CertificateGallerySection() {
    const { t, language } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Close modal on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedCert(null);
            }
        };
        if (selectedCert) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

    // Check slider scroll position
    const checkSliderScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkSliderScroll();
        window.addEventListener('resize', checkSliderScroll);
        return () => window.removeEventListener('resize', checkSliderScroll);
    }, []);

    // Programmatic scroll for arrow buttons
    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth * 0.75;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const handleImageError = (id: string) => {
        setImgErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <section id="certificates" className="scroll-mt-24 sm:scroll-mt-28 pt-4 sm:pt-6">
            {/* Section Header */}
            <RevealOnScroll delay={50} duration={600}>
                <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-4 px-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-garden-dark">
                        {t.certTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans leading-relaxed">
                        {t.certSubtitle}
                    </p>
                </div>
            </RevealOnScroll>

            {/* Control Bar: Total count + Prev/Next Arrow Controls */}
            <RevealOnScroll delay={100} duration={650}>
                <div className="max-w-6xl mx-auto px-1 mb-3 sm:mb-3.5 flex items-center justify-between gap-2 sm:gap-3 border-b border-garden-sand pb-2.5">
                    <div className="text-xs font-mono text-stone-500 font-semibold flex items-center gap-1.5">
                        <Award size={15} className="text-garden-sage shrink-0" />
                        <span>Total: {certificatesData.length} {language === 'id' ? 'Kredensial Terverifikasi' : 'Verified Credentials'}</span>
                    </div>

                    {/* Right Side: Prev/Next Arrow Controls */}
                    <div className="flex items-center gap-1 bg-white border border-garden-sage/50 rounded-xl p-1 shadow-2xs">
                        <button
                            type="button"
                            onClick={() => scrollSlider('left')}
                            disabled={!canScrollLeft}
                            aria-label="Geser ke kiri"
                            title="Geser ke kiri"
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center transition-all ${canScrollLeft
                                    ? 'hover:bg-garden-sand text-garden-dark cursor-pointer active:scale-95'
                                    : 'text-stone-300 cursor-not-allowed opacity-40'
                                }`}
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollSlider('right')}
                            disabled={!canScrollRight}
                            aria-label="Geser ke kanan"
                            title="Geser ke kanan"
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center transition-all ${canScrollRight
                                    ? 'hover:bg-garden-sand text-garden-dark cursor-pointer active:scale-95'
                                    : 'text-stone-300 cursor-not-allowed opacity-40'
                                }`}
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </RevealOnScroll>

            {/* SLIDER VIEW - RESPONSIVE TOUCH & SWIPE */}
            <RevealOnScroll delay={150} duration={700}>
                <div className="relative max-w-6xl mx-auto px-1 animate-in fade-in duration-200">
                    {/* Slider Container with Smooth Touch Scroll, Peeking Next Card on Mobile */}
                    <div
                        ref={sliderRef}
                        onScroll={checkSliderScroll}
                        className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 pt-1.5 scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-thin scrollbar-track-garden-sand/40 scrollbar-thumb-garden-sage/40"
                        style={{ scrollbarWidth: 'thin' }}
                    >
                        {certificatesData.map((cert, index) => {
                            const hasError = imgErrors[cert.id];
                            const rotationClass =
                                index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-1' : '-rotate-0.5';

                            return (
                                <div
                                    key={cert.id}
                                    onClick={() => setSelectedCert(cert)}
                                    className="w-[72vw] max-w-[240px] xs:w-56 sm:w-64 shrink-0 snap-start bg-white border-2 border-garden-sage rounded-xl p-3 shadow-scrapbook hover:shadow-scrapbook-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer relative group flex flex-col justify-between select-none"
                                >
                                    {/* Washi Tape */}
                                    <div
                                        className={`absolute -top-2 right-4 w-10 sm:w-12 h-3 sm:h-3.5 ${cert.badgeColor === 'peach'
                                                ? 'washi-tape-peach'
                                                : cert.badgeColor === 'pond'
                                                    ? 'washi-tape-pond'
                                                    : 'washi-tape-green'
                                            } ${rotationClass} rounded-xs border border-stone-400/20 pointer-events-none z-10`}
                                    />

                                    {/* Certificate Image Frame */}
                                    <div>
                                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-garden-sand/40 border border-garden-sage/30 mb-2.5 flex items-center justify-center">
                                            {!hasError && cert.image ? (
                                                <img
                                                    src={resolveImage(cert.image)}
                                                    alt={cert.imageAlt || cert.title}
                                                    onError={() => handleImageError(cert.id)}
                                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center p-3 text-center">
                                                    <span className="text-2xl mb-1">📜</span>
                                                    <span className="text-[10px] font-mono font-bold text-garden-sage">
                                                        Cert #{index + 1}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Hover / Tap Inspect Icon */}
                                            <div className="absolute inset-0 bg-garden-dark/40 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-garden-cream font-mono text-xs gap-1">
                                                <Search size={18} className="text-garden-cream drop-shadow-sm" />
                                                <span className="font-bold bg-garden-dark/80 px-2 py-0.5 rounded text-[11px]">
                                                    Lihat Deskripsi
                                                </span>
                                            </div>
                                        </div>

                                        {/* Certificate Title Only */}
                                        <h3 className="text-xs sm:text-sm font-bold text-garden-dark group-hover:text-garden-sage transition-colors line-clamp-2 leading-snug">
                                            {cert.title}
                                        </h3>
                                    </div>

                                    {/* Action Prompt */}
                                    <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-garden-sage transition-colors">
                                        <span>Rincian</span>
                                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </RevealOnScroll>

            {/* COMPACT MODAL / POP-UP (RESPONSIVE FOR ALL SCREEN SIZES DOWN TO MOBILE) */}
            {selectedCert && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-garden-cream border-2 border-garden-sage rounded-xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-scrapbook-lg p-3.5 sm:p-5 relative space-y-3.5 sm:space-y-4 animate-in zoom-in-95 duration-200"
                    >
                        {/* Top Bar with Title, Category Badge & 'X' Close Button */}
                        <div className="flex items-start justify-between gap-2 border-b border-garden-sand pb-2.5">
                            <div className="pr-1">
                                <span className="inline-block bg-garden-sage text-garden-cream font-mono text-[10px] font-bold px-2 py-0.5 rounded mb-1">
                                    {selectedCert.category}
                                </span>
                                <h3 className="text-xs sm:text-sm md:text-base font-bold text-garden-dark leading-snug">
                                    {selectedCert.title}
                                </h3>
                                <p className="text-[10px] sm:text-[11px] font-mono text-stone-500 mt-0.5">
                                    {selectedCert.issuer} • {selectedCert.issueDate}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedCert(null)}
                                aria-label="Tutup Detail"
                                className="w-7 h-7 rounded-full bg-garden-sand hover:bg-garden-pastel text-garden-dark flex items-center justify-center border border-garden-sage/50 transition cursor-pointer shrink-0"
                            >
                                <X size={15} />
                            </button>
                        </div>

                        {/* Certificate Big Image Preview */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-garden-sage/40 flex items-center justify-center shadow-inner">
                            {selectedCert.image ? (
                                <img
                                    src={resolveImage(selectedCert.image)}
                                    alt={selectedCert.imageAlt || selectedCert.title}
                                    className="w-full h-full object-contain p-1"
                                />
                            ) : (
                                <div className="text-center p-4">
                                    <span className="text-3xl mb-1 block">📜</span>
                                    <span className="text-xs font-mono text-garden-sage">Preview Not Available</span>
                                </div>
                            )}
                        </div>

                        {/* Description & Competencies */}
                        <div className="space-y-2.5 text-xs text-stone-700">
                            <p className="leading-relaxed font-sans bg-white p-3 rounded-xl border border-garden-sage/30">
                                {selectedCert.fullDescription || selectedCert.shortDescription}
                            </p>

                            {/* Skills / Badges */}
                            {selectedCert.skills && selectedCert.skills.length > 0 && (
                                <div>
                                    <span className="text-[10px] font-mono uppercase text-garden-sage font-bold block mb-1.5">
                                        Kompetensi Teruji:
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selectedCert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="bg-garden-pastel/70 border border-garden-sage/40 text-garden-dark text-[10px] font-mono px-2 py-0.5 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Credential ID / Verification Link */}
                            {selectedCert.credentialId && (
                                <div className="text-[10px] font-mono text-stone-500 pt-1">
                                    ID Kredensial: <span className="font-semibold text-garden-dark">{selectedCert.credentialId}</span>
                                </div>
                            )}
                        </div>

                        {/* Footer Buttons */}
                        <div className="pt-2 border-t border-garden-sand flex items-center justify-between gap-2">
                            {selectedCert.credentialUrl ? (
                                <a
                                    href={selectedCert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-garden-cream bg-garden-sage hover:bg-garden-moss px-3 py-1.5 rounded-xl shadow-xs transition"
                                >
                                    <span>Verifikasi Kredensial</span>
                                    <ExternalLink size={13} />
                                </a>
                            ) : (
                                <span className="text-[10px] font-mono text-stone-400">
                                    Tervalidasi Resmi
                                </span>
                            )}

                            <button
                                type="button"
                                onClick={() => setSelectedCert(null)}
                                className="text-xs font-mono font-bold text-stone-600 hover:text-garden-dark bg-white border border-stone-300 hover:bg-garden-sand px-3 py-1.5 rounded-xl transition cursor-pointer"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
