import React from 'react';
import styled from 'styled-components';
import { Description } from '../../../components/Description';
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from "../../../styles/Theme"
import { Container } from '../../../components/Container';

export const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>
        <AboutWrapper>
          <Description>Hi, I’m Nadia Padalitsa, 32 years old, Belarus. I am interested in web development and everything connected with it.</Description>
          <Description>I took courses on layout at <a href="https://htmlacademy.ru/profile/id1983015/certificates">htmlacademy</a>. I’m currently studying the course “Professional Layout in ReactJS” at the IT incubator.</Description>
          <Description> I write code thinking about clean and beautiful solutions to problems. Ready to implement great projects with wonderful people.</Description>
        </AboutWrapper>
        <div>
          <SoftTitle>Soft skills</SoftTitle>
          <SoftList>
            <li>Search and analysis of information</li>
            <li>Planning skills</li>
            <li>Ability to ask questions</li>
            <li>Working with feedback</li>
            <li>Teamwork</li>
            <li>Independence</li>
          </SoftList>
        </div>
      </Container>
    </StyledAbout >
  );
};

const StyledAbout = styled.section`

`
const AboutWrapper = styled.div`

`

const SoftList = styled.ul`
  padding-left: 50px;
  list-style-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`

const SoftTitle = styled.h3`
  margin-bottom: 20px;
  padding: 30px 0 0 20px;
  -webkit-text-stroke: 1px ${theme.colors.accent};
  text-transform: uppercase;
  color: transparent;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 700;
`

