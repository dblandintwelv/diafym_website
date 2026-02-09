import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import '../Metiers/Metiers.css'
import './NosFormations.css'
import './VAE.css'

const VAE = () => {
  return (
    <div className="diag-page vae-page">
      <Header />
      <Hero 
        title="VAE - Validation des Acquis de l'Expérience"
        description="Cette page est actuellement en cours de construction. Revenez prochainement pour découvrir notre accompagnement VAE."
      />
      <main className="diag-content vae-content">
        <section className="solutions-section recrutement-intro">
          <h2 className="section-title recrutement-title vae-intro-title">
            Notre accompagnement VAE arrive bientôt
          </h2>

          <div className="formations-info-card vae-intro-card">
            <h3>Page en cours de construction</h3>
            <p className="formations-info-subtitle">
              Bientôt disponible pour vous accompagner dans la valorisation de votre expérience.
            </p>

            <ul className="formations-info-list">
              <li>
                <span className="formations-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="formations-info-icon-svg">
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 14.5h-2V11h2zm0-7.5h-2V7h2z" />
                  </svg>
                </span>
                <span>
                  Informations complètes sur notre accompagnement VAE, les étapes clés et les modalités pratiques.
                </span>
              </li>
              <li>
                <span className="formations-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="formations-info-icon-svg">
                    <path d="M12 2a7 7 0 0 0-7 7v3.586l-.707.707A1 1 0 0 0 5 15h14a1 1 0 0 0 .707-1.707L19 12.586V9a7 7 0 0 0-7-7zm0 20a4 4 0 0 1-3.464-2h6.928A4 4 0 0 1 12 22z" />
                  </svg>
                </span>
                <span>
                  Un cadre rassurant et structuré pour préparer votre dossier et vos entretiens de VAE.
                </span>
              </li>
              <li>
                <span className="formations-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="formations-info-icon-svg">
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm-1 15-4-4 1.414-1.414L11 14.172l4.586-4.586L17 11z" />
                  </svg>
                </span>
                <span>
                  Des ressources et outils pour sécuriser votre parcours et maximiser vos chances de validation.
                </span>
              </li>
            </ul>

            <Link to="/ressources/contact" className="cta-button formations-info-button">
              Être recontacté pour la VAE
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default VAE

