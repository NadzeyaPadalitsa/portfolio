import React from 'react';
import { S } from '../../Skils_Styles';

type SoftItemPropsType = {
  text: string
}

export const SoftItem = (props: SoftItemPropsType) => {
  return (
    <S.SoftText>{props.text}</S.SoftText>
  );
};


