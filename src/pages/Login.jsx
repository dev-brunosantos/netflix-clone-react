import { Formulario } from "../components/Formulario";
import { LoginFooter } from "../components/Login-Footer";

export default function Login() {
    return (
        <div className="login centralizar alinhar">
            <a href="#" className="logomarca" style={{top: '2.5%', left: '3%'}}>
                <img src="../../public/netflix.png" alt="" />
            </a>
            <div className="background-img"></div>
            <div className="background-color"></div>
            <Formulario
                posicao={'10%'}
                placeholder1="Email ou número de telefone"
                placeholder2="Senha"
            />
            <LoginFooter posicao={0} />
        </div>
    )
}