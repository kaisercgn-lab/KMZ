import React from 'react';
import { Users, Award, ShieldCheck, HeartPulse, Sparkles, Building2 } from 'lucide-react';
import './UeberUnsPage.css';

export const UeberUnsPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Prof. Dr. med. Clemens Kaiser',
      role: 'Leitung MRT-Zentrum & Sektionsleiter Mammadiagnostik',
      desc: 'Experte für Mamma-MRT mit über 20 Jahren Erfahrung in klinischer Forschung und Früherkennung.',
      tag: 'Zentrumsleitung',
      image: '/prof-kaiser.jpg'
    },
    {
      name: 'Dr. Sabrina Fastenrath',
      role: 'Fachärztin für Radiologie & Mammadiagnostik',
      desc: 'Spezialisiert auf hochauflösende Schnittbilddiagnostik und die Betreuung von Risikopatientinnen.',
      tag: 'Oberärztin',
      image: '/sabrina-fastenrath.jpg'
    },
    {
      name: 'Esther Keller',
      role: 'Leitende Medizinisch-Technische Radiologieassistentin (MTRA)',
      desc: 'Verantwortlich für die optimale, schmerzfreie Lagerung und die Einhaltung höchster Qualitätsstandards bei allen MRT-Sequenzen.',
      tag: 'MTRA-Leitung',
      image: '/esther-keller.jpg'
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
          <h1 className="page-title">Das Kaiser MR-Mammographie Zentrum (KMZ)</h1>
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
              <div className="team-avatar-wrapper">
                <img src={member.image} alt={member.name} className="team-member-portrait" />
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
                Das Kaiser MR-Mammographie Zentrum fungiert als hochspezialisiertes Kompetenzzentrum für Mamma-MRT. Wir arbeiten Hand in Hand mit behandelnden Gynäkologinnen, Frauenkliniken und interdisziplinären Brustzentren zusammen.
              </p>
              <p className="text-body">
                Unser Ziel ist die lückenlose Diagnostik: Von der Indikationsstellung über die hochauflösende 3T-MRT-Untersuchung bis hin zur direkten Befundbesprechung mit der Patientin und den zuweisenden Ärzt:innen.
              </p>
            </div>

            <div className="card shadow-lg p-4 bg-white">
              <h3 className="card-title mb-3">Qualitätskriterien des KMZ</h3>
              <ul className="checklist">
                <li>
                  <ShieldCheck size={20} className="text-teal" />
                  <span>Spezialisierte High-End 3 Tesla Mamma-MRT Systeme</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="text-teal" />
                  <span>Leitung durch international anerkannte Mamma-MRT Experten</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="text-teal" />
                  <span>Qualitätskontrolle nach strengen wissenschaftlichen Kriterien</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="text-teal" />
                  <span>Direkte Abrechnungsmöglichkeit im TK-Selektivvertrag</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
