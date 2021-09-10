import styled from 'styled-components' 

const Container = styled.div`
    .cabecalho {
    display: flex;
    flex-direction: row;
    padding: 0.5em 1em;
    justify-content: space-between;
    align-items: center;
    }
    .mensagem {
    font-family: Robotoregular;
    font-size: 0.9em;
    }

    .perfil,
    .botoes {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    }

    .sair button, .atualizar button {
        border-radius: 50%;
        background-color: #986CDF;
        width: 44px;
        height: 44px;
        border: none;
        margin: .4em;
        
    }
`

export { Container }