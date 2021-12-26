import React from 'react';
import img from '../assets/img.png'
const About = () => {
    return (
        <section id='about' className='about'>
            <div className='container'>
                <div className="about__header">
                    <h1>About Me</h1>
                    <h2>Who Is Abderrahman ?</h2>
                </div>
                <div className="row">
                    <div className="col-5 col-md-12 ">
                        <img src={img} alt="robot" />
                    </div>
                    <div className="col-7 col-md-12 p-1">
                        <div className="about__desc">
                            <h2>I'm Abderrahman ES-SEBYITY</h2>
                            <p>A <span> front-end developer </span> living  in
                                Marrakech, Morocco
                            </p>
                            <p className="about__desc--desc">I'm passionate about creating and developing clean, unique, elegant products. I specialize in
                                building Websites for small to medium size business. I keep my code clean, readable, modular and
                                well refactored. I enjoy working with complex user interfaces
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;