import React, { useState } from 'react';
import { BookOpen, Search, ExternalLink, Award, FileSpreadsheet, Shield } from 'lucide-react';
import './WissenschaftPage.css';

interface LiteratureItem {
  id: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  doiLink?: string;
  category: 'studien' | 'leitlinien' | 'epidemie';
}

const literatureList: LiteratureItem[] = [
  {
    id: 1,
    authors: 'Sardanelli F, Podo F, Santoro F, et al.',
    year: 2011,
    title: 'Multicenter surveillance of women at high genetic breast cancer risk using mammography, ultrasonography, and contrast-enhanced magnetic resonance imaging',
    journal: 'Invest Radiol 46:94–105',
    category: 'studien'
  },
  {
    id: 2,
    authors: 'Bakker MF, de Lange SV, Pijnappel RM, et al. (DENSE Trial Study Group)',
    year: 2019,
    title: 'Supplemental MRI Screening for Women with Extremely Dense Breast Tissue',
    journal: 'N Engl J Med 381:2091–2102',
    category: 'studien'
  },
  {
    id: 3,
    authors: 'Tollens F, Baltzer PAT, Dietzel M, Kaiser C et al.',
    year: 2021,
    title: 'Cost-Effectiveness of MR Mammography in Breast Cancer Screening of Women With Extremely Dense Breasts After Two Rounds of Screening',
    journal: 'Front Oncol 11:724543',
    category: 'studien'
  },
  {
    id: 4,
    authors: 'Leitlinienprogramm Onkologie (DKG, DKH, AWMF)',
    year: 2021,
    title: 'Interdisziplinäre S3-Leitlinie für die Früherkennung, Diagnostik, Therapie und Nachsorge des Mammakarzinoms',
    journal: 'AWMF-Registernummer: 032-045OL',
    category: 'leitlinien'
  },
  {
    id: 5,
    authors: 'Robert Koch-Institut (RKI) & Zentrum für Krebsregisterdaten',
    year: 2023,
    title: 'Krebs in Deutschland für 2019/2020 – Brustkrebs (Mammakarzinom)',
    journal: '14. Ausgabe, Berlin',
    category: 'epidemie'
  },
  {
    id: 6,
    authors: 'Pisano ED, Hendrick RE, Yaffe MJ, et al. (DMIST Study)',
    year: 2008,
    title: 'Diagnostic accuracy of digital versus film mammography: exploratory analysis of selected population subgroups',
    journal: 'Radiology 246:376–383',
    category: 'studien'
  }
];

export const WissenschaftPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredLit = literatureList.filter(item => {
    const matchesSearch = item.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="wissenschaft-page">
      <section className="page-header-section dark-gradient">
        <div className="container">
          <div className="section-tag">
            <BookOpen size={16} />
            <span>Evidenz & Studien</span>
          </div>
          <h1 className="page-title">Wissenschaft & Klinische Forschung</h1>
          <p className="page-description">
            Überblick über aktuelle Studien, die DETECT-Studienreihe, Kosteneffektivitätsanalysen und das wissenschaftliche Literaturverzeichnis des KMZ.
          </p>
        </div>
      </section>

      {/* DETECT Study Highlight Section */}
      <section className="section-padding container">
        <div className="card study-highlight-card">
          <div className="study-badge-box">
            <Award size={28} className="award-icon" />
            <span className="badge badge-teal">Hauptstudienprojekt</span>
          </div>
          <h2 className="study-title">KM-DETECT / MA-DETECT Studieninitiative</h2>
          <p className="text-body">
            Mit dem Ziel, noch mehr Sicherheit bei der Brustkrebsvorsorge für Frauen mit dichtem Brustdrüsengewebe zu erreichen, wurde die DETECT-Studie unter der Leitung von Prof. Dr. med. Clemens Kaiser ins Leben gerufen.
          </p>
          <p className="text-body">
            Die Studie untersucht die Implementierung der abgerufenen Mamma-MRT im Screening-Setting und evaluiert die Detektionsrate von Karzinomen &lt; 1 cm sowie die Kosteneffektivität im deutschen Gesundheitssystem.
          </p>

          <div className="grid-3 mt-4">
            <div className="card-sub">
              <h4>Ergebnisse nach 200 Probandinnen</h4>
              <p>Veröffentlicht im European Journal of Radiology. Nachgewiesene signifikant höhere Detektionsrate gegenüber Mammographie allein.</p>
            </div>
            <div className="card-sub">
              <h4>DENSE-Studien Validation</h4>
              <p>Bestätigung der Ergebnisse der DENSE-Studie (N Engl J Med 2019) im deutschen Versorgungskontext.</p>
            </div>
            <div className="card-sub">
              <h4>Gesundheitsökonomie</h4>
              <p>Kosteneffektivitätsanalysen (Frontiers in Oncology 2021) belegen die Wirtschaftlichkeit der Mamma-MRT bei ACR C & D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Literature Database Section */}
      <section className="section-padding bg-light" id="literatur">
        <div className="container">
          <div className="section-header-box">
            <div>
              <div className="section-tag">
                <FileSpreadsheet size={16} />
                <span>Publikationen</span>
              </div>
              <h2 className="section-title">Wissenschaftliches Literaturverzeichnis</h2>
            </div>

            {/* Search and Filters */}
            <div className="filter-bar">
              <div className="search-input-box">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Autor, Titel oder Journal suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                <option value="all">Alle Kategorien</option>
                <option value="studien">Klinische Studien</option>
                <option value="leitlinien">S3-Leitlinien</option>
                <option value="epidemie">Epidemiologie (RKI/DKFZ)</option>
              </select>
            </div>
          </div>

          <div className="literature-list-container">
            {filteredLit.map((item) => (
              <div key={item.id} className="card lit-item-card">
                <div className="lit-id">[{item.id}]</div>
                <div className="lit-content">
                  <div className="lit-authors">{item.authors} ({item.year})</div>
                  <h3 className="lit-title">{item.title}</h3>
                  <div className="lit-journal">{item.journal}</div>
                </div>
                <div className="lit-tag">
                  <span className="badge badge-navy">{item.category}</span>
                </div>
              </div>
            ))}

            {filteredLit.length === 0 && (
              <div className="text-center py-5 text-muted">
                Keine Literaturstellen für diesen Suchbegriff gefunden.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
