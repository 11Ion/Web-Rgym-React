import React from 'react';
import { Link } from 'react-scroll';
import "./style.css";
import video_icon from "../../img/video.svg";
import icon1 from "../../img/fb.svg";
import icon2 from "../../img/inst.svg";
import icon3 from "../../img/tw.svg";

const Header = () => {
    return (
        <>
        <div className="Header">
            <div className="container">
                <div className="slide__header">
                    
                </div>
                <div className="header__line">
                </div>
                <div className="header__content">
                <div className="line">
                </div>
                    <h1>
                    Making 
                    Different from
                    other builders<span>.</span>
                    </h1>
                    <div className="header__btns">
                        <div className="header__btn">
                        <a href="https://www.youtube.com/watch?v=fZ-2AxAKP9A&ab_channel=Muscle%26Brawn" target="_blank" rel="noopener noreferrer">Get Started</a>
                        </div>
                        <div className="header__btn">
                            <a href="https://www.youtube.com/watch?v=fZ-2AxAKP9A&ab_channel=Muscle%26Brawn" target="_blank" rel="noopener noreferrer"><img src={video_icon} alt="img" /></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="scroll-down">
                <Link to="scroll_element" smooth={true} duration={500}>
                    <div className="scroll-down__content">
                            <p>Scroll Down</p>
                            <svg width="8" height="23" viewBox="0 0 8 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.64645 22.8536C3.84171 23.0488 4.15829 23.0488 4.35355 22.8536L7.53553 19.6716C7.7308 19.4763 7.7308 19.1597 7.53553 18.9645C7.34027 18.7692 7.02369 18.7692 6.82843 18.9645L4 21.7929L1.17157 18.9645C0.976312 18.7692 0.659729 18.7692 0.464467 18.9645C0.269205 19.1597 0.269205 19.4763 0.464467 19.6716L3.64645 22.8536ZM3.5 0.5L3.5 22.5L4.5 22.5L4.5 0.5L3.5 0.5Z" fill="white"/>
                            </svg>
                    </div>
                    </Link>
                </div>
                <div className="header__links">
                    <ul className="header__social__items">
                        <li className="header__social__item">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={icon1} alt="img" /></a>
                        </li>
                        <li className="header__social__item">
                        <a href="https://twitter.com/tweeter" target="_blank" rel="noopener noreferrer">
                            <img src={icon3} alt="img" /></a>
                        </li>
                        <li className="header__social__item">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={icon2} alt="img" /></a>
                        </li>
                    </ul>

                    <div className="header__prev_next">
                        <div className="prev">
                        <svg width="8" height="19" viewBox="0 0 8 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35356 0.646446C4.15829 0.451185 3.84171 0.451185 3.64645 0.646446L0.464468 3.82843C0.269206 4.02369 0.269206 4.34027 0.464468 4.53553C0.65973 4.7308 0.976313 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53554 4.53553C7.7308 4.34027 7.7308 4.02369 7.53554 3.82843L4.35356 0.646446ZM4.5 19L4.5 1L3.5 1L3.5 19L4.5 19Z" fill="white"/>
                        </svg>
                            <p>Prev</p>  
                        </div>
                        <div className="next">
                            <p>Next</p>
                            <svg width="8" height="19" viewBox="0 0 8 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64645 18.3536C3.84171 18.5488 4.15829 18.5488 4.35355 18.3536L7.53553 15.1716C7.7308 14.9763 7.7308 14.6597 7.53553 14.4645C7.34027 14.2692 7.02369 14.2692 6.82843 14.4645L4 17.2929L1.17157 14.4645C0.97631 14.2692 0.659728 14.2692 0.464465 14.4645C0.269203 14.6597 0.269203 14.9763 0.464465 15.1716L3.64645 18.3536ZM3.5 -2.18557e-08L3.5 18L4.5 18L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#E74C3C"/>
                            </svg>
                        </div>
                    </div>
                </div>   
        </div>
        
        </>
     );
}
 
export default Header;