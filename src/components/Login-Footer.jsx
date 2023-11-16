export const LoginFooter = ({ posicao }) => {
    return (
        <footer className="login-footer centralizar" style={{ bottom: posicao }}>
            <div className="box centralizar">
                <div className="container ">
                    <p>
                        Dúvidas? Ligue
                        <a href="#"> 0800 591 2876</a>
                    </p>

                    <a href="#">Perguntas frequentes</a>
                    <a href="#">Preferências de cookies</a>
                </div>
                <div className="container ">
                    <a href="#">Central de Ajuda</a>
                    <a href="#">Informações corporativas</a>
                </div>
                <div className="container ">
                    <a href="#">Termos de Uso</a>
                </div>
                <div className="container ">
                    <a href="#">Privacidade</a>
                </div>
            </div>
        </footer>
    )
}