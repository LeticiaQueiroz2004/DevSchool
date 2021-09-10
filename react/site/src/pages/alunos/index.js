import Cabecalho from '../../componentes/cabecalho'
import Menu from '../../componentes/menu'

import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <Menu/>
            <Cabecalho/>
        </Container>
    )
}