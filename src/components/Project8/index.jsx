const Description = `DactyPro est une application web développée avec React permettant de mesurer la vitesse de frappe (WPM) et la précision d'un utilisateur à partir d'un exercice de dactylographie.
L'utilisateur doit taper une série de mots dans un temps limité, tandis que l'application évalue en temps réel les mots corrects et incorrects. À la fin de la partie, différentes statistiques sont calculées et un historique des performances est enregistré.`;

const project8 = [
    {
    "id": 8,
    "titre": "DactyPro 2026",
    "description": Description,
    "fonctionnalites_principales": [
      "Validation de la frappe en temps réel",
      "Compte à rebours dynamique démarrant à la première frappe",
      "Calcul des statistiques de frappe (nombre de mots par minute, pourcentage de précision), ...",
      "Relancer une partie via un bouton Rejouer",
      "Historique des parties jouées affiché dans une boîte de dialogue",
      "Affichage / Masquage du timer pendant la partie",
      "Retour visuel immédiat lorsqu'un mot est mal saisi"
    ],
    "apport_en_competences": [
      "Utilisation avancée des hooks React",
      "Conception d'une architecture claire séparant logique métier et interface",
      "Gestion d'un state global structuré",
      "Mise en place d'une machine à états simples pour le jeu", 
      "Amélioration de l'expérience utilisateur avec des retours visuels en temps réel" 
    ],
    "technologies_utilisees": [
      "React - développement interface et gestion des composants",
      "Javascript (ES6) - logique de l'application",
      "React Hooks - gestion de l'état et du cycle de vie",
      "HTML5 - structure de l'interface",
      "CSS3 - mise en forme de l'application",
      "Vite - environnement de déploiement"
    ],
    "difficultes_rencontrees": [
      "La gestion d'un état global composé de plusieurs variables interdépendantes",
      "La séparation entre  état métier, état d'interface et état dérivés",
      "Ajout d'un historique de parties sans provoquer des enregistrements multiples lors des re-renders React"
    ],
    "solutions_mises_en_place": [
      "Refactorisation de la gestion d'état initiale (useSatate) vers useReducer afin de centraliser la logique du jeu",
      "Utilisation d'un GameProvider avec useContext pour rendre l'état accessible à tous les composants sans prop drilling",
      "Utilisation de useRef pour empêcher l'ajout multiple d'une entrée d'historique à la fin d'une partie"
    ]
  }
];

import Project from "../Project";

const images = require.context('../../images/projet8/captures/', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

export default function Project8(){
    return(    
        project8.map((project) => {
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