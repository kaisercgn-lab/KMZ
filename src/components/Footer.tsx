import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-root">
      <div className="footer-accent-line" />
      <div className="container footer-top">
        <div className="footer-grid">
          {/* Col 1: Brand & Certification */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src="./logo.png" alt="KMZ Mamma MRT Zentrum" className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="footer-logo-title">KMZ</span>
                <span className="footer-logo-sub">Kaiser MR-Mammographie Zentrum</span>
              </div>
            </Link>
            <p className="footer-desc">
              Spezialisiertes Zentrum für hochpräzise Mamma-MRT Diagnostik &amp; Früherkennung. Wiss. Leitung: Prof. Dr. med. Clemens Kaiser.
            </p>
            <div className="footer-badges">
              <div className="footer-badge-item">
                <ShieldCheck size={16} className="badge-icon" />
                <span>TK-Vertragspartner &amp; QMRM zertifiziert</span>
              </div>
            </div>
          </div>

          {/* Col 2: Diagnostik & Mamma-MRT */}
          <div className="footer-col">
            <h4 className="footer-heading">Mamma-MRT Diagnostik</h4>
            <ul className="footer-links">
              <li><Link to="/MR-Mammographie">Mamma-MRT Ablauf &amp; Indikationen</Link></li>
              <li><Link to="/qualitaetssicherung">Qualitätssicherung &amp; QMRM</Link></li>
              <li><Link to="/brustkrebsvorsorge">Informationen für Patientinnen</Link></li>
              <li><Link to="/fuer-gynaekolog-innen">Zuweiser &amp; Gynäkolog:innen</Link></li>
            </ul>
          </div>

          {/* Col 3: Zentrum & Service */}
          <div className="footer-col">
            <h4 className="footer-heading">Zentrum &amp; Service</h4>
            <ul className="footer-links">
              <li><Link to="/ueber-uns">Das Zentrum &amp; Ärzteteam</Link></li>
              <li><Link to="/wissenschaft-forschung">Wissenschaft &amp; Forschung</Link></li>
              <li><Link to="/terminanfrage">Online-Terminanfrage</Link></li>
              <li><Link to="/faqs">Häufige Fragen (FAQ)</Link></li>
            </ul>
          </div>

          {/* Col 4: Praxis & Kontakt */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Praxis &amp; Kontakt</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>KMZ Diagnostikzentrum Köln<br />50667 Köln</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <a href="tel:02211234567" className="contact-link">0221 / 123 45 67</a>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <a href="mailto:info@kmz-brustvorsorge.de" className="contact-link">info@kmz-brustvorsorge.de</a>
              </li>
            </ul>
            <div className="footer-cta-row">
              <Link to="/terminanfrage" className="footer-btn footer-btn-primary">
                <Calendar size={14} />
                <span>Termin buchen</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} KMZ – Kaiser MR-Mammographie Zentrum. Alle Rechte vorbehalten.</p>
          <div className="legal-links">
            <Link to="/impressum">Impressum</Link>
            <span className="dot">•</span>
            <Link to="/datenschutz">Datenschutz</Link>
            <span className="dot">•</span>
            <button className="cookie-settings-btn" onClick={() => window.dispatchEvent(new Event('openCookieBanner'))}>
              Datenschutzeinstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
