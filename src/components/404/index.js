import React from 'react'

function Page404 (){
    return(
        <div className="jumbotron">
            <h2 className="display-4">Página no encontrada.</h2>
            <p className="lead">
                La página a la que intenta acceder no se encuentra o no se permite el acceso a la misma
            </p>
            <a className="btn btn-primary btn-lg" href="/">Volver</a>
        </div>
    )
}

export default Page404