import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Hero 
        title="Qui sommes-nous ?"
        description="Découvrez l'équipe derrière Diafym-RH et notre vision pour transformer la formation en entreprise"
      />
      <main className="about-content">
        <section className="about-section">
          <h2>Notre histoire</h2>
          <p>Chez Diafym RH, notre mission est de dynamiser et développer les entreprises grâce à une approche RH humaine, inclusive et efficace.</p>
          <p>Nous mettons l’humain au centre de chaque démarche, en valorisant les parcours uniques et en favorisant la diversité et l’égalité des chances.</p>
          <p>Notre équipe est à taille humaine, animée par une passion commune : mettre les bonnes personnes aux bons endroits, au bon moment.</p>
          <div className="team-grid">
            <div className="team-member">
              <img src="/assets/images/team/Fanny.png" alt="Photo de Fanny" />
              <h3>Fanny Moratal</h3>
              <p>
                Directrice<br />
                fanny.moratal@diafym-rh.com
              </p>
            </div>
            <div className="team-member">
              <img src="/assets/images/team/Audrey.png" alt="Photo d'Audrey" />
              <h3>Audrey DUFFAU</h3>
              <p>
                Responsable commerciale &amp; recrutement<br />
                audrey.duffau@diafym-rh.com<br />
                tel : 07 80 96 69 07
              </p>
            </div>
            <div className="team-member">
              <img src="/assets/images/team/Mael.png" alt="Photo de Mael" />
              <h3>Mael Chiraux</h3>
              <p>
                Responsable expérience client<br />
                mael.chiraux@diafym-rh.com
              </p>
            </div>
            <div className="team-member">
              <img src="/assets/images/team/Estelle.png" alt="Photo d'Estelle" />
              <h3>Estelle Raspaud</h3>
              <p>
                Responsable RH &amp; Formation<br />
                estelle.raspaud@diafym-rh.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 