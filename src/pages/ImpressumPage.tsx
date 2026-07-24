import React from 'react';
import { Shield } from 'lucide-react';

export const ImpressumPage: React.FC = () => {
  return (
    <div className="impressum-page">
      <section className="page-header-section primary-gradient">
        <div className="container">
          <div className="section-tag">
            <Shield size={16} />
            <span>Rechtliche Hinweise</span>
          </div>
          <h1 className="page-title">Impressum</h1>
        </div>
      </section>

      <section className="section-padding container">
        <div className="card p-5" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            <strong>KMZ – Kölner MRT-Zentrum für Brustkrebsvorsorge</strong><br />
            Leitung: Prof. Dr. med. Clemens Kaiser<br />
            Hauptstandort Diagnostik<br />
            50667 Köln
          </p>

          <h3 className="mt-4">Kontakt</h3>
          <p className="mt-2">
            Telefon: +49 (0) 221 / 123 456-0<br />
            E-Mail: info@kmz-brustvorsorge.de
          </p>

          <h3 className="mt-4">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
          <p className="mt-2">
            Berufsbezeichnung: Arzt (verliehen in der Bundesrepublik Deutschland)<br />
            Zuständige Ärztekammer: Ärztekammer Nordrhein<br />
            Zuständige Kassenärztliche Vereinigung: KV Nordrhein
          </p>

          <h3 className="mt-4">Haftung für Inhalte & Links</h3>
          <p className="mt-2 text-muted">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </div>
      </section>
    </div>
  );
};
