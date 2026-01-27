import React, { useEffect, useRef } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Partners from '../../components/Partners/Partners'
import Footer from '../../components/Footer/Footer'
import AlternatingBlocks from '../../components/AlternatingBlocks/AlternatingBlocks'
import './Home.css'

const FeatureBlock = ({ title, description, image, index }) => {
  return (
    <motion.div 
      className="feature-block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {image && (
        <div className="feature-image-container">
          <img src={image} alt={title} className="feature-image" />
        </div>
      )}
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </motion.div>
  );
};

const TestimonialBlock = ({ name, role, company, image, testimonial, index }) => {
  return (
    <motion.div 
      className="testimonial-block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial}"</p>
        <div className="testimonial-author">
          <img src={image} alt={name} className="author-image" />
          <div className="author-info">
            <h4>{name}</h4>
            <p className="author-role">{role}</p>
            <p className="author-company">{company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const features = [
    {
      title: "Recrutement et Intégration personnalisés",
      image: "/assets/images/recrutement-1.svg",
      description: "Nous identifions et sélectionnons les meilleurs profils pour vos besoins. Grâce à notre méthode basée sur l'écoute et l'adaptation, nous facilitons l'intégration durable de vos futurs collaborateurs"
    },
    {
      title: "Accompagnement RH externalisé",
      image: "/assets/images/accompagnement-rh.svg",
      description: "Concentrez-vous sur votre cœur de métier. Nous prenons en charge vos fonctions RH (administration du personnel, recrutement, conformité…) pour plus de flexibilité et de sérénité.​"
    },
    {
      title: "Conseil En Carrière Et Évolution Professionnelle​",
      image: "/assets/images/conseil-carriere.svg",
      description: "(Re)donnez du sens à votre parcours. Vous êtes salarié, en reconversion, ou en questionnement professionnel ? Nous vous aidons à (re)définir vos objectifs et à construire un projet aligné avec vos aspirations.​"
    },
    {
      title: "Développez Vos Compétences RH",
      image: "/assets/images/formation.svg",
      description: "Nous proposons des formations adaptées aux enjeux actuels des ressources humaines. Que vous soyez manager, recruteur ou professionnel RH, nos programmes vous offrent des outils concrets pour améliorer vos pratiques et renforcer votre impact.​"
    }
  ];

  const alternatingBlocks = [
    {
      title: "Sur-mesure",
      description: "Des solutions RH conçues spécifiquement pour s'adapter à vos enjeux, votre secteur et votre culture d'entreprise.",
      image: "/assets/images/sur-mesure.png",
      isReversed: true
    },
    {
      title: "Proximité",
      description: "Un accompagnement réactif et humain, partout en France, au plus près de vos équipes.",
      image: "/assets/images/proximite.png",
      isReversed: false
    },
    {
      title: "Maîtrise",
      description: "Une connaissance approfondie des réalités RH pour construire des réponses concrètes, opérationnelles et adaptée",
      image: "/assets/images/maitrise.png",
      isReversed: true
    },
    {
      title: "Engagement",
      description: "Des résultats durables portés par une approche centrée sur l'humain et la performance.",
      image: "/assets/images/engagement.png",
      isReversed: false
    }
  ];

  const testimonials = [
    {
      name: "Stéphane Boullay",
      role: "Directeur de l'Humain et de la Transformation",
      company: "Crédit Agricole Toulouse 31",
      image: "/assets/images/testimonials/Boullay.png",
      testimonial: "En choisissant Diafym-RH je pensais avoir trouvé une solution pour développer les compétences de mes collaborateurs en lien avec les outils du quotidien. Je me rends compte aujourd'hui que Diafym-RH apporte bien plus en rendant mon organisation collaborative et auto-apprenante. Au-delà d'une communauté, nous possédons désormais tous les atouts pour réussir nos défis de transformation à venir."
    },
    {
      name: "Jérôme Ledevic",
      role: "DRH",
      company: "Les Chalets - Bras droit des dirigeants",
      image: "/assets/images/testimonials/Ledevic.png",
      testimonial: "Diafym-RH est une plateforme qui renoue à un besoin primordial : le partage et l'entraide. Diafym-RH apporte une véritable méthode au service des Hommes et des Organisations, elle s'appuie sur des technologies modernes dans le but de développer et donner corps à l'intelligence collective. Un seul regret : pourquoi n'y avons nous pas pensé plus tôt !"
    },
    {
      name: "Axel de Laplagnolle",
      role: "DRH",
      company: "Square Habitat",
      image: "/assets/images/testimonials/Laplagnolle.png",
      testimonial: "Diafym-RH nous a permis de faire partager de façon ludique et très efficace les connaissances de chacun au sein de l'entreprise. Ça facilite le partage des savoirs, les « trucs et astuces » que chacun connaît. Cela nous a permis également de faire rencontrer des coéquipiers qui ne se connaissaient pas bien, au sein de l'entreprise. Je recommande, sans hésitation. Nous sommes ravis d'avoir installé la solution et de l'utiliser tout au long de l'année ! Bravo à l'équipe !"
    },
    {
      name: "Laure Embège",
      role: "Coordinatrice développement formation",
      company: "Groupe T3M",
      image: "/assets/images/testimonials/Embege.png",
      testimonial: "Diafym-RH propose une approche de pairs à pairs qui renforce la crédibilité de l'information en la transformant en astuce tout en valorisant le sachant. Nous avions besoin de sécuriser notre savoir interne, mais aussi d'accélérer et de démultiplier les occasions de partage de bonnes pratiques. C'est une réussite, nous avons même été agréablement surpris du nombre de personnes engagées et de l'image véhiculée de l'entreprise par la mise en place du dispositif. Nous avons même atteint 499 lectures de tutoriels sur un panel de 130 utilisateurs en 2 mois."
    },
    {
      name: "Cathy Castel",
      role: "Directrice pédagogique",
      company: "Ecoles Vidal",
      image: "/assets/images/testimonials/Castel.png",
      testimonial: "Diafym-RH nous a aidé à développer la relation entre les formateurs en vue d'améliorer la cohésion d'équipe, harmoniser les bonnes pratiques et développer notre marque employeur. Ce qui m'a convaincu, c'est le format d'atelier flash animé par des formateurs pour des formateurs qui crée des liens informels entre les participants. Après avoir partagé une expérience commune lors d'un atelier, la relation entre les participants est plus conviviale et plus proche. La plateforme Diafym-RH est pleinement intégrée dans notre processus d'embauche. Nos nouveaux formateurs accélèrent leur prise en main, gagnent en efficacité et en confort."
    },
    {
      name: "Olivier Montaut",
      role: "DSI",
      company: "Groupe des Chalets",
      image: "/assets/images/testimonials/Montaut.png",
      testimonial: "La montée en maturité numérique de l'ensemble de nos collaborateurs est un enjeu majeur. La préservation de la connaissance de nos outils métiers est par ailleurs critique pour la pérennité de notre organisation. La plateforme Diafym-RH participe à ces deux objectifs principaux en permettant de mettre en relation facilement le collaborateur sachant et le collaborateur apprenant. Elle favorise ainsi la transversalité et contribue à renforcer la culture du partage et de l'entraide au sein du Groupe des Chalets."
    }
  ];

  const blocksRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => {
      blocksRef.current.forEach((block) => {
        if (block) observer.unobserve(block);
      });
    };
  }, []);

  return (
    <div className="home">
      <Header />
      <section className="hero-section-background">
        <main>
          <section className="hero-section">
            <div className="hero-content">
              <h1>DiaFym Group - Agence de stratégie RH</h1>
              <div className="hero-subtitle-container">
                <div className="hero-subtitle">
                  <p><strong>Vos solutions RH sur mesure, partout en France</strong></p>
                  <p>Chez Diafym Group, nous accompagnons les entreprises de toutes tailles dans la construction, la transformation et l'optimisation de leur stratégie RH. Notre approche humaine vous garantit des résultats concrets, durables et sur mesure.</p>
                  <div className="cta-buttons">
                    <Link to="/ressources/contact" className="secondary-button">Prendre rendez-vous</Link>
                  </div>
                </div>
                <div className="hero-image">
                  <img src="/assets/images/equipe-diafym.png" alt="Interface Diafym-RH" />
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,20 1440,40 L1440,120 L0,120 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      <main className="video-main">
        <section className="about-section">
          <div className="about-content">
            <div className="about-images">
              <div className="about-images-left">
                <img src="/assets/images/meeting.jpg" alt="Équipe Diafym-RH" className="about-img-small" />
                <img src="/assets/images/reunion.jpg" alt="Équipe Diafym-RH" className="about-img-small" />
              </div>
              <div className="about-images-right">
                <img src="/assets/images/fanny.jpg" alt="Équipe Diafym-RH" className="about-img-small" />
                <img src="/assets/images/collegues.jpg" alt="Équipe Diafym-RH" className="about-img-small" />
              </div>
            </div>
            <div className="about-text">
              <h2>À propos de nous</h2>
              <p>Chez Diafym Group, nous accompagnons les entreprises de toutes tailles dans la construction, la transformation et l'optimisation de leur stratégie RH. Notre approche humaine vous garantit des résultats concrets, durables et sur mesure.</p>
              <p>Nous croyons que le partage des connaissances est la clé du succès des entreprises. Notre mission est de faciliter la transmission des savoirs entre collaborateurs et de créer une culture d'apprentissage continu au sein des organisations.</p>
            </div>
          </div>
        </section>
      </main>

      {/* <Partners /> */}

      <section className="features-section">
        <div className="features-container">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="alternating-section">
        <AlternatingBlocks blocks={alternatingBlocks} />
      </section>

      <section className="pre-cta-section">
        <div className="pre-cta-content">
          <div className="pre-cta-text">
            <h2>Candidats : Trouvez votre voie !</h2>
            <p className="pre-cta-subtitle">Vous recherchez un emploi ? Vous envisagez une reconversion professionnelle ?</p>
            <p>
              Chez <span className="pre-cta-highlight">Diafym Group</span>, nous accompagnons aussi les
              <span className="pre-cta-highlight"> candidats en recherche d’emploi</span>, en
              <span className="pre-cta-highlight"> transition professionnelle</span> ou en
              <span className="pre-cta-highlight"> reconversion</span>. Que vous soyez en début de carrière, en évolution ou en repositionnement,
              notre mission est de vous guider vers <span className="pre-cta-highlight">un projet professionnel durable et aligné avec vos ambitions</span>.
            </p>
            <Link to="/ressources/contact" className="primary-button pre-cta-button">
              Envie d'avancer avec nous ?
            </Link>
          </div>
          <div className="pre-cta-image">
            <img
              src="/assets/images/FannyEstelle.png"
              alt="Accompagnement des candidats avec Diafym Group"
            />
          </div>
        </div>
      </section>

      <main>
        <section className="cta-section">
          <h2>Prêt à transformer votre entreprise ?</h2>
          <p>Rejoignez les entreprises qui ont déjà fait le choix de Diafym-RH</p>
          <Link to="/ressources/contact" className="primary-button">Commencer maintenant</Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home