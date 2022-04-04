import react from 'react';
import {
    Overlay, 
    Container,
    Footer,
    Corpo,
    Close,
} from './styles';
import {useState} from 'react';
import lixo from "../../assets/lixeira.svg";
import ErroModal from "../indisponivel";



export default function DeleteModal({closeModal}){
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [erro, setErro] = useState(false)


    return(
        <Overlay>
            <Container>                
                <Close><button className="fecha" onClick={() => closeModal(false) }> x </button></Close>    
                    <Corpo>     
                    <div className="lixao">               
                        <img src={lixo} alt="lixeira" />                    
                    </div>
                        <h1>Excluir</h1>
                        <p>CERTEZA QUE DESEJA EXCLUIR?</p>
                    </Corpo> 
                <Footer>


                    
                    <button className="first" type="button" 
                            onClick={() => {
                            setErro(true)}} >
                    Excluir
                    </button> 
                    {erro && <ErroModal closeModal={setErro} />}







                    <button className="second" type="button"onClick={() => closeModal(false) }>
                        cancelar
                    </button>
                    {openDeleteModal && <DeleteModal closeModal={setOpenDeleteModal} />}
                </Footer>                     
            </Container>
        </Overlay>
    )

}