import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, ShieldCheck, PhoneCall, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FaqPage.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'kosten' | 'ablauf' | 'sicherheit' | 'indikationen';
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'Welche Vorteile hat die Mamma-MRT gegenüber der Röntgen-Mammographie und Ultraschall?',
    answer: 'Die Mamma-MRT ist mit einer Treffsicherheit von über 95 % das empfindlichste bildgebende Verfahren in der Brustdiagnostik. Sie arbeitet völlig frei von schädlicher Röntgenstrahlung und weist selbst kleinstgewebliche Gewebeveränderungen unter 1 cm unabhängig von der Brustdichte zuverlässig nach. Insbesondere bei dichtem Brustdrüsengewebe (ACR Typ C & D), wo Röntgenscreenings bis zu 50 % der Befunde übersehen können, bietet die MRT maximale diagnostische Sicherheit.',
    category: 'indikationen'
  },
  {
    id: 2,
    question: 'Wer übernimmt die Kosten für eine Mamma-MRT im KMZ?',
    answer: 'Für Versicherte der Techniker Krankenkasse (TK) werden die Kosten im Rahmen unseres Selektivvertrags mit der QMRM GmbH bei dichtem Gewebe (ACR C/D) oder familiärem Risiko zu 100 % von der TK übernommen. Private Krankenversicherungen und Beihilfestellen erstatten die Mamma-MRT bei medizinischer Indikation ebenfalls lückenlos. Gesetzlich versicherten Patientinnen anderer Kassen bieten wir die Mamma-MRT als Selbstzahlerleistung (IGeL nach GOÄ) an.',
    category: 'kosten'
  },
  {
    id: 3,
    question: 'Welche Frauen profitieren besonders von einem Mamma-MRT Screening?',
    answer: 'Ein Mamma-MRT empfiehlt sich besonders für Frauen mit dichtem Brustdrüsengewebe (ACR C & D, betrifft ca. 45 % aller Frauen), Frauen mit familiärer/genetischer Vorbelastung (z. B. BRCA1/2-Genmutation), Trägerinnen von Brustimplantaten sowie für Frauen, die eine präzise Krebsfrüherkennung ohne Strahlenbelastung wünschen.',
    category: 'indikationen'
  },
  {
    id: 4,
    question: 'Ist die Mamma-MRT Untersuchung schmerzhaft oder eng?',
    answer: 'Nein, die Untersuchung ist völlig schmerzfrei. Im Gegensatz zur Röntgen-Mammographie wird die Brust nicht gequetscht oder komprimiert. Sie liegen entspannt auf dem Bauch in einer abgepolsterten Spezial-Brustspule. Unsere modernen 1,5-Tesla-MRT-Geräte verfügen zudem über einen sehr breiten Tunnel mit angenehmer Belüftung. Auf Wunsch spielen wir Ihre Lieblingsmusik über Kopfhörer ein.',
    category: 'ablauf'
  },
  {
    id: 5,
    question: 'Warum ist die Verabreichung eines Kontrastmittels notwendig?',
    answer: 'Bösartige Tumore benötigen für ihr Wachstum neue Blutgefäße (Neovaskularisation), die das MRT-Kontrastmittel deutlich schneller anreichern als gesundes Gewebe. Das Gadolinium-haltige Kontrastmittel macht dadurch selbst millimeterkleine Krebsfrüherkennungssignale im MRT leuchtend sichtbar.',
    category: 'sicherheit'
  },
  {
    id: 6,
    question: 'Wie sicher ist das Kontrastmittel und gibt es Nebenwirkungen?',
    answer: 'Das im KMZ genutzte MRT-Kontrastmittel ist äußerst sicher und gehört zu den am besten untersuchten Medikamenten der Radiologie. Unverträglichkeiten sind extrem selten. Das Kontrastmittel wird innerhalb weniger Stunden vollständig und spurlos über die Nieren ausgeschieden.',
    category: 'sicherheit'
  },
  {
    id: 7,
    question: 'Wann im Zyklus ist der optimale Zeitpunkt für die Untersuchung?',
    answer: 'Bei Frauen vor den Wechseljahren sollte die Mamma-MRT idealerweise zwischen dem 7. und 14. Tag des Menstruationszyklus stattfinden (gezählt ab dem 1. Tag der Regelblutung). In dieser Phase ist der hormonelle Einfluss auf das Brustdrüsengewebe am geringsten, was die Beurteilbarkeit optimiert.',
    category: 'ablauf'
  },
  {
    id: 8,
    question: 'Kann eine Mamma-MRT mit Brustimplantaten durchgeführt werden?',
    answer: 'Ja, die Mamma-MRT gilt als Goldstandard zur Beurteilung von Brustimplantaten. Sie kann sowohl das Drüsengewebe hinter dem Implantat ohne Schattenbildung beurteilen als auch die Hülle und Dichtigkeit des Silikonimplantats selbst auf feinste Risse (Rupturen) untersuchen.',
    category: 'sicherheit'
  },
  {
    id: 9,
    question: 'Wie lange dauert der Termin im KMZ?',
    answer: 'Die eigentliche Messung im MRT-Gerät dauert nur etwa 15 bis 20 Minuten. Insgesamt sollten Sie für das Vorgespräch, die Vorbereitung und die anschließende persönliche Befundbesprechung mit unserem Spezialistenteam ca. 45 bis 60 Minuten einplanen.',
    category: 'ablauf'
  },
  {
    id: 10,
    question: 'Was unterscheidet das KMZ in Bezug auf Qualitätssicherung?',
    answer: 'Das KMZ arbeitet nach den strengen Kriterien der QMRM GmbH (Kaiser MRT-Zertifizierung GmbH). Jede Aufnahme wird nach dem Doppelbefundungsprinzip von zwei zertifizierten Brustdiagnostiker:innen unabhängig befundet, und unsere Geräte entsprechen den höchsten 1,5-Tesla-Standards.',
    category: 'indikationen'
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
            <span>Fragen &amp; Antworten</span>
          </div>
          <h1 className="page-title">Häufig gestellte Fragen (FAQ)</h1>
          <p className="page-description">
            Hier finden Sie wissenschaftlich fundierte und verständliche Antworten auf alle wichtigen Fragen zu Mamma-MRT, Kostenübernahme, Ablauf und Diagnostiksicherheit.
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
              placeholder="Suchen Sie nach Stichworten wie 'Kosten', 'Zyklus', 'Implantat'..."
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
              Alle Fragen ({faqData.length})
            </button>
            <button
              className={`cat-btn ${category === 'indikationen' ? 'active' : ''}`}
              onClick={() => setCategory('indikationen')}
            >
              Vorteile &amp; Indikationen
            </button>
            <button
              className={`cat-btn ${category === 'kosten' ? 'active' : ''}`}
              onClick={() => setCategory('kosten')}
            >
              Kosten &amp; TK-Vertrag
            </button>
            <button
              className={`cat-btn ${category === 'ablauf' ? 'active' : ''}`}
              onClick={() => setCategory('ablauf')}
            >
              Ablauf &amp; Zyklus
            </button>
            <button
              className={`cat-btn ${category === 'sicherheit' ? 'active' : ''}`}
              onClick={() => setCategory('sicherheit')}
            >
              Sicherheit &amp; Implantate
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list max-w-900 m-auto">
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

        {/* Contact Banner */}
        <div className="faq-help-box mt-5">
          <ShieldCheck size={28} className="text-teal" />
          <div>
            <h4>Sie haben weitere Fragen oder wünschen eine persönliche Beratung?</h4>
            <p>Unser medizinisches Team berät Sie gerne individuell und prüft Ihre Kostenübernahme.</p>
          </div>
          <div className="faq-help-actions">
            <Link to="/terminanfrage" className="btn btn-primary">
              <Calendar size={16} />
              <span>Terminanfrage starten</span>
            </Link>
            <a href="tel:02211234567" className="btn btn-outline">
              <PhoneCall size={16} />
              <span>0221 / 123 45 67</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
