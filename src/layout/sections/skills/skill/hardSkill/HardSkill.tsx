import React from 'react';
import { HardItem } from './HardItem';
import { S } from '../../Skils_Styles';

const hardSkillsData = [
  { iconId: "html", title:"HTML" },
  {iconId: "css", title: "CSS"},
  {iconId:"js", title:"JavaScript"},
  { iconId:"sass", title:"Sass"},
  { iconId:"react", title:"React JS"},
  { iconId:"ts", title:"TypeScript"},
  { iconId:"git", title:"Git"},
  { iconId:"github", title:"Github"},
  { iconId:"figma", title:"Figma"},
  { iconId: "styled", title:"Styled components"}
]

export const HardSkill: React.FC = () => {
  return (
    <S.HardList>
      {hardSkillsData.map((h, index) => {
        return <HardItem iconId={h.iconId} title={h.title} key={index}/>
      })}
    </S.HardList>
  );
};



