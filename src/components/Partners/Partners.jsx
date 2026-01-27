import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'Vidal', logo: '/assets/images/logos/vidal.webp', url: 'https://www.ecoles-vidal.fr/' },
    { name: 'TBS', logo: '/assets/images/logos/TBS.webp', url: 'https://www.tbs-education.fr/' },
    { name: 'T3M', logo: '/assets/images/logos/T3M.webp', url: 'https://www.t3m.fr/' },
    { name: 'Square Habitat', logo: '/assets/images/logos/square-habitat.png', url: 'https://www.squarehabitat.fr/' },
    { name: 'Senior Force', logo: '/assets/images/logos/Senior-force.webp', url: 'https://www.seniorsforceplus.org//' },
    { name: 'Saint Sulpice', logo: '/assets/images/logos/Saint-Sulpice.webp', url: 'https://www.saintsulpicelapointe.fr/' },
    { name: 'Offreurs de Solution', logo: '/assets/images/logos/Offreurs-de-solution.webp', url: 'https://occitanie.ccibusiness.fr/club-des-offreurs-de-solutions-occitanie' },
    { name: 'Miharu', logo: '/assets/images/logos/Miharu.webp', url: 'https://www.miharu.fr/' },
    { name: 'Loire Atlantique', logo: '/assets/images/logos/Loire-atlantique.svg.png', url: 'https://www.loire-atlantique.fr/' },
    { name: 'Le Village 31', logo: '/assets/images/logos/Le-village31.png', url: 'https://www.levillagebycatoulouse31.com/' },
    { name: 'French Tech', logo: '/assets/images/logos/French-tech.png', url: 'https://www.lafrenchtechtoulouse.com/' },
    { name: 'FACE GT', logo: '/assets/images/logos/Face-GT.webp', url: 'https://www.face31.org/' },
    { name: 'Chalets', logo: '/assets/images/logos/chalets.png', url: 'https://www.groupedeschalets.com/' },
    { name: 'Mesanges', logo: '/assets/images/logos/Mesanges.png', url: 'https://www.mesanges-consulting.com/' },
    { name: 'CA31', logo: '/assets/images/logos/CA31.png', url: 'https://www.ca31.fr/' },
  ];

  return (
    <section className="partners-section">
      <h2>Notre écosystème</h2>
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

export default Partners;