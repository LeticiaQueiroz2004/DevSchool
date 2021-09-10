import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="perfil">
                <div> <img src="/assets/images/perfil.png" width="80px" /> </div>
                <div class="mensagem">Olá, Letícia Queiroz</div>
            </div>
            <div class="botoes">
                <div class="atualizar">
                    <button> <img src="/assets/images/refresh.svg" width="60px" /> </button>
                </div>
                <div class="sair"> 
                    <button> <img src="/assets/images/log-out.svg" width="60px" /> </button> 
                </div>
           </div>
        </Container>
    )
}