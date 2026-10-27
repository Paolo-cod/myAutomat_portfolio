const Description = `Base de données issue d'ATMO France, le réseau national des associations agréées pour la surveillance de la qualité de l'air, regroupant les mesures et indices de qualité de l'air pour l'ensemble des régions françaises.
Les données exploitées concernaient les régions, départements, villes (zones), codes de zone et indices journaliers de qualité de l'air.
Cependant, l'ensemble de ces informations était initialement stocké dans une seule table non normalisée (qualite_air), sans séparation claire entre les entités géographiques et les mesures, ce qui rendait la structure difficilement exploitable pour une gestion multi-régions et pour des analyses statistiques fiables
`;

const project7 = [
  {
    "id": 7,
    "titre": "Refonte d'Architecture d'une Base de Données - Qualité de l'air",
    "description": Description,
    "fonctionnalites_principales": [
      "Modèle relationnel structuré - tables (Region, Département, Ville, Indice_qualité_air)",
      "Supression des redondances",
      "Transformation des données de la table unique",
      "Vérification d'intégrité (FK constraints)",
      "Requêtes analytiques pour répondre à l'expression d'un besoin"
    ],
    "apport_en_competences": [
      "Analyse d'un schéma existant",
      "Normalisation de données",
      "Conception d'un modèle relationnel robuste",
      "Ecriture de requêtes analytiques complexes",
      "Migration et transformation de données"
    ],
    "technologies_utilisees": [
      "SQL (PostgreSQL - phpPgadmin)",
      "Modélisation relationnelle",
      "Normalisation (1NF → 3NF)",
      "Contraintes d'intégrité (Primary Keys, Foreign Keys)",
      "Requêtes analytiques (JOIN, GROUP BY, agrégations)",
      "Outil de modélisation (WinDesign)",
      "Visual Studio Code"
    ],
    "difficultes_rencontrees": [
      "Identifier les bonnes entités",
      "Gérer les dépendances fonctionnelles",
      "Construire des requêtes analytiques correctes avec plusieurs JOIN"
    ],
    "solutions_mises_en_place": [
      "Décomposition logique des entités",
      "Application des règles de normalisation (1NF -> 3NF)",
      "Validation progressive avec des requêtes tests",
    ]
  }
];

import Project from "../Project";

const images = require.context('../../images/projet7/captures', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

export default function Project7(){
    return(   
      project7.map((project) => {
          return (
              <Project 
                  id={project.id}
                  title={project.titre}
                  description={project.description}
                  sessions={SECTIONS}
                  images={imagesList}
                  fonctionnalites={project.fonctionnalites_principales}
                  outils={project.technologies_utilisees}
                  apports={project.apport_en_competences}
                  difficultes={project.difficultes_rencontrees}
                  solutions={project.solutions_mises_en_place}

              />
          )
      })
    );
}

const SECTIONS = [
  {
    title: "Problème initial",
    content: `- Données redondantes
      - Difficulté à gérer plusieurs régions
      - Aucune relation entre régions et départements
      - Mauvaise évolutivité
      - Requêtes analytiques peu optimisées`,
  },
  {
    title: "Objectif",
    content: `- Reconcevoir l’architecture de la base
      - Normaliser les données
      - Créer une structure scalable pour toutes les régions
      - Permettre des requêtes analytiques fiables (moyenne, max, classement des villes…)`,
  },
  {
    title: "Mon rôle",
    content: `- Analyse du schéma existant
      - Conception du nouveau modèle
      - Migration des données
      - Écriture des requêtes analytiques`,
  },
];