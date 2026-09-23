import React, { useState } from 'react';

const FORM_SUBMIT_EMAIL = 'lavoyageusedevie@gmail.com';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
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

      <div className="contact-grid">
        <form
          action={`https://formsubmit.co/${FORM_SUBMIT_EMAIL}`}
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nouveau message depuis le site La Voyageuse de Vie" />
          <input type="hidden" name="_template" value="table" />

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
          <button type="submit" className="btn-submit">Envoyer la demande</button>
        </form>
      </div>
    </section>
  );
}