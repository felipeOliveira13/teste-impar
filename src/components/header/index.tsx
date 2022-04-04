 import logoImg from '../../assets/logo-teste.png'
import { Container } from './styles'

 
 export function Header () {
    return(
        <Container>
            <img src={logoImg} alt="teste impar" />
        </Container>
    )
}