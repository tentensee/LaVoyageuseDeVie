import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' }); // Reset du form

    // Cache le toast après 6 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2>Un besoin ? Écrivez-moi</h2>
      </div>
      
      {/* Rendu conditionnel du message de succès */}
      {isSubmitted && (
        <div className="success-toast" style={{ display: 'block' }}>
          ✓ Votre message a bien été envoyé ! Rozenn vous recontactera très rapidement.
        </div>
      )}

      <div className="contact-grid">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Votre nom / prénom</label>
            <input type="text" id="name" className="form-control" placeholder="Ex: Jean Dupont" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input type="tel" id="phone" className="form-control" placeholder="Ex: 06 00 00 00 00" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <input type="email" id="email" className="form-control" placeholder="Ex: jean.dupont@email.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Votre message ou situation</label>
            <textarea id="message" className="form-control" placeholder="Décrivez brièvement vos besoins..." value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn-submit">Envoyer la demande</button>
        </form>
      </div>
    </section>
  );
}