import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './Ressources.css'

const RessourcesContact = () => {
  return (
    <div className="ressources-page">
      <Header />
      <Hero 
        title="Contactez-nous"
        description="Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet"
      />
      <section className="ressources-content">
        <div className="ressources-section">
          {/* <div className="contact-info">
            <div className="contact-person">
              <img src="/assets/images/team/Jerome.jpg" alt="Jerome" className="contact-photo" />
              <div className="contact-details">
                <h3>Jérôme Lamrak</h3>
                <h4>CEO</h4>
                <p><a href="mailto:jerome.lamrak@diafym-rh.fr">jerome.lamrak@diafym-rh.fr</a></p>
                <p><a href="tel:+33519081545">05 19 08 15 45</a></p>
              </div>
            </div>
          </div> */}

          <div className="contact-rdv">
            <h2>Prenez rendez-vous avec nous</h2>
            <div className="contact-iframe-container">
              <iframe 
                src="https://outlook.office.com/book/DiaFymRH@twelv.fr/?ismsaljsauthenabled"
                width="100%"
                height="1832"
                loading="lazy"
                title="Formulaire de contact"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default RessourcesContact 