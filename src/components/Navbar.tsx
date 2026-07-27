import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, ChevronRight, PhoneCall, ShieldCheck, Clock, ChevronDown } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isMammaActive = location.pathname === '/MR-Mammographie' || location.pathname === '/qualitaetssicherung';
  const isUeberUnsActive = location.pathname === '/ueber-uns' || location.pathname === '/wissenschaft-forschung';

  return (
    <>
      {/* Top Header Utility Bar */}
      <div className="top-utility-bar">
        <div className="container top-utility-container">
          <div className="top-utility-left">
            <span className="tk-badge-top">
              <ShieldCheck size={14} />
              TK-Vertragspartner: Mamma-MRT Kostenübernahme möglich
            </span>
            <span className="top-divider">|</span>
            <span className="top-info-item">
              <Clock size={13} />
              Mo – Fr: 08:00 – 17:00 Uhr
            </span>
          </div>

          <div className="top-utility-right">
            <a href="tel:02211234567" className="top-phone-link">
              <PhoneCall size={13} />
              <span>Praxistelefon: 0221 / 123 45 67</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="./logo.png" alt="Mamma MRT Zentrum" className="header-logo-img" />
            <div className="logo-text-box">
              <span className="logo-title">KMZ</span>
              <span className="logo-subtitle">Kaiser MR-Mammographie Zentrum</span>
            </div>
          </Link>

          <nav className="navbar-nav">
            <ul className="nav-list">
              {/* Item 1: Patientinnen */}
              <li className="nav-item">
                <Link
                  to="/brustkrebsvorsorge"
                  className={`nav-link ${location.pathname === '/brustkrebsvorsorge' ? 'active' : ''}`}
                >
                  Für Patientinnen
                </Link>
              </li>

              {/* Item 2: Mamma-MRT (Dropdown including Qualitätssicherung) */}
              <li className="nav-item nav-item-has-dropdown">
                <Link
                  to="/MR-Mammographie"
                  className={`nav-link ${isMammaActive ? 'active' : ''}`}
                >
                  <span>Mamma-MRT</span>
                  <ChevronDown size={14} className="dropdown-arrow" />
                </Link>
                <div className="dropdown-menu">
                  <Link
                    to="/MR-Mammographie"
                    className={`dropdown-item ${location.pathname === '/MR-Mammographie' ? 'active' : ''}`}
                  >
                    Ablauf & Untersuchung
                  </Link>
                  <Link
                    to="/qualitaetssicherung"
                    className={`dropdown-item ${location.pathname === '/qualitaetssicherung' ? 'active' : ''}`}
                  >
                    Qualitätssicherung & QMRM
                  </Link>
                </div>
              </li>

              {/* Item 3: Für Gynäkolog:innen */}
              <li className="nav-item">
                <Link
                  to="/fuer-gynaekolog-innen"
                  className={`nav-link ${location.pathname === '/fuer-gynaekolog-innen' ? 'active' : ''}`}
                >
                  Für Gynäkolog:innen
                </Link>
              </li>

              {/* Item 4: Über uns (Dropdown including Wissenschaft) */}
              <li className="nav-item nav-item-has-dropdown">
                <Link
                  to="/ueber-uns"
                  className={`nav-link ${isUeberUnsActive ? 'active' : ''}`}
                >
                  <span>Über uns</span>
                  <ChevronDown size={14} className="dropdown-arrow" />
                </Link>
                <div className="dropdown-menu">
                  <Link
                    to="/ueber-uns"
                    className={`dropdown-item ${location.pathname === '/ueber-uns' ? 'active' : ''}`}
                  >
                    Das Zentrum & Team
                  </Link>
                  <Link
                    to="/wissenschaft-forschung"
                    className={`dropdown-item ${location.pathname === '/wissenschaft-forschung' ? 'active' : ''}`}
                  >
                    Wissenschaft & Forschung
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <Link to="/terminanfrage" className="btn btn-primary nav-cta">
              <Calendar size={18} />
              <span>Terminanfrage</span>
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-overlay" onClick={() => setMobileMenuOpen(false)} />
        <div className="drawer-content">
          <div className="drawer-header">
            <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
              <img src="./logo.png" alt="Mamma MRT Zentrum" className="header-logo-img" />
              <div className="logo-text-box">
                <span className="logo-title">KMZ</span>
                <span className="logo-subtitle">Kaiser MR-Mammographie Zentrum</span>
              </div>
            </Link>
            <button className="drawer-close" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="drawer-tk-callout">
            <ShieldCheck size={16} />
            <span>TK-Kundinnen: Direct Terminierung & Kostenübernahme</span>
          </div>

          <ul className="mobile-nav-list">
            <li>
              <Link
                to="/brustkrebsvorsorge"
                className={`mobile-nav-link ${location.pathname === '/brustkrebsvorsorge' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Für Patientinnen</span>
                <ChevronRight size={18} />
              </Link>
            </li>
            <li>
              <Link
                to="/MR-Mammographie"
                className={`mobile-nav-link ${location.pathname === '/MR-Mammographie' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Mamma-MRT Ablauf</span>
                <ChevronRight size={18} />
              </Link>
            </li>
            <li className="mobile-sub-item">
              <Link
                to="/qualitaetssicherung"
                className={`mobile-nav-link ${location.pathname === '/qualitaetssicherung' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>└ Qualitätssicherung (QMRM)</span>
                <ChevronRight size={18} />
              </Link>
            </li>
            <li>
              <Link
                to="/fuer-gynaekolog-innen"
                className={`mobile-nav-link ${location.pathname === '/fuer-gynaekolog-innen' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Für Gynäkolog:innen</span>
                <ChevronRight size={18} />
              </Link>
            </li>
            <li>
              <Link
                to="/ueber-uns"
                className={`mobile-nav-link ${location.pathname === '/ueber-uns' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Über uns & Team</span>
                <ChevronRight size={18} />
              </Link>
            </li>
            <li className="mobile-sub-item">
              <Link
                to="/wissenschaft-forschung"
                className={`mobile-nav-link ${location.pathname === '/wissenschaft-forschung' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>└ Wissenschaft & Forschung</span>
                <ChevronRight size={18} />
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className={`mobile-nav-link ${location.pathname === '/faqs' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>FAQ & Häufige Fragen</span>
                <ChevronRight size={18} />
              </Link>
            </li>
          </ul>

          <div className="drawer-footer">
            <Link to="/terminanfrage" className="btn btn-primary btn-full">
              <Calendar size={18} />
              <span>Termin online anfragen (auch TK)</span>
            </Link>
            <Link to="/kontakt" className="btn btn-outline btn-full">
              <PhoneCall size={18} />
              <span>Kontakt & Anfahrt</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
