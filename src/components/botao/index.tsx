import FormModal from "../FormModal";
import { Novo, Card } from "./styles";
import {useEffect, useState} from 'react';

export function Clique(){

    const [openModal, setOpenModal] = useState(false)

    return(
        <Novo>    
            <Card>             
                <h1>Resultado de Busca</h1>
                <button 
                type="button" 
                onClick={() => {
                setOpenModal(true)}}>
                    Novo Card
                </button> 
                {openModal && <FormModal closeModal={setOpenModal} />}               
            </Card>   
        </Novo>
    )
}