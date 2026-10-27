import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const HEADER_H = 76;

const StyledHeader = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  height: ${HEADER_H}px;
  z-index: 1000;

  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  display: flex;
  align-items: center;
`;

const HeaderInner = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  @media (max-width: 520px) {
    padding: 0 12px;
    gap: 10px;
  }
`;

const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;

  text-decoration: none;
  color: inherit;
  min-width: max-content;

  @media (max-width: 520px) {
    /* Sur smartphone : on empile logo + texte */
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

const Logo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

  @media (max-width: 520px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  max-width: 220px;

  @media (max-width: 720px) {
    max-width: 170px;
  }

  @media (max-width: 520px) {
    max-width: 120px; /* évite les débordements */
  }
`;

const BrandTitle = styled.div`
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 520px) {
    font-size: 13px;
  }
`;

const BrandSubtitle = styled.div`
  font-size: 12px;
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 520px) {
    font-size: 11px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  /* IMPORTANT: on protège le mobile */
  min-width: 0;

  @media (max-width: 720px) {
    gap: 4px;
  }

  @media (max-width: 520px) {
    /* si ça ne tient pas, on autorise un scroll horizontal discret */
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavItem = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: rgba(20, 20, 20, 0.82);
  font-weight: 650;
  font-size: 14px;

  padding: 10px 12px;
  border-radius: 12px;
  transition: transform 160ms ease, background 160ms ease, color 160ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
    color: rgba(20, 20, 20, 1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 7px;
    height: 2px;
    border-radius: 99px;
    background: linear-gradient(90deg, #2b6cb0, #805ad5);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 180ms ease;
    opacity: 0.95;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    color: rgba(20, 20, 20, 1);
    background: rgba(0, 0, 0, 0.06);
  }

  &.active::after {
    transform: scaleX(1);
  }

  @media (max-width: 720px) {
    padding: 9px 10px;
    font-size: 13px;
  }

  @media (max-width: 520px) {
    padding: 9px 10px;
    border-radius: 10px;
    white-space: nowrap;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderInner>
        <Brand to="/" aria-label="Retour à l'accueil">
          <Logo src={logo} alt="Logo" />
          <BrandText>
            <BrandTitle>Paolo Delofon</BrandTitle>
            <BrandSubtitle>Portfolio · Dev / IA</BrandSubtitle>
          </BrandText>
        </Brand>

        <Nav aria-label="Navigation principale">
          <NavItem to="/" end>
            Accueil
          </NavItem>
          <NavItem to="/about">À propos</NavItem>
          <NavItem to="/projects">Projets</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </Nav>
      </HeaderInner>
    </StyledHeader>
  );
}