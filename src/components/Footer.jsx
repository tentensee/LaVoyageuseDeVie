import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo-main" style={{ fontSize: '1.4rem', letterSpacing: '2px', color: 'white' }}>LA VOYAGEUSE</span>
          <span className="about-name" style={{ fontSize: '2.5rem', display: 'block' }}>Rozenn Guéguen</span>
        </div>
        
        <div className="footer-info-block">
          <svg className="footer-icon" viewBox="0 0 24 24">
            <path d="M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2M12,4A5,5 0 0,1 17,9C17,12.5 13.93,16.92 12,19.34C10.07,16.92 7,12.46 7,9A5,5 0 0,1 12,4M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6Z"/>
          </svg>
          <div className="footer-text">
            <h4>Zone d'intervention</h4>
            <p>Saint Brévin et ses alentours</p>
          </div>
        </div>

        <div className="footer-info-block">
          <svg className="footer-icon" viewBox="0 0 24 24">
            <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,6L12,11L4,6H20M20,18H4V8L12,13L20,8V18Z"/>
          </svg>
          <div className="footer-text">
            <h4>Coordonnées</h4>
            <p style={{ marginBottom: '5px' }}><a href="tel:06.59.32.15.52">+33 6 59 32 15 52</a></p>
            <p><a href="mailto:lavoyageusedevie@gmail.com">lavoyageusedevie@gmail.com</a></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 La Voyageuse de Vie - Tous droits réservés.</p>
        <p>Maquette fonctionnelle pour intégration.</p>
      </div>
    </footer>
  );
}
