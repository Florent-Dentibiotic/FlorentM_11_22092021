import '../styles/Carrousel.css'
import { Component } from 'react'

class Carrousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgIndex: 0,
        }
    }

    showNext = () => {
        if (this.state.imgIndex < this.props.imgs.length - 1) {
            this.setState({ imgIndex: this.state.imgIndex + 1 })
            console.log(this.props.imgs.length)
            console.log(this.state.imgIndex)
        } else {
            this.setState({ imgIndex: 0 })
        }
    }

    showPrevious = () => {
        if (this.state.imgIndex >= 1) {
            this.setState({ imgIndex: this.state.imgIndex - 1 })
            console.log(this.props.imgs.length)
            console.log(this.state.imgIndex)
        } else {
            this.setState({ imgIndex: this.props.imgs.length - 1 })
        }
    }

    render() {
        const { imgs } = this.props

        return (
            <div className="carrousel">
                {imgs && (
                    <img
                        className="carrousel__img d-none"
                        src={imgs[this.state.imgIndex]}
                        alt="location"
                    ></img>
                )}
                {imgs && imgs.length > 1 ? (
                    <div>
                        <i
                            className="fas fa-chevron-right"
                            onClick={this.showNext}
                        ></i>
                        <i
                            className="fas fa-chevron-left"
                            onClick={this.showPrevious}
                        ></i>
                        {imgs && (
                            <p className="carrousel__img__number">
                                {this.state.imgIndex + 1}/{imgs.length}
                            </p>
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        )
    }
}

export default Carrousel
