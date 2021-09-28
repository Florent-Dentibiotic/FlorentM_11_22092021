import { Link } from 'react-router-dom'
import '../styles/Home.css'
import Card from '../components/Card'
import { Component } from 'react'

class Home extends Component{
    render(){
    return (
        <main>
            <section className='home'>
                <h2 className='home__title'>Chez vous, partout et ailleurs</h2>
            </section>
            <section className='home__grid'>
                <Link to='/lodging'>
                    <Card />
                    <article className='home__grid__article'>
                        <h3>Titre de la location</h3>
                    </article>
                </Link>
            </section>
        </main>
    )}    
}

export default Home