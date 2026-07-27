import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, HeartPulse, ChevronRight, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
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

  // Clean structured main navigation
  const primaryNavLinks = [
    { label: 'Für Patientinnen', path: '/brustkrebsvorsorge' },
    { label: 'Mamma-MRT', path: '/MR-Mammographie' },
    { label: 'Für Gynäkolog:innen', path: '/fuer-gynaekolog-innen' },
    { label: 'Wissenschaft', path: '/wissenschaft-forschung' },
    { label: 'Über uns', path: '/ueber-uns' },
  ];

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
            <img src="/logo.png" alt="Mamma MRT Zentrum" className="header-logo-img" />
            <div className="logo-text-box">
              <span className="logo-title">KMZ</span>
              <span className="logo-subtitle">Kaiser MR-Mammographie Zentrum</span>
            </div>
          </Link>

          <nav className="navbar-nav">
            <ul className="nav-list">
              {primaryNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path} className="nav-item">
                    <Link
                      to={link.path}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
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
              <img src="/logo.png" alt="Mamma MRT Zentrum" className="header-logo-img" />
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
            {primaryNavLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} />
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/news"
                className={`mobile-nav-link ${location.pathname === '/news' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Aktuelles & News</span>
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
