import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  AlertTriangle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Calendar,
  Shield,
  Dna,
  Layers,
  Activity,
  User,
  ArrowRight
} from 'lucide-react';
import './PatientinnenPage.css';

export const PatientinnenPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fakten' | 'risiko' | 'vergleich'>('fakten');

  return (
    <div className="patientinnen-page">
      {/* Subpage Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="section-tag">
            <Heart size={16} />
            <span>Für Patientinnen</span>
          </div>
          <h1 className="page-title">Brustkrebsvorsorge & Früherkennung</h1>
          <p className="page-description">
            Fundierte Informationen zu Risikofaktoren, Brustgewebedichte und modernen Untersuchungsmethoden für Ihre Gesundheit und persönliche Sicherheit.
          </p>

          <div className="subpage-tabs">
            <button
              className={`tab-btn ${activeTab === 'fakten' ? 'active' : ''}`}
              onClick={() => setActiveTab('fakten')}
            >
              Fakten zu Brustkrebs
            </button>
            <button
              className={`tab-btn ${activeTab === 'risiko' ? 'active' : ''}`}
              onClick={() => setActiveTab('risiko')}
            >
              Risikofaktoren
            </button>
            <button
              className={`tab-btn ${activeTab === 'vergleich' ? 'active' : ''}`}
              onClick={() => setActiveTab('vergleich')}
            >
              Methodenvergleich
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Areas */}
      <div className="container section-padding">
        {/* Tab 1: Fakten */}
        {activeTab === 'fakten' && (
          <div className="tab-content animate-fade-in">
            <div className="grid-2 gap-lg">
              <div className="content-block">
                <h2 className="section-title">Wichtige Fakten zu Brustkrebs in Deutschland</h2>
                <p className="text-body">
                  Brustkrebs betrifft viele Frauen in Deutschland und weltweit. Nach aktuellen Zahlen des Robert-Koch-Instituts erkranken jährlich in Deutschland rund <strong>70.000 Frauen</strong> an Brustkrebs. Im Laufe ihres Lebens trifft die Diagnose statistisch <strong>jede 8. Frau</strong>.
                </p>
                <p className="text-body">
                  Jährlich sterben ca. 20.000 Frauen an den Folgen der Erkrankung. Leider sind zunehmend auch jüngere Frauen unter 40 Jahren betroffen.
                </p>

                <div className="fact-highlight-card">
                  <div className="fact-badge">
                    <span>Prognose-Faktor</span>
                  </div>
                  <h3>Warum die Tumorgröße unter 1 cm entscheidend ist</h3>
                  <p>
                    Wird ein Karzinom in der Brust in einem Stadium unter 1 cm entdeckt, liegt die <strong>12-Jahres-Überlebensrate bei über 90%</strong> – unabhängig vom Aggressivitätsgrad des Tumors. In diesem Frühstadium empfiehlt die S3-Leitlinie in der Regel noch keine Chemotherapie, da Metastasen äußerst unwahrscheinlich sind.
                  </p>
                </div>
              </div>

              <div className="content-block">
                <div className="card stat-summary-card">
                  <h3 className="card-header-title">Warum herkömmliches Screening oft Grenzen hat</h3>
                  <p className="text-body">
                    Im konventionellen Mammographie-Screening wird Röntgendiagnostik eingesetzt. Bei Frauen mit <strong>dichtem Brustdrüsengewebe (ACR Kategorie C & D)</strong> stellt sich Drüsengewebe auf dem Röntgenbild weiß dar – ebenso wie mögliche Karzinome.
                  </p>
                  <div className="warning-box">
                    <AlertTriangle size={24} className="warning-icon" />
                    <div>
                      <strong>Über 50% unentdeckte Befunde bei dichtem Gewebe</strong>
                      <p>
                        In der Literatur ist belegt, dass bei hoher Brustdichte über die Hälfte der Mammakarzinome im reinen Mammographie-Röntgenbild übersehen werden können.
                      </p>
                    </div>
                  </div>

                  <div className="solution-box mt-3">
                    <Shield size={24} className="solution-icon" />
                    <div>
                      <strong>Die Mamma-MRT Lösung im KMZ</strong>
                      <p>
                        Die Mamma-MRT arbeitet ohne Strahlung und macht Gewebeveränderungen unabhängig von der Brustdichte hochpräzise sichtbar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Risikofaktoren */}
        {activeTab === 'risiko' && (
          <div className="tab-content animate-fade-in">
            <h2 className="section-title text-center mb-4">Zentrale Risikofaktoren im Überblick</h2>
            <div className="grid-3 gap-md">
              <div className="card risk-card">
                <div className="risk-icon-box">
                  <Dna size={26} />
                </div>
                <h3>1. Vererbung & Familiäre Faktoren</h3>
                <p>
                  Genetische Veränderungen (wie BRCA1/2) oder gehäuftes Auftreten von Brust-/Eierstockkrebs in der Familie steigern das Risiko erheblich. Eine humangenetische Beratung gibt Aufschluss.
                </p>
              </div>

              <div className="card risk-card">
                <div className="risk-icon-box">
                  <Layers size={26} />
                </div>
                <h3>2. Dichtes Brustdrüsengewebe</h3>
                <p>
                  Knapp 50% der Frauen im Screening-Alter haben dichtes Drüsengewebe (ACR C & D). Frauen mit Kategorie D besitzen ein 4- bis 6-fach erhöhtes Krebsrisiko gegenüber Gewebetyp A.
                </p>
                <Link to="/MR-Mammographie#dichte" className="risk-link">
                  Mehr zur Brustdichte &rarr;
                </Link>
              </div>

              <div className="card risk-card">
                <div className="risk-icon-box">
                  <Activity size={26} />
                </div>
                <h3>3. Hormonelle Faktoren</h3>
                <p>
                  Frühe erste Regelblutung, späte Wechseljahre, Langzeiteinnahme von Hormonersatztherapien oder Verhütungsmitteln haben Einfluss auf die hormonelle Stimulation des Drüsengewebes.
                </p>
              </div>

              <div className="card risk-card">
                <div className="risk-icon-box">
                  <User size={26} />
                </div>
                <h3>4. Lebensalter</h3>
                <p>
                  Das statistische Risiko steigt mit zunehmendem Alter: Mit 45 Jahren liegt das 10-Jahres-Risiko bei 1 von 48 Frauen, mit 55 Jahren bei 1 von 37 Frauen (Quelle: DKFZ).
                </p>
              </div>

              <div className="card risk-card span-2">
                <div className="risk-icon-box teal">
                  <Shield size={26} />
                </div>
                <h3>5. Lebensstil & Prävention</h3>
                <p>
                  Regelmäßige Bewegung, ausgewogene Ernährung, Reduktion von Alkoholkonsum und Verzicht auf Rauchen tragen zur Vorbeugung bei. Genauso wichtig ist die Wahl der richtigen Untersuchungsmethode für Ihren individuellen Gewebetyp.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Vergleich der Untersuchungsmethoden */}
        {activeTab === 'vergleich' && (
          <div className="tab-content animate-fade-in">
            <h2 className="section-title text-center mb-4">Vergleich der Untersuchungsmethoden</h2>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Eigenschaft / Methode</th>
                    <th>Selbstabtastung</th>
                    <th>Mammasonographie (Ultraschall)</th>
                    <th>Röntgen-Mammographie</th>
                    <th className="highlight-col">Mamma-MRT (KMZ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sensitivität bei dichter Brust (ACR C/D)</strong></td>
                    <td>Sehr gering</td>
                    <td>Mittel (ca. 50-60%)</td>
                    <td>Gering (&lt; 50%)</td>
                    <td className="highlight-col font-bold color-teal">&gt; 95% (Höchste)</td>
                  </tr>
                  <tr>
                    <td><strong>Strahlenbelastung</strong></td>
                    <td><CheckCircle size={18} className="icon-green" /> Keine</td>
                    <td><CheckCircle size={18} className="icon-green" /> Keine</td>
                    <td><XCircle size={18} className="icon-red" /> Röntgenstrahlung</td>
                    <td className="highlight-col"><CheckCircle size={18} className="icon-green" /> Keine (Magnetfeld)</td>
                  </tr>
                  <tr>
                    <td><strong>Erkennung von Tumoren &lt; 1 cm</strong></td>
                    <td>Sehr selten</td>
                    <td>Eingeschränkt</td>
                    <td>Teils überlagert</td>
                    <td className="highlight-col font-bold color-teal"><CheckCircle size={18} className="icon-green" /> Zuverlässigst</td>
                  </tr>
                  <tr>
                    <td><strong>Gewebedichte-Abhängigkeit</strong></td>
                    <td>Stark abhängig</td>
                    <td>Mäßig abhängig</td>
                    <td>Stark eingeschränkt</td>
                    <td className="highlight-col"><CheckCircle size={18} className="icon-green" /> Unabhängig</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Techniker Krankenkasse (TK) Special Feature Box */}
      <section className="container mb-5">
        <div className="card tk-banner-card">
          <div className="tk-banner-badge">
            <Shield size={20} />
            <span>Kostenübernahme für TK-Kundinnen</span>
          </div>
          <div className="tk-banner-body">
            <h3>Sind Sie bei der Techniker Krankenkasse (TK) versichert?</h3>
            <p>
              Im Rahmen unseres <strong>Besonderen Versorgungsangebots (Selektivvertrag)</strong> steht versicherten Frauen der Techniker Krankenkasse eine vollumfängliche Kostenübernahme der Mamma-MRT Früherkennung bei entsprechend dichtem Brustdrüsengewebe oder erhöhtem Risiko zu.
            </p>
          </div>
          <div className="tk-banner-action">
            <Link to="/terminanfrage" className="btn btn-rose">
              <Calendar size={18} />
              <span>TK-Terminanfrage starten</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="container mb-5">
        <div className="card patient-cta-card">
          <div>
            <h2>Möchten Sie Ihren Gewebetyp und Ihr persönliches Risiko abklären?</h2>
            <p>Wir beraten Sie individuell und beantworten all Ihre Fragen zur Mamma-MRT.</p>
          </div>
          <Link to="/terminanfrage" className="btn btn-primary">
            <Calendar size={18} />
            <span>Vorsorgetermin anfragen</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
