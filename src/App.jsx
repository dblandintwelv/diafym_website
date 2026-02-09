import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Integration from './pages/Metiers/Integration'
import Recrutement from './pages/Metiers/Recrutement'
import Reconversion from './pages/Metiers/Reconversion'
import NosFormations from './pages/Formation/NosFormations'
import VAE from './pages/Formation/VAE'
import CasClient from './pages/Ressources/CasClient'
import Blog from './pages/Ressources/Blog'
import Tarifs from './pages/Ressources/Tarifs'
import Contact from './pages/Ressources/Contact'
import About from './pages/About/About'
import Legal from './pages/Legal/Legal'
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics'
import './App.css'

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integration" element={<Integration />} />
      <Route path="/recrutement" element={<Recrutement />} />
      <Route path="/reconversion" element={<Reconversion />} />
      <Route path="/formations" element={<NosFormations />} />
      <Route path="/formations/vae" element={<VAE />} />
      <Route path="/ressources/cas-client" element={<CasClient />} />
      <Route path="/ressources/blog" element={<Blog />} />
      <Route path="/ressources/tarifs" element={<Tarifs />} />
      <Route path="/ressources/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
    </>
  )
}

export default App
