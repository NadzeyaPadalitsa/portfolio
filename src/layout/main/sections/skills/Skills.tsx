import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Description } from '../../../../components/Description';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle> My skills</SectionTitle>
      <FlexWrapper direction={"column"} justify={"center"}>
        <Description>I can create adaptive cross-browser optimized layout that is compatible with modern browsers. I know how to automate my work with DevTools, Node.js, npm-skipts, Autoprefixer, Pixel Perfect, Gulp.
          Familiar with either Webpack and Vite.
          I know the BEM methodology and how to make CSS animations. My portfolio is written in ReactJS(TypeScript). I know the syntax and capabilities of Styled Components.</Description>
        <SkillsList>
          <Skill iconId={"html"} title={"html5"} />
          <Skill iconId={"css"} title={"css3"} />
          <Skill iconId={"js"} title={"javaScript"} />
          <Skill iconId={"sass"} title={"sass"} />
          <Skill iconId={"react"} title={"react JS"} />
          <Skill iconId={"ts"} title={"typeScript"}/>
          <Skill iconId={"git"} title={"git"} />
          <Skill iconId={"github"} title={"github"} />
          <Skill iconId={"figma"} title={"figma"} />
          <Skill iconId={"styled"} title={"styled components"} />
        </SkillsList>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 50px;
  background-color: #b9f0ce;
`
const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style-type: none;
`
