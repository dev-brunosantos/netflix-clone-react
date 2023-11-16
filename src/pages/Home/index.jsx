import { Link } from "react-router-dom"
import { Infor } from "../../components/Infor"
import { Perguntas } from "../../components/Perguntas"
import { Input_Button } from "../../components/Input_Button"

import {
    assistaNaTv, dispositivos, infantil, download
} from '../../database/infor.json'
// import {
//     titulos, pergunta1, pergunta2, pergunta3,
//     pergunta4, pergunta5, pergunta6
// } from '../../database/perguntas.json'

import questoes from '../../database/perguntas.json'

import tv from '../../assets/tv.png'
import telas from '../../assets/dipositivos.png'
import imgInfantil from '../../assets/infantil.png'
import mobile from '../../assets/mobile.jpg'

export default function Home() {

    const simbolo = " >"

    return (
        <div className="home centralizar alinhar">
            <section className="part-1 centralizar alinhar">
                <div className="part-1_menu centralizar">
                    <a href="/" className="logomarca centralizar">
                        <img src="../../public/netflix.png" alt="" />
                    </a>

                    <div className="options centralizar">
                        <select name="" id="">
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                        </select>

                        {/* <button type="button" className="botao">
                            Entrar
                        </button> */}

                        <Link to='/login' className="botao button centralizar alinhar">
                            Entrar
                        </Link>
                    </div>
                </div>
                <div className="part-1_textos centralizar alinhar">
                    <h1>
                        Filmes, séries e muito mais, sem limites
                    </h1>
                    <p>
                        Assista onde quiser. Cancele quando quiser.
                        <br />
                        Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
                    </p>
                    <div className="centralizar">
                        <input type="email" placeholder="Email" />
                        <button type="button" className="botao btn-vamos-la">Vamos lá {simbolo}</button>
                    </div>
                </div>

                <div className="planos">
                    {/* 
                    ADICIONAR NOVAS LINHAS DE CODIGO AQUI
                */}
                </div>
            </section>
            <section className="part-2 centralizar alinhar">
                <Infor
                    titulo={assistaNaTv.titulo}
                    txt={assistaNaTv.txt}
                    img={tv}
                    video={assistaNaTv.video}
                    tela={1}
                />
                <Infor
                    titulo={dispositivos.titulo}
                    txt={dispositivos.txt}
                    img={telas}
                    video={dispositivos.video}
                    tamanhoDoVideo={'58%'}
                    posicaoDoVideo={70}
                    tela={2}
                />
                <Infor
                    titulo={infantil.titulo}
                    txt={infantil.txt}
                    img={imgInfantil}
                    tela={1}
                />
                <Infor
                    titulo={download.titulo}
                    txt={download.txt}
                    img={mobile}
                    tela={2}
                />
            </section>
            <section className="part-3 centralizar alinhar">
                <h1 style={{ color: '#282828', fontSize: '50px', marginBottom: '1rem' }}>Perguntas frequentes</h1>

                {
                    questoes.map(questao => (
                        <>
                            <Perguntas pergunta={questao.titulos} paragrafo1={questao.paragrafo1} paragrafo2={questao.paragrafo2} />
                        </>
                    ))
                }

                <div style={{ width: '70%', height: '200px' }} className="centralizar alinhar">
                    <p style={{ fontSize: '20px', color: '#282828', marginTop: '3rem' }}>
                        Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
                    </p>

                    <Input_Button />
                </div>

            </section>
            <div className="background-color"></div>
        </div>
    )
}