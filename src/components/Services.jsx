import React from 'react';

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2>Mes Prestations</h2>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="card-icon-wrapper">
            <svg className="card-icon" viewBox="0 0 24 24">
              <path d="M16,13C15.71,13 15.38,13 15.05,13.05C14.82,12.43 14.21,12 13.5,12C12.79,12 12.18,12.43 11.95,13.05C11.62,13 11.29,13 11,13C8.24,13 6,15.24 6,18V21H10V18C10,16.07 11.57,14.5 13.5,14.5C15.43,14.5 17,16.07 17,18V21H21V18C21,15.24 18.76,13 16,13M13.5,4C14.88,4 16,5.12 16,6.5C16,7.88 14.88,9 13.5,9C12.12,9 11,7.88 11,6.5C11,5.12 12.12,4 13.5,4M7.5,7C8.88,7 10,8.12 10,9.5C10,10.88 8.88,12 7.5,12C6.12,12 5,10.88 5,9.5C5,8.12 6.12,7 7.5,7M4.5,14.85C4.84,14.55 5.23,14.3 5.66,14.12C5.23,15.14 5,16.29 5,17.5V21H3V17.5C3,16.39 3.57,15.4 4.5,14.85Z"/>
            </svg>
          </div>
          <h3 className="card-title">Accompagnement des personnes âgées</h3>
          <p className="card-subtitle script-font">Présence & lien social</p>
          <p className="about-text">Pour les personnes qui souhaitent rompre l'isolement, maintenir un lien social ou simplement partager un moment de qualité, je vous propose un accompagnement humain et personnalisé dans votre quotidien avec une présence et une écoute véritable : </p>
          <ul className="service-list">
            <li>visites de convivialité</li>
            <li>temps d'écoute et de conversation</li>
            <li>jeux, lecture, promenades</li>
            <li>aide aux démarches simples : factures, courrier, initiation au numérique </li>
          <p className="card-subtitle script-font">Sorties & accompagnement</p>
          <p className="about-text">Vous souhaitez vous rendre à des rendez-vous ou sorties culturelles mais ne souhaitez ou ne pouvez le faire seul ? Je vous accompagne lors de vos déplacements hors du domicile : promenade, marché, médiathèque, exposition, activité associative …</p>
          </ul>
        </div>

        <div className="service-card">
          <div className="card-icon-wrapper">
            <svg className="card-icon" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18c-2.45,0 -4.61,-1.24 -5.89,-3.12C6.39,13.62 9,12.5 12,12.5c3,0 5.61,1.12 5.89,2.38C16.61,16.76 14.45,18 12,18Z"/>
            </svg>
          </div>
          <h3 className="card-title">Accompagnement des aidants</h3>
          <p className="card-subtitle script-font">aidants</p>
          <ul className="service-list">
            <li>Écoute, soutien moral et échanges</li>
            <li>Répit et relais à domicile</li>
            <li>Accompagnement dans les démarches</li>
            <li>Des ressources et conseils adaptés à votre situation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
