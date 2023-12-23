import React from 'react';
import { SectionTitle } from '../../../components/title/SectionTitle';
import { HardSkill } from './skill/hardSkill/HardSkill';
import { Container } from '../../../components/Container';
import { SoftSkill } from './skill/softSkill/SoftSkill';
import { SubsectionTitle } from '../../../components/title/SubsectionTitle';
import { S } from './Skils_Styles';


export const Skills: React.FC = () => {
  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle> Skills</SectionTitle>
        <SubsectionTitle>Soft skills</SubsectionTitle>
        <SoftSkill/>
        <SubsectionTitle>Hard skills</SubsectionTitle>
        <HardSkill/>
      </Container>
    </S.Skills>
  );
};








