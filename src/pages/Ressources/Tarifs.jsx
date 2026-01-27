import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './Ressources.css'
import TarifSimulator from '../../components/TarifSimulator/TarifSimulator'

const RessourcesTarifs = () => {
  return (
    <div className="ressources-page">
      <Header />
      <Hero
        title="Notre offre"
        description="Des solutions adaptées à vos besoins et à votre budget"
      />
      <section className="ressources-content">
        <div className="tarif-simulator-container">
          <div className="tarif-intro">
            <p className="intro-lead">💡 Parce que chaque organisation progresse à son rythme, ce périmètre de rôles peut évoluer selon votre maturité collaborative : plus votre culture du partage se développe, plus les fonctions peuvent s’enrichir et s’ouvrir.</p>
            <div className="intro-highlight">
              <span className="badge">Conseil</span>
              <p>Pour une TPE, démarrer simple, c’est gagner vite.</p>
            </div>
            <p className="intro-lead">Avec Diafym-RH, l'expérience montre qu'un lancement efficace repose sur :</p>
            <ul className="intro-bullets">
              <li><strong>85%</strong> de Lecteur.ices</li>
              <li><strong>15%</strong> d’Auteur.ices</li>
              <li><strong>Pilote</strong> doublonné pour sécuriser la gouvernance</li>
            </ul>
            <p className="intro-note">Faites une simulation (de 12 à 300 salariés) 👇</p>
          </div>
          <TarifSimulator />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default RessourcesTarifs