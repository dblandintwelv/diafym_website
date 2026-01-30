import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [key, setKey] = useState(0)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event) => {
      // Ne pas fermer les dropdowns quand on clique dans le menu mobile (sinon les boutons sont démontés avant le clic)
      if (mobileMenuRef.current?.contains(event.target)) return
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false)
        setIsResourcesOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleProductsClick = (e) => {
    e.stopPropagation()
    setIsResourcesOpen(false)
    setIsProductsOpen(!isProductsOpen)
  }

  const handleResourcesClick = (e) => {
    e.stopPropagation()
    setIsProductsOpen(false)
    setIsResourcesOpen(!isResourcesOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setIsProductsOpen(false)
      setIsResourcesOpen(false)
      setKey(prev => prev + 1)
    }
  }

  /** Clic sur un lien du menu mobile : navigation + fermeture du menu */
  const handleMobileLinkClick = (path) => {
    navigate(path)
    setIsMenuOpen(false)
    setIsProductsOpen(false)
    setIsResourcesOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/assets/Logo-Diafym.png" alt="Diafym-RH Logo" />
        </Link>

        {/* Navigation desktop : toujours visible sur grand écran */}
        <nav className="nav-menu nav-menu-desktop" ref={dropdownRef}>
          <ul>
            <li className="products-dropdown">
              <div className="dropdown-wrapper">
                <button 
                  className="dropdown-button"
                  onClick={handleProductsClick}
                >
                  Services
                </button>
                {isProductsOpen && (
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4>Métiers</h4>
                      <ul>
                        <li><Link to="/recrutement">Recrutement</Link></li>
                        <li><Link to="/integration">Intégration</Link></li>
                        <li><Link to="/reconversion">Reconversion professionnelle</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <h4>Formation</h4>
                      <ul>
                        <li><Link to="/formations">Nos formations</Link></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="resources-dropdown">
              <div className="dropdown-wrapper">
                <button 
                  className="dropdown-button"
                  onClick={handleResourcesClick}
                >
                  Ressources
                </button>
                {isResourcesOpen && (
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <ul>
                        <li><Link to="/ressources/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        <button 
          key={key}
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation mobile : panneau latéral (dans le DOM du header pour garder le contexte Router) */}
        {isMenuOpen && (
          <nav ref={mobileMenuRef} className={`nav-menu nav-menu-mobile open`} aria-hidden="false">
            <ul>
              <li className="products-dropdown">
                <div className="dropdown-wrapper">
                  <button
                    type="button"
                    className="dropdown-button"
                    onClick={handleProductsClick}
                  >
                    Services
                  </button>
                  {isProductsOpen && (
                    <div className="dropdown-content">
                      <div className="dropdown-section">
                        <h4>Métiers</h4>
                        <ul>
                          <li><button type="button" className="nav-menu-mobile-link" onClick={() => handleMobileLinkClick('/recrutement')}>Recrutement</button></li>
                          <li><button type="button" className="nav-menu-mobile-link" onClick={() => handleMobileLinkClick('/integration')}>Intégration</button></li>
                          <li><button type="button" className="nav-menu-mobile-link" onClick={() => handleMobileLinkClick('/reconversion')}>Reconversion professionnelle</button></li>
                        </ul>
                      </div>
                      <div className="dropdown-section">
                        <h4>Formation</h4>
                        <ul>
                          <li><button type="button" className="nav-menu-mobile-link" onClick={() => handleMobileLinkClick('/formations')}>Nos formations</button></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="resources-dropdown">
                <div className="dropdown-wrapper">
                  <button
                    type="button"
                    className="dropdown-button"
                    onClick={handleResourcesClick}
                  >
                    Ressources
                  </button>
                  {isResourcesOpen && (
                    <div className="dropdown-content">
                      <div className="dropdown-section">
                        <ul>
                          <li><button type="button" className="nav-menu-mobile-link" onClick={() => handleMobileLinkClick('/ressources/contact')}>Contact</button></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
            <button type="button" className="mobile-demo-button" onClick={() => handleMobileLinkClick('/ressources/contact')}>Prendre rendez-vous</button>
          </nav>
        )}

        <Link to="/ressources/contact" className="desktop-demo-button">Prendre rendez-vous</Link>
      </div>
    </header>
  )
}

export default Header 