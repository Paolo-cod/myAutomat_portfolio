import styled from "styled-components";
import { StyledDiv } from "../../utils/style";
import Footer from "../Footer";
import { Container } from "../../utils/style";

const Page = styled(StyledDiv)`
  min-height: calc(100vh - 80px); /* si ton header fait 80px */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f9fb;
  padding: 24px 16px; /* pas de padding-top énorme */
`
const FormCard = styled.form`
  background: #ffffff;
  width: min(420px, 92vw);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const Label = styled.label`
  font-weight: 600;
  color: #1f2937;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.6rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.15s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.6rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;
  min-height: 100px;
  outline: none;
  transition: border 0.15s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

const SubmitButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  text-align: center;

  &:hover {
    background-color: #1d4ed8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default function Contact({ withFooter = true }) {
  return (
    <StyledDiv>
      <Page>
        <FormCard>
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem", color: "#1f2937" }}>
            Me contacter
          </h2>
          <FieldGroup>
            <Label htmlFor="email">Email :</Label>
            <Input type="email" id="email" name="email" required />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="message">Message :</Label>
            <TextArea id="message" name="message" maxLength={300} required />
          </FieldGroup>
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </FormCard>
      </Page>
      {withFooter ? <Footer /> : null}
    </StyledDiv>
  );
}