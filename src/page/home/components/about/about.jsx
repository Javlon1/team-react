import "./scss__about/About.scss"
import "./scss__about/about__responsive/About__madia__phone.scss"
import Experienced from "../../../../img/experienced.svg"
import Easy from "../../../../img/easy.svg"
import Enhanced from "../../../../img/enhanced.svg"
 
function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="left">
                    <p className="left__minus"></p>
                    <h1 className="left__title">Build & manage distributed teams like no one else.</h1>
                </div>
                <div className="right">
                    <div className="right__experienced">
                        <img className="right__experienced__img" src={Experienced} alt="" />
                        <ul>
                            <li className="right__experienced__title">Experienced Individuals</li>
                            <li className="right__experienced__text">Our network is made up of highly experienced professionals who are passionate about what they do.</li>
                        </ul>
                    </div>
                    <div className="right__easy">
                        <img className="right__easy__img" src={Easy} alt="" />
                        <ul>
                            <li className="right__easy__title">Experienced Individuals</li>
                            <li className="right__easy__text">Our network is made up of highly experienced professionals who are passionate about what they do.</li>
                        </ul>
                    </div>
                    <div className="right__enhanced">
                        <img className="right__enhanced__img" src={Enhanced} alt="" />
                        <ul>
                            <li className="right__enhanced__title">Experienced Individuals</li>
                            <li className="right__enhanced__text">Our network is made up of highly experienced professionals who are passionate about what they do.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default About;
  