import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Hero = () => {
  return (
    <StyledHero id="hero">
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <Photo src={photo} alt="Picture Nadia Padalitsa" />
          <HeroTextWrapper>
            <SmallText>Hello, </SmallText>
            <HeroText>I’m, Nadia Padalitsa</HeroText>
            <HeroTitle>A Web Developer</HeroTitle>
          </HeroTextWrapper>
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
  display: block;
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const HeroTextWrapper = styled.div`
  width: 50%;
`
const HeroTitle = styled.h1`

`

const SmallText = styled.span`

`

const HeroText = styled.span`
  max-width: 700px;
  font-size: 1.5rem;
`
