import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import About from "../component/About";
import SkillsTool from "../component/SkillsTool";
import ProjectsContainer from "../component/ProjectsContainer";
import Contact from "../component/Contact";
import "./clip-paths.css";

function App() {
   return (
      <>
         <NavBar />
         <Hero />
         <div className="angele angele1"></div>
         <About />
         <SkillsTool />
         <ProjectsContainer />
         <Contact />
      </>
   );
}

export default App;
