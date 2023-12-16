import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
  iconId: string
  title: string
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

`
const SKillTitle = styled.h3`
  color: ${theme.colors.secondaryText};
`

