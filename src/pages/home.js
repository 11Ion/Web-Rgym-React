import "../style/style.css";
import vect2 from "../img/Vector_2.svg";
import ex_1 from "../img/Rectangle 471.png";
import ex_2 from "../img/Rectangle 472.png";
import ex_3 from "../img/Rectangle 473.png";
import ex_4 from "../img/Rectangle 474.png";
import ex_5 from "../img/Rectangle 475.png";
import img_p from "../img/image_perst.png";
import img_g from "../img/gy1.png";
import img_g2 from "../img/Rectangle 482.png";
import img_g3 from "../img/Rectangle 483.png";
import img_g4 from "../img/Rectangle 484.png";
import img_g5 from "../img/Rectangle 491.png";


import Header from "../components/header/header";
const Home = () => {
    return ( 
        <>
        <Header />
        <section className="experience" id="scroll_element">
            <h1>
            Popular Exercise
            </h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="experience__img">
                <img src={vect2} alt="img" />
            </div>
            <div className="container-fuild">
                <ul className="experience__items">
                    <li className="experience__item">
                        <img src={ex_1} alt="img"/>
                    </li>
                    <li className="experience__item">
                        <img src={ex_2} alt="img"/>
                    </li>
                    <li className="experience__item">
                        <img src={ex_3} alt="img"/>
                    </li>
                    <li className="experience__item">
                        <img src={ex_4} alt="img"/>
                    </li>
                    <li className="experience__item">
                        <img src={ex_5} alt="img"/>
                    </li>
                </ul>
            </div>
        </section>
        <section className="personal__trainings__plans">
            <div className="container">
                <p> The ultimate online online personal training plans</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero.</p>
            </div>
        </section>
        <section className="personal_training_info">
            <div className="container-fuild">
                <div className="personal_training_info_image">
                    <img src={img_p} alt="img" />
                </div>
                <div className="personal_training_info_text">
                    <h1>Personal training</h1>
                    <h2>Gym time optimized</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero.</p>
                </div>
            </div>
        </section>
        <section className="gym__images">
            <div className="gym__image">
                <img src={img_g} alt="img" />
            </div>
            <ul className="gym__images__items">
                <li className="gym__images__item">
                    <img src={img_g2} alt="img" /> 
                </li>
                <li className="gym__images__item">
                    <img src={img_g3} alt="img" /> 
                </li>
                <li className="gym__images__item">
                    <img src={img_g4} alt="img" /> 
                </li>
            </ul>
            <div className="welcome__message">
                <h1>Welcome to  <span>R</span>Gym</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque sa gittis magna erat sagittis morbi. Id libero.</p>
            </div>
            <div className="last__gym__img">
                <img src={img_g5} alt="img" /> 
            </div>
        </section>
        <div className="newsletter">
                <div className="container">
                    <form className="newsletter_form" method="?">
                    <h1>Subscribe to our newsletter</h1>'
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque.</p>
                    <div className="newsletter__inputs">
                        <input placeholder="Enter Email" type="email" />
                        <div className="newsletter__btn_sumbit">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
        </div>
        </>
    );
}
 
export default Home;