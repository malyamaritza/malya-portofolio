import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface Translations {
    // Retro Header
    portfolioUrl: string;
    readyStatus: string;
    zoomMode: string;
    minimizeWindow: string;
    restoreWindow: string;
    scrollToTop: string;

    // Navigation
    navHome: string;
    navProjects: string;
    navExperience: string;
    navCertificates: string;
    navAbout: string;
    navDetailBack: string;

    // Hero Section
    badgeInternship: string;
    roleHeadline: string;
    bioText: string;
    exploreArchiveBtn: string;
    contactResumeBtn: string;

    // Education Timeline
    educationTitle: string;
    educationSubtitle: string;
    highSchoolTitle: string;
    highSchoolDesc: string;
    highSchoolYear: string;
    highSchoolStatus: string;
    universityTitle: string;
    universityDegree: string;
    universityDesc: string;
    universityYear: string;
    universityStatus: string;

    // Archive Books Dossier
    dossierBadge: string;
    archiveTitle: string;
    archiveSubtitle: string;
    openDossierBtn: string;
    artifactNumber: string;
    overviewLabel: string;
    impactLabel: string;
    techStackLabel: string;
    viewDetailBtn: string;
    prototypeBtn: string;
    noLinkConfigured: string;

    // Detail View
    backToHomeBtn: string;
    problemTitle: string;
    problemSubtitle: string;
    architectureTitle: string;
    architectureSubtitle: string;
    workflowTitle: string;
    workflowSubtitle: string;
    techTitle: string;
    deliverablesTitle: string;
    docsTitle: string;
    docsSubtitle: string;
    interactiveDemoTitle: string;

    // Experience Section
    expBadge: string;
    expTitle: string;
    expSubtitle: string;
    journeyMapBtn: string;

    // Certificate Section
    certBadge: string;
    certTitle: string;
    certSubtitle: string;
    viewAllBtn: string;

    // About & Contact
    aboutBadge: string;
    aboutTitle: string;
    aboutText: string;
    contactHeader: string;
    sendEmailBtn: string;
    downloadResumeBtn: string;

    // Footer
    footerText: string;
}

