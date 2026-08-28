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
                <th>Tarif unitaire</th>
                <th>Coût après crédit d'impôt (50%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visite de convivialité</td>
                <td>1 heure</td>
                <td>25,00 €</td>
                <td>12,50 €</td>
              </tr>
              <tr>
                <td>Sorties et accompagnement</td>
                <td>2 heures</td>
                <td>48,00 €</td>
                <td>24,00 €</td>
              </tr>
              <tr>
                <td>Répit pour les aidants</td>
                <td>3 heures</td>
                <td>70,00 €</td>
                <td>35,00 €</td>
              </tr>
              <tr>
                <td>Forfait accompagnement régulier</td>
                <td>10 heures / mois</td>
                <td>230,00 €</td>
                <td>115,00 €</td>
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