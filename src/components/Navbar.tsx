import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, HeartPulse, ChevronRight, PhoneCall } from 'lucide-react';
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

  const navLinks = [
    { label: 'Für Patientinnen', path: '/brustkrebsvorsorge' },
    { label: 'Mamma-MRT', path: '/MR-Mammographie' },
    { label: 'Für Gynäkolog:innen', path: '/fuer-gynaekolog-innen' },
    { label: 'Wissenschaft & Forschung', path: '/wissenschaft-forschung' },
    { label: 'Über uns', path: '/ueber-uns' },
    { label: 'News', path: '/news' },
    { label: 'FAQ', path: '/faqs' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon-box">
              <HeartPulse className="logo-icon" size={24} />
            </div>
            <div className="logo-text-box">
              <span className="logo-title">KMZ</span>
              <span className="logo-subtitle">Kölner MRT-Zentrum für Brustkrebsvorsorge</span>
            </div>
          </Link>

          <nav className="navbar-nav">
            <ul className="nav-list">
              {navLinks.map((link) => {
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
              <HeartPulse className="logo-icon" size={24} />
              <div className="logo-text-box">
                <span className="logo-title">KMZ</span>
                <span className="logo-subtitle">Kölner MRT-Zentrum</span>
              </div>
            </Link>
            <button className="drawer-close" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
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
          </ul>
          <div className="drawer-footer">
            <Link to="/terminanfrage" className="btn btn-primary btn-full">
              <Calendar size={18} />
              <span>Termin online anfragen</span>
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
