import React from 'react';
import { SoftItem} from './SoftItem';
import { S } from '../../Skils_Styles';

const SoftSkillData = [
  {text: "Search and analysis of information" },
  {text: "Planning skills"},
  {text: "Ability to ask questions"},
  {text: "Working with feedback"},
  {text: "Teamwork"},
  {text: "Independence"}
]

export const SoftSkill: React.FC = () => {
  return (
    <S.SoftList>
      {SoftSkillData.map((s, index) => {
        return <SoftItem text={s.text} key={index}/>
      })}
    </S.SoftList>
  );
};

