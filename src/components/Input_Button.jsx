export const Input_Button = () => {

    const simbolo = " >"

    return (
        <div className="input-container centralizar">
            <input type="email" placeholder="Email" className="input-email"/>
            <button type="button" className="input-button botao btn-vamos-la">Vamos lá {simbolo}</button>
        </div>
    )
}