const translationsId: Translations = {
    portfolioUrl: 'https://satu.ac.id/students/malya-maritza',
    readyStatus: 'Siap Magang 2026',
    zoomMode: 'Mode Tampilan Portofolio',
    minimizeWindow: 'Minimalkan Jendela',
    restoreWindow: 'Pulihkan Jendela',
    scrollToTop: 'Kembali ke Atas',

    navHome: 'Beranda',
    navProjects: 'Arsip Proyek',
    navExperience: 'Pengalaman',
    navCertificates: 'Sertifikat',
    navAbout: 'Tentang & Kontak',
    navDetailBack: 'Kembali',

    badgeInternship: 'Sedang menempuh studi & terbuka untuk kesempatan magang',
    roleHeadline: 'Mahasiswa Sistem Informasi @ Satu University | Frontend Developer, UI/UX Architect & Analis Sistem.',
    bioText: 'Merancang arsitektur sistem informasi terstruktur dan pengalaman pengguna yang estetis. Terbiasa menganalisis proses bisnis, memetakan skema relasional, dan membangun aplikasi web responsif berstandar modern.',
    exploreArchiveBtn: 'Jelajahi Buku Arsip',
    contactResumeBtn: 'Kontak & Resume',

    educationTitle: 'Riwayat Pendidikan',
    educationSubtitle: 'Jejak langkah akademis dari sekolah menengah hingga program sarjana',
    highSchoolTitle: 'SMA YAS',
    highSchoolDesc: 'Sekolah Menengah Atas — Penjurusan MIPA',
    highSchoolYear: '2021 – 2024',
    highSchoolStatus: 'Lulus',
    universityTitle: 'Satu University',
    universityDegree: 'S1 Sistem Informasi',
    universityDesc: 'Fokus Analisis Sistem, UI/UX Architecture, dan Enterprise Modeling',
    universityYear: '2024 – Saat Ini',
    universityStatus: 'Mahasiswa Aktif',

    dossierBadge: 'Seri Berkas Portofolio',
    archiveTitle: 'Buku Arsip Lanskap',
    archiveSubtitle: 'Pilih map kategori fisik di bawah ini untuk meninjau analisis kebutuhan, prototipe, dan arsitektur teknis proyek.',
    openDossierBtn: 'Buka Berkas →',
    artifactNumber: 'Berkas Artefak',
    overviewLabel: 'Ringkasan Sistem',
    impactLabel: 'Dampak & Nilai Tambah Sistem',
    techStackLabel: 'Teknologi & Metode',
    viewDetailBtn: 'Lihat Detail & Arsitektur Lengkap',
    prototypeBtn: 'Buka Prototipe Interaktif',
    noLinkConfigured: 'Tautan Prototipe belum dikonfigurasi.',

    backToHomeBtn: 'Kembali ke Halaman Utama',
    problemTitle: 'Latar Belakang & Masalah yang Diselesaikan',
    problemSubtitle: 'Identifikasi celah operasional dan friksi kerja sebelumnya.',
    architectureTitle: 'Arsitektur Inti & Rincian Modul',
    architectureSubtitle: 'Struktur modular yang dibangun untuk keandalan dan akurasi data.',
    workflowTitle: 'Alur Proses Bisnis Terintegrasi (End-to-End)',
    workflowSubtitle: 'Siklus dari input pemesanan hingga evaluasi eksekutif.',
    techTitle: 'Teknologi & Metode',
    deliverablesTitle: 'Artefak & Deliverables Utama',
    docsTitle: 'Dokumentasi Proyek & Spesifikasi Sistem',
    docsSubtitle: 'Arsip berkas lengkap, diagram alur, dan dokumen SRS.',
    interactiveDemoTitle: 'Simulasi Interaktif & Demonstrasi Langsung',

    expBadge: 'Kepemimpinan & Kontribusi',
    expTitle: 'Pengalaman Organisasi & Kepanitiaan',
    expSubtitle: 'Rekam jejak kepemimpinan, tata kelola finansial, kesekretariatan, dan kontribusi sosial.',
    journeyMapBtn: 'Lihat Peta Perjalanan →',

    certBadge: 'Kualifikasi & Lisensi',
    certTitle: 'Galeri Sertifikasi Terverifikasi',
    certSubtitle: 'Kumpulan sertifikat kompetensi resmi di bidang analisis sistem, pemrograman web, dan manajemen proyek.',
    viewAllBtn: 'Semua Sertifikat',

    aboutBadge: 'Profil Pribadi',
    aboutTitle: 'Tentang Malya Maritza',
    aboutText: 'Mahasiswa Sistem Informasi di Satu University yang memadukan ketelitian analitis dengan desain antarmuka yang empatik. Memiliki pengalaman dalam merancang pemodelan sistem enterprise, UI/UX berorientasi pengguna, dan aplikasi web modular.',
    contactHeader: 'Mari Berkolaborasi',
    sendEmailBtn: 'Kirim Email',
    downloadResumeBtn: 'Lihat Resume Lengkap',

    footerText: 'Dibuat dengan cinta & matcha • Malya Maritza Rahadiani Portfolio 2026',
};

