import {useEffect} from 'react'

 function Card() {
    useEffect(() => {
        fetch(`logements.json`)
             .then((response) => response.json()
             .then(( data ) => console.log(data))
             .catch((error) => console.log(error))
         )
     }, [])
     return(
        <div>coucou</div>
     )
 }

 export default Card