const Description = `Ce projet réalisé en groupe consistait à concevoir un site web informatif permettant de présenter le BUT Informatique.`;

const project4 = [
    {
    "id": 4,
    "titre": "Site Web - Présentation du BUT Informatique",
    "description": Description,
    "fonctionnalites_principales": [
      "Présentation générale du BUT Informatique",
      "Présentation de l'IUT d'Aix-Marseille",
      "Description sommaire des 6 compétences que vont acquérir les étudiants en BUT",
      "Présentation sommaire du Parcours A « Réalisation d'applications : conception, développement, validation »",
      "Tableau horaire des cours et SAé du BUT 1ère année",
      "Un glossaire définissant les termes utilisés, entre autres : IUT, BUT, compétence , SAé"
    ],
    "apport_en_competences": [
      "Utilisation des classes Bootstrap",
      "Travail collaboratif",
      "Consolidation de mes conaissances en Développement web (HTML, CSS)"
    ],
    "technologies_utilisees": [
      "HTML5 (structure sémantique)",
      "CSS3 & Bootstrap 5 (responsive design)",
    ],
    "difficultes_rencontrees": [
      "Difficultés à faire le tri des nombreuses informations disponibles",
      "Prise en main de certaines classes Bootstrap"
    ],
    "solutions_mises_en_place": [
      "Relecture de la docmentation bootstrap",
      "Suivi de tutos sur youtube"
    ]
  }
];

import Project from "../Project";

const images = require.context('../../images/projet4/captures', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

export default function Project4(){
    return(    
        project4.map((project) => {
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