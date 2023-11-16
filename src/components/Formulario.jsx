import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export const Formulario = ({ posicao, placeholder1, placeholder2 }) => {

    const [senha, setSenha] = useState()

    return (
        <form style={{ top: posicao }} className="formulario centralizar alinhar">
            <div className="container-1 centralizar alinhar">
                <h2>Entrar</h2>
                <input type="email" className="entrada-de-dados" placeholder={placeholder1} />
                <input
                    type="password"
                    className="entrada-de-dados"
                    placeholder={placeholder2}
                    onChange={(e) => setSenha(e.target.value)}
                />

                {/* <button type="button" className="button-login">
                    Entrar
                </button> */}

                <Link className="button-login centralizar alinhar" to='/perfil'>
                    Entrar
                </Link>

                <div className="container-options centralizar">
                    <div>
                        <input type="checkbox" name="" id="lembre-de-mim" />
                        <label htmlFor="lembre-de-mim">Lembre-se de mim</label>
                    </div>
                    <div>
                        <a href="#">Precisa de ajuda?</a>
                    </div>
                </div>
            </div>

            <div className="container-2 centralizar ">
                <p>
                    Novo por aqui?
                    <span>
                        <a href="#"> Assine Agora</a>
                    </span>
                </p>
                <p>
                    Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                    <span>
                        <a href="#"> Saiba mais</a> .
                    </span>
                </p>
            </div>
        </form>
    )
}