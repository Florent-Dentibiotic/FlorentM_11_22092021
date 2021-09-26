import '../styles/Dropdown.css'

let chevronDown = <i className="fas fa-chevron-down d-block"></i>
let chevronUp = <i className="fas fa-chevron-up d-none"></i>

function Dropdown({title, details}){
    return (
        <div className="dropdown">
            <div className="dropdown__title">
                <h3>{title}</h3>
                {chevronDown}
                {chevronUp}
            </div>
            <p className="dropdown__details d-none">
                {details}
            </p>
        </div>
    )
}

export default Dropdown