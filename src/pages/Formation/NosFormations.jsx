import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import AlternatingBlocks from '../../components/AlternatingBlocks/AlternatingBlocks'
import '../Metiers/Metiers.css'
import '../Metiers/Recrutement.css'
import './NosFormations.css'

const NosFormations = () => {
  const blocks = [
    {
      description: `
        <ul>
          <li>
            <span class="formation-values-label">Nos Valeurs :</span> Nous sommes guidés par des valeurs humanistes : écoute, adaptabilité, qualité, proximité, bien-être, humanisme, engagement, et reconnaissance du travail des autres. Notre mission est de soutenir les talents d’aujourd’hui et de demain, de les valoriser et de les accompagner dans leur évolution de carrière.
          </li>
          <li>
            <span class="formation-values-label">Notre Mission :</span> Faciliter l'acquisition des compétences et soutenir le développement personnel et professionnel des participants.
          </li>
          <li>
            <span class="formation-values-label">Politique Qualité :</span> Votre réussite, avec 100% de satisfaction des stagiaires.
          </li>
        </ul>
      `,
      image: "/assets/images/Formations1.jpg",
      isReversed: false
    }
  ];

  return (
    <div className="diag-page">
      <Header />
      <Hero 
        title="Bienvenue dans Nos Formations"
        description="Bienvenue chez Diafym RH, où nous mettons nos compétences en ressources humaines à votre service pour vous offrir des formations adaptées à vos besoins. Notre objectif est de vous accompagner dans votre développement professionnel, de valoriser vos compétences existantes et d’en acquérir de nouvelles. Nos valeurs incluent l’écoute, l’adaptabilité, la qualité, et l’engagement. Nous utilisons des méthodes pédagogiques diversifiées, incluant des exposés théoriques et des exercices pratiques."
      >
        <a 
          href="/assets/pdfs/Livret-daccueil.pdf" 
          download 
          className="cta-button hero-cta-button"
        >
          <span className="hero-cta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="hero-cta-icon-svg">
              <path d="M12 3a1 1 0 0 1 1 1v9.086l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5A1 1 0 0 1 7.707 9.793L11 13.086V4a1 1 0 0 1 1-1z" />
              <path d="M5 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          <span>Livret d'accueil</span>
        </a>
      </Hero>
      <section className="diag-content">
        <div className="solutions-section recrutement-intro">
          <h2 className="section-title recrutement-title">
            Programme de Formation
          </h2>
          <div className="section-description recrutement-description">
            <h3 className="formation-program-title">Recruter et Intégrer un Collaborateur</h3>
            <ul className="formation-list">
              <li>
                <span className="formation-label">Objectifs :</span> Élaborer une stratégie de recrutement, mettre en œuvre la recherche et la sélection des candidats, accueillir et intégrer efficacement un salarié.
              </li>
              <li>
                <span className="formation-label">Modules :</span> 1. Définition des besoins. 2. Recherche efficace du candidat. 3. Sélection de candidats. 4. Embauche et intégration.
              </li>
              <li>
                <span className="formation-label">Durée :</span> 3 jours (21 heures).
              </li>
              <li>
                <span className="formation-label">Tarif :</span> 1250€ HT par participant.
              </li>
              <li>
                <span className="formation-label">Méthodes pédagogiques :</span> Nous utilisons des méthodes pédagogiques diversifiées pour assurer une expérience d'apprentissage complète et efficace. Ces méthodes incluent l'approche affirmative, où nous structurons notre discours pour une assimilation aisée des informations, et l'approche démonstrative, où les apprenants pratiquent activement pour mieux assimiler les compétences enseignées.
                <br />
                Nos formations sont accessibles aux personnes en situation de handicap. Pour plus de renseignements ou pour discuter de vos besoins spécifiques, veuillez nous contacter directement.
              </li>
            </ul>
            <div className="formations-secondary-cta">
              <div className="formations-dates-card">
                <h4 className="formations-dates-title">Prochaines sessions 2026</h4>
                <ul className="formations-dates-list">
                  <li className="formations-date-item">Du 8 au 10 avril 2026</li>
                  <li className="formations-date-item">Du 17 au 19 juin 2026</li>
                  <li className="formations-date-item">Du 16 au 18 septembre 2026</li>
                  <li className="formations-date-item">Du 18 au 20 novembre 2026</li>
                </ul>

                <a 
                  href="/assets/pdfs/2026_REC_x_Programme-Recruter-et-Integrer-un-collaborateur.pdf" 
                  download 
                  className="cta-button hero-cta-button formations-dates-button"
                >
                  <span className="hero-cta-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="hero-cta-icon-svg">
                      <path d="M12 3a1 1 0 0 1 1 1v9.086l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5A1 1 0 0 1 7.707 9.793L11 13.086V4a1 1 0 0 1 1-1z" />
                      <path d="M5 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" />
                    </svg>
                  </span>
                  <span>Programme de formation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3 className="recrutement-block-title">
          Nos Valeurs et Engagement
        </h3>

        <AlternatingBlocks blocks={blocks} />

        <section className="formations-handicap">
          <h3>Information Handicap</h3>
          <p>
            Nos formations peuvent être accessibles aux personnes en situation de handicap.
          </p>
          <p>
            Chaque situation étant unique, nous vous demandons de préciser à l’inscription votre handicap. Nous pourrons ainsi confirmer l’ensemble des possibilités d’accueil et vous permettre de suivre la formation dans les meilleures conditions en accord avec votre employeur.
          </p>
          <p>
            Pour toutes informations complémentaires, nous vous conseillons les structures suivantes :{' '}
            <a href="https://www.onisep.fr/inclusion-et-handicap" target="_blank" rel="noopener noreferrer">ONISEP</a>,{' '}
            <a href="https://www.agefiph.fr/" target="_blank" rel="noopener noreferrer">AGEFIPH</a> et{' '}
            <a href="https://www.fiphfp.fr/" target="_blank" rel="noopener noreferrer">FIPHFP</a>.
          </p>
        </section>

        <section className="formations-qualiopi">
          <div className="formations-qualiopi-text">
            <h3>Certification Qualiopi</h3>
            <p>
              Diafym RH est certifié Qualiopi au titre de ses actions de formation. Cette certification atteste de la qualité de notre processus de conception, de réalisation et de suivi des parcours de formation.
            </p>
            <p>
              Elle garantit notamment la clarté des objectifs pédagogiques, l’adaptation des contenus aux publics accompagnés, la qualification de nos intervenants, ainsi que la prise en compte systématique des retours des participants pour améliorer en continu nos actions.
            </p>
          </div>
          <div className="formations-qualiopi-logo-wrapper" aria-hidden="true">
            <img
              src="/assets/images/LogoQualiopiCouleurs.png"
              alt="Logo Qualiopi - certification qualité"
              className="formations-qualiopi-logo"
              loading="lazy"
            />
          </div>
        </section>

        <section className="formations-info-card">
          <h3>Informations pratiques</h3>
          <p className="formations-info-subtitle">Contact et inscription :</p>
          <ul className="formations-info-list">
            <li>
              <span className="formations-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="formations-info-icon-svg">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </span>
              <span>2A rue Georges Claude 31840 Aussonne</span>
            </li>
            <li>
              <span className="formations-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="formations-info-icon-svg">
                  <path d="M6.62 3.16a1 1 0 0 1 1.11.27l2.46 2.96a1 1 0 0 1-.11 1.41l-1.2.99a1 1 0 0 0-.24 1.25 10.36 10.36 0 0 0 4.24 4.24 1 1 0 0 0 1.25-.24l.99-1.2a1 1 0 0 1 1.41-.11l2.96 2.46a1 1 0 0 1 .27 1.11l-.64 2.14a1 1 0 0 1-.95.7A15.01 15.01 0 0 1 3 5.75a1 1 0 0 1 .7-.95l2.14-.64z" />
                </svg>
              </span>
              <span>05 19 08 15 45</span>
            </li>
            <li>
              <span className="formations-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="formations-info-icon-svg">
                  <path d="M4 4h16a2 2 0 0 1 2 2v0.5l-10 6.25L2 6.5V6a2 2 0 0 1 2-2z" />
                  <path d="M2 8.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.75l-9.37 5.86a2 2 0 0 1-2.26 0L2 8.75z" />
                </svg>
              </span>
              <span>formation@diafym-rh.com</span>
            </li>
          </ul>
          <Link to="/ressources/contact" className="cta-button formations-info-button">
            Contactez-nous
          </Link>
        </section>
      </section>

      <section className="recrutement-bottom-cta">
        <div className="recrutement-bottom-cta-inner">
          <div className="recrutement-bottom-item">
            <img
              src="/assets/images/RecrutementPicto1.svg"
              alt="Carte de France"
            />
            <p>Intervention sur toute la France</p>
          </div>
          <div className="recrutement-bottom-item">
            <img
              src="/assets/images/RecrutementPicto2.svg"
              alt="Horloge"
            />
            <p>Réactivité & proximité</p>
          </div>
          <div className="recrutement-bottom-item">
            <img
              src="/assets/images/RecrutementPicto3.svg"
              alt="Document"
            />
            <p>Un suivi de chaque candidat</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NosFormations

