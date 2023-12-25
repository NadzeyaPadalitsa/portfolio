import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { HardSkill } from './skill/HardSkill';
import { Container } from '../../../components/Container';
import { S } from './Skils_Styles';


export const Skills: React.FC = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle> Skills</SectionTitle>
        <HardSkill/>
      </Container>
    </S.Skills>
  );
};








