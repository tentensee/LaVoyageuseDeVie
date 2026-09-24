import React from 'react';
import { Users, Sun, MailOpen, HandHeart, Dices, ShoppingBasket } from 'lucide-react';

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
              <Users className="card-icon" size={28} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Présence & compagnie</h3>
          </div>
          <p className="card-subtitle script-font">Un moment d’échange et de discussion, un café partagé ou simplement une présence rassurante</p>
        </div>

        {/* Carte 2 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <Sun className="card-icon" size={28} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Promenades & sorties</h3>
          </div>
          <p className="card-subtitle script-font">Prendre l'air, se promener, aller au marché, à la médiathèque, selon vos envies et possibilités</p>
        </div>

        {/* Carte 3 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <Dices className="card-icon" size={28} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Lecture, jeux & activités</h3>
          </div>
          <p className="card-subtitle script-font">Lire ensemble, jouer, discuter, stimuler la mémoire ou partager une activité créative ou culturelle</p>
        </div>

        {/* Carte 4 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <ShoppingBasket className="card-icon" size={28} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Courses & rendez-vous</h3>
          </div>
          <p className="card-subtitle script-font">Un accompagnement pour les courses, les rendez-vous ou les déplacements du quotidien</p>
        </div>

        {/* Carte 5 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <MailOpen className="card-icon" size={28} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Aide aux démarches simples</h3>
          </div>
          <p className="card-subtitle script-font">Un soutien pour certaines démarches administratives courantes</p>
        </div>

        {/* Carte 6 */}
        <div className="service-card">
          <div className="service-card-header">
            <div className="card-icon-wrapper">
              <HandHeart className="card-icon" size={28} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Accompagnement des proches</h3>
          </div>
          <p className="card-subtitle script-font">Une présence auprès de votre proche pour vous permettre de souffler, de vous absenter et de prendre un peu de temps pour vous, en toute sérénité</p>
        </div>
      </div>
    </section>
  );
}
