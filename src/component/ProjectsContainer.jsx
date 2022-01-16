import React from "react";
import Project from "./Project";
import github from "../assets/github.png";
import Doob from "../assets/Doob.png";
import Leon from "../assets/Leon.png";
import Nubis from "../assets/Nubis.png";
import todo from "../assets/todo.png";
import ecomapp from "../assets/ecom-app.png";

const ProjectsContainer = () => {
   const projects = [
      {
         id: 1,
         title: "Leon-Template",
         link: "https://abdrahmanes1.github.io/Leon-Template/",
         repos: "https://github.com/abdrahmanES1/Leon-Template",
         img: Leon,
         tools: ["Html5 ", "Css3 "],
      },
      {
         id: 2,
         title: "Doob-Template",
         link: "https://abdrahmanes1.github.io/Doob-Template/",
         repos: "https://github.com/abdrahmanES1/Doob-Template",
         img: Doob,
         tools: ["Html5 ", "Css3 ", "Vanilla Javascript "],
      },
      {
         id: 3,
         title: "Nubis-template",
         link: "https://nubis.netlify.app/",
         repos: "https://github.com/abdrahmanES1/Nubis_template",
         img: Nubis,
         tools: ["Html5 ", "Css3 ", "Vanilla Javascript "],
      },
      {
         id: 4,
         title: "Todo-App",
         link: "https://abdrahmanes1.github.io/todo-app/",
         repos: "https://github.com/abdrahmanES1/todo-app",
         img: todo,
         tools: ["Html5 ", "Css3 ", "Bootstrap ", "react.js "],
      },
      {
         id: 5,
         title: "Find github user",
         link: "https://abdrahmanes1.github.io/git-users/",
         repos: "https://github.com/abdrahmanES1/git-users",
         img: github,
         tools: ["Html5 ", "Css3 ", "Bootstrap ", "react.js "],
      },
      {
         id: 6,
         title: "ecom app",
         link: "https://ecom-app1.netlify.app/",
         repos: "https://github.com/abdrahmanES1/ecom-app",
         img: ecomapp,
         tools: ["Html5 ", "Css3 ", "Bootstrap ", "react.js "],
      },
   ];

   return (
      <section id="projects" className="projects">
         <div className="container">
            <div className="title">
               <h1>work</h1>
               <h2>a selection of stuff i've built</h2>
            </div>

            <div className="row projects-container">
               {projects.map((project) => (
                  <div className="project" key={project.id}>
                     <Project data={project} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProjectsContainer;
