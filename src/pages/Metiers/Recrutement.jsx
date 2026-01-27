import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import AlternatingBlocks from '../../components/AlternatingBlocks/AlternatingBlocks'
import './Metiers.css'
import './Recrutement.css'

const Recrutement = () => {
  const blocks = [
    {
      description: `
        <p>Notre expertise vous accompagne dans votre développement.</p>
        <p>Grâce à son expertise, DiaFym RH se place en tant qu'expert du recrutement, adaptant ses compétences à chaque secteur spécifique pour offrir des solutions efficaces, répondant précisément à leurs besoins particuliers.</p>
        <div class="reconversion-goal-box">
          <p><strong>Notre but :</strong></p>
          <p>Contribuer à l'évolution professionnelle et à la croissance de toute entreprise.</p>
        </div>
      `,
      image: "/assets/images/Recrutement4.jpg",
      isReversed: false
    },
    {
      description: `
        <p><strong>Notre force :</strong> Une connaissance approfondie de nos entreprises clientes.</p>
        <p>Parce que nous savons que chaque entreprise a un fonctionnement, une vision et un avenir qui lui sont propres, nous nous devons de vous proposer des potentiels candidats adaptés à vos besoins.</p>
        <p>Pour DiaFym RH, la compatibilité entre l’entreprise et son futur salarié est primordiale.</p>
        <div class="reconversion-goal-box">
          <p><strong>Notre but :</strong></p>
          <p>Assurer la stabilité de vos équipes grâce à des candidats en phase avec vos valeurs.</p>
        </div>
      `,
      image: "/assets/images/Recrutement5.jpg",
      isReversed: true
    }
  ];

  return (
    <div className="diag-page">
      <Header />
      <Hero 
        title="Recrutez les futurs talents de votre entreprise"
        description="Un accompagnement sur-mesure pour accueillir, guider et fidéliser durablement vos nouveaux collaborateurs."
      />
      <section className="diag-content">
        <div className="solutions-section recrutement-intro">
          <h2 className="section-title recrutement-title">
            Vous êtes dirigeant d'une entreprise ? Vous envisagez de pourvoir un poste et d'accueillir un nouvel collaborateur ?
          </h2>
          <div className="section-description recrutement-description">
            <p className="lead-text recrutement-lead">Soyons honnêtes, aujourd'hui...</p>
            <ul className="recrutement-list">
              <li>
                Vous utilisez plusieurs méthodes (publication d'offres d'emploi, etc.). Cependant le constat est vite établi :
                il manque de la main-d'œuvre et l'emploi dans le diagnostic immobilier est souvent caché.
              </li>
              <li>
                Vous êtes déjà bien occupé(e) avec votre activité et par conséquent vous n'avez pas le temps de cadrer le futur poste,
                de rechercher des profils ou encore de faire passer les entretiens, ...
              </li>
            </ul>
            <p className="recrutement-conclusion">
              Si vous êtes dans cette situation, DiaFym RH vous propose de vous épauler dans vos recrutements.
            </p>
          </div>
        </div>

        <section className="features-section recrutement-features">
          <div className="recrutement-features-header">
            <h2>DiaFym RH : L'art de connecter les talents aux opportunités, dans tous les domaines</h2>
            <p>
              Quelle que soit la taille de votre entreprise, nous adaptons notre méthodologie à vos besoins afin que vous recrutiez les meilleurs talents !
            </p>
          </div>
          <div className="features-container">
            <div className="feature-block">
              <div className="feature-image-container">
                <img
                  src="/assets/images/Recrutement1.png"
                  alt="Faisons connaissance"
                  className="feature-image"
                />
              </div>
              <h3>Faisons connaissance</h3>
              <p>
                Nous échangeons sur votre activité et votre développement.
              </p>
            </div>

            <div className="feature-block">
              <div className="feature-image-container">
                <img
                  src="/assets/images/Recrutement2.png"
                  alt="Définissons vos recherches"
                  className="feature-image"
                />
              </div>
              <h3>Définissons vos recherches</h3>
              <p>
                Nous définissons le type de poste, les compétences recherchées, les méthodes de recrutement déjà utilisées, etc.
              </p>
            </div>

            <div className="feature-block">
              <div className="feature-image-container">
                <img
                  src="/assets/images/Recrutement3.png"
                  alt="Notre travail commence"
                  className="feature-image"
                />
              </div>
              <h3>Notre travail commence !</h3>
              <p>
                Nous nous appuyons sur notre expérience et notre réseau pour vous trouver une solution sur-mesure.
              </p>
            </div>
          </div>
        </section>

        <h3 className="recrutement-block-title">
          Pourquoi nous faire confiance ?
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

export default Recrutement

