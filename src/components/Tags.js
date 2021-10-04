import { Component } from 'react'
import '../styles/Tags.css'

class Tags extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const tags = this.props.tags
        console.log(tags)

        return (
            <ul className="tags__list">
                {tags &&
                    tags.map((tag) => (
                        <li className="tags__list__item" key={`tag-${tag}`}>
                            {tag}
                        </li>
                    ))}
            </ul>
        )
    }
}

export default Tags
