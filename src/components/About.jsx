import photoRozenn from '../assets/photoRozenn.jpg';

export default function About() {
  return (
    <section className="about-section" id="approche">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-img-placeholder">
            <img src={photoRozenn} alt="Portrait de Rozenn Guéguen" className="about-img" />
          </div>
          <h3 className="about-name">Rozenn GUÉGUEN-TRÉGOUËT</h3>
        </div>
        <div>
          <h3 className="about-quote">" Être là, simplement "</h3>
          <p className="about-text">Après de nombreuses années consacrées à l'accompagnement humain dans l'Éducation nationale en tant que Professeure puis Conseillère principale d'éducation, je mets aujourd’hui mes compétences d'écoute, de relation humaine et d’accompagnement au service des personnes âgées en leur apportant une présence chaleureuse, bienveillante et rassurante tout en offrant une bulle de répit essentielle à leurs proches aidants.</p>
          <p className="about-text">•	Un accompagnement individualisé </p>
          <p className="about-text">•	Une présence authentique et rassurante </p>
          <p className="about-text">•	Une écoute sans jugement </p>
          <p className="about-text">•	Respect de la personne et de son histoire </p>
          <p className="about-text">•	Discrétion et confidentialité</p>
        </div>
      </div>
    </section>
  );
}
