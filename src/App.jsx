import { SetStateAction, useEffect, useState } from "react";
import { Clique } from "./components/botao";
import {Procurar } from "./components/buscar";
import { Header } from "./components/header";
import api from "./services/api";
import {GlobalStyle} from "./styles/global";
import soco from "../src/assets/mao.svg";
import lixo from "../src/assets/lixeira.svg"
import lapis from "../src/assets/lapis.svg";
import FormModal from "../src/components/FormModal";
import EditForm from "../src/components/EditForm";
import DeleteModal from "../src/components/DeleteModal"



import {
  Overlay, 
  Container,
  // Header,
  Footer,
  Corpo
} from '../src/components/FormModal/styles';


export function App() {
  const[text, setText] = useState('')
  const[items, setItems] = useState([])

  useEffect(() =>{  
    api.get('https://pokeapi.co/api/v2/pokemon') 
      .then(response => {
        console.log('teste', response);
        setItems(response.data.results);
        console.log(items);
      }).catch(error => console.log(error))
      
    }, []); 
    
    const pesquisa = items.filter((f) => f.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    return (
      <>
     <Header/>
     <Procurar 
     value={text} 
     onChange={(search) => setText(search)}/>
     <Clique/>



       <div className="nomes-pokemon">
         <div className="ajustes">
         {pesquisa.map ((pokemon)=> (
           <div className="boa">
              <img className={'soco'} src={soco} alt="" />
              <p key={pokemon.url}>
                {pokemon.name}
              </p>   




            <div className="botao">  
              <button type="button" 
                onClick={() => {
                setOpenDeleteModal(true)}} className="b1" >
                <img src={lixo} alt="" />
                Excluir
              </button> 
              {openDeleteModal && <DeleteModal closeModal={setOpenDeleteModal} />}



              <button type="button" 
                onClick={() => {
                setOpenEditModal(true)}} className="b2">
                <img src={lapis} alt="" />
                Editar
              </button>
              {openEditModal && <EditForm closeModal={setOpenEditModal} />}
            </div> 











           </div>
         )) }
         </div>
       </div>
   
     <GlobalStyle/>
    </>
  );
}

export default App;

