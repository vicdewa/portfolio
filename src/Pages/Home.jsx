import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import './Home.css';
import imageNina from '../assets/nina_website.png';
import imageEvents from '../assets/events_website.png';

const Home = () => {
  const projects = [
    {
      title: "Portfolio photographe",
      description: "Grâce aux outils d'audit de Lighthouse et Wave, le site de la photographe Nina Carducci a été optimisé en termes de SEO et d'accessibilité. De nombreux éléments ont été retravaillés (de la taille des images en passant par les fichiers de code ou encore les lignes de scripts), dans le but de permettre un chargement plus rapide de la page, un meilleur référencement et une inclusion de tous les types d'utilisateurs.",
      features: [
        "👉🏻 Réalisation d'un audit complet du site",
        "👉🏻 Amélioration des performances et de l'accessibilité",
        "👉🏻 Optimisation du référencement (SEO)",
        "👉🏻 Remise d'un rapport complet au client",
      ],
      imageUrl: imageNina,
      projectLink: "https://nina-xi.vercel.app"
    },
    {
      title: "Site agence d'événementiel",
      description: "Le site de l'agence 724EVENTS présentait de multiples bugs (notamment au niveau du défilement du carrousel et du système de filtrage des événements). À l'aide de React Developer Tools et de la console, le code a été débuggé pour permettre au site de fonctionner selon les attentes du client. Des tests unitaires ont été implémentés pour vérifier le bon comportement du site.",
      features: [
        "👉🏻 Utilisation de React et Javascript",
        "👉🏻 Débuggage de différentes sections du site",
        "👉🏻 Rédaction d'un cahier de recettes et de tests unitaires",
      ],
      imageUrl: imageEvents,
      projectLink: "https://ocr-724-events.vercel.app"
    },
  ];
  return (
    <div className="home-container">
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Vous trouverez ici une galerie des derniers projets réalisés. <br/>
        N'hésitez pas à cliquer sur les aperçus pour découvrir les sites plus en détail.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            features={project.features}
          />
  ))}
      </div>
    </div>
  );
}

export default Home;
