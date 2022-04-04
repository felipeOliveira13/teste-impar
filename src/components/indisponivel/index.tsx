import react from 'react';
import {
    Overlay, 
    Container,
    Footer,
    Corpo,
    Close,
} from './styles';
import img from '../../assets/icone_criar.svg';
import {useState} from 'react';

interface IErroModal  {
    closeModal: (value: boolean) => void;
    };

export default function ErroModal({closeModal}:IErroModal){

    return(
        <Overlay>
            <Container>
                
                <Close><button className="fecha" onClick={() => closeModal(false) }> x </button></Close>                     
                    <Corpo>
                    <h1>FUNCIONALIDADE INDISPONIVEL</h1>
                    </Corpo>                     
            </Container>
        </Overlay>
    )

}