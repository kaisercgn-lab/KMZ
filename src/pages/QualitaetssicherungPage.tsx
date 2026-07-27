import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, FileText, CheckCircle2, Users, ArrowRight, ExternalLink, Activity, Layers, Stethoscope } from 'lucide-react';
import './QualitaetssicherungPage.css';

export const QualitaetssicherungPage: React.FC = () => {
  const pillars = [
    {
      icon: <Activity size={32} />,
      title: '1. Apparative High-End Ausstattung',
      desc: 'Einsatz hochmoderner 3 Tesla Mamma-MRT Systeme mit spezialisierten Mehrkanal-Brustspulen für maximale räumliche Auflösung unter 1 mm.'
    },
    {
      icon: <Award size={32} />,
      title: '2. Personelle Zertifizierung',
      desc: 'Befundung ausschließlich durch Fachärzt:innen mit langjähriger Spezialisierung, nachgewiesenen Mindestfallzahlen und QMRM-Zertifikat.'
    },
    {
      icon: <Users size={32} />,
      title: '3. Vier-Augen Doppelbefundung',
      desc: 'Jede MRT-Aufnahme wird von zwei unabhängigen Mamma-Radiolog:innen geprüft. Das senkt die Fehlerrate und sichert höchste Befundpräzision.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: '4. Kontinuierliches Auditierungs-System',
      desc: 'Regelmäßige externe Audits, Bildqualitätsprüfungen und Peer-Reviews durch das wissenschaftliche Board der QMRM GmbH.'
    }
  ];

  return (
    <div className="qualitaet-page">
      {/* Header Banner */}
      <section className="page-header-section primary-gradient">
        <div className="container">
          <div className="section-tag">
            <ShieldCheck size={16} />
            <span>Kooperation & Qualitätsstandards</span>
          </div>
          <h1 className="page-title">Qualitätssicherung & QMRM Zertifizierung</h1>
          <p className="page-description">
            Höchste Diagnostiksicherheit in der Mamma-MRT durch die Partnerschaft zwischen dem KMZ und der QMRM GmbH (Kaiser MRT-Zertifizierung GmbH) – Ihrem Garanten für den TK-Selektivvertrag.
          </p>
        </div>
      </section>

      {/* Main QMRM & TK Banner Section */}
      <section className="section-padding container">
        <div className="qmrm-contract-card glass-panel shadow-xl">
          <div className="qmrm-badge-header">
            <span className="badge badge-teal p-2 px-3">
              <ShieldCheck size={18} className="mr-2 inline" />
              Offizieller Vertragspartner der Techniker Krankenkasse (TK)
            </span>
          </div>
          <div className="grid-2 align-center gap-lg mt-4">
            <div>
              <h2 className="qmrm-card-title">QMRM GmbH – Die Instanz für Qualität in der Mamma-MRT</h2>
              <p className="text-body mb-3">
                Die <strong>QMRM GmbH (Kaiser MRT-Zertifizierung GmbH)</strong> sichert als offizieller Kooperationspartner den Selektivvertrag mit der <strong>Techniker Krankenkasse (TK)</strong>. 
              </p>
              <p className="text-body mb-4">
                Durch diese Kooperation erfüllt das <strong>Kaiser MR-Mammographie Zentrum (KMZ)</strong> sämtliche strengen Qualitätskriterien, die für eine <strong>100%ige Kostenübernahme</strong> der Mamma-MRT durch die TK vorausgesetzt werden.
              </p>

              <div className="flex-buttons">
                <Link to="/terminanfrage" className="btn btn-primary">
                  <ShieldCheck size={18} />
                  <span>TK-Termin online anfragen</span>
                </Link>
                <a 
                  href="https://kaisercgn-lab.github.io/qmrm/#/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  <span>QMRM Portal besuchen</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="qmrm-highlights-box">
              <h3 className="highlight-title">Ihre Vorteile im TK-Selektivvertrag</h3>
              <ul className="checklist qmrm-checklist">
                <li>
                  <CheckCircle2 size={20} className="text-teal" />
                  <span><strong>Vollständige Übernahme:</strong> Keine Eigenbeteiligung für TK-Versicherte bei medizinischer Indikation.</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-teal" />
                  <span><strong>Keine Bürokratie:</strong> Direktabrechnung zwischen KMZ, QMRM und der Techniker Krankenkasse.</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-teal" />
                  <span><strong>Garantiertes Doppelbefundungsprinzip:</strong> Jeder Befund wird durch zwei zertifizierte Experten validiert.</span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-teal" />
                  <span><strong>Geringste Wartezeiten:</strong> Bevorzugte Terminvergabe für vorsorgeberechtigte Patientinnen.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-tag">
              <Award size={16} />
              <span>Prüfstandards</span>
            </div>
            <h2 className="section-title">Die 4 Säulen der QMRM Qualitätssicherung</h2>
            <p className="section-subtitle">
              Damit eine Mamma-MRT höchste Sensitivität erreicht, müssen Gerät, Team und Prozess perfekt aufeinander abgestimmt sein.
            </p>
          </div>

          <div className="grid-2 gap-lg">
            {pillars.map((p, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">
                  {p.icon}
                </div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QMRM Scientific Board */}
      <section className="section-padding container">
        <div className="grid-2 align-center gap-lg">
          <div>
            <div className="section-tag">
              <Stethoscope size={16} />
              <span>Wissenschaftliche Leitung</span>
            </div>
            <h2 className="section-title">Leitung durch Prof. Dr. med. Clemens Kaiser</h2>
            <p className="text-body mb-3">
              Als Gründer der QMRM GmbH und Leiter des KMZ setzt Prof. Dr. med. Clemens Kaiser seit vielen Jahren Maßstäbe in der Mamma-MRT Diagnostik.
            </p>
            <p className="text-body mb-4">
              Durch kontinuierliche klinische Studien und Qualitätsevaluationen stellt die QMRM sicher, dass im KMZ stets die neuesten wissenschaftlichen Erkenntnisse in die tägliche Patientinnenversorgung einfließen.
            </p>
            
            <div className="team-callout p-4 bg-stone rounded-xl border border-line">
              <div className="flex align-center gap-md">
                <img src="/prof-kaiser.jpg" alt="Prof. Dr. med. Clemens Kaiser" className="callout-avatar" />
                <div>
                  <h4 className="m-0 text-teal-dark font-serif font-bold text-lg">Prof. Dr. med. Clemens Kaiser</h4>
                  <p className="m-0 text-sm text-muted">Sektionsleiter Mammadiagnostik & Geschäftsführer QMRM GmbH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-lg p-5 bg-white border-line">
            <h3 className="card-title mb-4">Indikationen für die TK-Mamma-MRT</h3>
            <ul className="indication-list">
              <li>
                <div className="ind-num">1</div>
                <div>
                  <strong>Dichtes Drüsengewebe (ACR C/D):</strong>
                  <p className="text-sm text-muted">Zur Früherkennung bei Frauen mit hoher Gewebedichte, wo Mammographie eingeschränkt ist.</p>
                </div>
              </li>
              <li>
                <div className="ind-num">2</div>
                <div>
                  <strong>Familiäres / Genestisches Risiko:</strong>
                  <p className="text-sm text-muted">Höchste Sensitivität bei BRCA-Mutation oder auffälliger Familienanamnese.</p>
                </div>
              </li>
              <li>
                <div className="ind-num">3</div>
                <div>
                  <strong>Abklärung unklarer Vorbefunde:</strong>
                  <p className="text-sm text-muted">Präzise Differenzierung von Herdbefunden aus Sonographie oder Mammographie.</p>
                </div>
              </li>
              <li>
                <div className="ind-num">4</div>
                <div>
                  <strong>Zustand nach Implantaten / OP:</strong>
                  <p className="text-sm text-muted">Beurteilung der Prothesenintegrität und Narben-Rezidiv-Ausschluss.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="section-padding bg-teal-dark text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-serif mb-3 text-white">Haben Sie Fragen zur TK-Kostenübernahme?</h2>
          <p className="text-neutral-200 max-w-2xl mx-auto mb-5 text-lg">
            Unser Praxisteam unterstützt Sie gerne bei der Prüfung Ihrer Voraussetzungen und begleitet Sie Schritt für Schritt zur Terminvereinbarung.
          </p>
          <div className="flex-buttons justify-center">
            <Link to="/terminanfrage" className="btn btn-accent btn-lg">
              <ShieldCheck size={20} />
              <span>TK Terminprüfung starten</span>
            </Link>
            <Link to="/kontakt" className="btn btn-outline-white btn-lg">
              <span>Kontakt aufnehmen</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
