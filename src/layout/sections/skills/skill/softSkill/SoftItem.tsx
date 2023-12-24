import React from 'react';
import { S } from '../../Skils_Styles';

type SoftItemPropsType = {
  text: string
}

export const SoftItem: React.FC<SoftItemPropsType> = (props: SoftItemPropsType) => {
  return (
    <S.SoftText>{props.text}</S.SoftText>
  );
};


