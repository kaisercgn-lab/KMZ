import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, ShieldCheck } from 'lucide-react';
import './FaqPage.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'kosten' | 'ablauf' | 'sicherheit';
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'Übernimmt meine Krankenkasse die Kosten für eine Mamma-MRT?',
    answer: 'Privatkassen und Beihilfestellen übernehmen die Kosten bei entsprechender Indikation (wie dichter Brust, familiärem Risiko oder Abklärungsbedarf) in der Regel problemlos. Für gesetzlich versicherte Patientinnen bieten wir die Mamma-MRT als Selbstzahlerleistung (IGeL nach GOÄ) an. In Einzelfällen kann ein Antrag auf Kostenübernahme bei der GKV gestellt werden.',
    category: 'kosten'
  },
  {
    id: 2,
    question: 'Ist die Mamma-MRT Untersuchung schmerzhaft?',
    answer: 'Nein, absolut nicht. Anders als bei der herkömmlichen Mammographie wird die Brust während der MRT-Untersuchung nicht komprimiert oder gequetscht. Sie liegen entspannt auf dem Bauch, und die Brust ruht schmerzfrei in einer abgepolsterten Spulenaussparung.',
    category: 'ablauf'
  },
  {
    id: 3,
    question: 'Warum ist ein Kontrastmittel für die Mamma-MRT notwendig?',
    answer: 'Das MRT-Kontrastmittel (Gadolinium) ist essenziell, weil bösartige Gewebeveränderungen (Tumore) vermehrt neue Blutgefäße bilden und Kontrastmittel schneller anreichern als gesundes Drüsengewebe. Dadurch werden selbst millimeterkleine Karzinome hochpräzise sichtbar.',
    category: 'sicherheit'
  },
  {
    id: 4,
    question: 'Wann im Monatszyklus sollte die Untersuchung durchgeführt werden?',
    answer: 'Bei Frauen vor den Wechseljahren ist der optimale Untersuchungszeitraum zwischen dem 7. und 14. Zyklustag (gemessen ab dem ersten Tag der letzten Regelblutung). In dieser Phase ist das Drüsengewebe am wenigsten durch körpereigene Hormone beeinflusst.',
    category: 'ablauf'
  },
  {
    id: 5,
    question: 'Kann eine Mamma-MRT auch mit Brustimplantaten durchgeführt werden?',
    answer: 'Ja, sehr gut! Die Mamma-MRT ist die bevorzugte Untersuchungsmethode bei Frauen mit Silikonimplantaten, da sie sowohl das Drüsengewebe hinter dem Implantat als auch die Hülle und Integrität des Implantats scharf darstellen kann.',
    category: 'sicherheit'
  },
  {
    id: 6,
    question: 'Wie lange dauert die gesamte Untersuchung im KMZ?',
    answer: 'Die reine Messzeit im MRT-Gerät beträgt ca. 15 bis 20 Minuten. Inklusive Vorbesprechung, Ausfüllen des Anamnesebogens und dem anschließenden Befundgespräch sollten Sie etwa 45 bis 60 Minuten einplanen.',
    category: 'ablauf'
  }
];

export const FaqPage: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');

  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) ||
                          item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'all' || item.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="faq-page">
      <section className="page-header-section teal-gradient">
        <div className="container">
          <div className="section-tag">
            <HelpCircle size={16} />
            <span>Fragen & Antworten</span>
          </div>
          <h1 className="page-title">Häufig gestellte Fragen (FAQ)</h1>
          <p className="page-description">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Mamma-MRT, Kostenübernahme, Ablauf und Sicherheit.
          </p>
        </div>
      </section>

      <section className="section-padding container">
        {/* Search & Category Filter */}
        <div className="faq-filter-bar mb-5">
          <div className="search-input-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Frage suchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="faq-cat-buttons">
            <button
              className={`cat-btn ${category === 'all' ? 'active' : ''}`}
              onClick={() => setCategory('all')}
            >
              Alle Fragen
            </button>
            <button
              className={`cat-btn ${category === 'kosten' ? 'active' : ''}`}
              onClick={() => setCategory('kosten')}
            >
              Kosten & Kasse
            </button>
            <button
              className={`cat-btn ${category === 'ablauf' ? 'active' : ''}`}
              onClick={() => setCategory('ablauf')}
            >
              Ablauf & Dauer
            </button>
            <button
              className={`cat-btn ${category === 'sicherheit' ? 'active' : ''}`}
              onClick={() => setCategory('sicherheit')}
            >
              Sicherheit & Implantate
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`card faq-accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                </button>
                {isOpen && (
                  <div className="faq-answer-pane animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-5 text-muted">
              Keine passenden Antworten für Ihre Suchanfrage gefunden.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
