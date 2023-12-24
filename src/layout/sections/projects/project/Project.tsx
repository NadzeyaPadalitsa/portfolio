import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Link } from '../../../../components/Link';
import { S } from '../Projects_Styles';

type ProjectPropsType = {
  title: string
  src: string
  text: string
}

export const Project:React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <S.Image src={props.src} alt={props.title} />
      <S.Title>{props.title}</S.Title>
      <S.Text>{props.text}</S.Text>
      <FlexWrapper justify={"center"} align={"start"}>
        <Link href="">
          <Icon iconId={"preview"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"} />
          <span>Live Preview</span>
        </Link>
        <Link href="">
          <Icon iconId={"code"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"} />
          <span>View Code</span>
        </Link>
      </FlexWrapper>
    </S.Project>
  );
};
