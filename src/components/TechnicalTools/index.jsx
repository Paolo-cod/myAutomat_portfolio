import styled from "styled-components";
import {
  FaPhp,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiC,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiQt,
  SiLaravel,
  SiBootstrap,
  SiSagemath,
} from "react-icons/si";

const Section = styled.section`
  padding: 36px 16px 48px;
`;

const SectionInner = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  text-align: center;
  font-size: clamp(24px, 2.2vw, 34px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
`;

const Subtitle = styled.p`
  margin: 0 auto 28px;
  max-width: 700px;
  text-align: center;
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.6;
  color: rgba(15, 23, 42, 0.72);
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 18px;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
    gap: 14px;
  }
`;

const ToolCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-height: 150px;
  padding: 20px 14px;
  text-align: center;

  border-radius: 18px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);

  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
    border-color: rgba(37, 99, 235, 0.28);
  }

  @media (max-width: 520px) {
    min-height: 130px;
    padding: 16px 10px;
  }
`;

const IconWrap = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 16px;
  display: grid;
  place-items: center;

  background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(124, 58, 237, 0.12));
  color: #2563eb;
  font-size: 2rem;

  @media (max-width: 520px) {
    width: 54px;
    height: 54px;
    font-size: 1.7rem;
  }
`;

const ToolName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;

  @media (max-width: 520px) {
    font-size: 0.95rem;
  }
`;

const ToolCategory = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: rgba(15, 23, 42, 0.68);
  line-height: 1.4;

  @media (max-width: 520px) {
    font-size: 0.82rem;
  }
`;

const tools = [
  { name: "PHP", category: "Backend", icon: <FaPhp /> },
  { name: "Laravel", category: "Framework PHP", icon: <SiLaravel /> },
  { name: "Java", category: "Desktop / POO", icon: <FaJava /> },
  { name: "C", category: "Programmation système", icon: <SiC /> },
  { name: "Python", category: "Scripts / Data", icon: <FaPython /> },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript /> },
  { name: "React", category: "UI Web", icon: <FaReact /> },
  { name: "HTML5", category: "Structure Web", icon: <FaHtml5 /> },
  { name: "CSS3", category: "Style / Responsive", icon: <FaCss3Alt /> },
  { name: "Bootstrap", category: "UI Toolkit", icon: <SiBootstrap /> },
  { name: "Qt", category: "Interfaces graphiques", icon: <SiQt /> },
  { name: "MySQL", category: "Base de données", icon: <SiMysql /> },
  { name: "PostgreSQL", category: "Base de données", icon: <SiPostgresql /> },
  { name: "Git", category: "Versionning", icon: <FaGitAlt /> },
  { name: "Linux", category: "Environnement", icon: <FaLinux /> },
  { name: "SageMath", category: "Calcul scientifique", icon: <SiSagemath /> },
];

export default function TechnicalTools() {
  return (
    <Section>
      <SectionInner>
        <Title>Outils & langages maîtrisés</Title>
        <Subtitle>
          Voici une partie des technologies que j’utilise pour développer des applications web,
          desktop et des projets techniques orientés logiciel.
        </Subtitle>

        <ToolsGrid>
          {tools.map((tool) => (
            <ToolCard key={tool.name}>
              <IconWrap>{tool.icon}</IconWrap>
              <ToolName>{tool.name}</ToolName>
              <ToolCategory>{tool.category}</ToolCategory>
            </ToolCard>
          ))}
        </ToolsGrid>
      </SectionInner>
    </Section>
  );
}