import React from 'react';
import { HardItem } from './HardItem';
import { S } from '../../Skils_Styles';

const HardSkillData = [
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
      {HardSkillData.map((s, index) => {
        return <HardItem iconId={s.iconId} title={s.title} key={index}/>
      })}
    </S.HardList>
  );
};



