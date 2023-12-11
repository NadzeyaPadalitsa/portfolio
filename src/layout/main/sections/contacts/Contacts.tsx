import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/Button';

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <FlexWrapper justify={"space-between"}>
        <Text>Want to know more or just chat? You are welcome!</Text>
        <StyledForm>
          <LabelField>
            Your name
            <Field />
          </LabelField>
          <LabelField>
            Subject
            <Field />
          </LabelField>
          <LabelField>
            Your Message
            <Field as={"textarea"} />
          </LabelField>
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding: 50px;
  background-color: #9de9a3;
`
const Text = styled.p`
  vertical-align: center;
  text-align: center;
  font-size: 22px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`

const LabelField = styled.label`
  display: flex;
  gap: 10px;
`

const Field = styled.input`

`
