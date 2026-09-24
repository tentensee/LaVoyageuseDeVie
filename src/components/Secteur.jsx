import secteurMap from '../assets/secteur_d_intervention.webp';

export default function Secteur() {
  return (
    <section className="map-section" id="secteur">
      <div className="section-header">
        <h2>Secteur d'intervention</h2>
      </div>

      <div className="secteur-container">
        <div className="secteur-info">
          <p className="secteur-description">
            <span>J’interviens principalement sur Saint Brévin et ses alentours.</span>
            <span>Pour toute autre demande, n’hésitez pas à me contacter pour que nous puissions échanger.</span>
          </p>
        </div>

        <div className="secteur-map-wrapper">
          <img
            src={secteurMap}
            alt="Carte du secteur d'intervention de Rozenn Guéguen"
            className="secteur-map-image"
          />
        </div>
      </div>
    </section>
  );
}