const Description = `Ce projet réalisé en groupe consistait à réaliser un programme parfaitement fonctionnel permettant de charger, éditer et sauvegarder un fichier de données structurées.
Le programme devait disposer d'une interface graphique et devait être développé de façon multi-plateforme.`;

const project3 = [
    {
    "id": 3,
    "titre": "Gestionnaire - Avions Militaires",
    "description": Description,
    "fonctionnalites_principales": [
      "Chargement des données et sauvegarde au format JSON/XML",
      "Affichage & édition via interface graphique (Présentation en mode master/detail)",
      "Filtrage dynamique des données et Internationalisation",
      "Application Multi-plateforme (Compatible Windows et Linux)"
    ],
    "apport_en_competences": [
      "Utilisation avancée de Qt (Qt Creator, QML, Qt Linguist)",
      "Conception d'IHM ergonomiques et dynamiques (responsive design)",
      "Manipulation de formats de données structurés (JSON, XML)",
      "Travail en binôme : répartition équitable des tâches, gestion de projet",
      "Conception de diagrammes UML (classes, interactions)"
    ],
    "technologies_utilisees": [
      "C++ (programmation orientée objet)",
      "Qt Framework (QML, signal/slot, MVC)",
      "Qt Creator",
      "Sérialisation de données (JSON, XML)",
      "Internationalisation (Qt Linguist, fichiers .ts)",
      "QRegularExpression (pour le filtrage avancé)",
      "Git (workflow collaboratif)",
      "Modélisation UML"
    ],
    "difficultes_rencontrees": [
      "Gestion des expressions régulières pour le filtrage",
      "Synchronisation collaborative avec Git (gestion des conflits)",
      "Affichage conditionnel des sous-formulaires dynamiques"
    ],
    "solutions_mises_en_place": [
      "Utilisation d'une bibliothèque de regex robuste intégrée à Qt",
      "Mise en place d'une convention Git stricte : commits fréquents, branches dédiée",
      "Refactorisation de l'IHM en composants modulaires"
    ]
  }
];

import Project from "../Project";

const images = require.context('../../images/projet3', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

export default function Project3(){
    return(    
        project3.map((project) => {
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