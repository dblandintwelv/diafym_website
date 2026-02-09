import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
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
  const productsButtonRef = useRef(null)
  const resourcesButtonRef = useRef(null)
  const productsDropdownRef = useRef(null)
  const resourcesDropdownRef = useRef(null)
  const [productsDropdownPosition, setProductsDropdownPosition] = useState({ top: 0, left: 0 })
  const [resourcesDropdownPosition, setResourcesDropdownPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event) => {
      // Ne pas fermer les dropdowns quand on clique dans le menu mobile (sinon les boutons sont démontés avant le clic)
      if (mobileMenuRef.current?.contains(event.target)) return
      // Ne pas fermer si on clique sur les boutons ou dans les dropdowns
      if (productsButtonRef.current?.contains(event.target) || productsDropdownRef.current?.contains(event.target)) return
      if (resourcesButtonRef.current?.contains(event.target) || resourcesDropdownRef.current?.contains(event.target)) return
      // Fermer les dropdowns si on clique ailleurs
      setIsProductsOpen(false)
      setIsResourcesOpen(false)
    }

    const updateDropdownPositions = () => {
      if (productsButtonRef.current) {
        const rect = productsButtonRef.current.getBoundingClientRect()
        setProductsDropdownPosition({
          top: rect.bottom,
          left: rect.left + rect.width / 2
        })
      }
      if (resourcesButtonRef.current) {
        const rect = resourcesButtonRef.current.getBoundingClientRect()
        setResourcesDropdownPosition({
          top: rect.bottom,
          left: rect.left + rect.width / 2
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateDropdownPositions)
    document.addEventListener('mousedown', handleClickOutside)
    
    // Mettre à jour les positions quand les dropdowns s'ouvrent
    if (isProductsOpen || isResourcesOpen) {
      updateDropdownPositions()
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateDropdownPositions)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isProductsOpen, isResourcesOpen])

  const handleProductsClick = (e) => {
    e.stopPropagation()
    setIsResourcesOpen(false)
    const newState = !isProductsOpen
    setIsProductsOpen(newState)
    if (newState && productsButtonRef.current) {
      const rect = productsButtonRef.current.getBoundingClientRect()
      setProductsDropdownPosition({
        top: rect.bottom,
        left: rect.left + rect.width / 2
      })
    }
  }

  const handleResourcesClick = (e) => {
    e.stopPropagation()
    setIsProductsOpen(false)
    const newState = !isResourcesOpen
    setIsResourcesOpen(newState)
    if (newState && resourcesButtonRef.current) {
      const rect = resourcesButtonRef.current.getBoundingClientRect()
      setResourcesDropdownPosition({
        top: rect.bottom,
        left: rect.left + rect.width / 2
      })
    }
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
                  ref={productsButtonRef}
                  className="dropdown-button"
                  onClick={handleProductsClick}
                >
                  Services
                </button>
              </div>
            </li>
            <li className="resources-dropdown">
              <div className="dropdown-wrapper">
                <button 
                  ref={resourcesButtonRef}
                  className="dropdown-button"
                  onClick={handleResourcesClick}
                >
                  Ressources
                </button>
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

        {/* Navigation mobile : panneau latéral rendu via Portal pour éviter les problèmes de stacking context sur Safari */}
        {isMenuOpen && createPortal(
          <>
            <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
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
                          <li><button type="button" className="nav-menu-mobile-link" onClick={() => handleMobileLinkClick('/formations/vae')}>VAE</button></li>
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
          </>,
          document.body
        )}

        <Link to="/ressources/contact" className="desktop-demo-button">Prendre rendez-vous</Link>
      </div>

      {/* Dropdowns desktop rendus via Portal pour éviter les problèmes de stacking context sur Safari */}
      {isProductsOpen && createPortal(
        <div 
          ref={productsDropdownRef}
          className="dropdown-content"
          style={{
            top: `${productsDropdownPosition.top}px`,
            left: `${productsDropdownPosition.left}px`,
            transform: 'translateX(-50%)'
          }}
        >
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
              <li><Link to="/formations/vae">VAE</Link></li>
            </ul>
          </div>
        </div>,
        document.body
      )}

      {isResourcesOpen && createPortal(
        <div 
          ref={resourcesDropdownRef}
          className="dropdown-content resources-dropdown-content"
          style={{
            top: `${resourcesDropdownPosition.top}px`,
            left: `${resourcesDropdownPosition.left}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="dropdown-section">
            <ul>
              <li><Link to="/ressources/contact">Contact</Link></li>
            </ul>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}

export default Header 