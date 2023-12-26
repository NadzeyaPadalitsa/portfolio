import React from 'react';
import { Description } from '../../../components/Description';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { S } from './About_Styles';

export const About: React.FC = () => {
  return (
    <S.About id={"about"}>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <S.AboutWrapper>
          <Description>Hi, I’m Nadia Padalitsa, 32 years old, Belarus. I am interested in web development and everything connected with it.</Description>
          <Description>I took courses on layout at <a href="https://htmlacademy.ru/profile/id1983015/certificates">htmlacademy</a> and "Professional Layout in ReactJS" at the <a href="https://it-incubator.io/">IT-incubator</a>.</Description>
          <Description>I can create adaptive cross-browser optimized layout that is compatible with modern browsers. I know how to automate my work with DevTools, Node.js, npm-skipts, Autoprefixer, Pixel Perfect, Gulp.
            Familiar with either Webpack and Vite.
            I know the BEM methodology and how to make CSS animations. My portfolio is written in ReactJS(TypeScript). I know the syntax and capabilities of Styled Components.</Description>
          <Description> I write code thinking about clean and beautiful solutions to problems. Ready to implement great projects with wonderful people.</Description>
          <Description>I have the following soft skills: ыearch and analysis of information, planning skills, ability to ask questions, working with feedback, teamwork, independence</Description>
        </S.AboutWrapper>
      </Container>
    </S.About >
  );
};



