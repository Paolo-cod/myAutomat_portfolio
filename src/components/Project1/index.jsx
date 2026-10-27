const Description = `Application client-riche en JavaScript orienté objet permettant la recherche, l'affichage et la mise en cache de recettes via l'API publique TheMealDB.
Architecture modulaire (Meal, Meals, Ingredient), build Webpack, CSS moderne (flex, glassmorphism), et intégration d'un fond animé.
Gestion fine de l'asynchronicité (fetch, async/await) et de la performance (debounce, cache local, limitation de concurrence)`;

const project1 = [
  {
    "id": 1,
    "titre": "Application Web de Recettes (JS/POO + TheMealDB)",
    "description": Description,
    "fonctionnalites_principales": [
      "Recherche de recettes (nom d'un plat) avec résultats instantanés",
      "Mise en cache localStorage avec TTL pour éviter les requêtes redondantes",
      "Affichage des ingrédients et des plats liés à un ingrédient (toggle/modal)",
      "Debounce de la saisie + gestion Enter/bouton, reset à champ vide"
    ],
    "apport_en_competences": [
      "JavaScript ES6+ orienté objet (classes, getters, méthodes statiques)",
      "Programmation asynchrone (fetch, async/await, Promise.allSettled)",
      "Conception modulaire et communication par CustomEvent",
      "Optimisation UX (debounce, AbortController, scroll interne, responsive)",
      "Gestion de cache côté client (localStorage avec TTL et normalisation de clé)",
      "Intégration API REST et robustesse (encodage URL, gestion d'erreurs)"
    ],
    "technologies_utilisees": [
      "JavaScript ES6+ (POO, modules, async/await)",
      "Webpack (bundling & build configuration)",
      "API REST TheMealDB (fetch, JSON)",
      "Web APIs (localStorage, AbortController, CustomEvent)",
      "HTML5 & CSS3 (Flexbox, glassmorphism, responsive design)",
      "Visual Studio Code"
    ],
    "difficultes_rencontrees": [
      "Erreurs CORS et réponses API sans en-têtes sur charges élevées",
      "Multiples requêtes concurrentes lors de la saisie utilisateur",
      "Données hétérogènes de l'API (ingrédients répartis sur strIngredient1..20)"
    ],
    "solutions_mises_en_place": [
      "Encodage systématique des paramètres (encodeURIComponent) et gestion d'erreurs",
      "Debounce de l'input + pool de requêtes (limiter la concurrence) + Promise.allSettled",
      "Extraction normalisée des ingrédients et limitation (slice) des résultats",
      "Cache local avec TTL et clés normalisées (prefix:query), purge des entrées invalides"
    ]
  }
];


import Project from "../Project";

const images = require.context('../../images/projet1/captures', false, /\.(png|jpe?g|svg)$/i);
const imagesArray = images.keys().map((i) => images(i));
const imagesList = imagesArray.map((img, index) => ({
  id: `p1-${index}`,
  picture: img?.default ?? img
}));

const outils = require.context('../../images/projet1', false, /\.(png|jpe?g|svg)$/i);
const outilsArray = outils.keys().map((i) => outils(i));
const outilsList = outilsArray.map((img, index) => ({
  id: `out-${index}`,
  picture: img?.default ?? img
}));


export default function Project1(){
    return(   
        project1.map((project, idx) => (
          <Project 
            key={project.id ?? `project-${idx}`}
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
        )
    )
}
