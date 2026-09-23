import React from 'react';

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2>Mes Services</h2>
      </div>
      
      <div className="services-grid">
        {/* Carte 1 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24">
                <path d="M12,12C14.21,12 16,10.21 16,8C16,5.79 14.21,4 12,4C9.79,4 8,5.79 8,8C8,10.21 9.79,12 12,12ZM12,14C9.33,14 4,15.34 4,18V20H20V18C20,15.34 14.67,14 12,14Z"/>
              </svg>
            </div>
            <h3 className="card-title">Présence & compagnie</h3>
          </div>
          <p className="card-subtitle script-font">Un moment d’échange et de discussion, un café partagé ou simplement une présence rassurante</p>
          </div>

        {/* Carte 2 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24">
                <path d="M20,5H4A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5M20,7V8.5L12,13.5L4,8.5V7H20M4,17V10.5L11.43,15.2C11.76,15.4 12.24,15.4 12.57,15.2L20,10.5V17H4Z"/>
              </svg>
            </div>
            <h3 className="card-title">Promenades & sorties</h3>
          </div>
          <p className="card-subtitle script-font">Prendre l'air, se promener, aller au marché, à la médiathèque, selon vos envies et possibilités</p>
         </div>

        {/* Carte 3 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24">
                <path d="M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2M10,4H14V6H10V4M12,18A3,3 0 1,1 15,15A3,3 0 0,1 12,18M12,8A3,3 0 1,1 15,5A3,3 0 0,1 12,8Z"/>
              </svg>
            </div>
            <h3 className="card-title">Lecture, jeux & activités</h3>
          </div>
          <p className="card-subtitle script-font">Lire ensemble, jouer, discuter, stimuler la mémoire ou partager une activité créative ou culturelle</p>
          </div>

        {/* Carte 4 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24">
                <path d="M18,11H15V9H13V11H10V13H13V15H15V13H18V11M20,6H16.5L15.46,4.5C15.18,4.16 14.77,4 14.33,4H9.67C9.23,4 8.82,4.16 8.54,4.5L7.5,6H4A2,2 0 0,0 2,8V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M20,18H4V8H20V18Z"/>
              </svg>
            </div>
            <h3 className="card-title">Courses & rendez-vous</h3>
          </div>
          <p className="card-subtitle script-font">Un accompagnement pour les courses, les rendez-vous ou les déplacements du quotidien</p>
          </div>

        {/* Carte 5 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24">
                <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,4V20H18V4H6M8,6H16V8H8V6M8,10H16V12H8V10M8,14H13V16H8V14Z"/>
              </svg>
            </div>
            <h3 className="card-title">Aide aux démarches simples</h3>
          </div>
          <p className="card-subtitle script-font">Un soutien pour certaines démarches administratives courantes</p>
          </div>

        {/* Carte 6 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20C5.4,15.36 2,12.28 2,8.5A4.5,4.5 0 0,1 6.5,4A4.9,4.9 0 0,1 10.4,5.93L12,7.5L13.6,5.93A4.9,4.9 0 0,1 17.5,4A4.5,4.5 0 0,1 22,8.5C22,12.28 18.6,15.36 13.45,20L12,21.35Z"/>
              </svg>
            </div>
            <h3 className="card-title">Accompagnement des proches</h3>
          </div>
          <p className="card-subtitle script-font">Une présence auprès de votre proche pour vous permettre de souffler, de vous absenter ou de prendre un peu de temps pour vous, en toute sérénité</p>
         </div>
      </div>
    </section>
  );
}
