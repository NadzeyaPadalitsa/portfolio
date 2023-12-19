import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
//import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledHero id="hero">
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <PhotoWrapper>
            <Photo src={photo} alt="Picture Nadia Padalitsa"/>
          </PhotoWrapper>
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
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    top: -25px;
    right: 25px;
    width: 360px;
    height: 470px;
    content: "";
    z-index: -1;

  }
`

const Photo = styled.img`
  width: 350px;
  max-height: 430px;
  object-fit: cover;
  border: 10px solid skyblue;
    border-image: linear-gradient(to right top, blue, skyblue, blue);
    border-image-slice: 1;
`

const HeroTitle = styled.h1`
  margin: 20px 0;
  font-size: 27px;
  font-weight: 400;
`

const Name = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  background: linear-gradient(to right top, blue, skyblue, blue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
