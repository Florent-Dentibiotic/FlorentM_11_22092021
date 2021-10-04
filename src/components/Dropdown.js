import { Component } from 'react'
import '../styles/Dropdown.css'

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1,
            details: '',
            thisChevron: <i className="fas fa-chevron-down"></i>,
        }
    }

    showDetails = () => {
        if (this.state.counter % 2 === 0) {
            this.setState({
                counter: this.state.counter + 1,
                details: '',
                thisChevron: <i className="fas fa-chevron-down"></i>,
            })
        } else {
            this.setState({
                counter: this.state.counter + 1,
                details: (
                    <div className="dropdown__details">
                        {this.props.details}
                    </div>
                ),
                thisChevron: <i className="fas fa-chevron-up"></i>,
            })
        }
    }

    render() {
        const { title } = this.props

        return (
            <div className="dropdown">
                <div className="dropdown__title" onClick={this.showDetails}>
                    <h3>{title}</h3>
                    {this.state.thisChevron}
                </div>
                {this.state.details}
            </div>
        )
    }
}

export default Dropdown
