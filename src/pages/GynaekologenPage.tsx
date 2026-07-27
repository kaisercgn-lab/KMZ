import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  FileText,
  CheckSquare,
  Phone,
  Mail,
  ShieldCheck,
  Share2,
  ExternalLink,
  Award,
  BookOpen,
  CheckCircle2,
  Shield
} from 'lucide-react';
import './GynaekologenPage.css';

export const GynaekologenPage: React.FC = () => {
  return (
    <div className="gynaekologen-page">
      {/* Page Header */}
      <section className="page-header-section primary-gradient">
        <div className="container">
          <div className="section-tag">
            <Stethoscope size={16} />
            <span>Für Fachärzt:innen &amp; Gynäkolog:innen</span>
          </div>
          <h1 className="page-title">Interdisziplinäre Zuweisung &amp; Kooperation</h1>
          <p className="page-description">
            Der vertrauensvolle kollegiale Austausch ist uns ein zentrales Anliegen. Gemeinsam bieten wir Ihren Patientinnen höchste Sicherheit in der Mamma-Diagnostik.
          </p>
        </div>
      </section>

      {/* Main Content & Indications Grid */}
      <section className="section-padding container">
        <div className="grid-2 gap-lg">
          <div>
            <div className="section-tag">
              <CheckSquare size={16} />
              <span>Evidenzbasierte Indikationen</span>
            </div>
            <h2 className="section-title">Wann empfiehlt sich die Überweisung zur Mamma-MRT?</h2>
            <p className="text-body">
              Gemäß den aktuellen wissenschaftlichen Erkenntnissen (u.a. EUSOBI-Empfehlung &amp; DENSE-Studie) stellt die Mamma-MRT für folgende Fragestellungen die sensitivste Diagnostik dar:
            </p>

            <ul className="indication-list">
              <li>
                <ShieldCheck className="indication-icon" size={20} />
                <div>
                  <strong>Dichtes Brustdrüsengewebe (ACR C &amp; D)</strong>
                  <p>Zur Vermeidung von Intervallkarzinomen bei unzureichender Beurteilbarkeit im Röntgenbild (Maskierungseffekt).</p>
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
                  <strong>Hochrisiko-Screening &amp; Genmutationen</strong>
                  <p>Bei familiärer Belastung oder nachgewiesener BRCA1/2-Genmutation.</p>
                </div>
              </li>
              <li>
                <ShieldCheck className="indication-icon" size={20} />
                <div>
                  <strong>Implantat-Diagnostik &amp; Zustand nach OP</strong>
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
              <h3>Schneller Zuweisungsservice für Ihre Praxis</h3>
              <p className="text-muted mb-4">
                Wir garantieren eine zeitnahe Terminvergabe für Ihre Patientinnen sowie eine umgehende, verlässliche Befundübermittlung.
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

      {/* TK Special Contract / IGV Details Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="card tk-contract-card p-4 border border-teal-100 rounded-xl bg-teal-50">
            <div className="flex align-center justify-between gap-md flex-wrap mb-4 pb-3 border-b border-teal-100">
              <div className="flex align-center gap-md">
                <div className="contract-badge-icon text-teal">
                  <Shield size={32} />
                </div>
                <div>
                  <span className="badge badge-teal mb-1">Besondere Versorgung (§ 140a SGB V)</span>
                  <h2 className="section-title m-0">Selektivvertrag mit der Techniker Krankenkasse (TK)</h2>
                </div>
              </div>
              <a
                href="https://www.tk.de/techniker/versicherung/tk-leistungen/weitere-leistungen/igv-vertraege/ambulante-magnetresonanz-mammografie-mrm-mannheim-2147266"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal"
              >
                <ExternalLink size={16} />
                <span>Offizielle TK-Vertragsseite aufrufen &rarr;</span>
              </a>
            </div>

            <p className="text-body mb-4">
              Über den <strong>Vertrag zur Integrierten/Besonderen Versorgung (IGV-Vertrag)</strong> übernimmt die Techniker Krankenkasse für berechtigte Versorgungsfälle die vollen Kosten der ambulanten Mamma-MRT:
            </p>

            <div className="grid-3 gap-md">
              <div className="card p-3 bg-white border border-line rounded-lg">
                <h4 className="font-serif font-bold text-teal-dark mb-2">Einschlusskriterien</h4>
                <ul className="checklist text-sm">
                  <li><CheckCircle2 size={16} className="text-teal" /> <span>Frauen mit dichtem Brustgewebe (ACR C &amp; D)</span></li>
                  <li><CheckCircle2 size={16} className="text-teal" /> <span>Familiär/genetisch erhöhtes Risiko</span></li>
                  <li><CheckCircle2 size={16} className="text-teal" /> <span>Z. n. Brustkrebs / Rezidivprophylaxe</span></li>
                  <li><CheckCircle2 size={16} className="text-teal" /> <span>Unklare Vorbefunde / Abklärungsbedarf</span></li>
                </ul>
              </div>

              <div className="card p-3 bg-white border border-line rounded-lg">
                <h4 className="font-serif font-bold text-teal-dark mb-2">Ablauf &amp; Verordnung für Praxen</h4>
                <p className="text-sm text-body m-0">
                  Für Ihre Patientinnen genügt eine einfache fachärztliche Zuweisung bzw. Empfehlung. Die Abrechnung erfolgt unbürokratisch über die Teilnahmeerklärung direkt mit der Kasse (keine Vorkasse für TK-Versicherte).
                </p>
              </div>

              <div className="card p-3 bg-white border border-line rounded-lg">
                <h4 className="font-serif font-bold text-teal-dark mb-2">Qualitätsgarantie des KMZ</h4>
                <p className="text-sm text-body m-0">
                  Der Vertrag garantiert höchste diagnostische Standards: Volle Sequenzanalyse (T2, DWI, DCE) auf 1,5T High-End Systemen und 100 % 4-Augen-Doppelbefundung nach QMRM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TK Interview Highlight Section for Gynecologists */}
      <section className="section-padding bg-stone">
        <div className="container">
          <div className="card interview-highlight-card">
            <div className="flex align-center justify-between gap-md flex-wrap mb-4 pb-3 border-b border-line">
              <div className="flex align-center gap-md">
                <div className="interview-badge-icon">
                  <BookOpen size={28} />
                </div>
                <div>
                  <span className="badge badge-teal mb-1">Experteninterview auf TK.de</span>
                  <h2 className="section-title m-0">Mamma-MRT bei dichtem Brustgewebe: Medizinische Evidenz &amp; Versorgung</h2>
                </div>
              </div>
              <a
                href="https://www.tk.de/presse/themen/medizinische-versorgung/interview-mamma-mrt-prof-kaiser-2149294?tkcm=aaus"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <ExternalLink size={16} />
                <span>Zum vollständigen TK-Interview mit Prof. Kaiser &rarr;</span>
              </a>
            </div>

            <p className="text-body mb-4">
              Im offiziellen Presseinterview der Techniker Krankenkasse erläutert <strong>Prof. Dr. med. Clemens Kaiser</strong> die klinischen Hintergründe zur Mamma-MRT bei Frauen mit dichtem Drüsengewebe (ACR C &amp; D) sowie die Kernpunkte des geschlossenen Selektivvertrags:
            </p>

            <div className="grid-2 gap-md">
              <div className="card interview-fact-card">
                <div className="flex align-center gap-sm mb-2">
                  <CheckCircle2 size={20} className="text-teal" />
                  <h4 className="m-0 font-serif font-bold text-teal-dark">1. Überwindung des Maskierungseffekts</h4>
                </div>
                <p className="text-sm text-body m-0">
                  Bei dichtem Brustgewebe (ca. 45% aller Frauen im Screening-Alter) stößt die Röntgen-Mammographie an physikalische Grenzen, da dichtes Gewebe und Karzinome gleichermaßen weiß erscheinen. Die Mamma-MRT erreicht eine Sensitivität von &gt;95% und detektiert Herde &lt;1 cm zuverlässig.
                </p>
              </div>

              <div className="card interview-fact-card">
                <div className="flex align-center gap-sm mb-2">
                  <CheckCircle2 size={20} className="text-teal" />
                  <h4 className="m-0 font-serif font-bold text-teal-dark">2. Kassenleistung im TK-Selektivvertrag</h4>
                </div>
                <p className="text-sm text-body m-0">
                  TK-versicherte Patientinnen mit ACR C/D oder familiärem Risiko erhalten alle 2 Jahre die Mamma-MRT als 100 % kostenfreie Versorgungsleistung. Eine zusätzliche Röntgen-Mammographie ist in diesem Intervall nicht mehr erforderlich.
                </p>
              </div>

              <div className="card interview-fact-card">
                <div className="flex align-center gap-sm mb-2">
                  <CheckCircle2 size={20} className="text-teal" />
                  <h4 className="m-0 font-serif font-bold text-teal-dark">3. Qualitätssicherung schützt vor Falsch-Positiven</h4>
                </div>
                <p className="text-sm text-body m-0">
                  Um Fehlbefunde und unnötige Biopsien zu vermeiden, fordert der Vertrag höchste Qualitätssicherung: Im KMZ wird jedes MRT nach dem strengen QMRM-Standard im 4-Augen-Prinzip doppelbefundet.
                </p>
              </div>

              <div className="card interview-fact-card">
                <div className="flex align-center gap-sm mb-2">
                  <CheckCircle2 size={20} className="text-teal" />
                  <h4 className="m-0 font-serif font-bold text-teal-dark">4. Win-Win-Win Situation</h4>
                </div>
                <p className="text-sm text-body m-0">
                  Frühzeitige Erkennung kleiner Tumore sichert den Organerhalt, verbessert die Heilungschancen (&gt;98%) drastisch und spart dem Gesundheitssystem aufwendige Folge- und Spättherapiekosten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Information Request Section */}
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
