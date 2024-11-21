import Header from "../components/header";
import Texto from "../components/Texto";
import TextoDestacado from "../components/TextoDestacado";
import { Inicio, AppGeral, TextoConstrucao } from "./Home";
import styled from "styled-components";
import { DivTextoPageToda } from "../components/div-texto-page-toda";

export const Itens = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
    gap: 150px;
`;

export const Caixa = styled.div`
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 400px;
    height: auto;
    text-align: center;
`;



function ProjetoUm() {
    return (
        <AppGeral>
            <Inicio>
                <Header />
                <TextoConstrucao>Projeto X</TextoConstrucao>
            </Inicio>
            <Itens>
                <Caixa>
                    <TextoDestacado>Material</TextoDestacado>
                    <Texto>Texto normal</Texto>
                </Caixa>
                <Caixa>
                    <TextoDestacado>Ferramentas</TextoDestacado>
                    <Texto>Texto normal</Texto>
                </Caixa>
            </Itens>
            <DivTextoPageToda>
                <TextoDestacado>Informações</TextoDestacado>
                <Texto>Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                </Texto>
            </DivTextoPageToda>
            <DivTextoPageToda>
                <TextoDestacado>Passo 1</TextoDestacado>
                <Texto>Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                </Texto>
            </DivTextoPageToda>
            <DivTextoPageToda>
                <TextoDestacado>Passo 2</TextoDestacado>
                <Texto>Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                </Texto>
            </DivTextoPageToda>
            <DivTextoPageToda>
                <TextoDestacado>Passo 3</TextoDestacado>
                <Texto>Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                Texto normal Texto normalTexto normalTexto normalTexto normalTexto normalTexto normal
                </Texto>
            </DivTextoPageToda>
        </AppGeral>
    );
}

export default ProjetoUm;