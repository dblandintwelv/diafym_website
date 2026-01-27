import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import AlternatingBlocks from '../../components/AlternatingBlocks/AlternatingBlocks'
import './Ressources.css'

const RessourcesCasClient = () => {
  const blocks = [
    {
      title: "Diafym-RH appliqué au secteur de l'enseignement supérieur, l'exemple des Ecoles Vidal",
      description: "Pour découvrir quelles sont les problématiques de cet acteur de la formation allant de bac+2 à bac+5, et comment nous y avons répondu, téléchargez notre cas client ci-dessous. Pour plus d'information sur les Ecoles Vidal, retrouvez leur ",
      link: { url: "https://ecoles-vidal.fr", text: "site web" },
      image: "/assets/images/cas-vidal.png",
      isReversed: false,
      pdfUrl: "/assets/pdfs/CasclientVidal.pdf"
    },
    {
      title: "Diafym-RH appliqué au secteur de l'industrie et de la maintenance, l'exemple du Groupe T3M",
      description: "Pour découvrir quelles sont les problématiques de ce concessionnaire de matériels agricoles, leader sur ses territoires (PACA, Occitanie, Limousin), et comment nous y avons répondu, téléchargez notre cas client ci-dessous. Pour plus d'information sur T3M, retrouvez leur ",
      link: { url: "https://groupet3m.com", text: "site web" },
      image: "/assets/images/cas-T3M.png",
      isReversed: true,
      pdfUrl: "/assets/pdfs/CasclientT3M.pdf"
    },
    {
      title: "Diafym-RH appliqué au secteur de la banque, de l'immobilier et de l'assurance, l'exemple de la caisse régionale du Crédit Agricole Toulouse 31",
      description: "Pour découvrir quel sont les problématiques collaboratives du premier groupe bancaire français, et comment nous y avons répondu, téléchargez notre cas client ci dessous. Pour plus d'information sur la caisse régionale de Toulouse du Crédit Agricole, retrouvez leur ",
      link: { url: "https://www.credit-agricole.fr/ca-toulouse31/particulier.html", text: "site web" },
      image: "/assets/images/cas-CA.png",
      isReversed: false,
      pdfUrl: "/assets/pdfs/CasclientCAT31.pdf"
    },
    {
      title: "Diafym-RH appliqué au secteur du logement social, l'exemple du Groupe des Chalets",
      description: "Pour découvrir quel sont les problématiques de ce bailleur social, partenaire territorial engagé et innovant au service des territoires d'Occitanie, et comment nous y avons répondu, téléchargez notre cas client ci dessous. Pour plus d'information sur le Groupe des Chalets, retrouvez leur ",
      link: { url: "https://www.groupedeschalets.com/", text: "site web" },
      image: "/assets/images/cas-chalets.png",
      isReversed: true,
      pdfUrl: "/assets/pdfs/CasclientGroupedesChalets.pdf"
    }
  ];

  return (
    <div className="ressources-page">
      <Header />
      <Hero 
        title="Cas clients"
        description="Découvrez comment nos clients ont transformé leur organisation grâce à Diafym-RH"
      />
      <section className="ressources-content">
        <AlternatingBlocks blocks={blocks} showDownloadButton={true} />
      </section>
      <Footer />
    </div>
  )
}

export default RessourcesCasClient 