import React from 'react';

export default function ForWho() {
  const profiles = [
    {
    title: 'Personnes âgées seules ou isolées',
    icon: (
        <svg viewBox="0 0 24 24" className="for-who-icon" aria-hidden="true" fill="currentColor">
          <path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z" />
        </svg>
      )
    },
    {
      title: 'Familles ayant besoin d’un relais',
      icon: (
        <svg viewBox="0 0 24 24" className="for-who-icon" aria-hidden="true" fill="currentColor">
          <path d="M7 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM3 18c.8-2.3 3-3.5 6-3.5S14.2 15.7 15 18H3Zm9 0c.6-1.8 2.4-3 4.8-3 2.7 0 4.8 1.5 5.2 3H12Z" />
        </svg>
      )
    },
    {
      title: 'Proches aidants qui souhaitent souffler un peu',
      icon: (
        <svg viewBox="0 0 24 24" className="for-who-icon" aria-hidden="true" fill="currentColor">
          <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4a4.9 4.9 0 0 1 4.3 2.1A4.9 4.9 0 0 1 15.1 4 4.5 4.5 0 0 1 19.5 8.5c0 3.78-3.4 6.86-8.55 11.5L12 21.35Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="for-who" className="for-who-section">
      <div className="section-header" aria-hidden="true">
      </div>

      <div className="for-who-grid">
        {profiles.map(({ title, text, icon }) => (
          <article className="for-who-card" key={title}>
            <div className="for-who-icon-wrapper">{icon}</div>
            <h3 className="for-who-title">{title}</h3>
            <p className="for-who-text">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
