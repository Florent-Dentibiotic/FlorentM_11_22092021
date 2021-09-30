import { Component } from 'react'

class Tags extends Component {
    constructor(props) {
    super(props)
    this.state = {}
}

    render(){
        const tags = this.props

        return(
        <div className='tag'>
            <p>{tags}</p>
        </div>)
    }
}

export default Tags