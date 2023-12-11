import React from 'react';
import styled from 'styled-components';
import { About } from '../main/sections/about/About';
import { Skills } from '../main/sections/skills/Skills';
import { Projects } from '../main/sections/projects/Projects';
import { Contacts } from '../main/sections/contacts/Contacts';


export const Main = () => {
  return (
    <StyledMain>
      <MainTitle>Portfolio A Web Developer</MainTitle>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </StyledMain>
  );
};

const StyledMain = styled.main`

`

const MainTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`
