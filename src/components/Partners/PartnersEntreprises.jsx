import React from 'react';
import './Partners.css';

const PartnersEntreprises = () => {
  const partners = [
    { name: 'T3M', logo: '/assets/images/logos/T3M.webp', url: 'https://www.t3m.fr/' },
    { name: 'Square Habitat', logo: '/assets/images/logos/square-habitat.png', url: 'https://www.square-habitat.fr/' },
    { name: 'CA31', logo: '/assets/images/logos/CA31.png', url: 'https://www.ca31.fr/' },
    { name: 'Chalets', logo: '/assets/images/logos/chalets.png', url: 'https://www.chalets.fr/' }
  ];

  return (
    <section className="partners-section">
      <h2>Nous accompagnons</h2>
      <div className="partners-carousel">
        <div className="partners-carousel-inner">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            </a>
          ))}
          {partners.map((partner, index) => (
            <a
              key={`duplicate-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            </a>
          ))}
          {partners.map((partner, index) => (
            <a
              key={`duplicate2-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersEntreprises; 