import { Link } from 'react-router-dom'
import '../styles/Error.css'
import { Component } from 'react'
import Header from './Header'

class Error extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="error__404">
                    <h2>404</h2>
                    <h3>Oups ! La page que vous demandez n'existe pas.</h3>
                    <Link to="/">Retournez sur la page d'accueil</Link>
                </main>
            </>
        )
    }
}

export default Error
