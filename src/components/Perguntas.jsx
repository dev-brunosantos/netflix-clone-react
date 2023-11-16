import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'


export const Perguntas = ({ pergunta, paragrafo1, paragrafo2 }) => {

    const [abrirResposta, setAbrirResposta] = useState(0)
    const [girar, setGirar] = useState()

    const abrirTexto = () => {
        for (var i = 0; i < 100; i++) {
            let num = `${i + 1}%`
            setAbrirResposta(num)
        }
        if (abrirResposta == '100%') {
            return (
                setAbrirResposta(0),
                setGirar('0deg')
            )
        }
        return (
            setAbrirResposta('100%'),
            setGirar('45deg')
        )
    }

    return (
        <div className='perguntas centralizar alinhar'>
            <div className="perguntas-titulo container centralizar"
                onClick={abrirTexto}
            >
                {/* <p>O que é Netflix?</p> */}
                <p>{pergunta}</p>
                <FaPlus
                    size={40}
                    style={{
                        rotate: girar
                    }}
                />
            </div>
            <div className="perguntas-texto perguntas-texto-animacao container centralizar alinhar" style={{ height: abrirResposta }}>
                <p className='paragrafos'>
                    {/* {pergunta1[0]} */}
                    {paragrafo1}
                </p>
                <p className='paragrafos'>
                    {/* {pergunta1[1]} */}
                    {paragrafo2}
                </p>
            </div>
        </div>
    )
}