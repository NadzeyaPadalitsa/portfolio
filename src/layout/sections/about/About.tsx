import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';

export const About = () => {
  return (
    <StyledAbout>
      <SectionTitle>About me</SectionTitle>
      <AboutText>Hi, I'm Nadia Padalitsa A Web Developer from Belarus. I am interested in web development and everything connected with it. Completed courses on layout at <a href="https://htmlacademy.ru/profile/id1983015/certificates">htmlacademy</a>. I’m currently studying at the "Professional Layout in ReactJS" course at the IT-incubator. Ready to implement great projects with wonderful people.</AboutText>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 50px;
  background-color: #73aedf;
`

const AboutText = styled.p`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`
