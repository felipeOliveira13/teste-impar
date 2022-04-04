 import logoImg from '../../assets/logo-teste.png'
import { Container } from './styles'
import ImgFundo from '../../assets/lupa.svg'
 
 export function Header () {
    return(
        <Container>
            <div>
            <img src={logoImg} alt="teste impar" />
            </div>
        </Container>
    )
}