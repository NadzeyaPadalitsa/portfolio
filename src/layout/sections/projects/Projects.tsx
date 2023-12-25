import React from 'react';
import { SectionTitle } from '../../../components/title/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import sedonaImg from '../../../assets/images/project-1.jpg';
import sedonaImg2x from '../../../assets/images/project-1@2x.jpg';
import storeImg from '../../../assets/images/project-2.png';
import storeImg2x from '../../../assets/images/project-2@2x.png';
import keksImg from '../../../assets/images/project-3.png';
import keksImg2x from '../../../assets/images/project-3@2x.png';
import portfolioImg from '../../../assets/images/project-4.png';
import portfolioImg2x from '../../../assets/images/project-4@2x.png';
import { Container } from '../../../components/Container';
import { S } from './Projects_Styles';

const projectData = [
  { title: "Sedona", src: sedonaImg, srcSet:`${sedonaImg2x} 2x`, text: "Tech stack : HTML, JavaScript, SASS, Gulp, Bem" },
  { title: "Online Store", src: storeImg, srcSet:`${storeImg2x} 2x`, text: "Tech stack : HTML, JavaScript, SASS, Gulp, Bem" },
  { title: "Keksogram", src: keksImg, srcSet:`${keksImg2x} 2x`, text: "Tech stack : HTML, JavaScript, Vite" },
  {title: "Portfolio", src: portfolioImg, srcSet:`${portfolioImg2x} 2x`, text: "Tech stack : React, JavaScript, TypeScript, Styled Components" }
]

export const Projects: React.FC = () => {
  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>My projects</SectionTitle>
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
          {projectData.map((p, index) => {
            return  <Project title={p.title} src={p.src} srcSet={p.srcSet} text={p.text} key={index} />
          })}
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
