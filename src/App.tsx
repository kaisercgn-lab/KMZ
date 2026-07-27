import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

import { HomePage } from './pages/HomePage';
import { PatientinnenPage } from './pages/PatientinnenPage';
import { MammaMrtPage } from './pages/MammaMrtPage';
import { GynaekologenPage } from './pages/GynaekologenPage';
import { WissenschaftPage } from './pages/WissenschaftPage';
import { QualitaetssicherungPage } from './pages/QualitaetssicherungPage';
import { UeberUnsPage } from './pages/UeberUnsPage';
import { TerminanfragePage } from './pages/TerminanfragePage';
import { KontaktPage } from './pages/KontaktPage';
import { FaqPage } from './pages/FaqPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brustkrebsvorsorge" element={<PatientinnenPage />} />
          <Route path="/MR-Mammographie" element={<MammaMrtPage />} />
          <Route path="/qualitaetssicherung" element={<QualitaetssicherungPage />} />
          <Route path="/fuer-gynaekolog-innen" element={<GynaekologenPage />} />
          <Route path="/wissenschaft-forschung" element={<WissenschaftPage />} />
          <Route path="/ueber-uns" element={<UeberUnsPage />} />
          <Route path="/news" element={<HomePage />} />
          <Route path="/terminanfrage" element={<TerminanfragePage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;
