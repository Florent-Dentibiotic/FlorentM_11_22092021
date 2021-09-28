import '../styles/Header.css'
import logo from '../imgs/logo.png';
import { Link } from 'react-router-dom'
import {Component} from 'react'

class Header extends Component{
    render(){
    return <nav className='header'> 
        <img src={logo} alt='kasa' className='header__logo' />
        <ul className='header__menu'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
        </ul>
    </nav>
    }
}

export default Header