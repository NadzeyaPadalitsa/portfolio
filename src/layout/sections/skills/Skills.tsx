import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle> My skills</SectionTitle>
      <SkillsList>
        <Skill iconId = {"html"} title={"html5"}/>
        <Skill iconId = {"css"} title={"css3"}/>
        <Skill iconId = {"js"} title={"javaScript"}/>
        <Skill iconId = {"sass"} title={"sass"}/>
        <Skill iconId = {"react"} title={"react JS"}/>
        <Skill iconId = {"ts"} title={"typeScript"}/>
        <Skill iconId = {"git"} title={"git"}/>
        <Skill iconId = {"github"} title={"github"}/>
        <Skill iconId = {"figma"} title={"figma"}/>
        <Skill iconId = {"bem"} title={"bem"} viewBox={"0 -22 256 256"} />
        <Skill iconId = {"npm"} title={"npm"}/>
        <Skill iconId = {"gulp"} title={"gulp"}/>
        <Skill iconId = {"vscode"} title={"vscode"}/>
        <Skill iconId = {"styled"} title={"styled components"}/>
      </SkillsList>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 50px;
`
const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style-type: none;
`
