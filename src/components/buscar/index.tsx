 import ImgLupa from '../../assets/lupa.svg'
 import ImgFundo from '../../assets/fundo-busca.png'
import { Pesquisa } from './styles'
import react from 'react'

interface IProcurarProps {
    onChange: (value: string) => void;
    };


 export function Procurar({onChange}:IProcurarProps) {
         return(
        <Pesquisa>
            <div className="DOIS" style= {{ background:  `url(${ImgFundo})`, backgroundSize: 'cover', height: '281px', backgroundRepeat: 'no-repeat' }}>

            <input type="text" onChange={(event)=>onChange(event.target.value)}placeholder="Digite aqui sua busca..." /> 

            <button type="submit">
                
            <img src={ImgLupa} alt="imagem lupa" />
        </button>
            </div>
        </Pesquisa>       
    )
}