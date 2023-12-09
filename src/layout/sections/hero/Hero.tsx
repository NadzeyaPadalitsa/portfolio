import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Hero = () => {
  return (
    <StyledHero>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <Photo src={photo} alt="Picture Nadia Padalitsa" />
        <HeroTextWrapper>
          <HeroTitle>Hello</HeroTitle>
          <HeroText>I’m Nadia Padalitsa, 32 years old, Belarus</HeroText>
          <HeroText>A Web Developer</HeroText>
        </HeroTextWrapper>
      </FlexWrapper>
    </StyledHero >
  );
};

const StyledHero = styled.section`
  padding: 50px;
  background-color: #126de4;
`

const Photo = styled.img`
  display: block;
  width:350px;
  height: 430px;
  object-fit: cover;
`
const HeroTextWrapper = styled.div`
  width: 50%;
`
const HeroTitle = styled.h2`

`
const HeroText = styled.p`

`
