import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import AlternatingBlocks from '../../components/AlternatingBlocks/AlternatingBlocks'
import './Metiers.css'
import './Integration.css'

const Integration = () => {
  const blocks = [
    {
      description: "Nos services vous accompagnent tout au long du processus, depuis la définition des besoins jusqu’à l’intégration réussie des nouveaux collaborateurs. Nous vous aidons à attirer les meilleurs talents, à conduire des entretiens structurés et à élaborer des stratégies d’intégration personnalisées pour garantir une transition fluide et productive au sein de votre équipe. Grâce à notre expertise, vous pourrez bâtir une équipe performante et motivée, prête à relever les défis de demain. En collaborant avec nous, vous bénéficierez de conseils personnalisés pour optimiser votre recrutement. Nous vous aidons à identifier les compétences clés, évaluer les candidats et intégrer efficacement vos nouvelles recrues, afin de bâtir une équipe solide et alignée avec vos objectifs.",
      image: "/assets/images/Integration4.jpg",
      isReversed: false
    }
  ];

  return (
    <div className="diag-page">
      <Header />
      <Hero 
        title="Recruter et intégrer un collaborateur"
        description="Un accompagnement sur-mesure pour accueillir, guider et fidéliser durablement vos nouveaux collaborateurs."
      />
      <section className="diag-content">
        <div className="solutions-section recrutement-intro">
          <h2 className="section-title recrutement-title">
            Vous êtes dirigeant(e), salarié(e) et/ou demandeur(euse) d'emploi, et vous cherchez à réaliser un recrutement réussi ?
          </h2>
          <div className="section-description recrutement-description">
            <p className="lead-text recrutement-lead">DiaFym RH vous accompagne pour :</p>
            <ul className="recrutement-list">
              <li>Élaborer une stratégie de recrutement adaptée à vos besoins</li>
              <li>Mettre en œuvre des méthodes efficaces pour la recherche et la sélection des candidats</li>
              <li>Améliorer l'accueil et l'intégration des nouveaux collaborateurs</li>
            </ul>
            <p className="recrutement-conclusion">
              Quelle que soit votre situation, nous sommes là pour vous guider et vous fournir les outils nécessaires afin de réussir chaque étape du recrutement et garantir une intégration harmonieuse des nouveaux employés.
            </p>
          </div>
        </div>

        <section className="features-section recrutement-features">
          <div className="recrutement-features-header">
            <h2>DiaFym RH vous accompagne vers l'excellence dans la gestion des ressources humaines.</h2>
            <p>
              Notre équipe vous propose un accompagnement sur mesure pour optimiser vos pratiques RH et atteindre l’excellence.
              Nous vous guidons à chaque étape, de la définition de vos besoins en recrutement à l’intégration réussie de vos collaborateurs,
              en passant par l’amélioration continue de vos processus RH.
            </p>
          </div>
          <div className="features-container">
            <div className="feature-block">
              <div className="feature-image-container">
                <img
                  src="/assets/images/Recrutement1.png"
                  alt="Élaborer une stratégie de recrutement adaptée"
                  className="feature-image"
                />
              </div>
              <h3>Élaborer une stratégie de recrutement adaptée</h3>
              <p>
                Apprenez à concevoir une stratégie de recrutement alignée sur les besoins spécifiques de votre entreprise.
                Découvrez les meilleures pratiques pour identifier et cibler les candidats les plus qualifiés.
              </p>
            </div>

            <div className="feature-block">
              <div className="feature-image-container">
                <img
                  src="/assets/images/Integration2.png"
                  alt="Mettre en œuvre la recherche et la sélection des candidats"
                  className="feature-image"
                />
              </div>
              <h3>Mettre en œuvre la recherche et la sélection des candidats</h3>
              <p>
                Acquérez des compétences pratiques pour mener des recherches efficaces et mettre en place des processus
                de sélection rigoureux. Explorez des techniques modernes de sourcing pour attirer les talents.
              </p>
            </div>

            <div className="feature-block">
              <div className="feature-image-container">
                <img
                  src="/assets/images/Integration3.png"
                  alt="Accueillir et intégrer un(e) salarié(e) avec succès"
                  className="feature-image"
                />
              </div>
              <h3>Accueillir et intégrer un(e) salarié(e) avec succès</h3>
              <p>
                Comprenez l’importance d’une intégration réussie et découvrez des méthodes pour garantir une transition fluide
                pour les nouveaux collaborateurs. Apprenez à créer un environnement propice à leur épanouissement
                au sein de l’entreprise.
              </p>
            </div>
          </div>
        </section>

        <h3 className="recrutement-block-title">
          Dans le monde professionnel dynamique d'aujourd'hui, le recrutement et l'intégration efficaces des collaborateurs jouent un rôle essentiel dans la réussite d'une entreprise.
        </h3>

        <AlternatingBlocks blocks={blocks} />
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

export default Integration

