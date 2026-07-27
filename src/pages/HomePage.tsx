import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Activity,
  UserCheck,
  Stethoscope,
  BookOpen,
  Newspaper,
  CheckCircle2,
  PhoneCall,
  Award,
  HeartPulse
} from 'lucide-react';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="section-tag">
              <ShieldCheck size={16} />
              <span>Hochspezialisierte Früherkennung</span>
            </div>
            <h1 className="hero-title">
              KMZ – Kaiser MR-Mammographie <span className="highlight-teal">Zentrum</span>
            </h1>
            <p className="hero-text">
              Im Mittelpunkt unserer Arbeit steht die strahlenfreie Mamma-MRT. Höchste Präzision zur Entdeckung von Karzinomen im frühesten, heilbaren Stadium – insbesondere bei dichtem Brustdrüsengewebe.
            </p>

            <div className="hero-cta-group">
              <Link to="/terminanfrage" className="btn btn-primary btn-hero">
                <Calendar size={20} />
                <span>Termin online anfragen</span>
              </Link>
              <Link to="/MR-Mammographie" className="btn btn-outline btn-hero">
                <span>Mehr über Mamma-MRT</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Ohne Röntgenstrahlung</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Höchste Sensitivität bei dichter Brust</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Wissenschaftlich fundiert</span>
              </div>
            </div>
          </div>

          <div className="hero-card-widget glass-panel">
            <div className="hero-logo-display">
              <img src="/logo.png" alt="Mamma MRT Zentrum – Kompetenz . Früherkennung . Präzision" className="hero-logo-img" />
            </div>
            <div className="widget-header">
              <Award className="widget-icon" size={28} />
              <div>
                <h3>Wissenschaftliche Leitung</h3>
                <p>Prof. Dr. med. Clemens Kaiser</p>
              </div>
            </div>
            <div className="widget-body">
              <p className="widget-quote">
                „Brustkrebs rechtzeitig unter 1 cm zu detektieren bedeutet Leben zu retten. Die Mamma-MRT liefert hierfür die beste Diagnostik.“
              </p>
              <div className="widget-stats">
                <div className="stat-box">
                  <span className="stat-value">&gt; 90%</span>
                  <span className="stat-label">Heilungschance bei Detektion &lt; 1 cm</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">50%</span>
                  <span className="stat-label">aller Frauen haben dichtes Drüsengewebe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome Message Section */}
      <section className="section-padding welcome-section">
        <div className="container">
          <div className="grid-2 welcome-grid">
            <div className="welcome-image-box">
              <div className="doctor-card">
                <div className="doctor-avatar-frame">
                  <img src="/prof-kaiser.jpg" alt="Prof. Dr. med. Clemens Kaiser" className="doctor-avatar-img" />
                </div>
                <div className="doctor-info">
                  <h3>Prof. Dr. med. Clemens Kaiser</h3>
                  <p className="doctor-role">Sektionsleiter Mammadiagnostik</p>
                  <p className="doctor-inst">Leiter Kaiser MR-Mammographie Zentrum (KMZ)</p>
                  <span className="badge badge-teal mt-2">Interdisziplinäres Brustzentrum</span>
                </div>
              </div>
            </div>

            <div className="welcome-text-content">
              <div className="section-tag">
                <span>Willkommen im KMZ</span>
              </div>
              <h2 className="section-title">
                Sicherheit und Präzision in der Brustkrebsfrüherkennung
              </h2>
              <p className="welcome-paragraph">
                Herzlich willkommen im <strong>Kaiser MR-Mammographie Zentrum (KMZ)</strong>. Im Mittelpunkt unserer Arbeit steht der gezielte Einsatz der <strong>Mamma-MRT</strong> in der Brustkrebsvorsorge, weil wir damit frühzeitig und zuverlässig Brustkrebs erkennen können.
              </p>
              <p className="welcome-paragraph">
                Je früher wir ein Karzinom entdecken, desto größer sind die Heilungschancen. Das ist bedeutsam, denn Brustkrebs ist nach wie vor die häufigste krebsbedingte Todesursache der Frau.
              </p>
              <p className="welcome-paragraph">
                Damit künftig noch mehr Frauen von unserer Arbeit profitieren, nutzen wir unsere langjährige Erfahrung und unsere enge Zusammenarbeit innerhalb des interdisziplinären Brustzentrums, um Ihnen als Patientin maximale Sicherheit zu bieten. Zudem vertiefen wir kontinuierlich unser Wissen durch klinische Forschung.
              </p>

              <div className="welcome-actions">
                <Link to="/wissenschaft-forschung" className="btn btn-outline">
                  <span>Wissenschaft & Forschung</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/terminanfrage" className="btn btn-primary">
                  <Calendar size={18} />
                  <span>Jetzt Vorsorgetermin anfragen</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars Grid */}
      <section className="section-padding pillars-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">
              <span>Orientierung & Information</span>
            </div>
            <h2 className="section-title">Unsere Schwerpunkte auf einen Blick</h2>
            <p className="section-subtitle">
              Wählen Sie den Bereich, der für Ihre Fragen und Bedürfnisse am besten passt.
            </p>
          </div>

          <div className="grid-4 pillar-cards">
            {/* Card 1 */}
            <div className="card pillar-card">
              <div className="pillar-icon-box teal">
                <HeartPulse size={28} />
              </div>
              <h3>Für Patientinnen</h3>
              <p>
                Wichtige Fakten zum Thema Brustkrebs, Risikofaktoren, Brustdichte und persönliche Beratung für Ihre Vorsorge.
              </p>
              <Link to="/brustkrebsvorsorge" className="pillar-link">
                <span>Mehr erfahren</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card pillar-card">
              <div className="pillar-icon-box primary">
                <Activity size={28} />
              </div>
              <h3>Mamma-MRT</h3>
              <p>
                Das modernste strahlenfreie Verfahren zur zuverlässigen Früherkennung. Ablauf, Nutzen und Vergleich mit Mammographie.
              </p>
              <Link to="/MR-Mammographie" className="pillar-link">
                <span>Mehr erfahren</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card pillar-card">
              <div className="pillar-icon-box rose">
                <Stethoscope size={28} />
              </div>
              <h3>Für Gynäkolog:innen</h3>
              <p>
                Informationen für überweisende Fachärzt:innen, Indikationsstellungen, Leitlinien und kollegiale Zusammenarbeit.
              </p>
              <Link to="/fuer-gynaekolog-innen" className="pillar-link">
                <span>Mehr erfahren</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="card pillar-card">
              <div className="pillar-icon-box navy">
                <BookOpen size={28} />
              </div>
              <h3>Wissenschaft & Forschung</h3>
              <p>
                Aktuelle Studienergebnisse (MA-DETECT / KM-DETECT), wissenschaftliche Publikationen und Literaturverzeichnis.
              </p>
              <Link to="/wissenschaft-forschung" className="pillar-link">
                <span>Mehr erfahren</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. News & Research Highlights */}
      <section className="section-padding news-section">
        <div className="container">
          <div className="news-header">
            <div>
              <div className="section-tag">
                <Newspaper size={16} />
                <span>Aktuelles</span>
              </div>
              <h2 className="section-title">Neues aus dem Kaiser MR-Mammographie Zentrum</h2>
            </div>
            <Link to="/news" className="btn btn-outline">
              <span>Alle News anzeigen</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid-2 news-grid">
            <div className="card news-card">
              <span className="badge badge-teal">Studienergebnisse</span>
              <span className="news-date">29.04.2024</span>
              <h3 className="news-title">Zwischenergebnisse der DETECT-Studie veröffentlicht</h3>
              <p className="news-excerpt">
                Die ersten Ergebnisse nach 200 untersuchten Probandinnen wurden im European Journal of Radiology veröffentlicht und belegen die hohe Detektionsrate der Mamma-MRT bei dichtem Gewebe.
              </p>
              <Link to="/news" className="news-read-more">
                <span>Meldung lesen</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="card news-card">
              <span className="badge badge-rose">Patienten-Portal</span>
              <span className="news-date">03.01.2024</span>
              <h3 className="news-title">Neue Infowebsite zur Brustkrebsvorsorge gestartet</h3>
              <p className="news-excerpt">
                Mit dem Ziel, noch mehr Sicherheit bei der Brustkrebsvorsorge für alle Frauen zu erreichen, wurde das Informations- und Terminportal des KMZ umfassend modernisiert.
              </p>
              <Link to="/news" className="news-read-more">
                <span>Meldung lesen</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-text-box">
              <h2>Möchten Sie persönliche Sicherheit für Ihre Gesundheit gewinnen?</h2>
              <p>
                Vereinbaren Sie ganz einfach Ihren Termin für eine spezialisierte Mamma-MRT im KMZ Köln oder lassen Sie sich individuell beraten.
              </p>
            </div>
            <div className="cta-button-box">
              <Link to="/terminanfrage" className="btn btn-rose btn-cta-lg">
                <Calendar size={20} />
                <span>Terminanfrage stellen</span>
              </Link>
              <Link to="/kontakt" className="btn btn-outline btn-cta-lg white-outline">
                <PhoneCall size={20} />
                <span>Kontakt & Anfahrt</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
