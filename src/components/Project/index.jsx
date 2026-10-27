import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Accordion } from "react-bootstrap";
import { StyledDiv } from "../../utils/style";
import Footer from "../Footer";

/* === Layout de page === */
const Page = styled(StyledDiv)`
  --surface: #ffffff;
  --ink: #0f172a;
  --muted: #6b7280;
  --primary: #2563eb;

  padding: 32px 16px 48px;
  color: var(--ink);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 32px;
`;

/* === En-tête: description + carousel === */
const HeaderGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 1fr;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  line-height: 1.6;
  margin: 0;
  color: var(--ink);
  text-align: center;
  font-weight: bold;
`;

const Lead = styled.p`
  white-space: pre-line;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
`

const Card = styled.div`
  background: var(--surface);
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(0,0,0,.10);
  overflow: hidden;
`;

/* Carousel */
const CarouselWrap = styled(Card)`
  padding: 0;
`;

const SlideImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
`;

/* === Zone Accordéons === */
const AccordsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
  }
`

const Block = styled.div`
  display: grid;
  gap: 24px;
`;

export default function Project({
  id,
  title,
  description,
  sessions,
  images = [],
  fonctionnalites,
  outils,
  apports,
  difficultes,
  solutions
}) {
  return (
    <Page>
      <Container>
        {/* En-tête */}
        <HeaderGrid aria-labelledby={`project-${id}-title`}>
          <Block>
            {title && (
              <Title id={`project-${id}-title`}>{title}</Title>
            )}
            <Lead>{description}</Lead>
          </Block>

          <CarouselWrap>
            <Carousel fade>
              {(images ?? [ ]).map((image, idx) => (
                <Carousel.Item key={image.id ?? `slide-${idx}`}>
                  <SlideImg
                    src={image.picture}
                    alt={image.alt || `Capture du projet ${title || id} – ${idx + 1}`}
                    loading="lazy"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </CarouselWrap>
        </HeaderGrid>

        {/* Session - Project 7 */}
        { sessions && (
          <Section> 
            <Timeline>
              {sessions.map((item, index) => (
                <Row key={item.title} $side={index % 2 === 0 ? "left" : "right"}>
                  <SessionCard $side={index % 2 === 0 ? "left" : "right"}>
                    <CardTitle>{item.title}</CardTitle>
                    <CardContent>{item.content}</CardContent>
                  </SessionCard>
    
                  <Dot aria-hidden="true" />
                </Row>
              ))}
            </Timeline>
          </Section>
          )
        }

        {/* Accordéons */}
        <AccordsGrid>
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>FONCTIONNALITÉS PRINCIPALES</Accordion.Header>
              <Accordion.Body>
                <ul>{
                  (fonctionnalites ?? []).map((func, i) => (
                    <li key={`func-${i}`}>{func}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
              <Accordion.Item eventKey="3">
              <Accordion.Header>DIFFICULTÉS RENCONTRÉES</Accordion.Header>
              <Accordion.Body>
                <ul>{
                  (difficultes ?? []).map((diff, i) => (
                    <li key={`diff-${i}`}>{diff}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>SOLUTIONS MISES EN PLACE</Accordion.Header>
              <Accordion.Body>
                <ul>{
                  (solutions ?? []).map((sol, i) => (
                    <li key={`sol-${i}`}>{sol}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          
          <Accordion defaultActiveKey="3" alwaysOpen>
            <Accordion.Item eventKey="1">
              <Accordion.Header>TECHNOLOGIES UTILISÉES</Accordion.Header>
              <Accordion.Body>
                <ul>{
                  (outils ?? []).map((out, i) => (
                    <li key={`out-${i}`}>{out}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>APPORT EN COMPÉTENCES</Accordion.Header>
              <Accordion.Body>
                <ul>{
                  (apports ?? []).map((app, i) => (
                    <li key={`app-${i}`}>{app}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </AccordsGrid>
      </Container>

      <Footer />
    </Page>
  );
}

/* -------------------- styles for project 7 -------------------- */

const Section = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 16px;
`;

const Header = styled.div`
  margin-bottom: 28px;

  h2 {
    margin: 0;
    font-size: clamp(1.4rem, 2vw + 1rem, 2.2rem);
    line-height: 1.1;
  }

  p {
    margin: 10px 0 0;
    opacity: 0.8;
    max-width: 70ch;
    line-height: 1.5;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;

  /* ligne centrale */
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 8px;
    bottom: 8px;
    width: 2px;
    transform: translateX(-50%);
    opacity: 0.15;
    background: currentColor;
  }

  @media (max-width: 760px) {
    /* sur mobile, on enlève l’idée de colonne gauche/droite */
    &::before {
      left: 12px;
      transform: none;
    }
  }
`;

const Row = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  align-items: center;
  min-height: 110px;

  ${({ $side }) =>
    $side === "left"
      ? `
        grid-template-areas: "card dot empty";
      `
      : `
        grid-template-areas: "empty dot card";
      `}

  @media (max-width: 760px) {
    grid-template-columns: 24px 1fr;
    grid-template-areas: "dot card";
    min-height: auto;
  }
`;

const Dot = styled.div`
  grid-area: dot;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.35;
  justify-self: center;

  @media (max-width: 760px) {
    justify-self: start;
    margin-left: 5px;
  }
`;

const SessionCard = styled.article`
  grid-area: card;
  border-radius: 18px;
  padding: 18px 18px 16px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(6px);
  max-width: 520px;

  ${({ $side }) =>
    $side === "left"
      ? `
        justify-self: end;
        margin-right: 10px;
      `
      : `
        justify-self: start;
        margin-left: 10px;
      `}

  @media (max-width: 760px) {
    max-width: none;
    width: 100%;
    justify-self: start;
    margin: 0;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: clamp(1.05rem, 0.9vw + 0.9rem, 1.25rem);
  line-height: 1.2;
`;

const CardContent = styled.div`
  white-space: pre-line;
  line-height: 1.55;
  opacity: 0.9;
  font-size: 0.98rem;
`;