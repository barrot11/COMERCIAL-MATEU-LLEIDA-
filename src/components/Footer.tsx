import React from 'react';
import { Send, Phone, MapPin, Printer } from 'lucide-react';
import { productCategories } from '../data';
import { Language, TranslationDict } from '../types';

interface FooterProps {
  language: Language;
  t: TranslationDict;
}

export default function Footer({ language, t }: FooterProps) {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer-section" className="bg-brand-blue text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid containing corporate name, columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-12 mb-10" id="footer-main-grid">
          
          {/* Logo / Brand Column */}
          <div className="lg:col-span-4 space-y-4" id="footer-brand-col">
            <div className="flex flex-col select-none">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-none">
                COMERCIAL MATEU
              </span>
              <span className="font-sans text-xs tracking-[0.25em] text-brand-orange font-semibold leading-tight mt-0.5">
                LLEIDA SL
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.footerSlogan}
            </p>
            <div className="flex items-center space-x-2.5 pt-2 text-brand-orange text-xs font-semibold tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>{language === 'ca' ? 'SERVEI DIARI ACTIU' : 'SERVICIO DIARIO ACTIVO'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4" id="footer-nav-col">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-brand-orange">
              {t.footerLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-350">
              <li>
                <a
                  href="#inici"
                  onClick={(e) => handleAnchorClick(e, '#inici')}
                  className="hover:text-brand-orange hover:underline transition-colors block py-0.5"
                >
                  {t.navInici}
                </a>
              </li>
              <li>
                <a
                  href="#empresa"
                  onClick={(e) => handleAnchorClick(e, '#empresa')}
                  className="hover:text-brand-orange hover:underline transition-colors block py-0.5"
                >
                  {t.navEmpresa}
                </a>
              </li>
              <li>
                <a
                  href="#productes"
                  onClick={(e) => handleAnchorClick(e, '#productes')}
                  className="hover:text-brand-orange hover:underline transition-colors block py-0.5"
                >
                  {t.navProductes}
                </a>
              </li>
              <li>
                <a
                  href="#distribucio"
                  onClick={(e) => handleAnchorClick(e, '#distribucio')}
                  className="hover:text-brand-orange hover:underline transition-colors block py-0.5"
                >
                  {t.navDistribucio}
                </a>
              </li>
              <li>
                <a
                  href="#contacte"
                  onClick={(e) => handleAnchorClick(e, '#contacte')}
                  className="hover:text-brand-orange hover:underline transition-colors block py-0.5"
                >
                  {t.navContacte}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Principal Products list */}
          <div className="lg:col-span-3 space-y-4" id="footer-products-col">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-brand-orange">
              {t.footerProducts}
            </h4>
            <ul className="space-y-2 text-sm text-slate-350">
              {productCategories.map((cat) => {
                const title = language === 'ca' ? cat.titleCa : cat.titleEs;
                return (
                  <li key={cat.id}>
                    <a
                      href="#productes"
                      onClick={(e) => handleAnchorClick(e, '#productes')}
                      className="hover:text-brand-orange transition-colors block py-0.5 flex items-center space-x-1.5"
                    >
                      <span>{cat.icon}</span>
                      <span>{title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Contact address details */}
          <div className="lg:col-span-3 space-y-4 text-sm" id="footer-contact-col">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-brand-orange">
              {t.footerContact}
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{t.contactAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:973246625" className="hover:text-brand-orange font-mono">
                  973 246 625
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Printer className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="font-mono">973 044 020</span>
              </div>
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="mailto:info@comercialmateu.com" className="hover:text-brand-orange font-mono leading-none">
                  info@comercialmateu.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer / Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light" id="footer-legal-bar">
          <p id="footer-copyright-disclaimer">
            {t.footerCopyright}
          </p>
          <div className="flex items-center space-x-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 bg-white/5 px-2 py-0.5 rounded leading-none">
              ISO 9001
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded leading-none font-bold">
              EST. 1966
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
