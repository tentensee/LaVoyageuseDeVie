import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const WEBHOOK_ENDPOINT = '/api/contact-form-webhook';

  const normalizeName = (fullName = '') => {
    const trimmed = fullName.trim();
    if (!trimmed) return { firstName: '', lastName: '' };

    const parts = trimmed.split(/\s+/);
    if (parts.length === 1) {
      return { firstName: parts[0], lastName: '' };
    }

    return {
      firstName: parts[0],
      lastName: parts.slice(1).join(' '),
    };
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!email || !message) {
      setSubmitError('Merci de remplir au minimum votre email et votre message.');
      setIsSubmitted(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitError('L’adresse email semble invalide.');
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setIsSubmitted(false);

    const { firstName, lastName } = normalizeName(formData.name);

    const supabasePayload = {
      email,
      message,
      firstName,
      lastName,
      phone: formData.phone.trim(),
      source: 'website',
      subject: 'Nouveau message depuis le site La Voyageuse de Vie',
    };
    const FORMSUBMIT_EMAIL = 'lavoyageusedevie@gmail.com'; 

    const formSubmitPayload = {
      name: formData.name.trim(),
      email,
      phone: formData.phone.trim(),
      message,
      _subject: 'Nouveau message depuis le site La Voyageuse de Vie',
      _template: 'basic', 
    };

    try {
      const [supabaseRes, formSubmitRes] = await Promise.all([
        fetch(WEBHOOK_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(supabasePayload),
        }),

        fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formSubmitPayload),
        }),
      ]);

      let supabaseData = null;
      try {
        supabaseData = await supabaseRes.json();
      } catch {
        supabaseData = null;
      }

      if (!supabaseRes.ok || !supabaseData?.ok) {
        throw new Error(supabaseData?.error || `Erreur Supabase HTTP ${supabaseRes.status}`);
      }

      setIsSubmitted(true);
      setSubmitError('');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);

    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message
          ? `L’envoi a échoué : ${error.message}`
          : 'L’envoi a échoué. Merci de réessayer dans quelques instants.'
      );
      setIsSubmitted(false);
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
          {submitError}
        </div>
      )}

      <div className="contact-grid">
        <form onSubmit={handleFormSubmit}>
          <input type="hidden" name="_subject" value="Nouveau message depuis le site La Voyageuse de Vie" />

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