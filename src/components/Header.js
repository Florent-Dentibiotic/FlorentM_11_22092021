import '../styles/Header.css'
import logo from '../imgs/logo.png';
import { Link } from 'react-router-dom'

function Header(){
    return <div className='header'> 
        <img src={logo} alt='kasa' className='header__logo' />
        <ul className='header__menu'>
            <li className='header__menu__index'><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
        </ul>
    </div>
}

export default Header