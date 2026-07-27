import React from 'react';
import { Lock } from 'lucide-react';

export const DatenschutzPage: React.FC = () => {
  return (
    <div className="datenschutz-page">
      <section className="page-header-section primary-gradient">
        <div className="container">
          <div className="section-tag">
            <Lock size={16} />
            <span>Datenschutzrichtlinie</span>
          </div>
          <h1 className="page-title">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="section-padding container">
        <div className="card p-5" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h2>1. Datenschutz auf einen Blick</h2>
          <p className="mt-2 text-muted">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung und Verarbeitung personenbezogener Daten bei der Nutzung der Website des KMZ.
          </p>

          <h3 className="mt-4">2. Datenerfassung auf unserer Website</h3>
          <p className="mt-2 text-muted">
            Die Datenerarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Kontaktdaten finden Sie im Impressum. Ihre Daten werden einerseits dadurch erhoben, dass Sie uns diese mitteilen (z.B. über das Terminanfrageformular).
          </p>

          <h3 className="mt-4">3. Terminanfrage & Gesundheitsdaten</h3>
          <p className="mt-2 text-muted">
            Daten, die Sie im Rahmen der Online-Terminanfrage eingeben (Name, Kontaktdaten, Versicherungsstatus, Zyklustag), werden ausschließlich zur Terminvereinbarung und medizinischen Vorbereitung verwendet und nach den Vorgaben der DSGVO vertraulich behandelt.
          </p>

          <h3 className="mt-4">4. Ihre Rechte</h3>
          <p className="mt-2 text-muted">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
        </div>
      </section>
    </div>
  );
};
