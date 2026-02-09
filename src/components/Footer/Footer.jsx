import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/assets/Logo-Diafym-blanc.png" alt="Diafym-RH Logo" />
        </div>
        <div className="footer-sections-container">
          <div className="footer-section">
            <h3>Liens utiles</h3>
            <ul>
              <li><Link to="/about">Qui sommes-nous</Link></li>
              <li><Link to="/legal">Mentions légales</Link></li>
              <li><Link to="/ressources/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email : <a href="mailto:hello@diafym-rh.com">hello@diafym-rh.fr</a></p>
            <p>Téléphone : <a href="tel:+33519081545">05 19 08 15 45</a></p>
            <p>2A rue Georges Claude<br />31840 Aussonne</p>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/diafym-group/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/Logo-lkdn.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Diafym-RH. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer