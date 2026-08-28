import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'services', 'approche', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            <li><a href="#services" onClick={closeMenu} className={activeSection === 'services' ? 'active' : ''}>Mes Services</a></li>
            <li><a href="#tarifs" onClick={closeMenu} className={activeSection === 'tarifs' ? 'active' : ''}>Mes Tarifs</a></li>
            <li><a href="#approche" onClick={closeMenu} className={activeSection === 'approche' ? 'active' : ''}>Mon Approche</a></li>
            <li><a href="#contact" onClick={closeMenu} className="btn-cta">Me Contacter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
