
import { useState } from 'react'
import tv from '../assets/tv.png'

export const Infor = ({ tela, titulo, txt, img, video, tamanhoDoVideo, posicaoDoVideo }) => {

    const [teste, setTeste] = useState(tela)

    return (
        <div className="infor centralizar">
            {
                teste == 1 ? (
                    <>
                        <div className='infor-txt'>
                            <h1> {titulo} </h1>
                            <p> {txt} </p>
                        </div>
                        <div className='infor-img centralizar'>
                            <img src={img} alt="" />
                            <video style={{ width: tamanhoDoVideo, top: posicaoDoVideo }}
                                src={video} autoPlay loop />
                        </div>
                    </>
                ) :
                    (
                        <>
                            <div className='infor-img centralizar'>
                                <img src={img} alt="" />
                                <video style={{ width: tamanhoDoVideo, top: posicaoDoVideo }}
                                    src={video} autoPlay loop />
                            </div>
                            <div className='infor-txt'>
                                <h1> {titulo} </h1>
                                <p> {txt} </p>
                            </div>
                        </>
                    )
            }
        </div>
    )
}