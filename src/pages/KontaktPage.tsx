import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Send } from 'lucide-react';
import './KontaktPage.css';

export const KontaktPage: React.FC = () => {
  return (
    <div className="kontakt-page">
      <section className="page-header-section dark-gradient">
        <div className="container">
          <div className="section-tag">
            <MapPin size={16} />
            <span>Standort & Kontakt</span>
          </div>
          <h1 className="page-title">Kontakt & Anfahrt</h1>
          <p className="page-description">
            Wir freuen uns auf Ihren Besuch oder Ihre Kontaktaufnahme. Hier finden Sie alle Informationen zur Anreise und Erreichbarkeit des KMZ.
          </p>
        </div>
      </section>

      <section className="section-padding container">
        <div className="grid-2 gap-lg">
          {/* Contact Details */}
          <div>
            <h2 className="section-title">So erreichen Sie uns</h2>
            <p className="text-body mb-4">
              Unser Praxisteam steht Ihnen für telefonische Rückfragen, Terminabsprachen oder Orientierungshilfen sehr gerne zur Verfügung.
            </p>

            <div className="contact-card-group">
              <div className="card contact-detail-card">
                <MapPin className="detail-icon" size={24} />
                <div>
                  <strong>Adresse & Anreise</strong>
                  <p>KMZ – Kaiser MR-Mammographie Zentrum<br />Hauptstandort Diagnostik</p>
                </div>
              </div>

              <div className="card contact-detail-card">
                <Phone className="detail-icon" size={24} />
                <div>
                  <strong>Telefonische Erreichbarkeit</strong>
                  <p>+49 (0) 221 / 123 456-0<br />Mo–Fr: 08:00 – 17:00 Uhr</p>
                </div>
              </div>

              <div className="card contact-detail-card">
                <Mail className="detail-icon" size={24} />
                <div>
                  <strong>E-Mail-Kontakt</strong>
                  <p>info@kmz-brustvorsorge.de</p>
                </div>
              </div>

              <div className="card contact-detail-card">
                <Clock className="detail-icon" size={24} />
                <div>
                  <strong>Sprechzeiten</strong>
                  <p>Montag bis Donnerstag: 08:00 – 18:00 Uhr<br />Freitag: 08:00 – 16:00 Uhr</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Google Maps Routenplaner öffnen</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="card quick-contact-card">
            <h3>Direkte Nachricht senden</h3>
            <p className="text-muted mb-4">
              Haben Sie eine allgemeine Frage? Nutzen Sie gerne unser Kontaktformular.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze.'); }}>
              <div className="form-group">
                <label>Ihr Name *</label>
                <input type="text" required className="form-control" placeholder="Maria Musterfrau" />
              </div>
              <div className="form-group">
                <label>E-Mail-Adresse *</label>
                <input type="email" required className="form-control" placeholder="name@beispiel.de" />
              </div>
              <div className="form-group">
                <label>Betreff</label>
                <input type="text" className="form-control" placeholder="z. B. Allgemeine Frage zu Mamma-MRT" />
              </div>
              <div className="form-group">
                <label>Ihre Nachricht *</label>
                <textarea rows={4} required className="form-control" placeholder="Schreiben Sie uns Ihr Anliegen..." />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <Send size={18} />
                <span>Nachricht absenden</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
