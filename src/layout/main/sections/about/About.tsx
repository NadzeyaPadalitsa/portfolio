import React from 'react';
import photo from '../../../../assets/images/photo.jpg'
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Description } from '../../../../components/Description';

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <Photo src={photo} alt="Picture Nadia Padalitsa" />
        <AboutTextWrapper>
          <SectionTitle>Hello</SectionTitle>
          <AboutText>I’m Nadia Padalitsa, A Web Developer</AboutText>
          <Description>I’m Nadia Padalitsa, 32 years old, Belarus. I am interested in web development and everything connected with it. I took courses on layout at <a href="https://htmlacademy.ru/profile/id1983015/certificates">htmlacademy</a>. I’m currently studying the course “Professional Layout in ReactJS” at the IT incubator. I write code thinking about clean and beautiful solutions to problems. Ready to implement great projects with wonderful people.</Description>
        </AboutTextWrapper>
      </FlexWrapper>
    </StyledAbout >
  );
};

const StyledAbout = styled.section`
  padding: 50px;
  background-color: #dde3eb;
`

const Photo = styled.img`
  display: block;
  width:350px;
  height: 430px;
  object-fit: cover;
`
const AboutTextWrapper = styled.div`
  width: 50%;
`

const AboutText = styled.p`
  max-width: 700px;
  font-size: 1.5rem;
`
