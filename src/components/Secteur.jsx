import React from 'react';

export default function Secteur() {
  return (
    <section className="map-section" id="secteur">
      <div className="section-header">
        <h2>Secteur d'intervention</h2>
      </div>
      
      <div className="secteur-container">
        
        {/* Partie gauche : Texte et Légende */}
        <div className="secteur-info">
          <p className="secteur-description">
            J'interviens principalement sur Saint-Brévin-les-Pins et ses communes limitrophes. 
            N'hésitez pas à me contacter si vous vous situez aux alentours.
          </p>
          
          <div className="secteur-legend">
            <div className="legend-item">
              <span className="legend-color legend-rose"></span>
              <div className="legend-text">
                <strong>Zone Rose (Saint-Brévin & environs)</strong>
                <span>Aucun frais de déplacement</span>
              </div>
            </div>
            
            <div className="legend-item">
              <span className="legend-color legend-violet"></span>
              <div className="legend-text">
                <strong>Zone Violette</strong>
                <span>Frais de déplacement : 15 €</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partie droite : La carte avec l'astuce pour cacher le titre */}
        <div className="secteur-map-wrapper">
          <div className="iframe-hider">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1s85qOaQYiAb7y59PIp4MC2nYp63d9jM" 
              title="Secteur d'intervention de Rozenn Guéguen"
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}