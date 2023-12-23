import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/title/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { Description } from '../../../components/Description';
import { theme } from '../../../styles/Theme';

export const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"} direction={"column"}>
          <Description>Want to know more or just chat? You are welcome!</Description>
          <StyledForm>
            <Field placeholder={"name"} />
            <Field type={"email"} placeholder={"e-mail"} />
            <Field as={"textarea"} placeholder={"Message"} />
            <Button type={"submit"}>Send message</Button>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`

`


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 540px;
  width: 100%;
  padding-top: 10px;

  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  padding: 10px 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  text-transform: capitalize;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid transparent;
  border-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  border-image-slice: 1;
  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.placeholderColor}
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent}
  }
`
