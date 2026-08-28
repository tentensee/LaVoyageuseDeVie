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
          <p className="about-text">Après de nombreuses années consacrées à l'accompagnement humain dans l'Éducation nationale en tant que Professeure puis Conseillère principale d'éducation, je mets aujourd’hui mes compétences d'écoute, de relation humaine et d’accompagnement au service des personnes âgées et des aidants en apportant une présence chaleureuse, bienveillante et rassurante aux personnes âgées tout en offrant une bulle de répit essentielle à leurs proches aidants.</p>
          <p className="about-text">Pour les personnes qui souhaitent rompre l'isolement, maintenir un lien social ou simplement partager un moment de qualité, je vous propose un accompagnement humain et personnalisé dans votre quotidien avec une présence et une écoute véritable :</p>
          <p className="about-text">Chaque parcours de vie mérite une attention singulière. C'est pourquoi je m'adapte précisément à vos habitudes, à votre rythme et à vos besoins spécifiques au quotidien.</p>
        </div>
      </div>
    </section>
  );
}
