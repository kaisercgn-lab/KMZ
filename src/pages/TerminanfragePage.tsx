import React, { useState } from 'react';
import { Calendar, CheckCircle2, User, Phone, Mail, Clock, Send, ShieldCheck, Heart } from 'lucide-react';
import './TerminanfragePage.css';

export const TerminanfragePage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [insurance, setInsurance] = useState('privat');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    preferredDate: '',
    cycleDay: '',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="terminanfrage-page">
      <section className="page-header-section teal-gradient">
        <div className="container">
          <div className="section-tag">
            <Calendar size={16} />
            <span>Online-Service</span>
          </div>
          <h1 className="page-title">Terminanfrage für Mamma-MRT</h1>
          <p className="page-description">
            Fragen Sie Ihren Wunschtermin für Ihre Brustkrebsvorsorge einfach und unverbindlich online an. Unser Praxisteam meldet sich umgehend bei Ihnen.
          </p>
        </div>
      </section>

      <section className="section-padding container">
        <div className="termin-wrapper">
          {/* Progress Indicator */}
          {!isSubmitted && (
            <div className="stepper-bar">
              <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
                <span className="step-num">1</span>
                <span className="step-name">Versicherungsstatus</span>
              </div>
              <div className="step-line" />
              <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
                <span className="step-num">2</span>
                <span className="step-name">Persönliche Daten</span>
              </div>
              <div className="step-line" />
              <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
                <span className="step-num">3</span>
                <span className="step-name">Wunschtermin</span>
              </div>
            </div>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="card termin-form-card">
              {/* Step 1 */}
              {step === 1 && (
                <div className="step-pane animate-fade-in">
                  <h2 className="step-heading">Wie sind Sie versichert?</h2>
                  <p className="text-muted mb-4">
                    Bitte wählen Sie Ihren Versicherungsstatus aus, damit wir Sie optimal zur Kostenübernahme beraten können.
                  </p>

                  <div className="insurance-selector">
                    <label className={`insurance-option ${insurance === 'privat' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="insurance"
                        value="privat"
                        checked={insurance === 'privat'}
                        onChange={(e) => setInsurance(e.target.value)}
                      />
                      <div className="option-content">
                        <strong>Privatversichert / Beihilfe</strong>
                        <p>Kosten werden von privaten Krankenversicherungen & Beihilfestellen in der Regel vollständig übernommen.</p>
                      </div>
                    </label>

                    <label className={`insurance-option ${insurance === 'gkv' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="insurance"
                        value="gkv"
                        checked={insurance === 'gkv'}
                        onChange={(e) => setInsurance(e.target.value)}
                      />
                      <div className="option-content">
                        <strong>Gesetzlich versichert mit Überweisung / Einzelfall</strong>
                        <p>Bei begründetem Verdacht oder Einzelfallprüfung durch Ihre Krankenkasse möglich.</p>
                      </div>
                    </label>

                    <label className={`insurance-option ${insurance === 'selbst' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="insurance"
                        value="selbst"
                        checked={insurance === 'selbst'}
                        onChange={(e) => setInsurance(e.target.value)}
                      />
                      <div className="option-content">
                        <strong>Selbstzahlerin (Individuelle Gesundheitsleistung - IGeL)</strong>
                        <p>Abrechnung transparent nach der Gebührenordnung für Ärzte (GOÄ).</p>
                      </div>
                    </label>
                  </div>

                  <div className="step-actions mt-4">
                    <button type="button" className="btn btn-primary" onClick={() => setStep(2)}>
                      Weiter zu Schritt 2 &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="step-pane animate-fade-in">
                  <h2 className="step-heading">Ihre Kontaktdaten</h2>
                  <p className="text-muted mb-4">
                    Geben Sie Ihre Daten an, damit wir Sie für die Terminbestätigung kontaktieren können.
                  </p>

                  <div className="grid-2">
                    <div className="form-group">
                      <label htmlFor="name">Vollständiger Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="z. B. Maria Musterfrau"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="birthdate">Geburtsdatum</label>
                      <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label htmlFor="email">E-Mail-Adresse *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="name@beispiel.de"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Telefonnummer für Rückruf *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="0171 / 1234567"
                      />
                    </div>
                  </div>

                  <div className="step-actions space-between mt-4">
                    <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                      &larr; Zurück
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        if (formData.name && formData.email && formData.phone) setStep(3);
                        else alert('Bitte füllen Sie Name, E-Mail und Telefonnummer aus.');
                      }}
                    >
                      Weiter zu Schritt 3 &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="step-pane animate-fade-in">
                  <h2 className="step-heading">Wunschtermin & Hinweise</h2>
                  <p className="text-muted mb-4">
                    Geben Sie Ihren bevorzugten Untersuchungszeitraum an.
                  </p>

                  <div className="grid-2">
                    <div className="form-group">
                      <label htmlFor="preferredDate">Bevorzugter Zeitraum</label>
                      <input
                        type="text"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="z. B. Nächste Woche vormittags"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="cycleDay">Erster Tag der letzten Regelblutung (falls zutreffend)</label>
                      <input
                        type="text"
                        id="cycleDay"
                        name="cycleDay"
                        value={formData.cycleDay}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="z. B. 05.07. (Optimal: 7.-14. Zyklustag)"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="comments">Anmerkungen oder Fragen an das Ärzteteam</label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Haben Sie Vorerfahrungen, Implantate oder besondere Wünsche?"
                    />
                  </div>

                  <div className="step-actions space-between mt-4">
                    <button type="button" className="btn btn-outline" onClick={() => setStep(2)}>
                      &larr; Zurück
                    </button>
                    <button type="submit" className="btn btn-rose">
                      <Send size={18} />
                      <span>Terminanfrage jetzt absenden</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="card confirmation-card animate-fade-in text-center">
              <div className="confirmation-icon-circle">
                <CheckCircle2 size={56} />
              </div>
              <h2>Vielen Dank für Ihre Terminanfrage, {formData.name}!</h2>
              <p className="confirmation-text">
                Ihre Daten wurden sicher an das Patientenservice-Team des KMZ Köln übermittelt. Wir prüfen Ihren Wunschtermin und melden uns innerhalb von 24 Stunden per Telefon ({formData.phone}) oder E-Mail bei Ihnen.
              </p>
              <div className="mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                >
                  Neue Anfrage stellen
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
