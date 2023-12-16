import './App.css';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;


