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
          <Description>I took courses on layout at <a href="https://htmlacademy.ru/profile/id1983015/certificates">htmlacademy</a> and "Professional Layout in ReactJS" at the <a href="https://it-incubator.io/">IT-incubator</a>.</Description>
          <Description>I can create adaptive cross-browser optimized layout that is compatible with modern browsers. I know how to automate my work with DevTools, Node.js, npm-skipts, Autoprefixer, Pixel Perfect, Gulp.
          Familiar with either Webpack and Vite.
          I know the BEM methodology and how to make CSS animations. My portfolio is written in ReactJS(TypeScript). I know the syntax and capabilities of Styled Components.</Description>
          <Description> I write code thinking about clean and beautiful solutions to problems. Ready to implement great projects with wonderful people.</Description>
        </AboutWrapper>
      </Container>
    </StyledAbout >
  );
};

const StyledAbout = styled.section`

`
const AboutWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 5px;
    top: 0;
    left: 0;
    background-color: ${theme.colors.accent};
  }

  ${Description} {
    a {
      font-weight: 700;
    }
  }
`

