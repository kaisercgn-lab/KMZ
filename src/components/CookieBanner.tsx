import React, { useState, useEffect } from 'react';
import { ShieldAlert, Check, X, Settings } from 'lucide-react';
import './CookieBanner.css';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('kmz_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }

    const handleReopen = () => {
      setIsVisible(true);
      setShowDetails(true);
    };

    window.addEventListener('openCookieBanner', handleReopen);
    return () => window.removeEventListener('openCookieBanner', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('kmz_cookie_consent', JSON.stringify({ necessary: true, analytics: true }));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('kmz_cookie_consent', JSON.stringify({ necessary: true, analytics: false }));
    setIsVisible(false);
  };

  const handleSaveSelection = () => {
    localStorage.setItem('kmz_cookie_consent', JSON.stringify({ necessary: true, analytics }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-card animate-fade-in">
        <div className="cookie-header">
          <div className="cookie-title-box">
            <ShieldAlert size={22} className="cookie-icon" />
            <h3>Datenschutz- & Cookie-Einstellungen</h3>
          </div>
          <button className="cookie-close" onClick={handleAcceptNecessary} aria-label="Schließen">
            <X size={20} />
          </button>
        </div>

        <p className="cookie-text">
          Um unsere Website für die Vorsorge-Information zu optimieren und Ihnen eine sichere Nutzung zu ermöglichen, verwenden wir notwendige Cookies sowie optionale Analysetools. Sie können Ihre Einstellungen jederzeit anpassen.
        </p>

        {showDetails && (
          <div className="cookie-details-box">
            <div className="cookie-option">
              <div>
                <strong>Erforderliche Cookies</strong>
                <p>Notwendig für die Grundfunktionen der Website, Navigation und Terminanfrage.</p>
              </div>
              <span className="badge badge-navy">Immer aktiv</span>
            </div>
            <div className="cookie-option">
              <div>
                <strong>Reichweitenmessung & Anonyme Analyse</strong>
                <p>Hilft uns zu verstehen, wie Patientinnen und Ärzt:innen Informationen auffinden.</p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="cookie-checkbox"
              />
            </div>
          </div>
        )}

        <div className="cookie-actions">
          {!showDetails ? (
            <>
              <button className="btn btn-primary" onClick={handleAcceptAll}>
                <Check size={18} />
                <span>Alle akzeptieren</span>
              </button>
              <button className="btn btn-outline" onClick={handleAcceptNecessary}>
                Nur notwendige
              </button>
              <button className="cookie-details-link" onClick={() => setShowDetails(true)}>
                <Settings size={16} />
                <span>Einstellungen</span>
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-primary" onClick={handleSaveSelection}>
                Auswahl speichern
              </button>
              <button className="btn btn-outline" onClick={handleAcceptAll}>
                Alle akzeptieren
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
