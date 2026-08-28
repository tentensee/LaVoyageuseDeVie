import React from 'react';

export default function Tarifs() {
  return (
    <section className="pricing-section" id="tarifs">
      <div className="section-header">
        <h2>Tarifs des prestations</h2>
      </div>
      
      <div className="pricing-container">
        <div className="table-responsive">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Prestation</th>
                <th>Durée</th>
                <th>Tarif</th>
                <th>Après crédit d'impôt</th>
              </tr>
            </thead>
            <tbody>
              {/* Prestation 1 */}
              <tr className="main-row">
                <td><strong>Présence et lien social</strong></td>
                <td>2h minimum</td>
                <td>30 €/h</td>
                <td>15 €/h</td>
              </tr>
              <tr className="desc-row">
                <td colSpan="4">Un temps pour échanger, lire, se promener, partager une activité ou simplement ne pas être seul.</td>
              </tr>

              {/* Prestation 2 */}
              <tr className="main-row">
                <td><strong>Sorties et accompagnement</strong></td>
                <td>2h minimum</td>
                <td>30 €/h</td>
                <td>15 €/h</td>
              </tr>
              <tr className="desc-row">
                <td colSpan="4">Un accompagnement de qualité dans vos déplacements hors de votre domicile (Promenade, marché, rendez-vous, activité culturelle ou sortie de proximité).</td>
              </tr>

              {/* Prestation 3 */}
              <tr className="main-row">
                <td><strong>Répit des aidants</strong></td>
                <td>2 à 3 heures</td>
                <td>30 €/h</td>
                <td>15 €/h</td>
              </tr>
              <tr className="desc-row">
                <td colSpan="4">Prendre le relais pour vous permettre de souffler et de vous ressourcer en toute sérénité.</td>
              </tr>

              {/* Prestation 4 (Sans description) */}
              <tr>
                <td><strong>Accompagnement ponctuel ou demande spécifique</strong></td>
                <td>À définir</td>
                <td>35 €/h</td>
                <td>17.50 €/h</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="pricing-note">
          * Les paiements par CESU (Chèque Emploi Service Universel) sont acceptés, vous donnant droit à une réduction ou un crédit d'impôt de 50%.
        </p>
      </div>
    </section>
  );
}
