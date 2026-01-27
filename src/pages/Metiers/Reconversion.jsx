import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import AlternatingBlocks from '../../components/AlternatingBlocks/AlternatingBlocks'
import './Metiers.css'
import './Reconversion.css'

const Reconversion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const blocks = [
    {
      description: `
        <p>La reconversion professionnelle est accessible à tout individu souhaitant changer de direction dans sa carrière.</p>
        <p>Elle s’adresse aussi bien aux jeunes diplômés en quête d’une nouvelle voie qu’aux professionnels expérimentés désirant donner un nouvel élan à leur parcours. Les motivations sont diverses : insatisfaction au travail, recherche de nouvelles opportunités ou désir de changer de secteur.</p>
        <p>La reconversion professionnelle demande une réelle préparation et peut se réaliser progressivement en utilisant les compétences acquises dans le métier actuel pour les adapter au nouvel environnement professionnel. C’est un processus individuel qui, bien préparé, peut ouvrir la voie vers une nouvelle carrière enrichissante.</p>
      `,
      image: "/assets/images/Reconversion7.jpg",
      isReversed: false
    }
  ];

  const faqItems = [
    {
      question: "Je suis actuellement en poste, est-il possible pour moi d'envisager une reconversion professionnelle ?",
      answer:
        "Oui, il existe des solutions pour bénéficier des droits à l’indemnisation chômage tout en vous formant à ce nouveau métier."
    },
    {
      question: "Quelles sont les perspectives d'emploi après ma reconversion ?",
      answer:
        "Aujourd’hui de très nombreuses entreprises recrutent (PME, TPE, grandes entreprises). Cependant, le marché de l’emploi est complexe et chercher le poste idéal peut être plus compliqué qu’il n’y parait. DiaFym RH peut vous accompagner dans vos recherches."
    },
    {
      question: "Je souhaiterais me mettre à mon compte après ma reconversion, est-ce possible ?",
      answer:
        "Absolument ! Une reconversion professionnelle peut être le tremplin idéal pour démarrer votre propre entreprise. Elle vous permettra d’acquérir de nouvelles compétences, de développer un réseau professionnel dans votre nouveau domaine d’activité et d’approfondir votre expertise. DiaFym RH pourra vous aiguiller sur la marche à suivre pour créer votre structure."
    }
  ];

  return (
    <div className="diag-page">
      <Header />
      <Hero 
        title="Envie de changer de métier ?"
        description="Un accompagnement sur-mesure pour accueillir, guider et fidéliser durablement vos nouveaux collaborateurs."
      />
      <section className="diag-content">
        <div className="solutions-section recrutement-intro">
          <h2 className="section-title recrutement-title">
            Comment réussir la transition vers un nouveau domaine ?
          </h2>
          <div className="section-description recrutement-description">
            <p className="reconversion-transition-text">
              Pour réussir une transition professionnelle vers un nouveau domaine, il est essentiel de
              capitaliser sur ses compétences transférables, d’acquérir de nouvelles connaissances par le biais
              de formations ou de stages. Nous sommes là pour vous accompagner vers votre réussite.
            </p>
            <p className="lead-text recrutement-lead">
              Les aspirations derrière une reconversion professionnelle sont diverses et propres à chaque individu :
            </p>
            <ul className="recrutement-list">
              <li>
                Changer de domaine professionnel pour trouver plus de satisfaction ou d'épanouissement.
              </li>
              <li>
                Acquérir de nouvelles compétences ou qualifications pour s'adapter à un marché du travail en évolution.
              </li>
              <li>
                Explorer de nouvelles opportunités de carrière pour atteindre un objectif personnel ou professionnel.
              </li>
              <li>
                Élargir ses horizons professionnels en explorant des secteurs d'activité différents.
              </li>
            </ul>
          </div>
        </div>

        <section className="features-section recrutement-features">
          <div className="reconversion-images-grid">
            <img
              src="/assets/images/Reconversion1.jpg"
              alt="Reconversion professionnelle 1"
              className="reconversion-image"
            />
            <img
              src="/assets/images/Reconversion2.jpg"
              alt="Reconversion professionnelle 2"
              className="reconversion-image"
            />
            <img
              src="/assets/images/Reconversion3.jpg"
              alt="Reconversion professionnelle 3"
              className="reconversion-image"
            />
            <img
              src="/assets/images/Reconversion4.jpg"
              alt="Reconversion professionnelle 4"
              className="reconversion-image"
            />
            <img
              src="/assets/images/Reconversion5.jpg"
              alt="Reconversion professionnelle 5"
              className="reconversion-image"
            />
            <img
              src="/assets/images/Reconversion6.jpg"
              alt="Reconversion professionnelle 6"
              className="reconversion-image"
            />
          </div>
        </section>

        <h3 className="recrutement-block-title">
          Quelles personnes peuvent entreprendre une reconversion professionnelle ?
        </h3>

        <AlternatingBlocks blocks={blocks} />

        <section className="reconversion-faq-section">
          <div className="reconversion-faq-left">
            <img
              src="/assets/images/Reconversion8.svg"
              alt="Icône reconversion"
              className="reconversion-faq-icon"
            />
            <h3>Un projet de reconversion qui vous ressemble</h3>
            <p>
              Que vous soyez au début de votre réflexion ou déjà engagé(e) dans un projet de changement,
              il est essentiel de prendre le temps de clarifier vos envies, vos contraintes et vos priorités.
            </p>
            <p>
              Ces questions fréquentes vous aident à mieux comprendre les enjeux d’une reconversion
              professionnelle et les possibilités qui s’offrent à vous.
            </p>
          </div>
          <div className="reconversion-faq-right">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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

export default Reconversion

