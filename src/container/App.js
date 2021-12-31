import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import About from "../component/About";
import SkillsTool from "../component/SkillsTool";
import ProjectsContainer from "../component/ProjectsContainer";
import Contact from "../component/Contact";
import "./clip-paths.css";
import Footer from "../component/Footer";

function App() {
   return (
      <>
         <NavBar />
         <Hero />
         <div className="angele angele1"></div>
         <About />
         <div className="angele angele2"></div>
         <SkillsTool />
         <div className="angele angele3"></div>
         <ProjectsContainer />
         <div className="angele angele4"></div>
         <Contact />
         <Footer />
      </>
   );
}

export default App;
