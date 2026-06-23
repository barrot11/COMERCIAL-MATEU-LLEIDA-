import { useState } from 'react';
import { Search, SlidersHorizontal, Check } from 'lucide-react';
import { productCategories } from '../data';
import { Language, TranslationDict } from '../types';

interface ProductsSectionProps {
  language: Language;
  t: TranslationDict;
}

export default function ProductsSection({ language, t }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter categories and lists based on query & selected category
  const filteredCategories = productCategories.map((cat) => {
    const itemsList = language === 'ca' ? cat.items : cat.itemsEs;
    
    // Filter items based on search query
    const matchingItems = itemsList.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...cat,
      filteredItems: matchingItems,
      hasMatch: matchingItems.length > 0
    };
  }).filter((cat) => {
    // Filter categories based on selection
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    // Only show categories that have matching subcategory items if there is a search query
    if (searchQuery && !cat.hasMatch) {
      return false;
    }
    return true;
  });

  return (
    <section id="productes" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-brand-orange uppercase font-bold bg-brand-orange/15 px-3 py-1 rounded-full">
            {language === 'ca' ? 'CATÀLEG PROFESSIONAL' : 'CATÁLOGO PROFESIONAL'}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-blue mt-3 uppercase" id="products-title">
            {t.productesTitle}
          </h2>
          <div className="industrial-divider-orange mx-auto my-4"></div>
          <p className="max-w-3xl mx-auto text-brand-muted text-base sm:text-lg">
            {t.productesSubtitle}
          </p>
        </div>

        {/* Search and Filters Hub */}
        <div className="bg-brand-bg rounded-lg p-5 border border-slate-200/60 shadow-xs mb-10 space-y-4" id="catalog-control-center">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md" id="catalog-search-wrapper">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted w-5 h-5" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded bg-white border border-slate-200 text-sm placeholder:text-brand-muted/75 focus:outline-hidden focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-orange text-xs font-bold"
                >
                  {language === 'ca' ? 'Netejar' : 'Limpiar'}
                </button>
              )}
            </div>

            {/* Hint label */}
            <div className="hidden lg:flex items-center space-x-2 text-xs text-brand-muted" id="catalog-search-hint">
              <SlidersHorizontal className="w-4 h-4 text-brand-orange" />
              <span>{language === 'ca' ? 'Filtra per sectors o utilitza la cerca de productes' : 'Filtra por sectores o utiliza el buscador'}</span>
            </div>
          </div>

          {/* Scrolling category tabs list */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/50" id="catalog-category-navigator">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-white text-brand-blue hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.allCategories}
            </button>
            {productCategories.map((cat) => {
              const title = language === 'ca' ? cat.titleCa : cat.titleEs;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-brand-orange text-white shadow-sm'
                      : 'bg-white text-brand-blue hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className="select-none">{cat.icon}</span>
                  <span>{title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Products Grid Layout */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-catalog-grid">
            {filteredCategories.map((cat) => {
              const categoryTitle = language === 'ca' ? cat.titleCa : cat.titleEs;
              const categorySub = language === 'ca' ? cat.subCa : cat.subEs;
              const displayItems = cat.filteredItems || (language === 'ca' ? cat.items : cat.itemsEs);

              return (
                <div
                  key={cat.id}
                  className="bg-white border border-slate-200 rounded shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:border-brand-blue/20"
                >
                  {/* Category Card Header */}
                  <div className="bg-brand-bg p-5 border-b border-slate-100 flex items-center space-x-3.5">
                    <span className="text-3.5xl p-2.5 bg-white shadow-xs rounded select-none filter drop-shadow-xs transition-transform group-hover:scale-110 duration-300">
                      {cat.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-brand-blue">
                        {categoryTitle}
                      </h3>
                      <p className="text-xs text-brand-muted line-clamp-1 mt-0.5 font-light">
                        {categorySub}
                      </p>
                    </div>
                  </div>

                  {/* List of subcategories / items */}
                  <div className="p-5 flex-grow bg-white">
                    <ul className="space-y-2.5" id={`list-${cat.id}`}>
                      {displayItems.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm text-brand-dark/95 py-0.5 hover:text-brand-orange transition-colors"
                        >
                          <span className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0 text-brand-orange">
                            <Check className="w-3 h-3 stroke-[3px]" />
                          </span>
                          <span className="font-medium tracking-wide">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight bottom footer for certain categories */}
                  {cat.id === 'technical' && (
                    <div className="bg-brand-blue/5 px-5 py-3 border-t border-brand-blue/10 flex items-center justify-between text-xs font-semibold text-brand-blue">
                      <span>🔧 {t.statService}</span>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-brand-orange-dark">Apeu d’obra</span>
                    </div>
                  )}
                  {cat.id === 'tintometry' && (
                    <div className="bg-brand-orange/5 px-5 py-3 border-t border-brand-orange/10 flex items-center justify-between text-xs font-semibold text-brand-orange-dark">
                      <span>🎨 {language === 'ca' ? 'Fórmula al minut' : 'Fórmula al minuto'}</span>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-brand-blue">Espectrofotòmetre</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-brand-bg rounded border border-dashed border-slate-300/80" id="products-feedback-empty">
            <span className="text-4xl select-none" role="img" aria-label="No results">🔎</span>
            <h3 className="font-display text-lg font-bold text-brand-blue uppercase mt-3">
              {language === 'ca' ? 'No s’han trobat productes o seccions' : 'No se encontraron productos o secciones'}
            </h3>
            <p className="text-sm text-brand-muted max-w-sm mx-auto mt-1">
              {language === 'ca' 
                ? 'Prova de redefinir els filtres de cerca o prem "Netejar" per llistar tot el catàleg professional.' 
                : 'Prueba a redefinir los filtros de búsqueda o pulsa "Limpiar" para listar todo el catálogo.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 bg-brand-blue text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-brand-blue-dark transition-colors cursor-pointer"
            >
              {language === 'ca' ? 'Veure tot el catàleg' : 'Ver todo el catálogo'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
