import React from 'react';

const  SkillsTool = () =>{
    return (
        <section id='SkillsTool' className='SkillsTool'>
            <div className='container'>
                <h1>skills &amp; tools</h1>
                
                <h2>my toolbox &amp; things i can do</h2>
                <p>The skills, tools and technologies I use to bring your products to life:</p>
                <div className="row icons-container">
                    <div className="box-icon">
                        <i className="devicon-html5-plain-wordmark colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-css3-plain-wordmark colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-sass-original colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-tailwindcss-original-wordmark colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-bootstrap-plain-wordmark colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-javascript-plain colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-jquery-plain-wordmark colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-react-original colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-redux-original colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-git-plain colored"></i>
                    </div>

                    <div className="box-icon">
                        <i className="devicon-github-original-wordmark colored"></i>
                    </div>


                    <div className="box-icon">
                        <i className="devicon-vscode-plain colored"></i>
                    </div>

                </div>

                <div className='working-on'>
                    <h2>Currently working on:</h2>
                    <p>Improving my skills in, and understanding of vanilla JavaScript and React. Also, having fun building &amp; animating things via CSS.</p>
                </div>
            </div>
        </section>
    )
}

export default SkillsTool
