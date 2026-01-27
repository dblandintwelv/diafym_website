import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-RZ5GHPS09Q';

// Pages à exclure du tracking
const EXCLUDED_PATHS = ['/auth/validate', '/auth/confirm'];

// Fonction pour vérifier si une page est exclue
const isPageExcluded = (pathname) => {
  return EXCLUDED_PATHS.some(path => pathname.startsWith(path));
};

const GoogleAnalytics = () => {
  const location = useLocation();

  // Initialiser Google Analytics une seule fois
  useEffect(() => {
    // Ne pas charger GA si on est sur une page exclue au montage initial
    if (isPageExcluded(location.pathname)) {
      return;
    }

    // Vérifier si le script est déjà chargé
    if (document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
      return;
    }

    // Charger le script Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialiser gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });
  }, []); // Seulement au montage initial

  // Suivre les changements de route
  useEffect(() => {
    // Ne pas tracker les pages exclues
    if (isPageExcluded(location.pathname)) {
      return;
    }

    // Attendre que gtag soit disponible
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // Ce composant ne rend rien
};

export default GoogleAnalytics;

