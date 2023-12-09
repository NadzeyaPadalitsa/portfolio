import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <MainTitle>Portfolio A Web Developer</MainTitle>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

const MainTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`
