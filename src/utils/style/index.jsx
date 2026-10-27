import styled, { createGlobalStyle } from "styled-components";

export const StyledDiv = styled.div`
  background-color: #f1fbff;
  width: 100%;
`
export const StyledImage = styled.img`
  width: min(520px, 100%);
  height: auto;
`
export const Container = styled.div`
  width: min(var(--container, 1100px), 100%);
  margin: 0 auto;
  padding: 0 var(--px, 16px);
`
export const GlobalStyle = createGlobalStyle`
  :root{
    --container: 1100px;
    --px: 16px;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    overflow-x: hidden;
    padding-top: 80px;
  }

  img { max-width: 100%; height: auto; display: block; }
`;
