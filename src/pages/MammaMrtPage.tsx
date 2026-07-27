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
  Award,
  HelpCircle,
  ExternalLink,
  Timer
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
            <span className="badge badge-teal-light">Messzeit &lt; 10 Minuten</span>
          </div>
        </div>
      </section>

      {/* Section 1: Benefits Highlight (Moved to top of page) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-5 max-w-700 m-auto">
            <div className="section-tag">
              <Sparkles size={16} />
              <span>Vorteile der Mamma-MRT</span>
            </div>
            <h2 className="section-title">Warum Mamma-MRT im KMZ?</h2>
            <p className="section-subtitle">
              Die Mamma-MRT vereint höchste diagnostische Sicherheit mit maximalem Patientenkomfort.
            </p>
          </div>

          <div className="grid-4 gap-md">
            <div className="card benefit-card">
              <ZapOff className="benefit-icon" size={28} />
              <h3>Strahlenfreie Untersuchung</h3>
              <p>Keinerlei Belastung durch Röntgenstrahlung oder radioaktive Substanzen.</p>
            </div>

            <div className="card benefit-card">
              <Eye className="benefit-icon" size={28} />
              <h3>Höchste Sensitivität (&gt;95%)</h3>
              <p>Erkennt kleinste Gewebeveränderungen unter 1 cm, lang bevor sie tastbar sind.</p>
            </div>

            <div className="card benefit-card">
              <ShieldCheck className="benefit-icon" size={28} />
              <h3>Implantate &amp; Gewebesicherheit</h3>
              <p>Perfekt geeignet zur Beurteilung des Gewebes um Implantate oder nach Voroperationen.</p>
            </div>

            <div className="card benefit-card">
              <CheckCircle2 className="benefit-icon" size={28} />
              <h3>Keine Brustkompression</h3>
              <p>Die Untersuchung erfolgt schmerzfrei und druckfrei in bequemer Bauchlage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 10-Minute High-End Protocol Highlight */}
      <section className="section-padding bg-stone">
        <div className="container">
          <div className="card protocol-highlight-card">
            <div className="flex align-center gap-md flex-wrap mb-4">
              <div className="protocol-icon-box">
                <Timer size={32} />
              </div>
              <div>
                <span className="badge badge-teal mb-1">Wissenschaftliche Innovation von Prof. Kaiser</span>
                <h2 className="section-title m-0">Vollständiges Mamma-MRT Protokoll in unter 10 Minuten</h2>
              </div>
            </div>

            <p className="text-body">
              Früher dauerten Mamma-MRT-Untersuchungen oft 30 Minuten oder länger. Durch moderne Beschleunigungsverfahren (wie SMS &amp; iPAT) hat das Team um <strong>Prof. Dr. med. Clemens Kaiser</strong> ein optimiertes Hochleistungsprotokoll etabliert: Im KMZ wird das <strong>vollständige diagnostische Dreifach-Protokoll in unter 10 Minuten Messzeit</strong> durchgeführt – ohne Kompromisse bei der Präzision.
            </p>

            <div className="grid-3 gap-md mt-4">
              <div className="protocol-step-box">
                <div className="protocol-time">ca. 1:36 Min</div>
                <h4>1. T2-Gewebeanalyse</h4>
                <p>Hochauflösende anatomische Beurteilung des Drüsengewebes, Abgrenzung von Flüssigkeiten und Zysten.</p>
              </div>

              <div className="protocol-step-box">
                <div className="protocol-time">ca. 1:46 Min</div>
                <h4>2. Diffusionsgewichtete Bildgebung (DWI)</h4>
                <p>Misst die mikroskopische Molekularbewegung im Zellgewebe zur frühzeitigen Abgrenzung verdächtiger Zellareale.</p>
              </div>

              <div className="protocol-step-box">
                <div className="protocol-time">ca. 6:21 Min</div>
                <h4>3. Volle Kontrastmittel-Dynamik (DCE)</h4>
                <p>Erfasst hochpräzise die Anreicherung in gefäßreichen Tumoren für maximale diagnostische Eindeutigkeit.</p>
              </div>
            </div>

            <div className="protocol-footer-row mt-4 flex align-center justify-between gap-md flex-wrap pt-3 border-t border-line">
              <div className="flex align-center gap-sm">
                <CheckCircle2 size={20} className="text-teal" />
                <span className="font-bold text-teal-dark text-sm">Vorteil für Sie: Minimaler Aufenthalt im Gerät &amp; höchster Komfort bei 100 % Sicherheit.</span>
              </div>
              <a
                href="https://www.siemens-healthineers.com/media/binaries/content/assets/di/mri/magnetom-world/publications/clinical-corner/case-studies/mammography/kaiser_breast_mri_protocol.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={14} />
                <span>Publikation von Prof. Kaiser lesen (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Visual Explanation & ACR Categories */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-tag">
              <Layers size={16} />
              <span>Brustdichte nach ACR</span>
            </div>
            <h2 className="section-title">Brustdichte-Kategorien &amp; Ihr Einfluss</h2>
            <p className="section-subtitle">
              Rund 45% aller Frauen im Screening-Alter haben eine Brustdichte der Kategorie C oder D. Klicken Sie auf die Kategorien, um zu erfahren, warum Mamma-MRT hier essenziell ist.
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
                  <span className="badge badge-rose mb-2">Höchste Dichte &amp; Risiko</span>
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

      {/* Section 4: Step-by-Step Examination Process */}
      <section className="section-padding bg-stone">
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
              <h3>Vorbereitung &amp; Anamnese</h3>
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
              <h3>Messung (&lt; 10 Min)</h3>
              <p>
                Über einen Venenzugang am Arm wird ein sehr gut verträgliches MRT-Kontrastmittel verabreicht. Das 10-Minuten-Protokoll erstellt hauchdünne Schnittbilder.
              </p>
            </div>

            <div className="card process-card">
              <div className="process-number">4</div>
              <h3>Auswertung &amp; Befund</h3>
              <p>
                Prof. Dr. med. Clemens Kaiser und unser Spezialistenteam werten die Schnittbilder sorgfältig aus und besprechen das Ergebnis persönlich mit Ihnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: QMRM & Qualitätssicherung Banner */}
      <section className="container mb-4">
        <div className="card bg-teal-50 border border-teal-100 p-4 rounded-xl flex align-center justify-between gap-md flex-wrap shadow-sm">
          <div className="flex align-center gap-md">
            <Award size={32} className="text-teal flex-shrink-0" />
            <div>
              <h3 className="m-0 font-serif font-bold text-teal-dark text-xl">QMRM Zertifizierung &amp; Höchste Qualitätsstandards</h3>
              <p className="m-0 text-body text-sm text-muted">
                Unser Zentrum erfüllt die strengen Kriterien der QMRM GmbH für 4-Augen-Doppelbefundung &amp; 1,5T-Gerätestandards (inkl. 100% Kostenübernahme im TK-Selektivvertrag).
              </p>
            </div>
          </div>
          <Link to="/qualitaetssicherung" className="btn btn-teal">
            <span>Zur Qualitätssicherung &amp; QMRM &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Section 6: FAQ Banner */}
      <section className="container mb-5">
        <div className="card bg-stone p-4 border border-line rounded-xl flex align-center justify-between gap-md flex-wrap">
          <div className="flex align-center gap-md">
            <HelpCircle size={28} className="text-teal flex-shrink-0" />
            <div>
              <h3 className="m-0 font-serif font-bold text-teal-dark text-xl">Haben Sie Fragen zur Mamma-MRT?</h3>
              <p className="m-0 text-body text-sm text-muted">Antworten zu Zykluszeitpunkt, Überweisung, Kontrastmittel &amp; Implantaten finden Sie in unseren FAQs.</p>
            </div>
          </div>
          <Link to="/faqs" className="btn btn-outline">
            <span>Zu allen FAQs &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
