import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import sedonaImg from '../../../assets/images/project-1.jpg';
import storeImg from '../../../assets/images/project-2.png';
import keksImg from '../../../assets/images/project-3.png';

export const Projects = () => {
  return (
    <StyledProjects id="projects">
      <SectionTitle>My projects</SectionTitle>
      <FlexWrapper justify={"space-around"} wrap={"wrap"}>
        <Project title={"Sedona"} src={sedonaImg} text={"Tech stack : HTML , JavaScript, SASS, Gulp, Bem"}/>
        <Project title ={"Online store"} src={storeImg} text={"Tech stack : HTML , JavaScript, SASS, Gulp, Bem"}/>
        <Project title={"Keksogram"} src={keksImg} text={"Tech stack : HTML , JavaScript"}/>
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: 50px;
`

