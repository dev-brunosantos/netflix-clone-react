import { CardPerfil } from "./cards";

export default function Usuario() {
    return(
        <div className="usuario centralizar alinhar">
            <div className="container centralizar alinhar">
                <h1>Quem está assistindo?</h1>

                <div className="container-perfil centralizar">
                    <CardPerfil 
                        image={'../../../public/perfil.jpg'}
                        titulo="Bruno Santos"
                    />
                    <CardPerfil 
                        image={'../../../public/perfil-infantil.jpg'}
                        titulo="Infantil"
                    />
                    <CardPerfil 
                        image={'../../../public/novo-perfil.png'}
                        titulo="Adicionar perfil"
                    />
                    
                </div>

                <button type="button" className="gerenciar-perfil">
                    Gerenciar perfis
                </button>
            </div>
        </div>
    )
}