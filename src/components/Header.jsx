import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'services', 'for-who', 'secteur', 'tarifs', 'approche', 'contact'];
      const triggerPosition = window.innerHeight * 0.35;

      let currentSection = 'accueil';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= triggerPosition && rect.bottom >= triggerPosition) {
          currentSection = section;
          break;
        }

        if (rect.top > triggerPosition && rect.top < window.innerHeight) {
          currentSection = section;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header>
      <div className="nav-container">
        <a href="#accueil" className="logo">
          <span className="logo-main">LA VOYAGEUSE</span>
          <span className="logo-sub script-font">de Vie</span>
        </a>
        
        <div 
          className="menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul className={isMobileMenuOpen ? 'active' : ''}>
            <li><a href="#accueil" onClick={closeMenu} className={activeSection === 'accueil' ? 'active' : ''}>Accueil</a></li>
            <li><a href="#services" onClick={closeMenu} className={activeSection === 'services' ? 'active' : ''}>Mes services</a></li>
            <li><a href="#for-who" onClick={closeMenu} className={activeSection === 'for-who' ? 'active' : ''}>Pour qui ?</a></li>
            <li><a href="#secteur" onClick={closeMenu} className={activeSection === 'secteur' ? 'active' : ''}>Secteur d'intervention</a></li>
            <li><a href="#tarifs" onClick={closeMenu} className={activeSection === 'tarifs' ? 'active' : ''}>Tarif</a></li>
            <li><a href="#approche" onClick={closeMenu} className={activeSection === 'approche' ? 'active' : ''}>Qui suis-je</a></li>
            <li><a href="#contact" onClick={closeMenu} className="btn-cta">Me Contacter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
