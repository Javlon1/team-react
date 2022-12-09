import "./sass__footer/Footer.scss"
import "./sass__footer/footer__responsive/Footer__media__phone.scss"
import Logo from "../../img/logo.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="top">
                <div className="container">
                    <h1 className="title">Ready to get started?</h1>
                    <a className="contact" href="">contact us</a>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="nav">
                        <img src={Logo} alt="" /> 
                        <ul className="list">
                            <li className="list__item"><a href="">home</a></li>
                            <li className="list__item"><a href="">about</a></li>
                        </ul>
                    </div>
                    <div className="company__info">
                        <ul className="list">
                            <li className="list__item">987 Hillcrest Lane</li>
                            <li className="list__item">Irvine, CA</li>
                            <li className="list__item">Uzbekistan</li>
                            <li className="list__item">call Us: <a href="">998905251243</a></li>
                        </ul>
                    </div>
                    <div className="company__icons">
                    <ul className="list">
                        <li className="list__item"><a href="">q</a></li>
                        <li className="list__item"><a href="">q</a></li>
                        <li className="list__item"><a href="">q</a></li>
                    </ul>    
                        <p>Copyright 2022. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 