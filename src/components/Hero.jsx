import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            LA VOYAGEUSE<br/>
            <span className="script-font" style={{ fontSize: '3.5rem', color: 'var(--sage-green)' }}>
              de Vie
            </span>
          </h1>
          <p className="hero-subtitle">Accompagnement des séniors et des aidants</p>
          <a href="#services" className="btn-cta" style={{ padding: '14px 30px', fontSize: '1rem' }}>
            Découvrir mes services
          </a>
        </div>
      </div>
    </section>
  );
}
