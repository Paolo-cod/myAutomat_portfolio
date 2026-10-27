const project6 = [
  {
    "id": 6,
    "titre": "Logiciel - Comparaison de factures énergétiques",
    "description": "Ce projet consistait à concevoir une application permettant d'estimer le montant d'une facture énergétique (gaz ou électricité) selon différents fournisseurs, à partir des index relevés sur les compteurs.\nLe but précis était de concevoir la description fonctionnelle et technique d'une application de calcul de facture énergétique, sans réalisation du code complet, mais avec un cahier des charges précis.",
    "fonctionnalites_principales": [
      "Authentification utilisateur",
      "Saisie des index",
      "Calcul de consommation",
      "Calcul du montant par fournisseur",
      "Tri des fournisseurs",
      "Affichage graphique",
      "Gestion des versions de contrats"
    ],
    "apport_en_competences": [
      "Analyse de besoins",
      "Conception de diagrammes (Use Case, Séquence, GANTT)",
      "Conception d'interfaces graphiques"
    ],
    "technologies_utilisees": [
      "UML (Use Case, Diagrammes de Séquence, Diagrammes de Classes)",
      "Diagramme de GANTT (planification projet)",
      "Conception d'IHM (wireframes / maquettes)",
      "Outils de modélisation (PlantUML)"
    ],
    "difficultes_rencontrees": [
      "Recherche des éléments entrant dans l'estimation d'une facture énergétique pour chaque fournisseur"
    ],
    "solutions_mises_en_place": [
      "Analyse minutieuse de contrats réels afin d'identifier les différents facteurs influençant une facture énergétique"
    ]
  }
];

import Project from "../Project";

const images = require.context('../../images/projet6', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

export default function Project6(){
    return(    
        project6.map((project) => {
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