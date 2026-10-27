import styled from "styled-components"
import { StyledDiv } from "../../utils/style"
import ProfilImg from "../../images/paolo_photo.jpg"
import Footer from "../Footer"
import TechnicalTools from "../TechnicalTools"

const StyledAboutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px 0;
  }
`
const StyledCourseDiv = styled.div`
`

const Section = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 32px 16px;
  position: relative;
  isolation: isolate;

  &::before {
  background: radial-gradient(
    1100px 600px at 50% 60%,
    rgba(37,99,235,0.18),
    rgba(15,23,42,0.65)
  );
}
`

// ====== Carte vitrée ======
const Card = styled.div`
  width: min(950px, 100%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 28px;
  border-radius: 18px;
  color: #f8fafc;
  border: 1px solid rgba(255,255,255,0.14);

  /* glassmorphism */
  background: rgba(30, 41, 59, 0.45);
  box-shadow: 0 20px 50px rgba(0,0,0,.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); /* Safari */

  @media (min-width: 900px) {
    grid-template-columns: 340px 1fr;
    padding: 32px 36px;
  }
`;

// ====== Photo ======
const PhotoWrap = styled.div`
  display: grid;
  place-items: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 20px;
  border: 6px solid rgba(255,255,255,0.6);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
`;

// ====== Texte ======
const Text = styled.div`
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
    align-self: center;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  line-height: 1.15;
  margin: 0 0 12px;
  font-weight: 800;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: clamp(14px, 1.6vw, 18px);
  margin: 0 0 18px;
  opacity: 0.92;
  max-width: 54ch;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0,0,0,.45);
`;


  // Parcours zone
const StyledExpression = styled.h3`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`
const TL = styled.section`
  position: relative;
  max-width: 900px;
  margin: 40px auto;
  padding: 0 16px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #e5e7eb;
    transform: translateX(-50%);
    background: rgba(229,231,235,0.7);
  }

  @media (max-width: 760px) {
    &::before { left: 20px; transform: none; }
  }
`;

const Item = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 26px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    padding-left: 44px; /* place pour la ligne + dot */
  }
`;

// conteneurs gauche/droite
const Branch = styled.div`
  grid-column: ${({ side }) => (side === "left" ? "1 / 2" : "2 / 3")};
  display: flex;
  justify-content: ${({ side }) => (side === "left" ? "flex-end" : "flex-start")};

  @media (max-width: 760px) {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }
`;

/* point + connecteur */
const Node = styled.span`
  position: absolute;
  top: 16px;
  left: 50%;
  width: 14px;
  height: 14px;
  border: 3px solid #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(180deg, #60a5fa, #2563eb);
  box-shadow: 0 0 0 4px rgba(37,99,235,.18), 0 10px 24px rgba(0,0,0,.2);

  @media (max-width: 760px) {
    left: 20px;
    transform: translate(-50%, -50%);
  }
`;

  // carte d'étape
const CardParcours = styled.div`
  max-width: 92%;
  background: rgba(255,255,255,0.92);
  border-radius: 12px;
  box-shadow: 0 10px 28px rgba(0,0,0,.12);
  padding: 14px 16px;
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(0,0,0,.16);
  }
  @media (max-width: 760px) {
    max-width: 100%;
  }
`;

const TitleParcours = styled.h4`
  margin: 0 0 4px;
  font-size: 1.05rem;
`;

const Meta = styled.div`
  font-size: .9rem;
  color: #6b7280;
  margin-bottom: 8px;
`;

const TextParcours = styled.p`
  margin: 0;
  line-height: 1.55;
`;

const steps = [
  { title: "BUT Informatique", meta: "depuis Septembre 2024 - IUT Arles", text: "Parcours A - Réalisation d'applications" },
  { title: "Informatique de Gestion", meta: "2023 - 2024 - ENEAM", text: "Spécialité : Administration Bases de Données" },
  { title: "BAC Scientifique", meta: "2023 - Bénin - Collège La Verdure", text: "" }
];





export default function About({ withFooter = true, title = "Étudiant en BUT 2 Informatique"
    ,subtitle = "Aix - Marseille / Arles"
    ,bio = `Je m'appelle Paolo Delofon.\n
            Je développe des applications web et desktop à interface graphique (Qt, Java).\n
            Ce qui me différencie, c'est ma capacité à m'adapter assez rapidement à l'environnement où je me trouve.\n
            Quand je ne code pas, je fais du basket, j'écoute de la musique ou je joue aux jeux vidéos.`
}) {
  return (
    <StyledDiv>
      <StyledAboutDiv>
        <Section>
          <Card role="region" aria-label="À propos de moi">
            <PhotoWrap>
              <Photo src={ProfilImg} alt="Portrait de Paolo Delofon" loading="lazy" />
            </PhotoWrap>

            <Text>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              {bio
                .split("\n")
                .map((l) => l.trim())
                .filter(Boolean)
                .map((line, i) => (
                  <Paragraph key={i}>{line}</Paragraph>
              ))}
              {/* {bio.split("\n").map((line, i) => (
                <Paragraph key={i}>{line}</Paragraph>
              ))} */}
            </Text>
          </Card>
        </Section>
        <StyledCourseDiv>
          <StyledExpression>Parcours</StyledExpression>
          <TL aria-label="Parcours">
            {steps.map((it, i) => {
              const side = i % 2 === 0 ? "left" : "right"; // alterne les branches
              return (
                <Item key={i}>
                  <Node aria-hidden />
                  <Branch side={side}>
                    <CardParcours>
                      <TitleParcours>{it.title}</TitleParcours>
                      {it.meta && <Meta>{it.meta}</Meta>}
                      {it.text && <TextParcours>{it.text}</TextParcours>}
                    </CardParcours>
                  </Branch>
                </Item>
              );
            })}
          </TL>
        </StyledCourseDiv>
      </StyledAboutDiv>
      <TechnicalTools />
      {withFooter ? <Footer /> : null}
    </StyledDiv>
  );
}
