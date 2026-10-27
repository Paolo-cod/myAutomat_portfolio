import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledDiv, StyledImage, Container } from "../../utils/style";
import startUp from "../../images/startup_illustration.png";
import cvImage from "../../images/cv_ameliore_Paolo_25_26.PNG";

import Contact from "../Contact";
import Footer from "../Footer";
import About from "../About";
import { StyledProjectButton } from "../Projects";
import TechnicalTools from "../TechnicalTools";

export const StyledHomeDiv = styled.section`
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 56px 0 28px;
  animation: fadein 0.8s;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 28px 0 18px;
    text-align: center;
    gap: 18px;
  }
`;

const StyledPresentation = styled.div`
  padding: 18px 10px;
  flex: 1;
  max-width: 900px;
`;

const StyledHomeTitle = styled.h2`
  margin: 0;
  font-size: clamp(22px, 2.2vw, 34px);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-align: center;
`;

const StyledHomeExpression = styled.h2`
  margin-top: 14px;
  text-align: center;
  font-size: clamp(16px, 1.6vw, 24px);
  font-weight: 650;
  opacity: 0.92;
`;

const Caret = styled.span`
  display: inline-block;
  margin-left: 2px;
  width: 10px;
  animation: blink 0.9s steps(1) infinite;

  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const HeroCard = styled.div`
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    padding: 16px;
  }
`;

const HeroImage = styled(StyledImage)`
  max-width: 520px;
  width: 100%;
  height: auto;

  @media (max-width: 900px) {
    max-width: 440px;
  }
`;

const StyledProjectsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 18px 0 38px;
  flex-wrap: wrap;

  @media (max-width: 520px) {
    gap: 10px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.62);
  display: grid;
  place-items: center;
  z-index: 2000;
  padding: 14px;
`;

const ModalContent = styled.div`
  width: min(920px, 95vw);
  height: min(92vh, 720px);
  background: rgba(15, 23, 42, 0.92);
  border-radius: 18px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f9fafb;
  background: rgba(15, 23, 42, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 0.98rem;
  font-weight: 750;
`;

const ModalActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const ActionButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255,255,255,0.08);
  color: #e5e7eb;
  font-weight: 700;
  transition: transform 160ms ease, background 160ms ease;

  &:hover {
    background: rgba(255,255,255,0.12);
    transform: translateY(-1px);
  }
`;
const CloseButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #e5e7eb;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  transition: transform 160ms ease, background 160ms ease, color 160ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fda4af;
    transform: translateY(-1px);
  }
`;

const PdfWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 14px;
  overflow: auto;
`;

const PdfIframe = styled.img`
  display: block;
  transform-origin: top center;
  border-radius: 10px;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.35);
  max-width: 100%;
  height: auto;
`;

const AboutWrap = styled.div`
  position: relative;
  z-index: 0;
`;

export default function Home() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  const fullText =
    "Hello, moi c'est Paolo. Dév web et GUI passionné, voici mon univers ! 😎✨";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    setTypedText("");
    const id = setInterval(() => {
      i += 1;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  // Zoom 
    const [zoom, setZoom] = useState(1);
    const ZOOM_MIN = 0.6;
    const ZOOM_MAX = 2.6;
    const ZOOM_STEP = 0.15;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const zoomIn = () => setZoom((z) => clamp(Number((z + ZOOM_STEP).toFixed(2)), ZOOM_MIN, ZOOM_MAX));
    const zoomOut = () => setZoom((z) => clamp(Number((z - ZOOM_STEP).toFixed(2)), ZOOM_MIN, ZOOM_MAX));
    const zoomReset = () => setZoom(1);

  return (
    <Container>
        <StyledDiv>
            <StyledHomeDiv>
                <HeroCard style={{ flex: 1 }}>
                    <StyledPresentation>
                        <StyledHomeTitle>
                            Mon portfolio de futur Ingénieur en Automatisation
                        </StyledHomeTitle>

                        <StyledHomeExpression>
                            {typedText}
                            <Caret>|</Caret>
                        </StyledHomeExpression>
                    </StyledPresentation>
                </HeroCard>

                <HeroImage src={startUp} alt="Illustration startup" />
            </StyledHomeDiv>

            <AboutWrap>
                <About withFooter={false} />
            </AboutWrap>

            <StyledProjectsDiv>
                <StyledProjectButton
                    style={{ width: "300px" }}
                    onClick={() => {
                        setZoom(1);
                        setIsCvOpen(true)
                    }}
                >
                    Voir mon CV
                </StyledProjectButton>

                {isCvOpen && (
                <ModalOverlay onClick={() => setIsCvOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <ModalTitle>Mon CV</ModalTitle>
                            <CloseButton onClick={() => setIsCvOpen(false)}>×</CloseButton>
                        </ModalHeader>
                        <ModalActions>
                            <ActionButton onClick={zoomOut} aria-label="Zoom -">−</ActionButton>
                            <ActionButton onClick={zoomReset} aria-label="Reset zoom">100%</ActionButton>
                            <ActionButton onClick={zoomIn} aria-label="Zoom +">+</ActionButton>
                            <CloseButton onClick={() => setIsCvOpen(false)}>×</CloseButton>
                        </ModalActions>
                        <PdfWrapper>
                            <PdfIframe src={cvImage} alt="CV" style={{ transform: `scale(${zoom})`}} />
                        </PdfWrapper>
                    </ModalContent>
                </ModalOverlay>
                )}

                <StyledProjectButton to="/projects" style={{ width: "300px" }}>
                    Voir mes Projets
                </StyledProjectButton>
            </StyledProjectsDiv>

            <Contact withFooter={false} />
            <Footer />
      </StyledDiv>
    </Container>
  );
}
// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { StyledDiv } from "../../utils/style"
// import { StyledImage } from "../../utils/style";
// import startUp from '../../images/startup_illustration.png';
// import cvImage from '../../images/cv_Paolo_stage_2.0_25_26.jpg';

// import Contact from "../Contact";
// import Footer from "../Footer";
// import About from "../About";
// import { StyledProjectButton } from "../Projects";
// import { Container } from "../../utils/style";


// export const StyledHomeDiv = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 24px;
//     padding: 48px 0;
//     animation: fadein 0.8s;

//     @media (max-width: 900px) {
//         flex-direction: column;
//         padding: 24px 0;
//         text-align: center;
//     }
// `
// const StyledPresentation = styled.div`
//     padding: 20px;
//     flex: 1;
//     max-width: 900px;
// `
// const StyledHomeTitle = styled.h2`
//     margin: 0;
//     text-align: center;
//     font-size: 30px;
//     font-weight : bold;
// `
// const StyledHomeExpression = styled.h2`
//     margin-top: 1em;
//     text-align: center;
//     font-size: 25px;
// `
// const Caret = styled.span`
//   display: inline-block;
//   margin-left: 2px;
//   width: 10px;
//   opacity: 1;
//   animation: blink 0.9s steps(1) infinite;

