import { Clock, HelpCircle, Truck, Wrench } from 'lucide-react';
import { installations } from '../data';
import { Language, TranslationDict } from '../types';

interface InstallationsSectionProps {
  language: Language;
  t: TranslationDict;
}

export default function InstallationsSection({ language, t }: InstallationsSectionProps) {
  return (
    <section id="empresa" className="py-20 bg-brand-bg scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-orange uppercase font-bold bg-brand-orange/15 px-3 py-1 rounded-full">
            {t.statYear}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-blue mt-3 uppercase" id="empresa-title">
            {t.empresaTitle}
          </h2>
          <div className="industrial-divider-orange mx-auto my-4"></div>
          <p className="max-w-3xl mx-auto text-brand-muted text-base sm:text-lg">
            {t.empresaSubtitle}
          </p>
        </div>

        {/* History Intro and Big 1966 Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* History texts col */}
          <div className="lg:col-span-7 space-y-6 text-brand-dark" id="empresa-history-text">
            <p className="text-lg leading-relaxed font-light text-justify">
              {t.empresaDesc1}
            </p>
            <p className="text-lg leading-relaxed font-normal text-justify text-brand-blue/90 border-l-4 border-brand-orange pl-4">
              {t.empresaDesc2}
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center space-x-1.5 bg-brand-blue text-white px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5 text-brand-orange" />
                <span>{language === 'ca' ? 'Entrega diària província' : 'Entrega diaria provincia'}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 bg-brand-blue text-white px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5 text-brand-orange" />
                <span>{t.statService}</span>
              </span>
            </div>
          </div>

          {/* Large Inception Year Hero-Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" id="corporate-inception-card">
            <div className="relative bg-brand-blue text-white rounded-lg p-8 sm:p-10 shadow-xl max-w-sm w-full border-b-4 border-brand-orange overflow-hidden select-none">
              {/* Decorative industrial grid background effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full transform translate-x-10 -translate-y-10" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full" />
              
              <span className="font-mono text-brand-orange text-xs tracking-widest uppercase block font-bold mb-1">
                {language === 'ca' ? 'HISTÒRIA I RIGOR' : 'HISTORIA Y RIGOR'}
              </span>
              <h3 className="font-display text-7xl sm:text-8xl font-black tracking-tighter text-white leading-none mt-2">
                1966
              </h3>
              <p className="font-sans text-white/90 text-sm mt-4 leading-relaxed font-light">
                {language === 'ca' 
                  ? 'Fundació de l’empresa com a magatzem de vernissos i pintures. Més de mig segle d’aliança i servei insubstituïble al pintor professional d’interior i d’indústria.' 
                  : 'Fundación de la empresa como almacén de barnices y pinturas. Más de medio siglo de alianza y servicio insustituible al pintor profesional de interior y de industria.'}
              </p>
              <div className="mt-6 flex items-center space-x-3 text-brand-orange border-t border-white/10 pt-4">
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="font-mono text-xs tracking-wider uppercase font-semibold">
                  {language === 'ca' ? 'Més de 55 anys d’èxit' : 'Más de 55 años de éxito'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3x2 Grid of 6 facility installations features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="instal-grid">
          {installations.map((item) => {
            const title = language === 'ca' ? item.titleCa : item.titleEs;
            const desc = language === 'ca' ? item.descCa : item.descEs;
            
            // Custom highlight patterns based on the spec
            const isLogistic = item.id === 'logistic';
            const isService = item.id === 'tecnic';

            return (
              <div
                key={item.id}
                className={`bg-white p-6 rounded border transition-all duration-300 relative group overflow-hidden ${
                  isLogistic 
                    ? 'border-l-4 border-brand-orange shadow-md' 
                    : isService 
                    ? 'border-l-4 border-brand-blue shadow-sm'
                    : 'border-slate-200/80 hover:border-brand-blue/30 shadow-xs'
                } hover:shadow-md hover:-translate-y-0.5`}
              >
                {/* Accent watermark background shapes on highlights */}
                {isLogistic && (
                  <div className="absolute right-3 top-3 bg-brand-orange/10 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-brand-orange flex items-center space-x-1">
                    <span>{language === 'ca' ? 'ENTREGA DIÀRIA' : 'ENTREGA DIARIA'}</span>
                  </div>
                )}
                {isService && (
                  <div className="absolute right-3 top-3 bg-brand-blue/10 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    <span>{language === 'ca' ? 'TECNIC PROPI' : 'TÉCNICO PROPIO'}</span>
                  </div>
                )}

                <div className="text-3xl mb-4 text-brand-blue filter drop-shadow-sm select-none">
                  {item.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-brand-blue uppercase tracking-wide mb-2">
                  {title}
                </h4>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlighting Card: Custom Full-Width Tintometric highlight */}
        <div className="mt-8" id="tintometric-technology-card">
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-lg p-6 sm:p-10 text-white shadow-lg border-l-4 border-brand-orange relative overflow-hidden">
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 pointer-events-none bg-radial-gradient from-white to-transparent" />
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
              <div className="bg-white/10 p-4 rounded-lg flex-shrink-0 flex items-center justify-center">
                <span className="text-5xl select-none" role="img" aria-label="Spectrophotometer chromatic layout">🎨</span>
              </div>
              <div className="flex-grow space-y-3">
                <span className="inline-flex items-center space-x-1.5 bg-brand-orange text-white px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest leading-none">
                  🔍 {language === 'ca' ? 'TECNOLOGIA DIFERENCIADORA' : 'TECNOLOGÍA DIFERENCIADORA'}
                </span>
                <h4 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                  {t.tintometricTitle}
                </h4>
                <p className="text-sm text-white/90 leading-relaxed font-light">
                  {t.tintometricDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1.5">
                  {(language === 'ca' 
                    ? ['Plàstics', 'Façanes', 'Esmalts', 'Laques', 'Metal·litzats', 'Epoxis'] 
                    : ['Plásticos', 'Fachadas', 'Esmaltes', 'Lacas', 'Metalizados', 'Epoxis']
                  ).map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-white/10 text-slate-100 text-xs px-2.5 py-1 rounded transition-colors hover:bg-white/15"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