const translationsEn: Translations = {
    portfolioUrl: 'https://satu.ac.id/students/malya-maritza',
    readyStatus: '2026 Internship Ready',
    zoomMode: 'Portfolio Display Mode',
    minimizeWindow: 'Minimize Window',
    restoreWindow: 'Restore Window',
    scrollToTop: 'Scroll to Top',

    navHome: 'Home',
    navProjects: 'Projects Archive',
    navExperience: 'Experience',
    navCertificates: 'Certificates',
    navAbout: 'About & Contact',
    navDetailBack: 'Back',

    badgeInternship: 'Currently cultivating digital experiences & looking for internship',
    roleHeadline: 'Information Systems Student @ Satu University | Frontend Developer, UI/UX Architect & System Analyst.',
    bioText: 'Crafting structured software blueprints and aesthetic, thoughtful user experiences. Experienced in orchestrating retail information systems, bridging organizational requirements with human-centered interfaces, and building responsive web apps with clean code.',
    exploreArchiveBtn: 'Explore Archive Books',
    contactResumeBtn: 'Contact & Resume',

    educationTitle: 'Education Timeline',
    educationSubtitle: 'Academic journey from secondary education to undergraduate studies',
    highSchoolTitle: 'SMA YAS',
    highSchoolDesc: 'Senior High School — Science & Mathematics Track',
    highSchoolYear: '2021 – 2024',
    highSchoolStatus: 'Graduated',
    universityTitle: 'Satu University',
    universityDegree: 'Undergraduate in Information Systems (B.S.)',
    universityDesc: 'Focusing on Systems Analysis, UI/UX Architecture, and Enterprise Modeling',
    universityYear: '2024 – Present',
    universityStatus: 'Active Student',

    dossierBadge: 'Interactive Dossier Series',
    archiveTitle: 'The Landscape Archive Books',
    archiveSubtitle: 'Select a physical category binder below to inspect full requirements analysis, prototypes, and technical architectures.',
    openDossierBtn: 'Open Dossier →',
    artifactNumber: 'Artifact Dossier',
    overviewLabel: 'System Overview',
    impactLabel: 'System Impact & Value Added',
    techStackLabel: 'Technologies & Methods',
    viewDetailBtn: 'View Detail & Full Architecture',
    prototypeBtn: 'Open Interactive Prototype',
    noLinkConfigured: 'Prototype link not yet set in data.',

    backToHomeBtn: 'Back to Main Page',
    problemTitle: 'Background & Problem Statement',
    problemSubtitle: 'Identifying operational gaps and friction in previous manual processes.',
    architectureTitle: 'Core Architecture & Key Modules',
    architectureSubtitle: 'Modular breakdown designed for data integrity and user satisfaction.',
    workflowTitle: 'Integrated End-to-End Business Workflow',
    workflowSubtitle: 'Lifecycle from customer booking input to executive evaluation.',
    techTitle: 'Technologies & Methods Deployed',
    deliverablesTitle: 'Key Architectural Deliverables',
    docsTitle: 'Project Documentation & Specifications',
    docsSubtitle: 'Centralized archives, flowcharts, and system requirement specifications.',
    interactiveDemoTitle: 'Interactive Live Simulation Demo',

    expBadge: 'Leadership & Contributions',
    expTitle: 'Organizational Experience & Involvements',
    expSubtitle: 'Track record in leadership, financial management, secretarial duties, and community impact.',
    journeyMapBtn: 'View Journey Map →',

    certBadge: 'Credentials & Licenses',
    certTitle: 'Verified Certificate Gallery',
    certSubtitle: 'Official credentials in systems analysis, web development, and digital product design.',
    viewAllBtn: 'All Certificates',

    aboutBadge: 'Demographic Profile',
    aboutTitle: 'About Malya Maritza',
    aboutText: 'Information Systems undergraduate at Satu University who blends analytical rigor with empathetic interface design. Specialized in decomposing ambiguous business processes into normalized relational schemas, UML diagrams, and high-fidelity prototype flows.',
    contactHeader: "Let's Connect & Collaborate",
    sendEmailBtn: 'Send Email',
    downloadResumeBtn: 'View Full Resume',

    footerText: 'Handcrafted with love & matcha • Malya Maritza Rahadiani Portfolio 2026',
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        try {
            const saved = localStorage.getItem('malya_portfolio_lang');
            return saved === 'en' ? 'en' : 'id';
        } catch {
            return 'id';
        }
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        try {
            localStorage.setItem('malya_portfolio_lang', lang);
        } catch {
            // LocalStorage error fallback
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === 'id' ? 'en' : 'id');
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const t = language === 'id' ? translationsId : translationsEn;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
