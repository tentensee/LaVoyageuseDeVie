import React, { useState } from 'react';

const FORM_SUBMIT_EMAIL = 'lavoyageusedevie@gmail.com';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });

      if (!response.ok) throw new Error('Formsubmit request failed');

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2>Un besoin ? Écrivez-moi</h2>
      </div>

      {isSubmitted && (
        <div className="success-toast" style={{ display: 'block' }}>
          ✓ Votre message a bien été envoyé ! Rozenn vous recontactera très rapidement.
        </div>
      )}

      {submitError && (
        <div className="success-toast" style={{ display: 'block' }}>
          L’envoi a échoué. Merci de réessayer dans quelques instants.
        </div>
      )}

      <div className="contact-grid">
        <form
          action={`https://formsubmit.co/${FORM_SUBMIT_EMAIL}`}
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nouveau message depuis le site La Voyageuse de Vie" />
          <input type="hidden" name="_template" value="basic" />

          <div className="form-group">
            <label htmlFor="name">Votre nom / prénom</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Ex: Jean Dupont" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input type="tel" id="phone" name="phone" className="form-control" placeholder="Ex: 06 00 00 00 00" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Ex: jean.dupont@email.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Votre message ou situation</label>
            <textarea id="message" name="message" className="form-control" placeholder="Décrivez brièvement vos besoins..." value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
          </button>
        </form>
      </div>
    </section>
  );
}