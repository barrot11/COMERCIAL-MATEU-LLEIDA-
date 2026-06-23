import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Paintbrush, ShieldCheck, Factory, Settings, Award } from 'lucide-react';
import Header from './components/Header';
import InstallationsSection from './components/InstallationsSection';
import ProductsSection from './components/ProductsSection';
import BrandLogosSection from './components/BrandLogosSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { translations } from './data';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ca');
  const t = translations[language];

  // Force scroll behaviour smooth on load and reload
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleAnchorScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans antialiased" id="main-application-container">
      {/* 1. Header Navigation System */}
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* 2. Hero Section */}
      <main className="flex-grow pt-20" id="main-content-layout">
        <section
          id="inici"
          className="relative min-h-[90vh] theme-hero-gradient text-white flex flex-col justify-between overflow-hidden"
        >
          {/* Decorative industrial-themed overlay patterns */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8541A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -right-40 -top-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/4 bottom-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Core Hero Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center py-20 relative z-10 w-full">
            <div className="max-w-3xl space-y-8" id="hero-message-board">
              
              {/* Dynamic Badges / Pills list */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3" id="hero-badge-pills">
                <span className="inline-flex items-center space-x-1 theme-pill cursor-default">
                  {t.badgePaints}
                </span>
                <span className="inline-flex items-center space-x-1 theme-pill cursor-default">
                  {t.badgeVarnishes}
                </span>
                <span className="inline-flex items-center space-x-1 theme-pill cursor-default">
                  {t.badgeMachinery}
                </span>
              </div>

              {/* Spectacular Typography Heading */}
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6.5rem font-extrabold tracking-tight uppercase leading-[1.05] text-white">
                  {t.heroTitle}
                </h1>
                <p className="font-sans text-brand-orange font-bold text-base sm:text-xl md:text-2xl tracking-wide uppercase">
                  {t.heroSubtitle}
                </p>
              </div>

              {/* Two clear core Call To Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2" id="hero-cta-buttons">
                {/* Primary Orange CTA */}
                <button
                  onClick={() => handleAnchorScroll('contacte')}
                  className="bg-brand-orange hover:opacity-90 active:scale-98 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                {/* Secondary Outline CTA */}
                <button
                  onClick={() => handleAnchorScroll('productes')}
                  className="bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded border border-white/30 transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>{t.ctaSecondary}</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange" />
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Hero Stats Banner (3 Core Elements) */}
          <div className="bg-brand-blue-dark/50 backdrop-blur-md border-t border-white/15 relative z-10 w-full" id="hero-stats-bar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                
                {/* Stat 1: Desde 1966 */}
                <div className="theme-stat-card p-5 rounded-sm">
                  <div className="flex items-center space-x-3 text-brand-orange font-display text-3xl font-bold uppercase tracking-wider">
                    <span>1966</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/50 font-bold mt-1">
                      {t.statYear}
                    </span>
                    <span className="block text-[11px] text-slate-300 font-light mt-0.5">
                      {language === 'ca' 
                        ? 'Treballant al costat dels millors proveïdors industrials' 
                        : 'Trabajando junto a los mejores proveedores industriales'}
                    </span>
                  </div>
                </div>

                {/* Stat 2: Tota la Provincia */}
                <div className="theme-stat-card p-5 rounded-sm">
                  <div className="font-display text-3xl font-bold uppercase tracking-wider text-white">
                    <span>LLEIDA</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/50 font-bold mt-1">
                      {t.statLocation}
                    </span>
                    <span className="block text-[11px] text-slate-300 font-light mt-0.5">
                      {language === 'ca' 
                        ? 'Transport propi diari a tota la província' 
                        : 'Transporte propio diario en toda la provincia'}
                    </span>
                  </div>
                </div>

                {/* Stat 3: Servei Tecnico Propio */}
                <div className="theme-stat-card p-5 rounded-sm">
                  <div className="font-display text-3xl font-bold uppercase tracking-wider text-white">
                    <span>PROPI</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/50 font-bold mt-1">
                      {t.statService}
                    </span>
                    <span className="block text-[11px] text-slate-300 font-light mt-0.5">
                      {language === 'ca' 
                        ? 'Manteniment ràpid i posada a punt d’equips' 
                        : 'Mantenimiento rápido y puesta a punto de equipos'}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* 3. Empresa Section (History, Grid of installations & Tintometry Highlight) */}
        <InstallationsSection language={language} t={t} />

        {/* Industrial divider lines between main areas */}
        <hr className="industrial-divider" />

        {/* 4. Productes Section (Interactive Category/Search System) */}
        <ProductsSection language={language} t={t} />

        <hr className="industrial-divider" />

        {/* 5. Brand Logos / Partners Section */}
        <BrandLogosSection language={language} t={t} />

        <hr className="industrial-divider" />

        {/* 6. Contact and Embedded Google Location Maps */}
        <ContactForm language={language} t={t} />
      </main>

      {/* 7. Footer system */}
      <Footer language={language} t={t} />
    </div>
  );
}
