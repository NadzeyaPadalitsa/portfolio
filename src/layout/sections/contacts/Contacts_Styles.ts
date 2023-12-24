import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Contacts = styled.section``

const Form = styled.form`
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
  transition: 0.5s;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }

  &:hover {
    border: 1px solid ${theme.colors.accent};
  }
`

export const S = {
  Contacts,
  Form,
  Field
}
