import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  Shield,
  Dna,
  Layers,
  Activity,
  User,
  ChevronDown,
  Sparkles,
  Music,
  Smile,
  Clock,
  ShieldCheck
} from 'lucide-react';
import './PatientinnenPage.css';

export const PatientinnenPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fakten' | 'brustdichte' | 'risiko' | 'vergleich'>('fakten');

  return (
    <div className="patientinnen-page">
      {/* Subpage Header */}
      <section className="page-header-section teal-gradient">
        <div className="container">
          <div className="section-tag">
            <Heart size={16} />
            <span>Für Patientinnen</span>
          </div>
          <h1 className="page-title">Brustkrebsvorsorge &amp; Früherkennung</h1>
          <p className="page-description">
            Verlässliche Informationen zu Risikofaktoren, Gewebedichte und modernster Mamma-MRT Diagnostik – für Ihre Sicherheit und ein gutes Gefühl.
          </p>

          <div className="subpage-tabs">
            <button
              className={`tab-btn ${activeTab === 'fakten' ? 'active' : ''}`}
              onClick={() => setActiveTab('fakten')}
            >
              Fakten &amp; Früherkennung
            </button>
            <button
              className={`tab-btn ${activeTab === 'brustdichte' ? 'active' : ''}`}
              onClick={() => setActiveTab('brustdichte')}
            >
              Brustgewebedichte (ACR A-D)
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
            <div className="grid-2 gap-lg align-start">
              <div className="content-block">
                <h2 className="section-title">Wichtige Fakten zur Früherkennung in Deutschland</h2>
                <p className="text-body">
                  Brustkrebs ist in Deutschland die häufigste Krebserkrankung bei Frauen. Laut Robert-Koch-Institut erkranken jährlich rund <strong>70.000 Frauen</strong>. Statisch gesehen ist im Laufe des Lebens <strong>jede 8. Frau</strong> betroffen.
                </p>
                <p className="text-body">
                  Die entscheidende Nachricht der modernen Medizin: <strong>Früh erkannt ist Brustkrebs in den allermeisten Fällen heilbar!</strong>
                </p>

                <div className="fact-highlight-card">
                  <div className="fact-badge">
                    <Sparkles size={14} className="mr-1 inline" />
                    Prognose-Vorteil
                  </div>
                  <h3>Warum die Tumorentdeckung unter 1 cm lebensrettend ist</h3>
                  <p>
                    Wird ein Tumor entdeckt, solange er kleiner als 1 cm ist, liegt die <strong>Heilungsschance bei über 98 %</strong>. In diesem frühen Stadium haben sich meist noch keine Tochterabsiedlungen (Metastasen) gebildet, weshalb Patientinnen oft eine belastende Chemotherapie erspart werden kann.
                  </p>
                </div>
              </div>

              <div className="content-block">
                <div className="card stat-summary-card">
                  <h3 className="card-header-title">Grenzen herkömmlicher Röntgendiagnostik</h3>
                  <p className="text-body">
                    Im traditionellen Röntgen-Screening stellt sich dichte Brustdrüse weiß dar. Da sich auch Tumorgewebe im Röntgenbild weiß abbildet, entsteht bei dichter Brust der sogenannte <strong>„Schneeball im Verschneiten“-Effekt</strong>.
                  </p>
                  
                  <div className="warning-box">
                    <AlertTriangle size={24} className="warning-icon" />
                    <div>
                      <strong>Bis zu 50 % unentdeckte Befunde im Röntgenbild</strong>
                      <p>
                        Bei hoher Brustdichte (ACR C &amp; D) verliert die Röntgen-Mammographie an Treffsicherheit. Über die Hälfte kleiner Tumore können übersehen werden.
                      </p>
                    </div>
                  </div>

                  <div className="solution-box mt-3">
                    <Shield size={24} className="solution-icon" />
                    <div>
                      <strong>Die Mamma-MRT Lösung im KMZ</strong>
                      <p>
                        Die Mamma-MRT arbeitet ohne Röntgenstrahlung mit Magnetfeldern. Sie erkennt Durchblutungsveränderungen und macht Gewebeveränderungen unabhängig von der Brustdichte zu über 95 % sichtbar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Brustgewebedichte (ACR A-D) */}
        {activeTab === 'brustdichte' && (
          <div className="tab-content animate-fade-in">
            <div className="text-center mb-5 max-w-700 m-auto">
              <h2 className="section-title">Brustgewebedichte (ACR Categories)</h2>
              <p className="text-body">
                Die Brustdichte beschreibt das Verhältnis von Fettgewebe zu Drüsen- und Bindegewebe. Rund <strong>45 % aller Frauen</strong> im screening-relevanten Alter haben dichtes Drüsengewebe der Kategorien <strong>ACR C oder D</strong>.
              </p>
            </div>

            <div className="grid-4 gap-md">
              <div className="acr-card">
                <div className="acr-badge acr-a">ACR Typ A</div>
                <h4>Fast rein fettreich</h4>
                <p>Das Drüsengewebe ist minimal (&lt; 25 %). Röntgen-Mammographie bietet hier eine gute Beurteilbarkeit.</p>
              </div>

              <div className="acr-card">
                <div className="acr-badge acr-b">ACR Typ B</div>
                <h4>Fettgewebe mit Drüseninseln</h4>
                <p>Vereinzelte drüsige Gewebedichten (25–50 %). Gute bis mäßige Sichtbarkeit im Röntgenbild.</p>
              </div>

              <div className="acr-card highlight-density">
                <div className="acr-badge acr-c">ACR Typ C</div>
                <h4>Heterogen dicht</h4>
                <p>Hoher Drüsenanteil (50–75 %). Befunde können im Röntgenbild maskiert werden. <strong>MRT dringend empfohlen.</strong></p>
              </div>

              <div className="acr-card highlight-density">
                <div className="acr-badge acr-d">ACR Typ D</div>
                <h4>Extrem dicht</h4>
                <p>Sehr hohes Eigenrisiko (&gt; 75 % Drüsengewebe). Röntgen-Mammographie stark eingeschränkt. <strong>Empfehlung: Mamma-MRT.</strong></p>
              </div>
            </div>

            <div className="density-callout-box mt-4">
              <ShieldCheck size={28} className="text-teal" />
              <div>
                <h4>TK-Selektivvertrag deckt Mamma-MRT bei Dichte Typ C &amp; D ab</h4>
                <p>
                  Versicherte der Techniker Krankenkasse mit nachgewiesenem dichten Gewebe (ACR C oder D) erhalten die Mamma-MRT im KMZ zu 100 % als Kassenleistung erstattet.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Risikofaktoren */}
        {activeTab === 'risiko' && (
          <div className="tab-content animate-fade-in">
            <h2 className="section-title text-center mb-4">Persönliche Risikofaktoren im Überblick</h2>
            <div className="grid-3 gap-md">
              <div className="card risk-card">
                <div className="risk-icon-box">
                  <Dna size={26} />
                </div>
                <h3>1. Familiäre &amp; Genetische Vorbelastung</h3>
                <p>
                  Nachgewiesene Genmutationen (z. B. BRCA1/2) oder gehäuftes Auftreten von Brust- oder Eierstockkrebs in der Familie erhöhen das Erkrankungsrisiko deutlich.
                </p>
              </div>

              <div className="card risk-card">
                <div className="risk-icon-box">
                  <Layers size={26} />
                </div>
                <h3>2. Hohe Gewebedichte (ACR C &amp; D)</h3>
                <p>
                  Frauen mit sehr dichtem Drüsengewebe tragen ein 4- bis 6-fach erhöhtes Krebsrisiko im Vergleich zu fettreichem Gewebe und benötigen präzisere Diagnostik.
                </p>
              </div>

              <div className="card risk-card">
                <div className="risk-icon-box">
                  <Activity size={26} />
                </div>
                <h3>3. Hormonelle Stimulation</h3>
                <p>
                  Frühe erste Menstruation, späte Menopause oder langfristige Hormonersatztherapien verlängern die hormonelle Einwirkung auf das Brustgewebe.
                </p>
              </div>

              <div className="card risk-card">
                <div className="risk-icon-box">
                  <User size={26} />
                </div>
                <h3>4. Lebensalter</h3>
                <p>
                  Das Risiko steigt kontinuierlich ab dem 40. Lebensjahr an. Mit 50 Jahren liegt das 10-Jahres-Risiko bei ca. 1 von 37 Frauen (Quelle: DKFZ).
                </p>
              </div>

              <div className="card risk-card span-2">
                <div className="risk-icon-box teal">
                  <Shield size={26} />
                </div>
                <h3>5. Lebensstil &amp; Individuelle Prävention</h3>
                <p>
                  Ausgewogene Ernährung, Bewegung und Verzicht auf Rauchen senken das Risiko. Ergänzend sorgt die Wahl der optimalen Untersuchungsmethode für beruhigende Klarheit.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Vergleich der Untersuchungsmethoden */}
        {activeTab === 'vergleich' && (
          <div className="tab-content animate-fade-in">
            <h2 className="section-title text-center mb-4">Vergleich der Untersuchungsmethoden</h2>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Kriterium / Eigenschaft</th>
                    <th>Selbstabtastung</th>
                    <th>Ultraschall (Sonographie)</th>
                    <th>Röntgen-Mammographie</th>
                    <th className="highlight-col">Mamma-MRT (KMZ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sensitivität bei dichtem Gewebe (ACR C/D)</strong></td>
                    <td>Sehr gering</td>
                    <td>Mittel (50–60 %)</td>
                    <td>Gering (&lt; 50 %)</td>
                    <td className="highlight-col font-bold color-teal">&gt; 95 % (Höchste Treffsicherheit)</td>
                  </tr>
                  <tr>
                    <td><strong>Strahlenbelastung</strong></td>
                    <td><CheckCircle size={18} className="icon-green" /> Keine</td>
                    <td><CheckCircle size={18} className="icon-green" /> Keine</td>
                    <td><XCircle size={18} className="icon-red" /> Röntgenstrahlung</td>
                    <td className="highlight-col"><CheckCircle size={18} className="icon-green" /> Keine (Schonendes Magnetfeld)</td>
                  </tr>
                  <tr>
                    <td><strong>Früherkennung &lt; 1 cm Tumore</strong></td>
                    <td>Sehr selten</td>
                    <td>Eingeschränkt</td>
                    <td>Möglichst überlagert</td>
                    <td className="highlight-col font-bold color-teal"><CheckCircle size={18} className="icon-green" /> Höchste Zuverlässigkeit</td>
                  </tr>
                  <tr>
                    <td><strong>Schmerzhaltes Zusammenpressen</strong></td>
                    <td>Nein</td>
                    <td>Nein</td>
                    <td>Ja (Druckbelastung)</td>
                    <td className="highlight-col"><CheckCircle size={18} className="icon-green" /> Nein (Bequeme Bauchlage)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Comfort & Empathy Section */}
      <section className="comfort-section bg-stone">
        <div className="container">
          <div className="text-center mb-5 max-w-700 m-auto">
            <span className="badge badge-teal p-2 px-3 mb-2 inline-block">
              <Smile size={16} className="mr-1 inline" />
              Ihr Wohlbefinden steht an erster Stelle
            </span>
            <h2 className="section-title">Angstfreie &amp; komfortable Untersuchung im KMZ</h2>
            <p className="text-body">
              Wir verstehen, dass medizinische Untersuchungen mit Sorgen verbunden sein können. Deshalb haben wir den Ablauf für Sie so entspannt wie möglich gestaltet.
            </p>
          </div>

          <div className="grid-3 gap-md">
            <div className="comfort-card">
              <div className="comfort-icon"><Smile size={24} /></div>
              <h4>Kein Schmerzvoller Druck</h4>
              <p>Sie liegen entspannt auf einer speziell geformten, weichen Liege in Bauchlage. Ihre Brust wird nicht gequetscht.</p>
            </div>

            <div className="comfort-card">
              <div className="comfort-icon"><Music size={24} /></div>
              <h4>Wunschmusik &amp; Kopfhörer</h4>
              <p>Genießen Sie Ihre Lieblingsmusik während der Untersuchung über Spezial-Kopfhörer zur Geräuschreduktion.</p>
            </div>

            <div className="comfort-card">
              <div className="comfort-icon"><Clock size={24} /></div>
              <h4>Schnelle Befundbesprechung</h4>
              <p>Kein tagelanges Zittern. Nach der Untersuchung erklärt Ihnen unser Spezialistenteam das Ergebnis auf Wunsch direkt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TK Special Feature Box */}
      <section className="container section-padding">
        <div className="card tk-banner-card">
          <div className="tk-banner-badge">
            <Shield size={18} />
            <span>Kostenübernahme für TK-Kundinnen</span>
          </div>
          <div className="tk-banner-body">
            <h3>Sind Sie bei der Techniker Krankenkasse (TK) versichert?</h3>
            <p>
              Im Rahmen unseres <strong>Besonderen Versorgungsangebots (Selektivvertrag)</strong> mit der Techniker Krankenkasse steht Ihnen bei dichtem Brustdrüsengewebe (ACR C/D) oder familiärem Risiko die <strong>100 % kostenfreie Mamma-MRT</strong> zu.
            </p>
          </div>
          <div className="tk-banner-action">
            <Link to="/terminanfrage" className="btn btn-rose">
              <Calendar size={18} />
              <span>TK-Termin online anfragen</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Clean FAQ Link Banner */}
      <section className="container mb-5">
        <div className="card bg-stone p-4 border border-line rounded-xl flex align-center justify-between gap-md flex-wrap">
          <div>
            <h3 className="m-0 font-serif font-bold text-teal-dark text-xl">Häufig gestellte Fragen von Patientinnen</h3>
            <p className="m-0 text-body text-sm text-muted">Antworten zu Zykluszeitpunkt, Überweisung, Kontrastmittel &amp; Ablauf finden Sie in unseren zentralen FAQs.</p>
          </div>
          <Link to="/faqs" className="btn btn-outline">
            <span>Zu allen FAQs &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="container mb-5">
        <div className="card patient-cta-card">
          <div>
            <h2>Möchten Sie Ihre Vorsorge in beste Hände legen?</h2>
            <p>Fragen Sie Ihren Wunschtermin ganz einfach und unverbindlich online an.</p>
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
