export const CardPerfil = ({titulo, image}) => {
    return(
        <div className="card-perfil centralizar alinhar">
            <img src={image} alt="" />

            <p>
                {titulo}
            </p>
        </div>
    )
}