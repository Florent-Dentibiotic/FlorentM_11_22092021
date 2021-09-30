import '../styles/Carrousel.css'
import { Component } from 'react'

class Carrousel extends Component {
    constructor(props) {
    super(props)
    this.state = {}
}

showNext() {

}

    render(){

        const {imgs} = this.props
        
        return (
        <div className='carrousel'>
            {imgs && <img className='carrousel__img d-none' src={imgs[0]} alt='location'></img>}
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-left"></i>
            {imgs && <p className='carrousel__img__number'>1/{imgs.length}</p>}
        </div>)
    }
}

export default Carrousel