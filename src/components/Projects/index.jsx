const projectsList = [
  {
    "id": 1,
    "titre": "Application Web de Recettes de Cuisine",
    "image": require("../../images/projet1/captures/capture_recipes_1.JPG")
  },
  {
    "id": 2,
    "titre": "Logiciel de Temps de Route",
    "image": require("../../images/projet2/captures/page_acceuil.png")
  },
  {
    "id": 3,
    "titre": "Gestionnaire - Avions Militaires",
    "image": require("../../images/projet3/img1.png")
  },
  {
    "id": 4,
    "titre": "Site Web - Présentation du BUT Informatique",
    "image": require("../../images/projet4/captures/page-html1.JPG")
  },
  {
    "id": 5,
    "titre": "Agenda C++",
    "image": require("../../images/projet5/captures/run.JPG")
  },
  {
    "id": 6,
    "titre": "Logiciel - Comparaison de factures énergétiques",
    "image": require("../../images/projet6/maquette_1.JPG")
  },
  {
    "id": 7,
    "titre": "Refonte d'Architecture d'une Base de Données - Qualité de l'air",
    "image": require("../../images/projet7/captures/model_physique_donnees.png")
  },
  {
    "id": 8,
    "titre": "DactyPro 2026",
    "image": require("../../images/projet8/captures/dactyPro_1.PNG")
  }
];

import { StyledDiv } from "../../utils/style";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.section`
  padding: 28px 0 52px;
`;

const PageTitle = styled.h2`
  margin: 0 0 10px;
  text-align: center;
  font-size: clamp(22px, 2.2vw, 34px);
  font-weight: 900;
  letter-spacing: -0.02em;
`;

const PageSubtitle = styled.p`
  margin: 0 auto 22px;
  max-width: 70ch;
  text-align: center;
  color: rgba(17, 24, 39, 0.72);
  font-size: clamp(14px, 1.2vw, 16px);
`;
  
export const StyledProjectsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  padding: 18px 16px; /* ← AJOUT IMPORTANT */

  @media (max-width: 520px) {
    gap: 14px;
    padding: 18px 12px; /* ← mobile */
  }
`;

export const StyledProjectDiv = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 14px 40px rgba(0,0,0,.10);
  backdrop-filter: blur(8px);

  transform: translateY(0);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(0,0,0,.14);
    border-color: rgba(37, 99, 235, 0.25);
  }
`;
const Media = styled.div`
  position: relative;
  overflow: hidden;
  background: #0f172a; /* fallback */
`;
const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(15,23,42,0.0) 30%,
    rgba(15,23,42,0.28) 100%
  );
`;
export const StyledProjectTitle = styled.h3`
  font-size: clamp(1.05rem, 1.2vw + .8rem, 1.35rem);
  line-height: 1.25;
  margin: 14px 16px 0;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.01em;
`
export const StyledProjectImg = styled.img`
  aspect-ratio: 16 / 10;
  width: 100%;
  object-fit: cover;
  display: block;

  transform: scale(1);
  transition: transform 260ms ease;
  ${StyledProjectDiv}:hover & {
    transform: scale(1.05);
  }
`;
export const StyledProjectMeta = styled.p`
  margin: 8px 16px 0;
  color: #6B7280;
  font-size: .95rem;
`
export const CardFooter = styled.div`
  margin-top: auto;
  padding: 16px;
`

export const StyledProjectButton = styled(Link)`
  width: 100%;
  text-align: center;
  padding: 12px 16px;
  background: #2563EB;
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 750;
  letter-spacing: 0.01em;
  transition: transform .12s ease, filter .18s ease, box-shadow .18s ease;

  &:hover {
    filter: brightness(1.04);
    box-shadow: 0 14px 30px rgba(37,99,235,.28);
    transform: translateY(-1px);
  }

  &:active { transform: translateY(0px); }

  &:focus-visible {
    outline: 3px solid rgba(147, 197, 253, 0.95);
    outline-offset: 2px;
  }
`

export default function Projects(){
  return(
    <Page>
      <StyledDiv>
        <PageTitle>Mes projets</PageTitle>
        <PageSubtitle>
          Une sélection de projets web & desktop (React, Qt/Java, outils, data…). Cliquez pour voir le détail
        </PageSubtitle>
          
        <StyledProjectsDiv>
          {
              Array.isArray(projectsList) && projectsList.map((project) => {
                  return(
                  <StyledProjectDiv key={project.id}>
                    <Media>
                      <StyledProjectImg
                        src={project.image}
                        alt={`Aperçu du projet ${project.id}`}
                        loading="lazy"
                      />
                      <MediaOverlay />
                    </Media>
                    <StyledProjectTitle>{project.titre}</StyledProjectTitle>
                    <CardFooter>
                      <StyledProjectButton to={`/projects/project${project.id}`} >Voir plus</StyledProjectButton>
                    </CardFooter>
                  </StyledProjectDiv>
                  )
                  
              })
          }
        </StyledProjectsDiv>
      </StyledDiv>
    </Page>
  )
}