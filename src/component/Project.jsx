import React from 'react';

function Project(props) {
    const { title, link, repos, tools, img } = props.data;

    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="project-img" loading='lazy'/>
            </div>

            <div className="card-body">
                <h2>{title}</h2>
                <p> live preview : <a href={link} target='_blank' rel='noreferrer'>click me</a></p>
                <p>github  repositories : <a href={repos} target='_blank' rel='noreferrer'>click me</a></p>
                <span>{tools}</span>
            </div>
        </div>
    )
}

export default Project
