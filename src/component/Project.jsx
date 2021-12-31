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
               Live
            </a>

            <a href={repos} target="_blank" rel="noreferrer">
               View Repo
            </a>

            <p className="text-center pt-1">{tools}</p>
         </div>
      </div>
   );
}

export default Project;
