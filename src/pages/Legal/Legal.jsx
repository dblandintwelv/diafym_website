import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import './Legal.css';

const Legal = () => {
  return (
    <div className="legal-page">
      <Header />
      <Hero 
        title="Mentions légales"
        description="Informations légales concernant Diafym-RH et ses services"
      />
      <main className="legal-content">
        <section className="legal-section">
          <h2>Informations légales</h2>
          <p>Diafym-RH est une marque de DDFactory, société société par actions simplifiée unipersonnelle (SASU) au capital de 16000 euros, dont le siège social est situé au 2A rue Georges Claude, 31840 Aussonne.</p>
          <p>Siège social : 2A rue Georges Claude, 31840 Aussonne</p>
          <p>SIREN: 881946461</p>
        </section>

        <section className="legal-section">
          <h2>Hébergement</h2>
          <p>Ce site est hébergé par :</p>
          <p>OVH SAS<br />
          2 rue Kellermann<br />
          59100 Roubaix<br />
          France</p>
        </section>

        <section className="legal-section">
          <h2>Propriété intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
        </section>

        <section className="legal-section">
          <h2>Protection des données personnelles</h2>
          <p>Vos données à caractère personnel collectées dans ce formulaire par Diafym-RH, en sa qualité de responsable de traitement, ont pour finalité de traiter votre demande de contact et de vous ajouter à la liste de diffusion de notre newsletter. Ce traitement est nécessaire aux fins des intérêts de Diafym-RH, dans le respect de vos droits. L'intérêt légitime de Diafym-RH est d'assurer une relation optimale avec ses clients et prospects. Vos données seront supprimées automatiquement à l'issue d'une durée de trois ans après notre dernier échange. Vous pouvez à tout moment, dans les conditions prévues par la réglementation, accéder aux informations vous concernant, les faire rectifier, demander leur effacement, la limitation de leur traitement, ou communiquer des instructions sur leur sort en cas de décès. Vous pouvez également à tout moment vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière, en écrivant par lettre simple à suivante : DDFactory/Diafym-RH – DPO Service Clients – 2A rue Georges Claude, 31840 Aussonne ou par courriel à contact@diafym-rh.fr Vous pouvez, en cas de contestation, former une réclamation auprès de la CNIL dont les coordonnées figurent à l'adresse internet http://www.cnil.fr.</p>
          <p>Vos données à caractère personnel collectées dans ce formulaire par Diafym-RH, en sa qualité de responsable de traitement, ont pour finalité de traiter votre demande de contact. L'intérêt légitime de Diafym-RH est d'assurer une relation optimale avec ses clients et prospects. Vos données seront supprimées automatiquement à l'issue d'une durée de trois ans après notre dernier échange. Vous pouvez à tout moment, dans les conditions prévues par la réglementation, accéder aux informations vous concernant, les faire rectifier, demander leur effacement, la limitation de leur traitement, ou communiquer des instructions sur leur sort en cas de décès. Vous pouvez également à tout moment vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière, en écrivant par lettre simple à suivante : 2A rue Georges Claude, 31840 Aussonne ou par mail à contact@diafym-rh.com. Vous pouvez, en cas de contestation, former une réclamation auprès de la CNIL dont les coordonnées figurent à l'adresse internet http://www.cnil.fr. En cliquant sur « Recevoir mon estimation », vous autorisez l'entreprise Diafym-RH à stocker et traiter les données personnelles soumises ci-dessus afin qu'elle vous fournisse le contenu demandé. Vous pouvez vous désabonner de ces communications à tout moment. Diafym-RH s'engage à protéger et à respecter votre vie privée. Nous n'utiliserons vos données personnelles que pour administrer votre compte et vous fournir les produits et services demandés. Nous aimerions vous contacter ponctuellement au sujet de nos produits et services, ainsi que d'autres contenus susceptibles de vous intéresser.</p>
        </section>

        <section className="legal-section">
          <h2>Cookies</h2>
          <p>Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment désactiver l'utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Legal; 