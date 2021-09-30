import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { Component } from 'react'

class Home extends Component{
    constructor(props) {
    super(props)
    this.state = {
        logementData: [],
    }
}

    componentDidMount() {
    // const { id } = this.props.match.params
 
    fetch(`logements.json`)
    .then((response) => response.json())
    .then((jsonResponse) => {
        this.setState({ logementData: jsonResponse })
        console.log(jsonResponse)
    })
}

    render(){
        const logementData = this.state.logementData
    return (
        <main>
            <section className='home'>
                <h2 className='home__title'>Chez vous, partout et ailleurs</h2>
            </section>
            <section className='home__grid'>
                {logementData.map((logement) => (
                    <Link key={`lodging-${logement.id}`} to={`/lodging/${logement.id}`}>
                        <article className='home__grid__article'>
                            <div className='home__grid__article__img'><img alt='cover' src={`${logement.cover}`}/></div>
                            <h3>{logement.title}</h3>
                        </article>
                    </Link>
                ))}
            </section>
        </main>
    )}    
}

export default Home