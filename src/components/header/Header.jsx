import './sass__header/Header.scss';
import './sass__header/header_responsive/Header__media__phone.scss';
import Left from "../../img/logo.png"

function Header() {
  return (
    <div className="header">
        <div className="container">
            <nav className='nav'>
                <ul className='nav__list'>
                    <a className='nav__img' href="#home"><img src={Left} alt="" /></a>
                    <li className='nav__list__item'><a href="#home">home</a></li>
                    <li className='nav__list__item'><a href="#about">about</a></li>
                    <a className='nav__list__contact' href="">contact us</a>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Header;
 