import styled from "styled-components";
import { Container } from "../../utils/style";

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <FooterInner>
          <Top>
            <Brand>
              <Logo>Paolo Delofon</Logo>
              <Tagline>
                Portfolio — projets web - GUI & IA.
              </Tagline>
            </Brand>

            <Links>
              <ColTitle>Navigation</ColTitle>
              <LinkList>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
              </LinkList>
            </Links>

            <Social>
              <ColTitle>Réseaux</ColTitle>
              <Icons>
                <IconLink
                  href="https://github.com/Paolo-cod"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.21-.25-4.53-1.11-4.53-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.32 4.7-4.54 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z"
                    />
                  </svg>
                </IconLink>

                <IconLink
                  href="https://www.linkedin.com/in/paolo-delofon-10b397369"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 21h4V9H3v12zm7 0h4v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21h4v-6.9c0-3.4-.7-6-4.7-6-1.9 0-3.1 1-3.6 1.9h-.1V9h-3.8v12z"
                    />
                  </svg>
                </IconLink>

                <IconLink href="mailto:paolodlf2@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                    />
                  </svg>
                </IconLink>
              </Icons>
            </Social>
          </Top>

          <Bottom>
            <small>© 2025 Paolo Delofon — Tous droits réservés</small>
            <small className="muted">Construit avec React</small>
          </Bottom>
        </FooterInner>
      </Container>
    </FooterWrap>
  );
}

/* ---------------- styles ---------------- */

const FooterWrap = styled.footer`
  margin-top: 2rem;
  background: #07070a;
  color: rgba(255, 255, 255, 0.92);
`;

const FooterInner = styled.div`
  padding: 42px 0 18px;
`;

const Top = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1.4fr 1fr 1fr;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div``;

const Logo = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
`;

const Tagline = styled.p`
  margin: 10px 0 0;
  max-width: 52ch;
  line-height: 1.55;
  opacity: 0.75;
`;

const Links = styled.div``;

const Social = styled.div``;

const ColTitle = styled.p`
  margin: 0 0 10px;
  font-weight: 600;
  opacity: 0.9;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;

  a {
    color: rgba(255, 255, 255, 0.78);
    text-decoration: none;
    transition: opacity 0.15s ease;
  }

  a:hover {
    opacity: 1;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const IconLink = styled.a`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.9);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Bottom = styled.div`
  margin-top: 28px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  .muted {
    opacity: 0.65;
  }
`;