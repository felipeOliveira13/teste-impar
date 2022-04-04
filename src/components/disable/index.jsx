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



export default function DisableModal({closeModal}){

    return(
        <Overlay>
            <Container>
                
                <Close><button className="erro" onClick={() => closeModal(false) }> x </button></Close>                     
                    <Corpo>
                    <h1>FUNCIONALIDADE INDISPONIVEL</h1>
                    </Corpo>                     
            </Container>
        </Overlay>
    )

}