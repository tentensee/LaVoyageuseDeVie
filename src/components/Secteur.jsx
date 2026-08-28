import React from 'react';

export default function Secteur() {
  return (
    <section className="map-section" id="secteur">
      <div className="section-header">
        <h2>Secteur d'intervention</h2>
      </div>
      
      <div className="map-container">
        <p className="map-description">
          J'interviens principalement sur Saint-Brévin-les-Pins et ses communes limitrophes. 
          N'hésitez pas à me contacter si vous vous situez aux alentours.
        </p>
        
        <div className="iframe-wrapper">
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1s85qOaQYiAb7y59PIp4MC2nYp63d9jM" 
            title="Secteur d'intervention de Rozenn Guéguen"
            width="100%" 
            height="480" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}