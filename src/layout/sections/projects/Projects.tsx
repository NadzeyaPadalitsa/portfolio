import React from 'react';
import { SectionTitle } from '../../../components/title/SectionTitle';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import sedonaImg from '../../../assets/images/project-1.jpg';
import storeImg from '../../../assets/images/project-2.png';
import keksImg from '../../../assets/images/project-3.png';
import { Container } from '../../../components/Container';

export const Projects = () => {
  return (
    <StyledProjects id="projects">
      <Container>
        <SectionTitle>My projects</SectionTitle>
        <FlexWrapper justify={"space-between"} wrap={"wrap"}>
          <Project title={"Sedona"} src={sedonaImg} text={"Tech stack : HTML , JavaScript, SASS, Gulp, Bem"} />
          <Project title={"Online Store"} src={storeImg} text={"Tech stack : HTML , JavaScript, SASS, Gulp, Bem"} />
          <Project title={"Keksogram"} src={keksImg} text={"Tech stack : HTML , JavaScript"} />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`

`

