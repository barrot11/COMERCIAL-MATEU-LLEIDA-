import { Award, Info, MapPin, Sparkles } from 'lucide-react';
import { brands } from '../data';
import { Language, TranslationDict } from '../types';

interface BrandLogosSectionProps {
  language: Language;
  t: TranslationDict;
}

export default function BrandLogosSection({ language, t }: BrandLogosSectionProps) {
  return (
    <section id="distribucio" className="py-20 bg-brand-bg scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-brand-orange uppercase font-bold bg-brand-orange/15 px-3 py-1 rounded-full">
            {language === 'ca' ? 'PARTNERS OFICIALS' : 'PARTNERS OFICIALES'}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-blue mt-3 uppercase" id="brands-title">
            {t.distDistribuidors}
          </h2>
          <div className="industrial-divider-orange mx-auto my-4"></div>
          <p className="max-w-3xl mx-auto text-brand-muted text-base sm:text-lg">
            {t.distSub}
          </p>
        </div>

        {/* Brand Network Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 bg-white p-6 sm:p-10 rounded border border-slate-200/80 shadow-xs" id="brands-network-board">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-blue flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-brand-orange" />
              <span>{language === 'ca' ? 'Suministrament diari i immediat a Lleida' : 'Suministro diario e inmediato en Lleida'}</span>
            </h3>
            <p className="text-brand-dark/90 leading-relaxed text-sm sm:text-base font-light">
              {t.distIntro}
            </p>
            <p className="text-xs text-brand-muted font-normal">
              {language === 'ca' 
                ? '✓ Flota logística pròpia · ✓ Repartiment diari a l\'Alt Urgell, Alta Ribagorça, Garrigues, Noguera, Pallars, Pla d\'Urgell, Segarra, Segrià, Urgell i demés comarques.' 
                : '✓ Flota logística propia · ✓ Reparto diario en Alt Urgell, Alta Ribagorça, Garrigues, Noguera, Pallars, Pla d\'Urgell, Segarra, Segrià, Urgell y demás comarcas.'}
            </p>
          </div>
          <div className="lg:col-span-4 bg-brand-bg p-5 rounded border border-slate-200 flex flex-col justify-center items-center text-center">
            <Award className="w-10 h-10 text-brand-orange mb-2" />
            <span className="font-display text-lg font-bold uppercase tracking-wide text-brand-blue">
              {language === 'ca' ? 'Distribuïdors Líders' : 'Distribuidores Líderes'}
            </span>
            <span className="text-[11px] text-brand-muted uppercase tracking-wider font-mono mt-1">
              {language === 'ca' ? 'Garantia d\'Origen' : 'Garantía de Origen'}
            </span>
          </div>
        </div>

        {/* Branding Grid of placeholders (Styled as elegant cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="brands-grid">
          {brands.map((brand, idx) => {
            // Map sector to localized string
            let sectorLabel = '';
            if (brand.sector === 'paints') sectorLabel = t.brandCategoryPaint;
            else if (brand.sector === 'varnishes') sectorLabel = t.brandCategoryVar;
            else if (brand.sector === 'machinery') sectorLabel = t.brandCategoryMch;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded p-6 shadow-xs flex flex-col justify-between items-center text-center transition-all duration-300 hover:border-brand-orange hover:shadow-md hover:-translate-y-0.5 group"
              >
                {/* Visual placeholder imitating a logo */}
                <div className="w-full h-14 bg-slate-50 border border-dashed border-slate-200 rounded flex flex-col items-center justify-center mb-4 transition-colors group-hover:bg-brand-orange/5 group-hover:border-brand-orange/30">
                  <span className="font-display text-base font-bold text-slate-700 tracking-wide group-hover:text-brand-blue transition-colors uppercase">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-brand-muted/80 mt-0.5">
                    {t.brandOfficial}
                  </span>
                </div>

                {/* Subtitle sector & description details */}
                <div className="space-y-1">
                  <span className="inline-block bg-brand-blue/5 text-brand-blue px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
                    {sectorLabel}
                  </span>
                  <p className="text-[11px] text-brand-muted line-clamp-2 mt-1 italic font-light">
                    "{brand.tagline}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer / Owner Customization notice badge */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3" id="brands-customization-notice">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              {language === 'ca' ? 'Nota d’edició per a l’empresa' : 'Nota de edición para la empresa'}
            </h4>
            <p className="text-xs text-amber-700/90 leading-relaxed mt-1">
              {language === 'ca'
                ? 'Els blocs anteriors són placeholders de referència altament qualificats. Podeu substituir-los fàcilment des d’aquest fitxer per fitxers JPEG o línies SVG directes de les marques (Sata, Omar, Kremlin, etc.) en l’element visual per reflectir les grafies reals.'
                : 'Los bloques anteriores son placeholders de referencia. Se pueden sustituir fácilmente desde este archivo por logotipos PNG o líneas SVG vectoriales reales de las marcas (Sata, Omar, Kremlin, etc.) para reflejar su identidad corporativa exacta.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
