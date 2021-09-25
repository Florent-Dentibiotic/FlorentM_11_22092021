import '../styles/Header.css'
import logo from '../imgs/logo.png';

function Header(){
    return <div className='header'> 
        <img src={logo} alt='kasa' className='header__logo' />
        <ul className='header__menu'>
            <li className='header__menu__index'><a href='index.html'>Accueil</a></li>
            <li>À Propos</li>
        </ul>
    </div>
}

export default Header