import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-root">
      <div className="container footer-top">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Mamma MRT Zentrum" className="footer-logo-img" />
              <div>
                <span className="footer-logo-title">KMZ</span>
                <span className="footer-logo-sub">Kaiser MR-Mammographie Zentrum</span>
              </div>
            </Link>
            <p className="footer-desc">
              KMZ – Ihr hochspezialisiertes Zentrum für präzise Mamma-MRT Diagnostik und innovative Brustkrebsvorsorge. Unter der wissenschaftlichen Leitung von Prof. Dr. med. Clemens Kaiser.
            </p>
            <div className="footer-certification">
              <ShieldCheck size={18} className="cert-icon" />
              <span>Zertifiziertes Zentrum für Früherkennung</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Leistungen & Info</h4>
            <ul className="footer-links">
              <li><Link to="/brustkrebsvorsorge">Für Patientinnen</Link></li>
              <li><Link to="/MR-Mammographie">Mamma-MRT & Ablauf</Link></li>
              <li><Link to="/fuer-gynaekolog-innen">Für Gynäkolog:innen</Link></li>
              <li><Link to="/wissenschaft-forschung">Wissenschaft & Forschung</Link></li>
              <li><Link to="/ueber-uns">Über uns & Team</Link></li>
              <li><Link to="/news">Aktuelle Meldungen</Link></li>
            </ul>
          </div>

          {/* Col 3: Service & FAQ */}
          <div className="footer-col">
            <h4 className="footer-heading">Service & Hilfe</h4>
            <ul className="footer-links">
              <li><Link to="/terminanfrage">Termin online anfragen</Link></li>
              <li><Link to="/faqs">Häufig gestellte Fragen (FAQ)</Link></li>
              <li><Link to="/wissenschaft-forschung#literatur">Literaturverzeichnis</Link></li>
              <li><Link to="/kontakt">Kontakt & Anfahrtsbeschreibung</Link></li>
              <li><Link to="/impressum">Impressum</Link></li>
              <li><Link to="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Standort & Kontakt</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>KMZ – Kaiser MR-Mammographie Zentrum<br />Hauptstandort Köln / Diagnostik<br />50667 Köln</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+49 (0) 221 / 123 456-0</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@kmz-brustvorsorge.de</span>
              </li>
            </ul>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline footer-map-btn"
            >
              <span>Routenplaner öffnen</span>
              <ExternalLink size={14} />
            </a>
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
