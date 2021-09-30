import { Component } from 'react'
import styled from 'styled-components'
import colors from '../utils/style/color'

const TagsUl = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0
`

const TagsLi = styled.li`
    min-width: 115px;
    border-radius: 10px;
    background-color: ${colors.primary};
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-right: 10px;
    padding: 5px
`

class Tags extends Component {
    constructor(props) {
    super(props)
    this.state = {}
}

    render(){
        const tags = this.props.tags
        console.log(tags)

        return(<TagsUl>
            {tags && tags.map(tag => <TagsLi key={`tag-${tag}`}>{tag}</TagsLi>)}
        </TagsUl>
        )
    }
}

export default Tags