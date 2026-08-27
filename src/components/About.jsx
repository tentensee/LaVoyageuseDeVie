import React from 'react';

export default function About() {
  return (
    <section className="about-section" id="approche">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-img-placeholder">
            <svg style={{ width: '50px', height: '50px', fill: 'var(--sage-green)', opacity: 0.6 }} viewBox="0 0 24 24">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
            </svg>
          </div>
          <h3 className="about-name">Rozenn Guéguen Trégouët</h3>
        </div>
        <div>
          <h3 className="about-quote">" Parce que chaque histoire est unique. "</h3>
          <p className="about-text">Professionnelle de l'accompagnement basée à Saint-Brévin, mon rôle est d'apporter une présence chaleureuse, bienveillante et rassurante aux personnes âgées tout en offrant une bulle de répit essentielle à leurs proches aidants.</p>
          <p className="about-text">Chaque parcours de vie mérite une attention singulière. C'est pourquoi je m'adapte précisément à vos habitudes, à votre rythme et à vos besoins spécifiques au quotidien.</p>
        </div>
      </div>
    </section>
  );
}
