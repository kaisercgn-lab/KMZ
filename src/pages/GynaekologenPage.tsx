import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, FileText, CheckSquare, Phone, Mail, ShieldCheck, Share2 } from 'lucide-react';
import './GynaekologenPage.css';

export const GynaekologenPage: React.FC = () => {
  return (
    <div className="gynaekologen-page">
      <section className="page-header-section primary-gradient">
        <div className="container">
          <div className="section-tag">
            <Stethoscope size={16} />
            <span>Für Fachärzt:innen & Gynäkolog:innen</span>
          </div>
          <h1 className="page-title">Interdisziplinäre Zuweisung & Kooperation</h1>
          <p className="page-description">
            Der vertrauensvolle kollegiale Austausch ist uns ein zentrales Anliegen. Gemeinsam bieten wir Ihren Patientinnen höchste Sicherheit in der Mamma-Diagnostik.
          </p>
        </div>
      </section>

      <section className="section-padding container">
        <div className="grid-2 gap-lg">
          <div>
            <div className="section-tag">
              <CheckSquare size={16} />
              <span>Evidenzbasierte Indikationen</span>
            </div>
            <h2 className="section-title">Wann empfiehlt sich die Überweisung zur Mamma-MRT?</h2>
            <p className="text-body">
              Gemäß den aktuellen wissenschaftlichen Erkenntnissen (u.a. DENSE-Studie) und der S3-Leitlinie stellt die Mamma-MRT für folgende Fragestellungen die sensitivste Diagnostik dar:
            </p>

            <ul className="indication-list">
              <li>
                <ShieldCheck className="indication-icon" size={20} />
                <div>
                  <strong>Dichtes Brustdrüsengewebe (ACR C & D)</strong>
                  <p>Zur Vermeidung von Intervallkarzinomen bei unzureichender Beurteilbarkeit im Röntgenbild.</p>
                </div>
              </li>
              <li>
                <ShieldCheck className="indication-icon" size={20} />
                <div>
                  <strong>Abklärung unklarer Befunde</strong>
                  <p>Zur Differenzierung unklarer Läsionen aus Mammographie oder Sonographie (z. B. BI-RADS 3/0).</p>
                </div>
              </li>
              <li>
                <ShieldCheck className="indication-icon" size={20} />
                <div>
                  <strong>Hochrisiko-Screening & Genmutationen</strong>
                  <p>Bei familiärer Belastung oder nachgewiesener BRCA1/2-Genmutation.</p>
                </div>
              </li>
              <li>
                <ShieldCheck className="indication-icon" size={20} />
                <div>
                  <strong>Implantat-Diagnostik & Zustand nach OP</strong>
                  <p>Ausschluss von Implantat-Rupturen oder Rezidivdiagnostik bei Narbengewebe.</p>
                </div>
              </li>
              <li>
                <ShieldCheck className="indication-icon" size={20} />
                <div>
                  <strong>Neoadjuvante Therapiebeurteilung</strong>
                  <p>Präzise Verlaufskontrolle des Ansprechens unter neoadjovanter Chemo- oder Immuntherapie.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="card referral-card">
              <h3>Schneller Zuweisungsservice für Ihre Praxen</h3>
              <p className="text-muted">
                Wir garantieren eine zeitnahe Terminvergabe für Ihre Patientinnen sowie eine umgehende Befundübermittlung.
              </p>

              <div className="service-feature">
                <FileText size={22} className="feature-icon" />
                <div>
                  <strong>Digitaler Befunddialog</strong>
                  <p>Befundberichte und hochauflösende DICOM-Bilddaten werden direkt über sichere Schnittstellen bereitgestellt.</p>
                </div>
              </div>

              <div className="service-feature">
                <Share2 size={22} className="feature-icon" />
                <div>
                  <strong>Interdisziplinäres Tumorboard</strong>
                  <p>Vorstellung komplexer Fälle im zertifizierten Brustzentrum zur gemeinsamen Therapieplanung.</p>
                </div>
              </div>

              <div className="doctor-hotline-box mt-4">
                <h4>Ärztliche Direktkontakt-Hotline</h4>
                <p>Für kollegiale Rückfragen zu Befunden oder dringenden Indikationen:</p>
                <div className="hotline-details">
                  <a href="tel:+492211234560" className="hotline-link">
                    <Phone size={18} />
                    <span>+49 (0) 221 / 123 456-0</span>
                  </a>
                  <a href="mailto:aerzte@kmz-brustvorsorge.de" className="hotline-link">
                    <Mail size={18} />
                    <span>aerzte@kmz-brustvorsorge.de</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <div className="card patient-cta-card">
          <div>
            <h2>Sie möchten Zuweisungsunterlagen anfordern?</h2>
            <p>Gerne senden wir Ihnen Überweisungsbögen und Patienten-Informationsflyer für Ihre Praxis zu.</p>
          </div>
          <Link to="/kontakt" className="btn btn-primary">
            <span>Zuweisungsunterlagen anfordern</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
