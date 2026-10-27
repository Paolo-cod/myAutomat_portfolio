const Description = `Ce projet consistait à écrire un programme C++ qui tourne dans le terminal, permettant de gérer des évènements sur un agenda.`;

const project5 = [
    {
    "id": 5,
    "titre": "Agenda C++",
    "description": Description,
    "fonctionnalites_principales": [
      "Menu principal (liste des évènements)",
      "Création, Modification et Supression d'évènements",
      "Filtrage d'évènements (recherche par titre, identifiant, ...)",
      "Chargement de session (liste d'évènements) depuis un fichier",
      "Stockage de session sous divers formats (texte et HTML)",
      "Messages d'erreur clairs et précis (dates incorrectes, absence de titre, ...)"
    ],
    "apport_en_competences": [
      "Manipulation des structures de données (conteneurs, dictionnaires, ...)",
      "Définition et suivi d'un format de stockage des données dans les fichiers (pour faciliter la lecture et l'écriture)",
      "Réalisation de tests (unitaires et d'intégration)"  
    ],
    "technologies_utilisees": [
      "C++ (STL, programmation orientée objet)",
      "Application CLI (terminal)",
      "Structures de données STL (vector, map, unordered_map)",
      "Manipulation de fichiers (fstream)",
      "Sérialisation personnalisée (format texte / HTML)",
      "Validation métier (gestion des dates)",
      "Tests unitaires et d'intégration",
      "Visual Studio Code"
    ],
    "difficultes_rencontrees": [
      "Organisation des données dans les fichiers",
      "Cohérence dans les dates"
    ],
    "solutions_mises_en_place": [
      "Formatage personnalisé des données dans les fichiers permettant une recharge facile",
      "Utilisation d'une Map pour associer chaque mois de l'année au nombre de jours max qu'il peut contenir"
    ]
  }
];

import Project from "../Project";

const images = require.context('../../images/projet5/captures/', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

export default function Project5(){
    return(    
        project5.map((project) => {
            return (
                <Project 
                    id={project.id}
                    title={project.titre}
                    description={project.description}
                    images={imagesList}
                    fonctionnalites={project.fonctionnalites_principales}
                    outils={project.technologies_utilisees}
                    apports={project.apport_en_competences}
                    difficultes={project.difficultes_rencontrees}
                    solutions={project.solutions_mises_en_place}

                />
            )
        })
    )
}