import photoRozenn from '../assets/photoRozenn.jpg';

export default function About() {
  return (
    <section className="about-section" id="approche">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-img-placeholder">
            <img src={photoRozenn} alt="Portrait de Rozenn Guéguen" className="about-img" />
          </div>
          <h3 className="about-name">Rozenn Guéguen</h3>
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