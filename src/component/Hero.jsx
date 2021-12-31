import React from "react";

const Hero = () => {
   return (
      <header className="header" id="hero">
         <div className="container ">
            <div className="row justify-center align-center">
               <div className="text-center">
                  <p>HELLO, MY NAME IS Abderrahman</p>
                  <h1>I make websites.</h1>
                  <h2>
                     I’m a frontend developer and
                     <div className="animated">
                        <span>a Cafe Lover.</span>
                        <span>a movie fane.</span>
                        <span>a student.</span>
                        <span>football lover.</span>
                     </div>
                  </h2>
                  <a href="#about">About Me</a>
                  <a href="#contact-me">Contact Me</a>
               </div>
            </div>
         </div>
      </header>
   );
};
export default Hero;
