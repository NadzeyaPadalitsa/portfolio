import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
  return (
    <StyledHero id="main">
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <Photo src={photo} alt="Picture Nadia Padalitsa" />
          <div>
            <Name>Nadia Padalitsa</Name>
            <HeroTitle>A Web Developer.</HeroTitle>
          </div>
        </FlexWrapper>
      </Container>
    </StyledHero >
  );
};

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 30px;
  box-shadow: 8px 8px 10px 2px ${theme.colors.accent};

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const HeroTitle = styled.h1`
  margin: 0;
  ${font({ Fmax: 27, Fmin: 20 })}
`

const Name = styled.p`
  margin-bottom: 20px;
  ${font({family: "'Raleway', sans-serif", weight: 700, Fmax: 60, Fmin: 36 })}
  letter-spacing: 5px;
  text-transform: uppercase;
  background-image: linear-gradient(to right top, blue, skyblue, blue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
