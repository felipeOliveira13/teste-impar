import react from 'react';
import {
    Overlay, 
    Container,
    Header,
    Footer,
    Corpo,
    Close,
} from './styles';
import img from '../../assets/icone_criar.svg';
import {useState} from 'react';
import ErroModal from "../indisponivel";
import DisableModal from "../disable"


export default function EditForm ({closeModal}){
    const [erro, setErro] = useState(false)

    return(
        <Overlay>
            <Container>
                
                <Close><button className="fecha" onClick={() => closeModal(false) }> x </button></Close>
                <Header> 
                    <img src={img} alt="" />
                    <h1>Criar card</h1>
                </Header>     
                    <Corpo>
                    <p>DIGITE UM NOME PARA O CARD</p>
                    <input className="ajuda" type="text" placeholder="Digite o título" />
                    <p>INCLUA UMA IMAGEM PARA APARECER NO CARD</p>
                    <input className="anexo" type="file" placeholder="Digite o título" />
                    </Corpo> 
                <Footer>
                    <button type="button"onClick={() => {setErro(true)}} >
                    criar card
                    </button>
                    {erro && <DisableModal closeModal={setErro} />}
                </Footer>                     
            </Container>
        </Overlay>
    )

}