import './Features.css'

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Nos Fonctionnalités</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Gestion de Projets</h3>
          <p>Organisez vos projets efficacement</p>
        </div>
        <div className="feature-card">
          <h3>Collaboration</h3>
          <p>Travaillez en équipe en temps réel</p>
        </div>
        <div className="feature-card">
          <h3>Analytics</h3>
          <p>Suivez vos progrès en détail</p>
        </div>
      </div>
    </section>
  )
}

export default Features 