import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  iconId: string
  title: string
  viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <SKillItem>
      <Icon iconId = {props.iconId}/>
      <SKillTitle>{props.title}</SKillTitle>
    </SKillItem>
  );
};
const SKillItem = styled.li`
  background-color: #e2ccd0;
`
const SKillTitle = styled.h3`

`

