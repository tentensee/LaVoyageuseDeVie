import { useEffect } from 'react';

const email = 'lavoyageusedevie@gmail.com';

export default function LegalNotices() {
  useEffect(() => {
    document.title = 'Mentions légales et confidentialité | La Voyageuse de Vie';
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-page-top">
        <a className="legal-brand" href="/" aria-label="La Voyageuse de Vie, accueil">
          <span>LA VOYAGEUSE</span>
          <span className="script-font">de Vie</span>
        </a>
        <a className="legal-back-link" href="/">
          <span aria-hidden="true">←</span> Retour au site
        </a>
      </div>

      <header className="legal-hero">
        <p className="legal-eyebrow">La Voyageuse de Vie</p>
        <h1>Informations <span className="script-font">légales</span></h1>
        <p>Les informations essentielles sur le site et l’utilisation de vos données.</p>
      </header>

      <nav className="legal-toc" aria-label="Sur cette page">
        <a href="#mentions-legales"><span>01</span> Mentions légales</a>
        <a href="#confidentialite"><span>02</span> Confidentialité</a>
      </nav>

      <main className="legal-content">
        <section className="legal-card" id="mentions-legales" aria-labelledby="legal-title">
          <div className="legal-card-heading">
            <span className="legal-card-number">01</span>
            <div>
              <p className="legal-eyebrow">Le site</p>
              <h2 id="legal-title">Mentions légales</h2>
            </div>
          </div>

          <div className="legal-card-body">
            <section className="legal-item">
              <h3>Édition du site</h3>
              <p>
                Le site <a href="https://lavoyageusedevie.com/">lavoyageusedevie.com</a> est édité par
                Rozenn Guéguen-Trégouët, entrepreneure individuelle, exerçant sous le nom « La
                Voyageuse de Vie ».
              </p>
              <address>
                223 avenue de Mindin, 44250 Saint-Brevin-les-Pins, France
                <br />
                Téléphone : <a href="tel:+33659321552">+33 6 59 32 15 52</a>
                <br />
                Courriel : <a href={`mailto:${email}`}>{email}</a>
              </address>
              <p className="legal-id">SIREN 109 766 006 <span>·</span> SIRET 109 766 006 00018</p>
            </section>

            <section className="legal-item">
              <h3>Publication et hébergement</h3>
              <p>Directrice de la publication : Rozenn Guéguen-Trégouët.</p>
              <p>
                Site hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107,
                États-Unis · <a href="https://www.cloudflare.com/">cloudflare.com</a>.
              </p>
            </section>

            <section className="legal-item">
              <h3>Activité et responsabilité</h3>
              <p>
                Le site présente des prestations de présence et d’accompagnement non médical à
                domicile pour des personnes âgées et leurs proches, dans le secteur de
                Saint-Brevin-les-Pins. Les interventions sont réalisées dans le cadre d’un emploi
                direct déclaré au CESU par le particulier employeur. Elles ne constituent pas des
                actes de soins ni des prestations médicales.
              </p>
              <p>
                Les informations sont fournies à titre indicatif. Les modalités d’une intervention
                sont convenues directement entre les personnes concernées. Le site ne permet ni
                réservation ni paiement en ligne.
              </p>
            </section>

            <section className="legal-item">
              <h3>Propriété intellectuelle</h3>
              <p>
                Les contenus du site sont protégés par le droit de la propriété intellectuelle.
                Toute reproduction ou réutilisation sans autorisation préalable est interdite,
                sauf exceptions prévues par la loi.
              </p>
            </section>
          </div>
        </section>

        <section className="legal-card" id="confidentialite" aria-labelledby="privacy-title">
          <div className="legal-card-heading">
            <span className="legal-card-number">02</span>
            <div>
              <p className="legal-eyebrow">Vos données</p>
              <h2 id="privacy-title">Politique de confidentialité</h2>
            </div>
          </div>

          <div className="legal-card-body">
            <p className="legal-intro">
              Rozenn Guéguen-Trégouët est responsable du traitement des données transmises via le
              formulaire de contact. Pour toute question, écrivez à{' '}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>

            <section className="legal-item">
              <h3>Les données et leur utilisation</h3>
              <p>
                Le formulaire recueille votre nom, votre numéro de téléphone, votre adresse
                électronique et votre message, afin de répondre à votre demande et, si vous le
                souhaitez, d’échanger au sujet d’un accompagnement. Ces champs sont nécessaires pour
                traiter la demande. Aucune inscription à une lettre d’information ni prospection
                commerciale n’est déclenchée.
              </p>
              <p>
                La base légale est la prise de mesures précontractuelles à votre demande (article 6,
                paragraphe 1, point b du RGPD).
              </p>
            </section>

            <section className="legal-item">
              <h3>Destinataires et prestataires</h3>
              <p>
                Les informations sont destinées à Rozenn Guéguen-Trégouët. Le formulaire est transmis
                par FormSubmit ; l’infrastructure du site est fournie par Cloudflare. Ces prestataires
                peuvent traiter des données techniques nécessaires à la transmission, à la sécurité
                et au fonctionnement de leurs services. Consultez les politiques de{' '}
                <a href="https://formsubmit.co/privacy.pdf">FormSubmit</a> et de{' '}
                <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare</a>.
              </p>
              <p>
                L’utilisation de FormSubmit peut impliquer des traitements hors de l’Espace
                économique européen. Les modalités et garanties applicables sont décrites dans la
                politique de confidentialité de ce prestataire.
              </p>
            </section>

            <section className="legal-item">
              <h3>Durée de conservation</h3>
              <p>
                Les messages et coordonnées sont conservés le temps nécessaire au traitement de la
                demande, puis au maximum trois ans après le dernier contact si aucune relation de
                service n’est engagée. Les obligations légales peuvent nécessiter une conservation
                distincte de certains documents.
              </p>
            </section>

            <section className="legal-item">
              <h3>Vos droits</h3>
              <p>
                Vous pouvez demander l’accès à vos données, leur rectification ou leur effacement,
                la limitation du traitement ou vous y opposer lorsque les conditions légales le
                permettent, en écrivant à <a href={`mailto:${email}`}>{email}</a>. Vous pouvez
                également adresser une réclamation à la{' '}
                <a href="https://www.cnil.fr/fr/plaintes">CNIL</a>.
              </p>
            </section>

            <aside className="legal-privacy-callout">
              <span aria-hidden="true">À noter</span>
              <p>
                Merci de ne pas transmettre d’informations médicales ou sensibles dans le
                formulaire. Si elles sont nécessaires à l’organisation d’un accompagnement, elles
                seront échangées séparément et uniquement dans la mesure utile.
              </p>
            </aside>

            <section className="legal-item">
              <h3>Cookies et traceurs</h3>
              <p>
                Le site n’utilise pas de cookies publicitaires ni d’outil de mesure d’audience. Les
                services techniques de l’hébergeur ou du prestataire de formulaire peuvent toutefois
                utiliser des traceurs nécessaires à la sécurité ou au fonctionnement de leurs
                services ; leurs politiques de confidentialité apportent les précisions
                correspondantes.
              </p>
            </section>
          </div>
        </section>

        <p className="legal-updated">La Voyageuse de Vie · Saint-Brevin-les-Pins</p>
      </main>
    </div>
  );
}
