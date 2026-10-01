"use client";

import { useState } from 'react';
import projectsData from '../data/projects.json';
import orgsData from '../data/organizations.json';
import profileData from '../data/profile.json';
import { X, BookOpen, Download, Terminal, FolderTree } from 'lucide-react';

interface NextJsGuideModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NextJsGuideModal({ isOpen, onClose }: NextJsGuideModalProps) {
    const [activeTab, setActiveTab] = useState<'components' | 'steps' | 'structure' | 'json'>('components');

    if (!isOpen) return null;

    const downloadJson = (filename: string, data: any) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#182619]/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div
                className="bg-[#FCFAF5] border border-[#38543B]/25 rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-window overflow-hidden relative paper-texture"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-[#263828] border-b border-[#3D573F]/40 p-4 sm:px-6 flex items-center justify-between text-[#FCFAF5]">
                    <div className="flex items-center gap-2.5">
                        <BookOpen size={18} className="text-[#A3C49B]" />
                        <div>
                            <h2 className="text-sm sm:text-base font-bold font-mono text-white">
                                Panduan Arsitektur Next.js &amp; Tahapan Ekspor
                            </h2>
                            <p className="text-[11px] text-[#D8E5D4]/80 font-sans">
                                Identifikasi komponen, tata kelola data dinamis JSON, setup, hingga ekspor file statis.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Tutup Panduan"
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
                    >
                        <X size={15} />
                    </button>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-[#FAF7F2] border-b border-stone-200 px-4 sm:px-6 py-2.5 flex gap-2 text-xs font-mono font-medium overflow-x-auto scrollbar-none">
                    <button
                        type="button"
                        onClick={() => setActiveTab('components')}
                        className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${activeTab === 'components'
                                ? 'bg-[#38543B] text-white shadow-xs font-bold'
                                : 'text-stone-600 hover:text-[#182619]'
                            }`}
                    >
                        1. Identifikasi Komponen
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('steps')}
                        className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${activeTab === 'steps'
                                ? 'bg-[#38543B] text-white shadow-xs font-bold'
                                : 'text-stone-600 hover:text-[#182619]'
                            }`}
                    >
                        2. Tahapan Setup &amp; Ekspor
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('structure')}
                        className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${activeTab === 'structure'
                                ? 'bg-[#38543B] text-white shadow-xs font-bold'
                                : 'text-stone-600 hover:text-[#182619]'
                            }`}
                    >
                        3. Struktur Direktori
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('json')}
                        className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${activeTab === 'json'
                                ? 'bg-[#38543B] text-white shadow-xs font-bold'
                                : 'text-stone-600 hover:text-[#182619]'
                            }`}
                    >
                        4. Ekspor Data JSON
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs leading-relaxed text-stone-700">
                    {/* TAB 1 */}
                    {activeTab === 'components' && (
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-bold text-[#182619] font-mono uppercase">
                                    Identifikasi Komponen Modular
                                </h3>
                                <p className="text-stone-500 mt-1">
                                    Arsitektur frontend terbagi ke dalam 7 modul utama yang saling lepas dan mudah dikelola di Next.js:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                {[
                                    { name: 'RetroHeader.tsx', role: 'Top Chrome Bar', desc: 'Navigasi status atelier, wordmark domain, widget audio ambient, dan tombol panduan arsitektur.' },
                                    { name: 'Navigation.tsx', role: 'Main Navigation Bar', desc: 'Menu sticky berstandar 3-zone contract dengan scrolling anchor dan tombol kembali saat membuka halaman detail.' },
                                    { name: 'HeroSection.tsx', role: 'Atelier Hero & Pinned', desc: 'Editorial split hero dengan visual avatar botanical, biodata, dan 3 kartu quick highlights.' },
                                    { name: 'ArchiveBooksSection.tsx', role: 'Folio Binder Core', desc: 'Penampil 3 folio kategori arsitektural dan binder spesifikasi dengan tab dinamis dari projects.json.' },
                                    { name: 'ExperienceSection.tsx', role: 'Organizational Journey', desc: 'Kartu organisasi ringkas dan modal dialog journey map kronologis dari organizations.json.' },
                                    { name: 'CertificateGallerySection.tsx', role: 'Credentials Gallery', desc: 'Koleksi sertifikat dengan mode slider horizontal dan grid 4 kolom serta modal verifikasi.' },
                                    { name: 'AboutContactSection.tsx', role: 'Demographics & Dispatch', desc: 'Profil demografis, keahlian teknis, dan tautan korespondensi profesional.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
                                        <div className="flex items-center justify-between font-bold text-[#182619]">
                                            <span className="font-mono text-xs">{item.name}</span>
                                            <span className="text-[10px] font-mono text-[#38543B] bg-[#E8EFE6] px-2 py-0.5 rounded">
                                                {item.role}
                                            </span>
                                        </div>
                                        <p className="text-stone-600 mt-1.5 leading-relaxed text-[11px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB 2 */}
                    {activeTab === 'steps' && (
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-[#182619] font-mono uppercase">
                                Tahapan Setup hingga Ekspor Statis
                            </h3>

                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-xl border border-stone-200">
                                    <div className="font-bold text-[#182619] text-xs mb-1">
                                        Langkah 1: Inisialisasi Proyek Next.js
                                    </div>
                                    <pre className="bg-[#182619] text-[#D8E5D4] p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                                        npx create-next-app@latest malya-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
                                    </pre>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-stone-200">
                                    <div className="font-bold text-[#182619] text-xs mb-1">
                                        Langkah 2: Konfigurasi Static HTML Export
                                    </div>
                                    <pre className="bg-stone-900 text-stone-200 p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                                        {`/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
export default nextConfig;`}
                                    </pre>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-stone-200">
                                    <div className="font-bold text-[#182619] text-xs mb-1">
                                        Langkah 3: Eksekusi Build &amp; Ekspor
                                    </div>
                                    <pre className="bg-[#182619] text-[#D8E5D4] p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                                        npm run build
                                    </pre>
                                    <p className="text-stone-500 mt-2 text-[11px]">
                                        Hasil ekspor akan tercipta di folder <code className="bg-[#FAF7F2] px-1 font-bold text-[#182619]">out/</code> dan siap dihosting di mana pun tanpa server runtime Node.js.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 3 */}
                    {activeTab === 'structure' && (
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-[#182619] font-mono uppercase">
                                Struktur Direktori Rekomendasi
                            </h3>
                            <pre className="bg-[#182619] text-[#FCFAF5] p-4 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto">
                                {`malya-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + Google fonts Fraunces & Plus Jakarta Sans
│   │   ├── page.tsx           # Client page container ('use client')
│   │   └── globals.css        # Tailwind tokens & paper texture
│   ├── components/            # Komponen modular UI
│   ├── data/
│   │   ├── projects.json      # Dynamic project binders & tabs
│   │   ├── organizations.json # Organization journey map
│   │   ├── certificates.json  # Verified credentials
│   │   └── profile.json       # Biography & metadata
│   ├── types/                 # TypeScript interfaces
│   └── utils/                 # Audio ambient synthesizer
├── public/                    # Image assets & favicon
└── next.config.mjs            # Static export config`}
                            </pre>
                        </div>
                    )}

                    {/* TAB 4 */}
                    {activeTab === 'json' && (
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-bold text-[#182619] font-mono uppercase">
                                    Unduh Data JSON Dinamis
                                </h3>
                                <p className="text-stone-500 mt-1">
                                    Seluruh data konten portofolio dapat diunduh untuk dimasukkan ke folder <code className="bg-[#FAF7F2] px-1 text-[#182619]">src/data/</code>:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col justify-between">
                                    <div>
                                        <div className="font-bold text-[#182619] font-mono">projects.json</div>
                                        <p className="text-[11px] text-stone-500 mt-1">
                                            Data 3 volume buku folio &amp; studi kasus detail.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => downloadJson('projects.json', projectsData)}
                                        className="mt-3 inline-flex items-center justify-center gap-1.5 bg-[#38543B] hover:bg-[#2D4531] text-white font-medium py-1.5 px-3 rounded-lg text-[11px] transition cursor-pointer"
                                    >
                                        <Download size={12} />
                                        <span>projects.json</span>
                                    </button>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col justify-between">
                                    <div>
                                        <div className="font-bold text-[#182619] font-mono">organizations.json</div>
                                        <p className="text-[11px] text-stone-500 mt-1">
                                            Data riwayat organisasi dan peta perjalanan.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => downloadJson('organizations.json', orgsData)}
                                        className="mt-3 inline-flex items-center justify-center gap-1.5 bg-[#38543B] hover:bg-[#2D4531] text-white font-medium py-1.5 px-3 rounded-lg text-[11px] transition cursor-pointer"
                                    >
                                        <Download size={12} />
                                        <span>organizations.json</span>
                                    </button>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col justify-between">
                                    <div>
                                        <div className="font-bold text-[#182619] font-mono">profile.json</div>
                                        <p className="text-[11px] text-stone-500 mt-1">
                                            Data biografi, skills, highlights, dan kontak.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => downloadJson('profile.json', profileData)}
                                        className="mt-3 inline-flex items-center justify-center gap-1.5 bg-[#38543B] hover:bg-[#2D4531] text-white font-medium py-1.5 px-3 rounded-lg text-[11px] transition cursor-pointer"
                                    >
                                        <Download size={12} />
                                        <span>profile.json</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="bg-[#FAF7F2] border-t border-stone-200 p-3.5 sm:px-6 flex items-center justify-between text-xs">
                    <span className="text-[#38543B] font-mono text-[11px]">
                        🌱 Next.js 14/15 App Router Architecture Ready
                    </span>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-[#182619] hover:bg-[#2D4531] text-white px-4 py-1.5 rounded-lg font-medium transition cursor-pointer"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
}
