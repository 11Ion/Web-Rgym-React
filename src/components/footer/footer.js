import logo from "../../img/RGym.svg";
import icon_fb from "../../img/fb_f.svg";
import icon_tw from "../../img/tw_f.svg";
import icon_inst from "../../img/inst_f.svg";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
    <div className="Footer">
        <div className="container">
            <div className="footer__content">
                <div className="footer__content__info">
                    <div className="footer__content__info__logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam </p>
                </div>
                <div className="footer__content__links">
                    <div className="footer__content__links__title">
                        Information
                    </div>
                    <ul className="footer__content__links__items">
                        <li className="footer__content__links__item">
                           <Link to="/About" >About us</Link>
                        </li>
                        <li className="footer__content__links__item">
                           <Link to="/Lifestyle" >Lifestyle</Link>
                        </li>
                        <li className="footer__content__links__item">
                           <Link to="/Fitness" >Fitness</Link>
                        </li>
                        <li className="footer__content__links__item">
                           <Link to="/Pricing" >Pricing</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__content__moore_links">
                    <div className="footer__content__moore__links__title">
                            More Links
                        </div>
                        <ul className="footer__content__moore_links__items">
                            <li className="footer__content__moore_links__item">
                               <Link to="/Gallery" >Gallery </Link>
                            </li>
                            <li className="footer__content__moore_links__item">
                               <Link to="/ClubLocation" >ClubLocation</Link>
                            </li>
                            <li className="footer__content__moore_links__item">
                               <Link to="/Behind" >Behind the scence</Link>
                            </li>
                            <li className="footer__content__moore_links__item">
                               <Link to="/Contact" >Contact</Link>
                            </li>
                        </ul>
                </div>
                 <div className="footer__content__social">
                    <div className="footer__content__social__title">
                    Follow Us On!
                        </div>
                        <ul className="footer__content__social__items">
                            <li className="footer__content__social__item">
                               <Link to="/fb" ><img src={icon_fb} alt="img"/></Link>
                            </li>
                            <li className="footer__content__social__item">
                               <Link to="/inst" ><img src={icon_tw} alt="img"/></Link>
                            </li>
                            <li className="footer__content__social__item">
                               <Link to="/tw" ><img src={icon_inst} alt="img"/></Link>
                            </li>
                        </ul>
                </div>

            </div>
            <div className="footer_author">
                Copyright © 2023 <span>R</span>Gym. All Rights Reserved.
            </div>
        </div>
    </div>
     );
}
 
export default Footer;