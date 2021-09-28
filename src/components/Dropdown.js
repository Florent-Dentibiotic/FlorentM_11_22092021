import styled from 'styled-components'
import colors from '../utils/style/color'
import { Component } from 'react'

const DropdownSection = styled.section`
    width: 1023px;
    margin: 33px auto;
`

const DropdownTitle = styled.div`
    color: #fff;
    background-color: ${colors.primary};
    border-radius: 5px;
    font-size: 24px;
    font-weight: 500;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    z-index: 10;
`
const DropdownDetails = styled.div`
    background-color: ${colors.grey};
    margin-top: 0;
    z-index: 0;
    padding: 18px;
    color: ${colors.primary};
    font-size: 24px;
    font-weight: 400;
    border-radius: 5px;
`

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const chevronDown = <i className="fas fa-chevron-down"></i>
        //const chevronUp = <i className="fas fa-chevron-up"></i>
        const {title, details} = this.props

        return(
            <DropdownSection>
                <DropdownTitle>
                    <h3>{title}</h3>
                    {chevronDown}
                </DropdownTitle>
                <DropdownDetails>
                    {details}
                </DropdownDetails>
            </DropdownSection>
        )
        
    }
}

export default Dropdown