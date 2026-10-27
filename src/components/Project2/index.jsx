const Description = `Ce projet avait pour objectif de créer un logiciel en C++ avec une interface graphique Qt, permettant de calculer le temps de trajet entre des villes françaises.
Il utilise des données issues de fichiers CSV pour estimer les temps à l'aide de l'algorithme de Floyd-Warshall.
L'utilisateur peut ainsi obtenir rapidement le temps de conduite entre deux villes ou entre plusieurs villes`;
const project2 = [
    {
    "id": 2,
    "titre": "Logiciel de Temps de Route",
    "description": Description,
    "fonctionnalites_principales": [
      "Consulter les informations (classement, longitude, latitude, densité, ...) d'une ville",
      "Trouver le temps de trajet entre deux villes selectionnées",
      "Construire un tableau de temps de trajet entre un ensemble de villes selectionnées",
      "Connaître le meilleur ordre pour visiter un ensemble de villes choisies",
      "Determiner le meilleur emplacement pour un dépôt qui doit desservir un ensemble de villes",
      "Visualiser une carte montrant les villes de France"
    ],
    "apport_en_competences": [
      "Programmation en C++, particulièrement dans la manipulation de matrices, de fichiers CSV et la structuration du code",
      "Utilisation de Qt pour créer une interface graphique intuitive permettant une interaction avec l'utilisateur",
      "Gestion et traitement de données réelles, avec des jeux de données partiels et imparfaits",
      "Optimisation et modélisation de problèmes, dans les fonctionnalités avancées (ordre de visite, placement de dépôt...)"
    ],
    "technologies_utilisees": [
      "C++ (STL, structures de données, gestion mémoire)",
      "Qt (Widgets, signaux/slots, Qt Designer)",
      "Algorithmes de graphes (Floyd-Warshall, matrice de distances)",
      "Traitement de données CSV (parsing, nettoyage, validation)",
      "Architecture d'application desktop (séparation UI / logique métier)",
      "qmake (build système)"
    ],
    "difficultes_rencontrees": [
      "Création de l'interface avec Qt, qui demande de bien organiser les signaux/slots, la logique d'affichage et les interactions",
      "Affichage lisible des résultats, notamment pour le tableau croisé de trajets entre plusieurs villes",
      "Gestion des performances, car l'algorithme a une complexité élevée (O(n³)), ce qui peut ralentir l'application si mal implémentée"
    ],
    "solutions_mises_en_place": [
      "Calcul et stockage des plus courts chemins dans une phase d'initialisation (au lancement) pour éviter de recalculer à chaque demande",
      "Calcul du plus court chemin dans une phase d'initialisation (au lancement) pour éviter de recalculer à chaque demande"
    ]
  }
];

import Project from "../Project";

const images = require.context('../../images/projet2/captures', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

export default function Project2(){
    return(    
        project2.map((project) => {
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