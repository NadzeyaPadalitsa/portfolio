import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledHero id="hero">
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
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
  max-height: 430px;
  object-fit: cover;
  box-shadow: 8px 8px 10px 2px ${theme.colors.accent};
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
