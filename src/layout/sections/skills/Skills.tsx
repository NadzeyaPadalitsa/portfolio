import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Description } from '../../../components/Description';
import { Container } from '../../../components/Container';

export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <SectionTitle> Hard skills</SectionTitle>
        <Description>I can create adaptive cross-browser optimized layout that is compatible with modern browsers. I know how to automate my work with DevTools, Node.js, npm-skipts, Autoprefixer, Pixel Perfect, Gulp.
          Familiar with either Webpack and Vite.
          I know the BEM methodology and how to make CSS animations. My portfolio is written in ReactJS(TypeScript). I know the syntax and capabilities of Styled Components.</Description>
        <SkillsList>
          <Skill iconId={"html"} title={"HTML"} />
          <Skill iconId={"css"} title={"CSS"} />
          <Skill iconId={"js"} title={"JavaScript"} />
          <Skill iconId={"sass"} title={"Sass"} />
          <Skill iconId={"react"} title={"React JS"} />
          <Skill iconId={"ts"} title={"TypeScript"} />
          <Skill iconId={"git"} title={"Git"} />
          <Skill iconId={"github"} title={"Github"} />
          <Skill iconId={"figma"} title={"Figma"} />
          <Skill iconId={"styled"} title={"Styled components"} />
        </SkillsList>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`

`
const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 30px;
  margin: 0;
  list-style-type: none;
`
