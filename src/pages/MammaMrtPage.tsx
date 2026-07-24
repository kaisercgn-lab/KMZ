import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Layers,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ZapOff,
  Eye,
  Info
} from 'lucide-react';
import './MammaMrtPage.css';

export const MammaMrtPage: React.FC = () => {
  const [selectedDensity, setSelectedDensity] = useState<'A' | 'B' | 'C' | 'D'>('C');

  return (
    <div className="mamma-mrt-page">
      {/* Subpage Hero */}
      <section className="page-header-section teal-gradient">
        <div className="container">
          <div className="section-tag">
            <Activity size={16} />
            <span>Spitzendiagnostik</span>
          </div>
          <h1 className="page-title">Mamma-MRT – Die modernste Brustkrebsvorsorge</h1>
          <p className="page-description">
            Die Magnetresonanztomographie der Brust ist das empfindlichste und präziseste strahlenfreie Verfahren zur zuverlässigen Früherkennung von Mammakarzinomen.
          </p>

          <div className="header-badges">
            <span className="badge badge-teal-light">Strahlenfrei</span>
            <span className="badge badge-teal-light">Höchste Sensitivität (&gt;95%)</span>
            <span className="badge badge-teal-light">Dauer ca. 15–20 Min</span>
          </div>
        </div>
      </section>

      {/* Section 1: Visual Explanation & ACR Categories */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-tag">
              <Layers size={16} />
              <span>Brustdichte nach ACR</span>
            </div>
            <h2 className="section-title">Brustdichte-Kategorien & Ihr Einfluss</h2>
            <p className="section-subtitle">
              Knapp 50% aller Frauen im Screening-Alter haben eine Brustdichte der Kategorie C oder D. Klicken Sie auf die Kategorien, um zu erfahren, warum Mamma-MRT hier essenziell ist.
            </p>
          </div>

          {/* Interactive Density Switcher */}
          <div className="density-container card">
            <div className="density-buttons">
              <button
                className={`density-btn ${selectedDensity === 'A' ? 'active' : ''}`}
                onClick={() => setSelectedDensity('A')}
              >
                <strong>ACR A</strong>
                <span>Fast rein fettig</span>
              </button>
              <button
                className={`density-btn ${selectedDensity === 'B' ? 'active' : ''}`}
                onClick={() => setSelectedDensity('B')}
              >
                <strong>ACR B</strong>
                <span>Gestreut drüsig</span>
              </button>
              <button
                className={`density-btn ${selectedDensity === 'C' ? 'active' : ''}`}
                onClick={() => setSelectedDensity('C')}
              >
                <strong>ACR C</strong>
                <span>Heterogen dicht</span>
              </button>
              <button
                className={`density-btn ${selectedDensity === 'D' ? 'active' : ''}`}
                onClick={() => setSelectedDensity('D')}
              >
                <strong>ACR D</strong>
                <span>Extrem dicht</span>
              </button>
            </div>

            <div className="density-detail-box">
              {selectedDensity === 'A' && (
                <div className="density-info animate-fade-in">
                  <h3>Kategorie ACR A – Fettreich / Transparent</h3>
                  <p>
                    Die Brust besteht überwiegend aus Fettgewebe. In der konventionellen Röntgen-Mammographie sind Auffälligkeiten in dieser Kategorie meist gut abgrenzbar. Nur ca. 10% aller Frauen fallen in diese Kategorie.
                  </p>
                </div>
              )}

              {selectedDensity === 'B' && (
                <div className="density-info animate-fade-in">
                  <h3>Kategorie ACR B – Gestreutes Drüsengewebe</h3>
                  <p>
                    Es liegen vereinzelte drüsige Gewebeinseln vor. Auch hier ist die Mammographie noch relativ übersichtlich, dennoch können kleine Herde verdeckt werden.
                  </p>
                </div>
              )}

              {selectedDensity === 'C' && (
                <div className="density-info animate-fade-in">
                  <span className="badge badge-rose mb-2">Erhöhter Bedarf an Mamma-MRT</span>
                  <h3>Kategorie ACR C – Heterogen dichtes Drüsengewebe (ca. 40% der Frauen)</h3>
                  <p>
                    Dichtes Drüsengewebe stellt sich im Röntgenbild weiß dar. Da Krebsgewebe ebenfalls weiß ist, entsteht ein „Überlagerungseffekt“. <strong>Die Mamma-MRT durchdringt dieses Gewebe strahlenfrei und findet Tumore unabhängig von der Gewebedichte.</strong>
                  </p>
                </div>
              )}

              {selectedDensity === 'D' && (
                <div className="density-info animate-fade-in">
                  <span className="badge badge-rose mb-2">Höchste Dichte & Risiko</span>
                  <h3>Kategorie ACR D – Extrem dichtes Drüsengewebe (ca. 10% der Frauen)</h3>
                  <p>
                    Bei extrem dichter Brust ist das Mammographie-Röntgenbild oft schwer beurteilbar (Maskierungseffekt). Frauen mit ACR D haben zudem ein 4–6-fach erhöhtes Krebsrisiko. <strong>Hier ist die Mamma-MRT das mit Abstand zuverlässigste Verfahren zur Früherkennung.</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Step-by-Step Examination Process */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-tag">
              <Clock size={16} />
              <span>Ablauf im KMZ</span>
            </div>
            <h2 className="section-title">Wie läuft eine Mamma-MRT Untersuchung ab?</h2>
            <p className="section-subtitle">
              Vom ersten Anamnesegespräch bis zum Befund – schmerzfrei, angenehm und hochpräzise.
            </p>
          </div>

          <div className="grid-4 process-grid">
            <div className="card process-card">
              <div className="process-number">1</div>
              <h3>Vorbereitung & Anamnese</h3>
              <p>
                Vorab klären wir Kontraindikationen (z. B. Herzschrittmacher). Bei prämenopausalen Frauen liegt der optimale Untersuchungszeitraum zwischen dem 7. und 14. Zyklustag.
              </p>
            </div>

            <div className="card process-card">
              <div className="process-number">2</div>
              <h3>Bequeme Lagerung</h3>
              <p>
                Sie liegen entspannt und schmerzfrei in Bauchlage auf einer speziell abgepolsterten Brustspule. Es findet keinerlei Schmerzhafte Kompression der Brust statt.
              </p>
            </div>

            <div className="card process-card">
              <div className="process-number">3</div>
              <h3>MRT-Messung (15–20 Min)</h3>
              <p>
                Über einen Venenzugang am Arm wird ein sehr gut verträgliches MRT-Kontrastmittel verabreicht. Hochfrequente Magnetwellen erstellen hauchdünne Schnittbilder.
              </p>
            </div>

            <div className="card process-card">
              <div className="process-number">4</div>
              <h3>Auswertung & Befund</h3>
              <p>
                Prof. Dr. med. Clemens Kaiser und unser Spezialistenteam werten die Schnittbilder sorgfältig aus und besprechen das Ergebnis persönlich mit Ihnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits Highlight */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-2 align-center gap-lg">
            <div>
              <div className="section-tag">
                <Sparkles size={16} />
                <span>Vorteile der Mamma-MRT</span>
              </div>
              <h2 className="section-title">Warum Mamma-MRT im KMZ Köln?</h2>
              <ul className="benefit-list">
                <li>
                  <ZapOff className="benefit-icon" size={22} />
                  <div>
                    <strong>Strahlenfreie Untersuchung</strong>
                    <p>Keinerlei Belastung durch Röntgenstrahlung oder radioaktive Substanzen.</p>
                  </div>
                </li>
                <li>
                  <Eye className="benefit-icon" size={22} />
                  <div>
                    <strong>Höchste Sensitivität (&gt;95%)</strong>
                    <p>Erkennt kleinste Gewebeveränderungen unter 1 cm, lang bevor sie tastbar sind.</p>
                  </div>
                </li>
                <li>
                  <ShieldCheck className="benefit-icon" size={22} />
                  <div>
                    <strong>Sicherheit bei Brustimplantaten & Narben</strong>
                    <p>Perfekt geeignet zur Beurteilung des Gewebes um Implantate oder nach Voroperationen.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="benefit-icon" size={22} />
                  <div>
                    <strong>Keine schmerzhafte Brustkompression</strong>
                    <p>Die Untersuchung erfolgt druckfrei in Bauchlage.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card info-callout-card">
              <Info className="info-icon" size={32} />
              <h3>Wichtiger Hinweis zum Kontrastmittel</h3>
              <p>
                In der Mamma-MRT wird ein modernes, gut verträgliches MRT-Kontrastmittel (Gadolinium-Verbindung) verwendet. Dieses reichert sich kurzzeitig in stark durchbluteten Arealen an und ermöglicht die zuverlässige Differenzierung von gutartigen und bösartigen Gewebeveränderungen.
              </p>
              <div className="mt-3">
                <Link to="/faqs" className="btn btn-outline">
                  <span>Häufige Fragen zum Kontrastmittel</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA Banner */}
      <section className="container mb-5">
        <div className="card patient-cta-card">
          <div>
            <h2>Vereinbaren Sie Ihren Termin zur Mamma-MRT</h2>
            <p>Schaffen Sie Klarheit und Sicherheit für Ihre persönliche Brustkrebsvorsorge.</p>
          </div>
          <Link to="/terminanfrage" className="btn btn-primary">
            <Calendar size={18} />
            <span>Jetzt Terminanfrage stellen</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
