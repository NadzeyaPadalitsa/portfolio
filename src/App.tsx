import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/sections/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainTitle>Portfolio A Web Developer</MainTitle>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
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
