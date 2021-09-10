import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
        .containerConteudo {
        background-color: #f5f5f5;
        padding: 2.5em;
        }

        .matriculaAlunos,
        .tabelaMatriculados {
        background-color: white;
        padding: 2.5em;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        margin: 0 0 2em 0;
        }

        .inputs {
        display: flex;
        flex-direction: row;
        font-family: Robotoregular;
        }

        input {
        padding: 0.6em;
        border: 1px solid #a8a8a8;
        border-radius: 0.4em;
        margin: 0.5em 1em 0.5em 0;
        }
        
        button {
        padding: 0em 3em;
        border-radius: 2em;
        border: none;
        background-color: #e911c6;
        color: white;
        cursor: pointer;
        outline: none;
        }

        .name {
        margin: 0 0 0 1.6em;
        }
        .curso {
        margin: 0 0 0 0.2em;
        }
        .titulo {
        font-family: Robotobold;
        font-size: 1.5em;
        padding: 0em 0em 1em;
        }

        thead {
        background-color: #986cdf;
        font-family: Robotobold;
        height: 50px;
        }

        tbody {
        background-color: #f5f5f5;
        font-family: Robotoregular;
        }

        td {
        text-align: left;
        height: 28px;
        padding: 1em;
        color: #6d6868;
        }

        .linhaAlternada {
        background-color: #fff;
        }

        th {
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
        }

        .tableAlunos {
        border-collapse: collapse;
        }

        .nomeAluno {
        width: 18em;
        }

        .acao {
        width: 3em;
        }
        .nomeTurma {
        width: 5em;
        }
        `
        const Conteudo = styled.div`
            display: flex;
            flex-direction: column;
            width: 100%;
        `
export { Container }