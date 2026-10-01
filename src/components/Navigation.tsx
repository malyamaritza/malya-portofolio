import { useLanguage } from '../context/LanguageContext';

interface NavigationProps {
  activeSection: 'home' | 'projects' | 'experience' | 'certificates' | 'about' | 'detail';
  isDetailActive?: boolean;
  onNavigate: (section: 'home' | 'projects' | 'experience' | 'certificates' | 'about') => void;
  onBackToMain?: () => void;
}

export default function Navigation({
  activeSection,
  isDetailActive = false,
  onNavigate,
  onBackToMain,
}: NavigationProps) {
  const { t } = useLanguage();

  return (
    <nav
      id="main-site-navigation"
      className="sticky top-0 z-50 w-full bg-[#F2EDE0] border-b-2 border-garden-sage/50 px-3 sm:px-6 py-2 sm:py-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between text-sm font-semibold gap-2.5 sm:gap-3 shadow-md"
    >
      {/* Brand Title / Status */}
      <div className="flex items-center justify-between gap-2 text-garden-dark font-bold tracking-wide">
        <button
          type="button"
          onClick={() => {
            if (isDetailActive && onBackToMain) {
              onBackToMain();
            } else {
              onNavigate('home');
            }
          }}
          className="hover:underline text-left cursor-pointer flex items-center gap-1.5 truncate"
        >
          <span className="text-base sm:text-lg">🌿</span>
          <span className="truncate text-xs sm:text-sm font-bold">Malya's Portfolio Dossier</span>
          {isDetailActive && (
            <span className="text-[10px] sm:text-[11px] font-mono font-normal bg-garden-sand border border-garden-sage/50 text-garden-sage px-1.5 py-0.5 rounded-md shrink-0">
              (Detail)
            </span>
          )}
        </button>
      </div>

      {/* Navigation Items with Horizontal Touch Scroll on Mobile */}
      <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm overflow-x-auto pb-1 md:pb-0 scrollbar-none touch-pan-x">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
            !isDetailActive && activeSection === 'home'
              ? 'bg-garden-sage text-garden-cream shadow-xs font-bold'
              : 'hover:bg-garden-pastel text-garden-dark font-medium'
          }`}
        >
          {t.navHome}
        </button>

        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
            isDetailActive || activeSection === 'projects' || activeSection === 'detail'
              ? 'bg-garden-sage text-garden-cream shadow-xs font-bold'
              : 'hover:bg-garden-pastel text-garden-dark font-medium'
          }`}
        >
          {isDetailActive ? `${t.navProjects} (Detail)` : t.navProjects}
        </button>

        <button
          type="button"
          onClick={() => onNavigate('experience')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
            !isDetailActive && activeSection === 'experience'
              ? 'bg-garden-sage text-garden-cream shadow-xs font-bold'
              : 'hover:bg-garden-pastel text-garden-dark font-medium'
          }`}
        >
          {t.navExperience}
        </button>

        <button
          type="button"
          onClick={() => onNavigate('certificates')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
            !isDetailActive && activeSection === 'certificates'
              ? 'bg-garden-sage text-garden-cream shadow-xs font-bold'
              : 'hover:bg-garden-pastel text-garden-dark font-medium'
          }`}
        >
          {t.navCertificates}
        </button>

        <button
          type="button"
          onClick={() => onNavigate('about')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
            !isDetailActive && activeSection === 'about'
              ? 'bg-garden-sage text-garden-cream shadow-xs font-bold'
              : 'hover:bg-garden-pastel text-garden-dark font-medium'
          }`}
        >
          {t.navAbout}
        </button>

        {/* Back Button when inside Detail Page */}
        {isDetailActive && onBackToMain && (
          <button
            type="button"
            onClick={onBackToMain}
            className="ml-1 inline-flex items-center gap-1 bg-white hover:bg-garden-cream text-garden-dark border border-garden-sage/70 px-2.5 py-1 rounded-lg text-xs font-bold shadow-xs transition transform active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="text-garden-sage">←</span>
            <span>{t.navDetailBack}</span>
          </button>
        )}
      </div>
    </nav>
  );
}
