import Carrousel from '../components/Carrousel'
import { Component } from 'react'
import Dropdown from '../components/Dropdown'
import Tags from '../components/Tags'
import '../styles/Lodging.css'
import Header from '../components/Header'

class Lodging extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lodgingId: this.props.match.params.lodgingId,
            lodgingData: [],
        }
    }

    componentDidMount() {
        fetch(`../logements.json`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({
                    lodgingData: jsonResponse.find(
                        (e) => e.id === this.state.lodgingId
                    ),
                })
                console.log(this.state.lodgingData)
            })
    }

    render() {
        const lodgingData = this.state.lodgingData
        const Equipments = this.state.lodgingData.equipments
        const Host = this.state.lodgingData.host
        const rating = [
            <div className="star__rating">
                <i className="far fa-star"></i> <i className="far fa-star"></i>{' '}
                <i className="far fa-star"></i> <i className="far fa-star"></i>{' '}
                <i className="far fa-star"></i>
            </div>,
            <div className="star__rating">
                <i className="fas fa-star"></i> <i className="far fa-star"></i>{' '}
                <i className="far fa-star"></i> <i className="far fa-star"></i>{' '}
                <i className="far fa-star"></i>
            </div>,
            <div className="star__rating">
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
                <i className="far fa-star"></i> <i className="far fa-star"></i>{' '}
                <i className="far fa-star"></i>
            </div>,
            <div className="star__rating">
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
                <i className="fas fa-star"></i> <i className="far fa-star"></i>{' '}
                <i className="far fa-star"></i>
            </div>,
            <div className="star__rating">
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
                <i className="far fa-star"></i>
            </div>,
            <div className="star__rating">
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
                <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
                <i className="fas fa-star"></i>
            </div>,
        ]

        console.log(rating)
        // let userId = this.props.match.params.lodgingId;
        return (
            <>
                <Header />
                <main>
                    <Carrousel imgs={lodgingData.pictures} />
                    <section className="lodging__title">
                        <div>
                            <h1>{lodgingData.title}</h1>
                            <h2>{lodgingData.location}</h2>
                            <div className="tags__star">
                                <Tags tags={lodgingData.tags} />
                            </div>
                        </div>
                        <div className="lodging__host__details">
                            <div className="lodging__title__details">
                                {Host && (
                                    <>
                                        <h4>{Host.name}</h4>{' '}
                                        <img
                                            alt="host"
                                            src={`${Host.picture}`}
                                        />
                                    </>
                                )}
                            </div>
                            {rating[lodgingData.rating]}
                        </div>
                    </section>

                    <section className="lodging__dropdowns">
                        <Dropdown
                            title={`Description`}
                            details={lodgingData.description}
                        />
                        <Dropdown
                            title={`Équipements`}
                            details={
                                <ul className="equipment__details">
                                    {Equipments &&
                                        Equipments.map((equipment) => (
                                            <li key={`equipment-${equipment}`}>
                                                {equipment}
                                            </li>
                                        ))}
                                </ul>
                            }
                        />
                    </section>
                </main>
            </>
        )
    }
}

export default Lodging
