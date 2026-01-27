import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './Ressources.css'

const RessourcesBlog = () => {
  return (
    <div className="ressources-page">
      <Header />
      <Hero 
        title="Blog"
        description="Découvrez nos articles et actualités sur la formation et le développement des compétences"
      />
      <section className="ressources-content">
        <div className="ressources-section">
          <h2>Nos derniers articles</h2>
          <p>Restez informé des dernières tendances et innovations en matière de gestion des connaissances</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default RessourcesBlog 