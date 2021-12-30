import React from "react";

function Project(props) {
   const { title, link, repos, tools, img } = props.data;

   return (
      <div className="card">
         <div className="card-img">
            <img src={img} alt="project-img" loading="lazy" />
         </div>

         <div className="card-body">
            <h2>{title}</h2>

            <a href={link} target="_blank" rel="noreferrer">
               view it here
            </a>

            <p>
               <a href={repos} target="_blank" rel="noreferrer">
                  view github repo
               </a>
            </p>
            <span>{tools}</span>
         </div>
      </div>
   );
}

export default Project;
