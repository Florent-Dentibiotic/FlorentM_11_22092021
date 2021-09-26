import '../styles/Footer.css'
import logo from '../imgs/LOGO-2.png'

function Footer(){
    return(
        <div className="footer">
            <div>
                <img src={logo} alt="Kasa"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer