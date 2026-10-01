"use client";

import { useState, useEffect } from 'react';
import RetroHeader from '@/components/RetroHeader';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ArchiveBooksSection from '@/components/ArchiveBooksSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificateGallerySection from '@/components/CertificateGallerySection';
import AboutContactSection from '@/components/AboutContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import ProjectDetailView from '@/components/ProjectDetailView';
import { ProjectTab, ProjectCategory } from '@/types';
import { LanguageProvider } from '@/context/LanguageContext';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'catA' | 'catB' | 'catC'>('catA');
  const [selectedTabId, setSelectedTabId] = useState<string>('damakara');
  const [activeDetailProject, setActiveDetailProject] = useState<{
    project: ProjectTab;
    category: ProjectCategory;
  } | null>(null);
  const [activeSection, setActiveSection] = useState<'home' | 'projects' | 'experience' | 'certificates' | 'about' | 'detail'>('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  // Dynamic scroll-spy to keep the active section green highlight synchronized
  useEffect(() => {
    if (activeDetailProject) return;

    const sections: { id: string; name: 'home' | 'projects' | 'experience' | 'certificates' | 'about' }[] = [
      { id: 'hero', name: 'home' },
      { id: 'projects-archive', name: 'projects' },
      { id: 'experience', name: 'experience' },
      { id: 'certificates', name: 'certificates' },
      { id: 'about-contact', name: 'about' },
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDetailProject]);

  const handleSelectCategory = (catKey: 'catA' | 'catB' | 'catC') => {
    setSelectedCategory(catKey);
    if (catKey === 'catA') setSelectedTabId('damakara');
    if (catKey === 'catB') setSelectedTabId('gocamp');
    if (catKey === 'catC') setSelectedTabId('eatventory');
  };

  const handleSelectHighlight = (category: 'catA' | 'catB' | 'catC', tabId: string) => {
    setActiveDetailProject(null);
    setSelectedCategory(category);
    setSelectedTabId(tabId);
    setActiveSection('projects');
    const el = document.getElementById('projects-archive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetail = (project: ProjectTab, category: ProjectCategory) => {
    setActiveDetailProject({ project, category });
    setActiveSection('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setActiveDetailProject(null);
    setActiveSection('projects');
    setTimeout(() => {
      const el = document.getElementById('projects-archive');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigate = (section: 'home' | 'projects' | 'experience' | 'certificates' | 'about') => {
    if (activeDetailProject) {
      setActiveDetailProject(null);
    }
    setActiveSection(section);
    setTimeout(() => {
      const targetId =
        section === 'home'
          ? 'hero'
          : section === 'projects'
            ? 'projects-archive'
            : section === 'experience'
              ? 'experience'
              : section === 'certificates'
                ? 'certificates'
                : 'about-contact';
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <LanguageProvider>
      <div className="text-garden-dark font-sans antialiased selection:bg-garden-pastel selection:text-garden-dark p-2 sm:p-4 md:p-8 lg:p-12 min-h-screen flex flex-col items-center justify-center">
        {/* Main Retro Browser Window Container */}
        <div
          id="retro-browser-container"
          className="w-full max-w-6xl bg-garden-cream border-2 border-garden-sage rounded-xl sm:rounded-2xl shadow-scrapbook-lg flex flex-col my-auto transition-all"
        >
          {/* Top Navigation Header (Retro OS bar) with Language Switcher */}
          <RetroHeader />

          {/* Full-Width Main Navigation Bar with Dynamic Active Highlight */}
          <Navigation
            activeSection={activeSection}
            isDetailActive={!!activeDetailProject}
            onNavigate={handleNavigate}
            onBackToMain={handleBackToMain}
          />

          {/* Main Page Content */}
          <main className="w-full flex flex-col divide-y-2 divide-garden-sage/30">
            {activeDetailProject ? (
              /* Halaman Detail Projek */
              <div className="p-3 sm:p-6 md:p-8 paper-texture">
                <ProjectDetailView
                  project={activeDetailProject.project}
                  category={activeDetailProject.category}
                  onBack={handleBackToMain}
                />
              </div>
            ) : (
              /* Tampilan Halaman Utama */
              <>
                {/* Section 1: Hero & Education Timeline (Cream Background) */}
                <div className="p-3 sm:p-6 md:p-8 paper-texture">
                  <HeroSection
                    onSelectHighlight={handleSelectHighlight}
                    onOpenResumeModal={() => setIsResumeModalOpen(true)}
                  />
                </div>

                {/* Section 2: Interactive Landscape Archive Books (Cream Background) */}
                <div className="p-3 sm:p-6 md:p-8 paper-texture">
                  <ArchiveBooksSection
                    selectedCategory={selectedCategory}
                    selectedTabId={selectedTabId}
                    onSelectCategory={handleSelectCategory}
                    onSelectTab={(tabId) => setSelectedTabId(tabId)}
                    onSelectProjectDetail={handleOpenDetail}
                  />
                </div>

                {/* Section 3: Organizational Experience & Involvements (Header Green Background #8FA87B) */}
                <div className="p-3 sm:p-6 md:p-8 paper-texture-green border-y-2 border-garden-sage shadow-inner">
                  <ExperienceSection />
                </div>

                {/* Section 4: Certificate Gallery (Cream Background) */}
                <div className="p-3 sm:p-6 md:p-8 paper-texture">
                  <CertificateGallerySection />
                </div>

                {/* Section 5: About & Contact (Header Green Background #8FA87B) */}
                <div className="p-3 sm:p-6 md:p-8 paper-texture-green border-t-2 border-garden-sage shadow-inner">
                  <AboutContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
                </div>
              </>
            )}
          </main>

          {/* Cute Retro Carrd-style Footer */}
          <Footer />
        </div>

        {/* Interactive Modals */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
