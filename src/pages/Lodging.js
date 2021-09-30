import Carrousel from "../components/Carrousel"
import styled from 'styled-components'
import colors from '../utils/style/color'
import { Component } from "react"
import Dropdown from "../components/Dropdown"

const LodgingH1 = styled.h1`
    font-size: 36px;
    color: ${colors.primary};
`

const LodgingH2 = styled.h2`
    font-size: 18px;
    color: ${colors.primary};
`

class Lodging extends Component{
    constructor(props) {
    super(props)
    this.state = {
        lodgingId: this.props.match.params.lodgingId,
        lodgingData: []
    }
}

componentDidMount() {
    // const { id } = this.props.match.params
 
    fetch(`../logements.json`)
    .then((response) => response.json())
    .then((jsonResponse) => {
        this.setState({ lodgingData: jsonResponse.find(e => e.id === this.state.lodgingId) })
        console.log(this.state.lodgingData)
    })
}

    render(){    
        const lodgingData = this.state.lodgingData
        // let userId = this.props.match.params.lodgingId;
    return(
        <main>
            <Carrousel imgs={lodgingData.pictures}/>
            <LodgingH1>{lodgingData.title}</LodgingH1>
            <LodgingH2>{lodgingData.location}</LodgingH2>
            <ul>
                {lodgingData.tags}
            </ul>
            <Dropdown title={`Description`} details={lodgingData.description}/>
            <Dropdown title={`Équipements`} details={lodgingData.equipments}/>
        </main>
    )}
}

export default Lodging