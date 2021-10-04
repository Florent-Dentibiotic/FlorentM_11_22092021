import '../styles/Header.css'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
import { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const UnderlineHome = this.props.underlineHome
        const UnderlineAbout = this.props.underlineAbout
        return (
            <nav className="header">
                <img src={logo} alt="kasa" className="header__logo" />
                <ul className="header__menu">
                    {UnderlineHome ? (
                        <li>
                            <Link to="/" className="underline__on">
                                Accueil
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/" className="underline__off">
                                Accueil
                            </Link>
                        </li>
                    )}
                    {UnderlineAbout ? (
                        <li>
                            <Link to="/about" className="underline__on">
                                À Propos
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/about" className="underline__off">
                                À Propos
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
}

export default Header
