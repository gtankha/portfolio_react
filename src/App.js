
import React,{useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import Footer from "./components/Footer"




function App() {
  const [sectionSelected, setSectionSelected] = useState("About Me");

  return (
    <div className="overall">
      <Nav
        setSectionSelected={setSectionSelected}
        sectionSelected={sectionSelected}>
      </Nav>
      <main>
      
      {sectionSelected === "About Me" && <About></About>}
      {sectionSelected === "Portfolio" && <Portfolio></Portfolio>}
      {sectionSelected === "ContactForm" && <ContactForm></ContactForm>}
      {sectionSelected === "Resume" && <Resume></Resume>}

      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
