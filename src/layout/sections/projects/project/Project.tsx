import React from 'react';
//import sedonaImgWebp from '../../../../assets/images/project-1.webp';
//import sedonaImgWebp2x from '../../../../assets/images/project-1@2x.webp';
//import sedonaImgAvif from '../../../../assets/images/project-1.avif';
//import sedonaImgAvif2x from '../../../../assets/images/project-1@2x.avif';
//import storeImgWebp from '../../../../assets/images/project-2.webp';
//import storeImgWebp2x from '../../../../assets/images/project-2@2x.webp';
//import storeImgAvif from '../../../../assets/images/project-2.avif';
//import storeImgAvif2x from '../../../../assets/images/project-2@2x.avif';
//import keksImgWebp from '../../../../assets/images/project-3.webp';
//import keksImgWebp2x from '../../../../assets/images/project-3@2x.webp';
//import keksImgAvif from '../../../../assets/images/project-3.avif';
//import keksImgAvif2x from '../../../../assets/images/project-3@2x.avif';
//import portfolioImgWebp from '../../../../assets/images/project-4.webp';
//import portfolioImgWebp2x from '../../../../assets/images/project-4@2x.webp';
//import portfolioImgAvif from '../../../../assets/images/project-4.avif';
//import portfolioImgAvif2x from '../../../../assets/images/project-4@2x.avif';

import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Link } from '../../../../components/Link';
import { S } from '../Projects_Styles';

type ProjectPropsType = {
  title: string
  src: string
  srcSet: string
  srcSetWebp?: string
  srcSetAvif?: string
  text: string
}

/*const projectData = [
  {  },
  { },
  {  },
  { }
]*/

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <picture>
        <source type="image/avif" srcSet={props.srcSetAvif} />
        <source type="image/webp" srcSet={props.srcSetWebp} />
        <S.Image src={props.src} srcSet={props.srcSet} alt={props.title} />
      </picture>
      <S.Title>{props.title}</S.Title>
      <S.Text>{props.text}</S.Text>
      <FlexWrapper justify={"center"} align={"start"}>
        <Link href="">
          <Icon iconId={"preview"} width={"20"} height={"20"} viewBox={"0 0 20 20"} />
          <span>Live Preview</span>
        </Link>
        <Link href="">
          <Icon iconId={"code"} width={"20"} height={"20"} viewBox={"0 0 20 20"} />
          <span>View Code</span>
        </Link>
      </FlexWrapper>
    </S.Project>
  );
};
