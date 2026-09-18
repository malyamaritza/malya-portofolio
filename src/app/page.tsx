"use client";

import { useState } from "react";
import RetroHeader from "@/components/RetroHeader";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ArchiveBooksSection from "@/components/ArchiveBooksSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutContactSection from "@/components/AboutContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<"catA" | "catB" | "catC">("catA");
  const [selectedTabId, setSelectedTabId] = useState<string>("damakara");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  const handleSelectCategory = (catKey: "catA" | "catB" | "catC") => {
    setSelectedCategory(catKey);
    if (catKey === "catA") setSelectedTabId("damakara");
    if (catKey === "catB") setSelectedTabId("empact");
    if (catKey === "catC") setSelectedTabId("elo");
  };

  const handleSelectHighlight = (category: "catA" | "catB" | "catC", tabId: string) => {
    setSelectedCategory(category);
    setSelectedTabId(tabId);
    const el = document.getElementById("projects-archive");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-garden-dark font-sans antialiased p-3 md:p-8 lg:p-12 min-h-screen flex flex-col items-center justify-center">
      {/* Main Retro Browser Window Container */}
      <div
        id="retro-browser-container"
        className="w-full max-w-6xl bg-garden-cream border-2 border-garden-sage rounded-2xl shadow-scrapbook-lg overflow-hidden flex flex-col my-auto transition-all"
      >
        <RetroHeader onOpenNextJsGuide={() => { }} />
        <Navigation onOpenNextJsGuide={() => { }} />

        <main className="p-4 sm:p-6 md:p-8 space-y-12 paper-texture">
          <HeroSection
            onSelectHighlight={handleSelectHighlight}
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          <ArchiveBooksSection
            selectedCategory={selectedCategory}
            selectedTabId={selectedTabId}
            onSelectCategory={handleSelectCategory}
            onSelectTab={(tabId) => setSelectedTabId(tabId)}
          />

          <ExperienceSection />

          <AboutContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        </main>

        <Footer />
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}