import React from 'react';
import styled from 'styled-components';
import { Description } from '../../../components/Description';
import { SectionTitle } from '../../../components/SectionTitle';

export const About = () => {
  return (
    <StyledAbout id="about">
      <SectionTitle>About me</SectionTitle>
      <Description>Hi, I’m Nadia Padalitsa, 32 years old, Belarus. I am interested in web development and everything connected with it. I took courses on layout at <a href="https://htmlacademy.ru/profile/id1983015/certificates">htmlacademy</a>. I’m currently studying the course “Professional Layout in ReactJS” at the IT incubator. I write code thinking about clean and beautiful solutions to problems. Ready to implement great projects with wonderful people.</Description>
    </StyledAbout >
  );
};

const StyledAbout = styled.section`
  padding: 50px;
`
