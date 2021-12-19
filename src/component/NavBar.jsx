import { useState } from "react";

const NavBar = () => {
   const [isOpen, SetOpen] = useState(false);
   const navtoggle = (e) => {
      e.target.classList.toggle("active");
      SetOpen(!isOpen);
   };

   return (
      <nav className="nav">
         <div className="container">
            <div className="burger-icon" onClick={navtoggle}>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <ul className={`nav__list-items ${isOpen && "mobile-active"}`}>
               <li className="nav__list-item">
                  <a href="/" className="">
                     about
                  </a>
               </li>
               <li className="nav__list-item">
                  <a href="/" className="">
                     Skills & tools
                  </a>
               </li>
               <li className="nav__list-item">
                  <a href="/" className="">
                     home
                  </a>
               </li>
               <li className="nav__list-item">
                  <a href="/" className="">
                     work
                  </a>
               </li>
               <li className="nav__list-item">
                  <a href="/" className="">
                     Contact
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
};
export default NavBar;
