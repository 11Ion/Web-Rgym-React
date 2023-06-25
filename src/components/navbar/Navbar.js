import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../img/RGym.svg";
import vector from "../../img/Vector.svg";
import burger from "../../img/menu.svg";
import close from "../../img/close.svg";
const Navbar = () => {
   const location = useLocation();
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleOutsideClick = (e) => {
    if (
      mobileMenuOpen &&
      e.target.closest(".mobile__menu") === null &&
      e.target.closest(".burger__menu") === null
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, );
    return ( 
      <>
                 <div className={`mobile__menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile__menu__close" onClick={toggleMobileMenu}>
          <img src={close} draggable="false" alt="img"/>
        </div>
        <div className="logo__mobile__menu">
             <NavLink to="/" onClick={toggleMobileMenu}>
               <img src={logo} alt="img"/>
            </NavLink>
        </div>
        <ul className="mobile__menu__links">
          <li className="mobile__menu__link">
            <NavLink to="/Training" onClick={toggleMobileMenu}>
               Traning
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/StudioClassess" onClick={toggleMobileMenu}>
               Studio Classess
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/special-deals" onClick={toggleMobileMenu}>
               Lifestyle
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/contact" onClick={toggleMobileMenu}>
               Contact
            </NavLink>
          </li>         
        </ul>
        <div className="grap">
                  <img src={vector} alt="img" />
                  <p>
                     Mon - Fri : 8:00 am - 7:00 pm
                  </p>
               </div>
      </div>
        <nav className="Navbar">
           <div className="container">
            
            <div className="navbar__logo_other">
               <div className="logo">
               <NavLink to="/"
               className={
                  location.pathname === "/"
                    ? "nav__link_a active"
                    : "nav__link_a"
                }>
                  <img src={logo}  alt="logo"/>
                  </NavLink>
               </div>
               <div className="grap">
                  <img src={vector} alt="img" />
                  <p>
                     Mon - Fri : 8:00 am - 7:00 pm
                  </p>
               </div>
            </div>

            <ul className="nav__links">
                  <li className="nav__link">
                     <NavLink to="/Training"
                     className={
                        location.pathname === "/Training"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }
                     >Traning</NavLink>
                  </li>
                  <li className="nav__link">
                     <NavLink to="/StudioClassess"
                     className={
                        location.pathname === "/StudioClassess"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>Studio Classess</NavLink>
                  </li>
                  <li className="nav__link">
                     <NavLink to="/Lifestyle"
                     className={
                        location.pathname === "/Lifestyle"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>
                        Lifestyle</NavLink>
                  </li>
                  <li className="nav__btn">
                     <NavLink to="/Contact"
                     className=
                     {
                        location.pathname === "Contact/"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>
                        Contact</NavLink>
                  </li>
            </ul>
            <div className="burger__menu"  onClick={toggleMobileMenu}>
               <img src={burger}  alt="img"/>
            </div>
           </div>

        </nav>
        </>
     );
}
 
export default Navbar;