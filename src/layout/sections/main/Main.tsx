import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
  return (
    <S.Main id="main">
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <S.Photo src={photo} alt="Picture Nadia Padalitsa" />
          <div>
            <S.Name>Nadia Padalitsa</S.Name>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </div>
        </FlexWrapper>
      </Container>
    </S.Main >
  );
};

