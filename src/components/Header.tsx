import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Language, TranslationDict } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
}

export default function Header({ language, setLanguage, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.navInici, href: '#inici' },
    { label: t.navEmpresa, href: '#empresa' },
    { label: t.navProductes, href: '#productes' },
    { label: t.navDistribucio, href: '#distribucio' },
    { label: t.navContacte, href: '#contacte' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-blue/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-brand-blue py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#inici"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inici');
            }}
            className="flex flex-col select-none group"
            id="header-brand-logo"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-none transition-colors group-hover:text-brand-orange-dark">
              COMERCIAL MATEU
            </span>
            <span className="font-sans text-xs tracking-[0.25em] text-brand-orange font-semibold leading-tight mt-0.5">
              LLEIDA SL
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" id="header-desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-150 rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone Contact & Translation Toggle */}
          <div className="hidden sm:flex items-center space-x-4" id="header-corporate-meta">
            <a
              href="tel:973246625"
              className="flex items-center space-x-2 text-white/95 hover:text-brand-orange transition-colors duration-200"
            >
              <Phone className="w-4 align-middle h-4 text-brand-orange" />
              <span className="font-mono text-sm tracking-wide font-medium">{t.phoneVisible}</span>
            </a>

            {/* Language Selector */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5" id="nav-language-picker">
              <button
                onClick={() => setLanguage('ca')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'ca'
                    ? 'bg-brand-orange text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                CAT
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'es'
                    ? 'bg-brand-orange text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ESP
              </button>
            </div>
          </div>

          {/* Mobile hamburger menu and translation */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Small screen Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'ca' ? 'es' : 'ca')}
              className="flex items-center space-x-1 bg-white/15 px-2.5 py-1 rounded text-xs text-white font-bold"
              title="Canviar idioma / Cambiar idioma"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-white/90 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-white/10 animate-fade-in" id="mobile-menu-panel">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-3 py-3 rounded text-base font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-white/10 my-3 pt-3 px-3">
              <a
                href="tel:973246625"
                className="flex items-center space-x-3 text-white/90 hover:text-brand-orange py-2"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                <span className="font-mono text-base tracking-wide font-medium">{t.phoneVisible}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
