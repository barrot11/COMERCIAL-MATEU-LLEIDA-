import React, { useState } from 'react';
import { Mail, Phone, MapPin, Printer, MessageSquare, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';
import { Language, TranslationDict } from '../types';

interface ContactFormProps {
  language: Language;
  t: TranslationDict;
}

export default function ContactForm({ language, t }: ContactFormProps) {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactInfo || !message) return;

    setSubmitting(true);

    // Simulate standard form submission delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Build the mailto url link text
      const subject = `Consulta web de ${name}`;
      const body = `Nom: ${name}\nContacte: ${contactInfo}\n\nMissatge:\n${message}`;
      const mailtoUrl = `mailto:info@comercialmateu.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Try running the native mail anchor client launcher
      window.location.href = mailtoUrl;

      // Reset form fields
      setName('');
      setContactInfo('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contacte" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-orange uppercase font-bold bg-brand-orange/15 px-3 py-1 rounded-full">
            {language === 'ca' ? 'SERVEI DIRET' : 'SERVICIO DIRECTO'}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-blue mt-3 uppercase" id="contact-title">
            {t.contactTitle}
          </h2>
          <div className="industrial-divider-orange mx-auto my-4"></div>
          <p className="max-w-3xl mx-auto text-brand-muted text-base sm:text-lg">
            {t.contactSubtitle}
          </p>
        </div>

        {/* 2-Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-inner-grid">
          
          {/* Left Column: Data & Contact Form */}
          <div className="lg:col-span-6 space-y-10" id="contact-details-and-form">
            
            {/* Contact details cards */}
            <div className="bg-brand-bg rounded p-6 shadow-xs border border-slate-200/60 space-y-5" id="corporate-particulars-box">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-brand-blue border-b border-slate-200 pb-3">
                {language === 'ca' ? 'Dades de Comercial Mateu' : 'Datos de Comercial Mateu'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-dark leading-relaxed font-medium">
                    {t.contactAddress}
                  </span>
                </div>
                <div className="flex items-center space-x-3.5">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a
                    href="tel:+34973246625"
                    className="text-sm text-brand-dark hover:text-brand-orange font-medium font-mono"
                  >
                    +34 973 246 625
                  </a>
                </div>
                <div className="flex items-center space-x-3.5">
                  <Printer className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm text-brand-dark font-medium font-mono">
                    +34 973 044 020
                  </span>
                </div>
                <div className="flex items-center space-x-3.5">
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a
                    href="mailto:info@comercialmateu.com"
                    className="text-sm text-brand-dark hover:text-brand-orange font-medium font-mono"
                  >
                    info@comercialmateu.com
                  </a>
                </div>
              </div>

              {/* Social Channels buttons list */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2.5" id="social-shortcuts">
                {/* Whatsapp */}
                <a
                  href="https://wa.me/34973246625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-2 px-3.5 rounded transition-all shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white text-xs font-bold uppercase tracking-wider py-2 px-3.5 rounded transition-all shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider py-2 px-3.5 rounded transition-all shadow-xs"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Simple React Validation Form */}
            <div className="bg-white rounded border border-slate-200 p-6 shadow-xs relative" id="contact-react-form">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-brand-blue mb-4">
                {language === 'ca' ? 'Formulari de consulta àgil' : 'Formulario de consulta rápida'}
              </h3>
              
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg flex items-start space-x-3 animate-fade-in" id="form-success-alert">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-900">
                      {t.formSuccess}
                    </h4>
                    <p className="text-xs text-emerald-700 mt-1">
                      {language === 'ca' 
                        ? 'Si el vostre programari no ha llançat el correu automàticament, recordeu escriure a info@comercialmateu.com directament.' 
                        : 'Si su cliente de correo electrónico no se abrió automáticamente, recuerde escribirnos a info@comercialmateu.com.'}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3.5 text-xs font-bold underline text-emerald-900 cursor-pointer hover:text-emerald-950 block"
                    >
                      {language === 'ca' ? 'Enviar un altre missatge' : 'Enviar otro mensaje'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'ca' ? 'Ex. Jordi Mateu' : 'Ej. Jordi Mateu'}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-hidden focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t.formPhoneEmail} *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder={language === 'ca' ? 'Ex. jordi@correu.cat o 600 000 000' : 'Ej. jordi@correo.es o 600 000 000'}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-hidden focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t.formMessage} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={language === 'ca' ? 'Descriviu la vostra consulta sobre pintures o maquinària...' : 'Describa su consulta de pinturas o maquinaria...'}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded text-sm focus:outline-hidden focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-slate-400"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs uppercase tracking-widest py-3 px-4 rounded transition-all shadow-md focus:outline-hidden cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? t.formSending : t.formSend}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed Frame */}
          <div className="lg:col-span-6 flex flex-col h-full" id="contact-map-column">
            <div className="bg-brand-bg p-4 rounded border border-slate-200 flex-grow flex flex-col h-full shadow-xs" id="map-frame-box">
              <div className="flex items-center space-x-2 mb-3.5 text-brand-blue">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span className="font-display text-sm font-bold uppercase tracking-wider">
                  {language === 'ca' ? 'LOCALITZACIÓ DE LA NOSTRA SEU' : 'LOCALIZACIÓN DE NUESTRA SEDE'}
                </span>
              </div>
              <div className="relative rounded overflow-hidden shadow-inner flex-grow min-h-[350px] border border-slate-200 bg-slate-100">
                <iframe
                  title="Ubicació Comercial Mateu de Lleida"
                  src="https://maps.google.com/maps?q=Carrer+de+Jaume+d'Agramunt,+11,+25005+Lleida&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  id="google-maps-embed-element"
                ></iframe>
              </div>
              <div className="mt-3.5 flex items-center justify-between text-[11px] text-brand-muted">
                <span>{language === 'ca' ? '✓ Aparcament fàcil zona industrial' : '✓ Fácil aparcamiento en zona industrial'}</span>
                <span>{language === 'ca' ? 'Dilluns a Divendres' : 'Lunes a Viernes'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
