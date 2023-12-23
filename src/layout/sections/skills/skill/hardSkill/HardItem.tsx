import React from 'react';
import { Icon } from '../../../../../components/icon/Icon';
import { S } from '../../Skils_Styles';


type HardPropsType = {
  iconId: string
  title: string
}

export const HardItem = (props: HardPropsType) => {
  return (
    <S.HardSKillItem>
      <Icon iconId = {props.iconId} viewBox={"-15 0 150 150"}/>
      <S.HardItemTitle>{props.title}</S.HardItemTitle>
    </S.HardSKillItem>
  );
};


