import React, { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import './TarifSimulator.css';

const MIN_PILOTE = 2;
const MIN_CREATEUR = 3;
const MIN_VIEWER = 7;
const PRIX_PILOTE = 9;
const PRIX_CREATEUR = 6;
const PRIX_VIEWER = 3;
const PRIX_MINIMUM = 57;

const REDUCTION_ANNUELLE = 0.10;

// Configuration EmailJS
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'I1S5ectrMY-wIPFPn',
  SERVICE_ID: 'service_ttidrtd',
  TEMPLATE_ID: 'template_ezx7vby'
};

const TarifSimulator = () => {
  const [pilotes, setPilotes] = useState(MIN_PILOTE);
  const [createurs, setCreateurs] = useState(MIN_CREATEUR);
  const [viewers, setViewers] = useState(MIN_VIEWER);
  // const [mode, setMode] = useState('mensuel'); // 'mensuel' ou 'annuel' - masqué
  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [mainProblem, setMainProblem] = useState('');
  const [otherProblem, setOtherProblem] = useState('');
  const [licensesConfirmed, setLicensesConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [stepIndex, setStepIndex] = useState(0);

  // Crans prédéfinis: issus de votre fichier (image)
  const SALARIE_STEPS = useMemo(() => ([
    { label: '≤12', salariesMax: 10, pilotes: 3, createurs: 2, viewers: 7 },
    { label: '≤20', salariesMax: 20, pilotes: 2, createurs: 3, viewers: 15 },
    { label: '≤30', salariesMax: 30, pilotes: 3, createurs: 5, viewers: 22 },
    { label: '≤40', salariesMax: 40, pilotes: 3, createurs: 6, viewers: 31 },
    { label: '≤50', salariesMax: 50, pilotes: 3, createurs: 8, viewers: 39 },
    { label: '≤60', salariesMax: 60, pilotes: 4, createurs: 9, viewers: 47 },
    { label: '≤70', salariesMax: 70, pilotes: 4, createurs: 11, viewers: 55 },
    { label: '≤80', salariesMax: 80, pilotes: 4, createurs: 12, viewers: 64 },
    { label: '≤90', salariesMax: 90, pilotes: 4, createurs: 14, viewers: 72 },
    { label: '≤100', salariesMax: 100, pilotes: 5, createurs: 15, viewers: 80 },
    { label: '≤110', salariesMax: 110, pilotes: 5, createurs: 17, viewers: 88 },
    { label: '≤120', salariesMax: 120, pilotes: 5, createurs: 18, viewers: 97 },
    { label: '≤130', salariesMax: 130, pilotes: 5, createurs: 20, viewers: 105 },
    { label: '≤140', salariesMax: 140, pilotes: 5, createurs: 21, viewers: 114 },
    { label: '≤150', salariesMax: 150, pilotes: 5, createurs: 23, viewers: 122 },
    { label: '≤160', salariesMax: 160, pilotes: 5, createurs: 24, viewers: 131 },
    { label: '≤170', salariesMax: 170, pilotes: 5, createurs: 26, viewers: 139 },
    { label: '≤180', salariesMax: 180, pilotes: 5, createurs: 27, viewers: 148 },
    { label: '≤190', salariesMax: 190, pilotes: 5, createurs: 29, viewers: 156 },
    { label: '≤200', salariesMax: 200, pilotes: 5, createurs: 30, viewers: 165 },
    { label: '≤210', salariesMax: 210, pilotes: 5, createurs: 32, viewers: 173 },
    { label: '≤220', salariesMax: 220, pilotes: 5, createurs: 33, viewers: 182 },
    { label: '≤230', salariesMax: 230, pilotes: 5, createurs: 35, viewers: 190 },
    { label: '≤240', salariesMax: 240, pilotes: 5, createurs: 36, viewers: 199 },
    { label: '≤250', salariesMax: 250, pilotes: 5, createurs: 38, viewers: 207 },
    { label: '≤260', salariesMax: 260, pilotes: 5, createurs: 39, viewers: 216 },
    { label: '≤270', salariesMax: 270, pilotes: 5, createurs: 41, viewers: 224 },
    { label: '≤280', salariesMax: 280, pilotes: 5, createurs: 42, viewers: 233 },
    { label: '≤290', salariesMax: 290, pilotes: 5, createurs: 44, viewers: 241 },
    { label: '≤300', salariesMax: 300, pilotes: 5, createurs: 45, viewers: 250 },
  ]), []);

  const handleSliderChange = (newIndex) => {
    const index = Number(newIndex);
    setStepIndex(index);
    const s = SALARIE_STEPS[index];
    // Applique les minimas par type
    setPilotes(Math.max(s.pilotes, MIN_PILOTE));
    setCreateurs(Math.max(s.createurs, MIN_CREATEUR));
    setViewers(Math.max(s.viewers, MIN_VIEWER));
  };

  // const handleBlur = (value, min, setter) => {
  //   const numValue = Number(value);
  //   if (value === '' || isNaN(numValue) || numValue < min) {
  //     setter(min);
  //   } else {
  //     setter(numValue);
  //   }
  // };

  const p = Number(pilotes) || 0;
  const c = Number(createurs) || 0;
  const v = Number(viewers) || 0;

  // const prixPilote = mode === 'annuel' ? +(PRIX_PILOTE * (1 - REDUCTION_ANNUELLE)).toFixed(2) : PRIX_PILOTE;
  // const prixCreateur = mode === 'annuel' ? +(PRIX_CREATEUR * (1 - REDUCTION_ANNUELLE)).toFixed(2) : PRIX_CREATEUR;
  // const prixViewer = mode === 'annuel' ? +(PRIX_VIEWER * (1 - REDUCTION_ANNUELLE)).toFixed(2) : PRIX_VIEWER;
  // const prixMinimum = mode === 'annuel' ? +(PRIX_MINIMUM * (1 - REDUCTION_ANNUELLE)).toFixed(2) : PRIX_MINIMUM;

  // const totalMensuel = Math.max(
  //   p * prixPilote + c * prixCreateur + v * prixViewer,
  //   prixMinimum
  // );
  // const totalAnnuel = mode === 'annuel' ? +(totalMensuel * 12).toFixed(2) : null;

  const handleDevisSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('Envoi en cours...');

    try {
      const templateParams = {
        fullName: fullName,
        email: email,
        company: company,
        address: address,
        launchDate: launchDate,
        mainProblem: mainProblem === 'Autre' ? otherProblem : mainProblem,
        additionalInfo: additionalInfo,
        // mode: mode === 'annuel' ? 'Annuel (-10%)' : 'Mensuel',
        pilotes: p,
        createurs: c,
        viewers: v,
        // prixPilote: prixPilote,
        // prixCreateur: prixCreateur,
        // prixViewer: prixViewer,
        // total: mode === 'annuel' ? totalAnnuel.toFixed(2) : totalMensuel.toFixed(2),
        // totalPeriode: mode === 'annuel' ? 'an' : 'mois'
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setMessage('Devis envoyé avec succès ! Vous recevrez un e-mail de confirmation.');
      setFullName('');
      setEmail('');
      setCompany('');
      setAddress('');
      setLaunchDate('');
      setMainProblem('');
      setOtherProblem('');
      setAdditionalInfo('');
      setLicensesConfirmed(false);
      setShowForm(false);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setMessage('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Réglette salariés → licences */}
      <div className="tarif-slider-card">
        <div className="tarif-slider-header">
          <div className="tarif-slider-title">Taille du périmètre</div>
          <div className="tarif-slider-sub">Déplacez le curseur en fonction de votre périmètre</div>
          <div className="tarif-current-scope">Périmètre: <strong>{SALARIE_STEPS[stepIndex].label}</strong> utilisateur·rice·s</div>
        </div>
        <div className="tarif-slider">
          <input
            type="range"
            min={0}
            max={SALARIE_STEPS.length - 1}
            step={1}
            value={stepIndex}
            className="tarif-range"
            onChange={(e) => handleSliderChange(e.target.value)}
            list="salaires-ticks"
            aria-label="Sélecteur de taille d'entreprise"
          />
          <datalist id="salaires-ticks">
            {SALARIE_STEPS.map((s, i) => (
              <option key={s.label} value={i} label={s.label} />
            ))}
          </datalist>
          <div className="tarif-proposal">
            Nombre de licences suggérées pour ce périmètre:
            <span className="chip">{Math.max(SALARIE_STEPS[stepIndex].pilotes, MIN_PILOTE)} Admins</span>
            <span className="chip">{Math.max(SALARIE_STEPS[stepIndex].createurs, MIN_CREATEUR)} Auteurs</span>
            <span className="chip">{Math.max(SALARIE_STEPS[stepIndex].viewers, MIN_VIEWER)} Lecteurs</span>
          </div>
          {/* <div className="tarif-note">Astuce: vous pouvez affiner les quantités ci-dessous.</div> */}
        </div>
      </div>
      {/* Tout le contenu suivant a été masqué selon la demande utilisateur */}
      {/* <div className="tarif-tabs">
        <button
          type="button"
          className={mode === 'mensuel' ? 'tarif-tab actif' : 'tarif-tab'}
          onClick={() => setMode('mensuel')}
        >
          Mensuel
        </button>
        <button
          type="button"
          className={mode === 'annuel' ? 'tarif-tab actif' : 'tarif-tab'}
          onClick={() => setMode('annuel')}
        >
          Annuel <span className="tarif-badge">-10%</span>
        </button>
      </div>
      <form className="tarif-form" onSubmit={e => e.preventDefault()}>
        <div className="tarif-field">
          <label htmlFor="pilotes" className="tarif-label">
            <div className="label-main">
              <span>Nombre d'utilisateurs administrateurs</span>
              <span className="info-icon">
                ?
                <div className="tooltip">
                  <ul>
                    <li>Toutes les fonctionnalités auteur</li>
                    <li>Créer un parcours pédagogique</li>
                    <li>Modifier les contenus d'un tiers</li>
                    <li>Publier un contenu</li>
                    <li>Gérer les utilisateurs (ajouter, supprimer, modifier)</li>
                    <li>Attribuer des rôles (lecteur.ice, auteur.ice, pilote)</li>
                    <li>Gérer la structure de l'espace (rubriques, catégories, menus)</li>
                    <li>Gérer les paramètres de la plateforme (branding, configuration)</li>
                    <li>Suivre les statistiques globales (utilisation, participation, impact)</li>
                    <li>Gérer les inscriptions aux ateliers et parcours</li>
                    <li>Exporter des données (rapports, statistiques, inscriptions)</li>
                    <li>Accéder à l'assistance Diafym-RH</li>
                  </ul>
                </div>
              </span>
            </div>
            <span className="tarif-label-min"> (min. {MIN_PILOTE}) </span>
          </label>
          <div className="tarif-input-group">
            <button type="button" className="tarif-btn" onClick={() => handleBlur(p - 1, MIN_PILOTE, setPilotes)} disabled={p <= MIN_PILOTE}>–</button>
            <input
              id="pilotes"
              className="tarif-input"
              type="text"
              inputMode="numeric"
              value={pilotes}
              onFocus={e => e.target.select()}
              onChange={e => setPilotes(e.target.value.replace(/[^0-9]/g, ''))}
              onBlur={() => handleBlur(pilotes, MIN_PILOTE, setPilotes)}
            />
            <button type="button" className="tarif-btn" onClick={() => setPilotes(p + 1)}>+</button>
          </div>
          <span className="tarif-price">{prixPilote}€ / mois / licence</span>
        </div>
        <div className="tarif-field">
          <label htmlFor="createurs" className="tarif-label">
            <div className="label-main">
              <span>Nombre d'utilisateurs auteurs</span>
              <span className="info-icon">
                ?
                <div className="tooltip">
                  <ul>
                    <li>Toutes les fonctionnalités lecteur</li>
                    <li>Créer un contenu (article, ressource, tutoriel, atelier)</li>
                    <li>Modifier ses propres contenus</li>
                    <li>Gérer les versions d'un contenu (brouillon, publié, archivé)</li>
                    <li>Ajouter des médias (images, vidéos, documents)</li>
                    <li>Créer un atelier / un parcours pédagogique</li>
                    <li>Suivre les statistiques d'accès à ses contenus</li>
                    <li>Créer un quiz ou un exercice interactif</li>
                    <li>Gérer les droits d'accès à ses contenus (restrictions)</li>
                  </ul>
                </div>
              </span>
            </div>
            <span className="tarif-label-min"> (min. {MIN_CREATEUR}) </span>
          </label>
          <div className="tarif-input-group">
            <button type="button" className="tarif-btn" onClick={() => handleBlur(c - 1, MIN_CREATEUR, setCreateurs)} disabled={c <= MIN_CREATEUR}>–</button>
            <input
              id="createurs"
              className="tarif-input"
              type="text"
              inputMode="numeric"
              value={createurs}
              onFocus={e => e.target.select()}
              onChange={e => setCreateurs(e.target.value.replace(/[^0-9]/g, ''))}
              onBlur={() => handleBlur(createurs, MIN_CREATEUR, setCreateurs)}
            />
            <button type="button" className="tarif-btn" onClick={() => setCreateurs(c + 1)}>+</button>
          </div>
          <span className="tarif-price">{prixCreateur}€ / mois / licence</span>
        </div>
        <div className="tarif-field">
          <label htmlFor="viewers" className="tarif-label">
            <div className="label-main">
              <span>Nombre d'utilisateurs lecteurs</span>
              <span className="info-icon">
                ?
                <div className="tooltip">
                  <ul>
                    <li>Consulter le contenu (articles, ressources, tutoriels, ateliers)</li>
                    <li>Rechercher un contenu dans la plateforme</li>
                    <li>Suivre un parcours / atelier en ligne et ou en présentiel</li>
                    <li>Commenter un contenu (feedback)</li>
                    <li>Recevoir des notifications</li>
                    <li>Formuler une demande</li>
                    <li>Mentionner des compétences</li>
                  </ul>
                </div>
              </span>
            </div>
            <span className="tarif-label-min"> (min. {MIN_VIEWER}) </span>
          </label>
          <div className="tarif-input-group">
            <button type="button" className="tarif-btn" onClick={() => handleBlur(v - 1, MIN_VIEWER, setViewers)} disabled={v <= MIN_VIEWER}>–</button>
            <input
              id="viewers"
              className="tarif-input"
              type="text"
              inputMode="numeric"
              value={viewers}
              onFocus={e => e.target.select()}
              onChange={e => setViewers(e.target.value.replace(/[^0-9]/g, ''))}
              onBlur={() => handleBlur(viewers, MIN_VIEWER, setViewers)}
            />
            <button type="button" className="tarif-btn" onClick={() => setViewers(v + 1)}>+</button>
          </div>
          <span className="tarif-price">{prixViewer}€ / mois / licence</span>
        </div>
        {mode === 'mensuel' ? (
          <div className="tarif-total">
            Total&nbsp;:<br />
            {totalMensuel.toFixed(2)} € / mois<br />
            <span className="tarif-users">pour {p + c + v} utilisateurs</span>
            {totalMensuel <= prixMinimum && (
              <><br /><span className="tarif-minimum">(abonnement minimum)</span></>
            )}
          </div>
        ) : (
          <div className="tarif-total">
            Total&nbsp;:<br />
            {totalAnnuel.toFixed(2)} € / an<br />
            <span className="tarif-users">pour {p + c + v} utilisateurs</span>
            <><br /><span className="tarif-minimum">(10% de réduction déjà appliqués)</span></>
          </div>
        )}
        <div className="tarif-help">
          Les montants sont affichés hors taxes. <br/>
          Modifiez le périmètre pour simuler votre abonnement.
        </div>
      </form>

      {/* Bouton et formulaire de devis */}
      {!showForm ? (
        <div className="devis-button-container">
          <button type="button" className="devis-button" onClick={() => setShowForm(true)}>
            Je veux en savoir plus
          </button>
        </div>
      ) : (
        <form className="devis-form" onSubmit={handleDevisSubmit}>
          {/* <h4>Votre devis personnalisé</h4> */}
          <input
            type="text"
            placeholder="Prénom et Nom"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Adresse mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Entreprise"
            value={company}
            onChange={e => setCompany(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Adresse"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <div className="date-field">
            <label htmlFor="launchDate">Date de déploiement envisagée</label>
            <input
              id="launchDate"
              type="date"
              value={launchDate}
              onChange={e => setLaunchDate(e.target.value)}
            />
          </div>
          <div className="select-field">
            <label htmlFor="mainProblem">Quelle est votre problématique principale ?</label>
            <select
              id="mainProblem"
              value={mainProblem}
              onChange={e => setMainProblem(e.target.value)}
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="Perte des savoirs clés">Perte des savoirs clés</option>
              <option value="Manque d'harmonisation des pratiques">Manque d'harmonisation des pratiques</option>
              <option value="Isolement des experts et cloisonnement des équipes">Isolement des experts et cloisonnement des équipes</option>
              <option value="Difficulté à intégrer et former rapidement les nouveaux arrivants">Difficulté à intégrer et former rapidement les nouveaux arrivants</option>
              <option value="Temps et coût de formation trop élevés">Temps et coût de formation trop élevés</option>
              <option value="Manque d'équité dans le développement des compétences">Manque d'équité dans le développement des compétences</option>
              <option value="Autre">Autre</option>
            </select>
            {mainProblem === 'Autre' && (
              <input
                type="text"
                placeholder="Précisez votre problématique"
                value={otherProblem}
                onChange={e => setOtherProblem(e.target.value)}
                required
              />
            )}
          </div>
          <textarea
            placeholder="Informations complémentaires"
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
            rows="3"
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="licenses-confirmed"
              checked={licensesConfirmed}
              onChange={e => setLicensesConfirmed(e.target.checked)}
              required
            />
            <label htmlFor="licenses-confirmed">
              J'ai bien saisi le périmètre d'utilisateurs
            </label>
          </div>
          <button type="submit" className="devis-button" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
          {message && <p style={{textAlign: 'center', marginTop: '1rem', color: message.includes('succès') ? '#4caf50' : '#f44336'}}>{message}</p>}
        </form>
      )}
    </div>
  );
};

export default TarifSimulator; 