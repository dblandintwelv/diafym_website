import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [key, setKey] = useState(0)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event) => {
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

        {/* Navigation mobile : panneau latéral (portal) */}
        {isMenuOpen && createPortal(
          <nav className={`nav-menu nav-menu-mobile ${isMenuOpen ? 'open' : ''}`}>
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
                          <li><Link to="/recrutement" onClick={toggleMenu}>Recrutement</Link></li>
                          <li><Link to="/integration" onClick={toggleMenu}>Intégration</Link></li>
                          <li><Link to="/reconversion" onClick={toggleMenu}>Reconversion professionnelle</Link></li>
                        </ul>
                      </div>
                      <div className="dropdown-section">
                        <h4>Formation</h4>
                        <ul>
                          <li><Link to="/formations" onClick={toggleMenu}>Nos formations</Link></li>
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
                          <li><Link to="/ressources/contact" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
            <Link to="/ressources/contact" className="mobile-demo-button" onClick={toggleMenu}>Prendre rendez-vous</Link>
          </nav>,
          document.body
        )}

        <Link to="/ressources/contact" className="desktop-demo-button">Prendre rendez-vous</Link>
      </div>
    </header>
  )
}

export default Header 