import '../styles/About.css'
import aboutImg from '../imgs/about__img.jpeg'
import Dropdown from '../components/Dropdown'

const Abouts = [
    { title: 'Fiabilité', details:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'},
    { title: 'Respect', details:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'},
    {title: 'Service', details:'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'},
    {title: 'Sécurité', details:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
]

// const AboutsDropdown = Abouts.forEach(element => 
//     <Dropdown title={element.title} details={element.details}/>
//     )

function About() {
    return (
        <div className="about">
            <img src={ aboutImg } alt='Mountains' className="about__img" />
            <div>
                <Dropdown title={Abouts[0].title} details={Abouts[0].details}/>
                <Dropdown title={Abouts[1].title} details={Abouts[1].details}/>
                <Dropdown title={Abouts[2].title} details={Abouts[2].details}/>
                <Dropdown title={Abouts[3].title} details={Abouts[3].details}/>
            </div>
        </div>
    )
}

export default About