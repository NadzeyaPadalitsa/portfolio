import React from 'react';
import { SectionTitle } from '../../../components/title/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import sedonaImg from '../../../assets/images/project-1.jpg';
import storeImg from '../../../assets/images/project-2.png';
import keksImg from '../../../assets/images/project-3.png';
import { Container } from '../../../components/Container';
import { S } from './Projects_Styles';

const projectData = [
  { title: "Sedona", src: sedonaImg, text: "Tech stack : HTML , JavaScript, SASS, Gulp, Bem" },
  { title: "Online Store", src: storeImg, text: "Tech stack : HTML , JavaScript, SASS, Gulp, Bem" },
  { title: "Keksogram", src: keksImg, text: "Tech stack : HTML , JavaScript" }
]

export const Projects: React.FC = () => {
  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>My projects</SectionTitle>
        <FlexWrapper wrap={"wrap"}>
          {projectData.map((p, index) => {
            return  <Project title={p.title} src={p.src} text={p.text} key={index} />
          })}
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
