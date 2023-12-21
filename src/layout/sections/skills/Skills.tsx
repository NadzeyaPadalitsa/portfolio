import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <SectionTitle> Skills</SectionTitle>
        <SkillTitle>Soft skills</SkillTitle>
        <SoftList>
          <li>Search and analysis of information</li>
          <li>Planning skills</li>
          <li>Ability to ask questions</li>
          <li>Working with feedback</li>
          <li>Teamwork</li>
          <li>Independence</li>
        </SoftList>
        <SkillTitle>Hard skills</SkillTitle>
        <HardList>
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
        </HardList>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`

`

const SoftList = styled.ul`
  padding-left: 50px;
  list-style-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  margin-bottom: 50px;

  li:not(:last-child) {
    margin-bottom: 30px;
  }
`

const HardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0;
  list-style-type: none;
`

const SkillTitle = styled.h3`
  margin-bottom: 20px;
  padding-left: 30px;
  -webkit-text-stroke: 1px ${theme.colors.accent};
  text-transform: uppercase;
  ${font({family: "'Raleway', sans-serif", color: "transparent", weight: 700, Fmax: 30, Fmin: 24 })}
`
