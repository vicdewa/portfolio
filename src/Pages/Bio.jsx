import React from 'react';
import './Bio.css';
import '../Components/Footer';

function Bio({ image, title, description }) {
  return (
    <div className="bio-container">
      {/* Partie photo et texte en haut */}
      <div className="bio-main-content">
        <div className="bio-image">
          <img src={image} alt="Photo" />
        </div>
        <div className="bio-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* Partie formation et compétences en dessous */}
      <div className="bio-skills">
        <div className="bio-skills-section">
          <div className="skills-description">
            <h4>INTÉGRATRICE WEB CERTIFIÉE</h4>
            <p>La formation d'OpenClassrooms m’a permis de maîtriser le développement d'interfaces web, aussi bien pour convertir vos maquettes en sites responsives, que pour créer des applications dynamiques avec React. J'ai acquis des compétences solides en front-end (HTML, CSS, JavaScript) et appris à optimiser les performances et la visibilité des sites (SEO, accessibilité). Enfin, j'ai développé mes connaissances en gestion agile de projet web, depuis la conception jusqu'à la mise en ligne.
            </p>
          </div>
          <div className="skills-list">
            <h4>COMPÉTENCES</h4>
            <ul>
              <li><span className="highlight-text">HTML5 & CSS3</span> : Création de sites web modernes et responsives.</li>
              <li><span className="highlight-text">JavaScript, React & Node.js</span> : Approche dynamique du développement pour créer des interfaces modulaires, qui facilitent la maintenance et la réutilisation du code.</li>
              <li><span className="highlight-text">SEO</span> : Optimisation du référencement pour améliorer la visibilité sur les moteurs de recherche.</li>
              <li><span className="highlight-text">Accessibilité Web</span> : Prise en compte des normes d'accessibilité dans le processus de développement.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
