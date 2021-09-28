import '../styles/Carrousel.css'
import img from '../imgs/IMG.png'
import { Component } from 'react'

class Carrousel extends Component {
    render(){
        return (
    <div className='carrousel'>
        <img className='carrousel__img' src={img} alt='location'></img>
        <i class="fas fa-chevron-right"></i>
        <i class="fas fa-chevron-left"></i>
        <p className='carrousel__img__number'>1/4</p>
    </div>)
    }
}

export default Carrousel