//   @keyframes blink {
//     50% { opacity: 0; }
//   }
// `
// const StyledProjectsDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 16px;
//   padding: 24px 0 40px;
//   flex-wrap: wrap;
// `
// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(15, 23, 42, 0.6);
//   display: grid;
//   place-items: center;
//   z-index: 2000;
// `

// const ModalContent = styled.div`
//   width: min(900px, 95vw);
//   height: min(90vh, 680px);
//   background: #0f172a;
//   border-radius: 16px;
//   box-shadow: 0 20px 60px rgba(0,0,0,0.35);
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `

// const ModalHeader = styled.div`
//   padding: 10px 16px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #0f172a;
//   color: #f9fafb;
// `

// const ModalTitle = styled.h3`
//   margin: 0;
//   font-size: 1rem;
// `

// const CloseButton = styled.button`
//   border: none;
//   background: transparent;
//   color: #e5e7eb;
//   font-size: 1.3rem;
//   cursor: pointer;

//   &:hover {
//     color: #f97373;
//   }
// `

// const PdfWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     background: #0f172a;
//     overflow-y: auto;
// `
// const PdfIframe = styled.img`
//   width: min(720px, 100%);
//   height: auto;
// `
// const AboutWrap = styled.div`
//   position: relative;
//   z-index: 0;
// `


// export default function Home(){
//     const [isCvOpen, setIsCvOpen] = useState(false);
//     const fullText = "Hello, moi c'est Paolo. Dév web et GUI passionné, voici mon univers ! 😎✨";
//     const [typedText, setTypedText] = useState("");
//     useEffect(() => {
//         let i = 0;
//         setTypedText("");
//         const id = setInterval(() => {
//             i += 1;
//             setTypedText(fullText.slice(0, i));
//             if (i >= fullText.length) clearInterval(id);
//         }, 28); // vitesse (ms)
//         return () => clearInterval(id);
//     }, []);
//     return(
//         <Container>
//             <StyledDiv>
//                 <StyledHomeDiv>
//                     <StyledPresentation>
//                         <StyledHomeTitle>Mon portfolio de futur Ingénieur en Automatisation</StyledHomeTitle>
//                         <StyledHomeExpression>
//                             {typedText}
//                             <Caret>|</Caret>
//                         </StyledHomeExpression>
//                     </StyledPresentation>
//                     <StyledImage src={ startUp } alt="startUpImg" />
//                 </StyledHomeDiv>
//                 <AboutWrap>
//                     <About withFooter = {false} />
//                 </AboutWrap>
//                 <StyledProjectsDiv>
//                     <StyledProjectButton style={{width: "300px"}} onClick={() => setIsCvOpen(true)}>Voir mon CV</StyledProjectButton>
//                     {isCvOpen && (
//                         <ModalOverlay onClick={() => setIsCvOpen(false)}>
//                             <ModalContent onClick={(e) => e.stopPropagation()}>
//                                 <ModalHeader>
//                                     <ModalTitle>Mon CV</ModalTitle>
//                                     <CloseButton onClick={() => setIsCvOpen(false)}>×</CloseButton>
//                                 </ModalHeader>
//                                 <PdfWrapper>
//                                     <PdfIframe src={cvImage} title="CV" />
//                                 </PdfWrapper>
//                             </ModalContent>
//                         </ModalOverlay>
//                     )}
//                     <StyledProjectButton to="/projects" style={{width: "300px"}}>Voir mes Projets</StyledProjectButton>
//                 </StyledProjectsDiv>
//                 <Contact withFooter = {false} />
//                 <Footer/>
//             </StyledDiv>
//         </Container>
//     )
// }