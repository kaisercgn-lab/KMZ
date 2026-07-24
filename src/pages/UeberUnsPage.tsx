import React from 'react';
import { Users, Award, ShieldCheck, HeartPulse, Sparkles, Building2 } from 'lucide-react';
import './UeberUnsPage.css';

export const UeberUnsPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Prof. Dr. med. Clemens Kaiser',
      role: 'Leitung MRT-Zentrum & Sektionsleiter Mammadiagnostik',
      desc: 'Experte für Mamma-MRT mit über 20 Jahren Erfahrung in klinischer Forschung und Früherkennung.',
      tag: 'Zentrumssleitung'
    },
    {
      name: 'Dr. Sabrina Fastenrath',
      role: 'Fachärztin für Radiologie & Mammadiagnostik',
      desc: 'Spezialisiert auf hochauflösende Schnittbilddiagnostik und die Betreuung von Risikopatientinnen.',
      tag: 'Oberärztin'
    },
    {
      name: 'Esther Keller',
      role: 'Leitende Medizinisch-Technische Radiologieassistentin (MTRA)',
      desc: 'Verantwortlich für die optimale, schmerzfreie Lagerung und die Einhaltung höchster Qualitätsstandards bei allen MRT-Sequenzen.',
      tag: 'MTRA-Leitung'
    }
  ];

  return (
    <div className="ueber-uns-page">
      <section className="page-header-section primary-gradient">
        <div className="container">
          <div className="section-tag">
            <Users size={16} />
            <span>Über uns & Qualitätsversprechen</span>
          </div>
          <h1 className="page-title">Das Kölner MRT-Zentrum für Brustkrebsvorsorge</h1>
          <p className="page-description">
            Wir verbinden Spitzenmedizin, empathische Patientinnenbetreuung und wissenschaftliche Exzellenz für Ihre maximale Gesundheitssicherheit.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding container">
        <div className="text-center mb-5">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>Medizinische Expertise</span>
          </div>
          <h2 className="section-title">Unser Leitungsteam & Spezialist:innen</h2>
          <p className="section-subtitle">
            Erfahrene Fachärztinnen und MTRA-Experten begleiten Sie persönlich bei Ihrer Untersuchung.
          </p>
        </div>

        <div className="grid-3 gap-lg">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="card team-card">
              <div className="team-avatar-placeholder">
                <Users size={48} className="team-avatar-icon" />
              </div>
              <span className="badge badge-teal team-badge">{member.tag}</span>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Center Structure & Partners */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid-2 align-center gap-lg">
            <div>
              <div className="section-tag">
                <Building2 size={16} />
                <span>Struktur & Kooperation</span>
              </div>
              <h2 className="section-title">Einheit im interdisziplinären Netzwerk</h2>
              <p className="text-body">
                Das KMZ arbeitet hand in hand mit den führenden Brustzentren und Universitätskliniken zusammen. Wenn sich ein Befund abklärungsbedürftig zeigt, garantieren wir eine nahtlose interdisziplinäre Weiterbetreuung.
              </p>
              <ul className="network-list">
                <li>
                  <ShieldCheck size={20} className="net-icon" />
                  <span>Zertifizierte Qualitätsstandards nach ISO & ACR</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="net-icon" />
                  <span>Enge Einbindung in interdisziplinäre Tumorboards</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="net-icon" />
                  <span>Modernste 3 Tesla High-End Magnetresonanztomographen</span>
                </li>
              </ul>
            </div>

            <div className="card quality-box-card">
              <Award size={48} className="qual-award-icon" />
              <h3>Höchste Qualitätsstufe in der Mamma-MRT</h3>
              <p>
                Regelmäßige Qualitätskontrollen, Doppelbefundung und die Teilnahme an internationalen Studien sichern Ihnen Befundqualität auf höchstem Niveau.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
