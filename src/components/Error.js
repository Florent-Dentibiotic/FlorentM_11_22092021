import '../styles/Error.css'

function Error(){
    return <div className='error__404'>
        <h2>404</h2>
        <h3>Oups ! La page que vous demandez n'existe pas.</h3>
        <a href='index.html'>Retournez sur la page d'accueil</a>
    </div>
}

export default Error