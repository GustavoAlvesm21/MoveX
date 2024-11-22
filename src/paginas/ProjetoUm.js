import Header from "../components/header";
import Texto from "../components/Texto";
import TextoDestacado from "../components/TextoDestacado";
import { Inicio, AppGeral, TextoConstrucao } from "./Home";
import styled from "styled-components";
import { DivTextoPageToda } from "../components/div-texto-page-toda";
import Footer from "../components/footer";
import ImagemFundo from '../images/roboum.jpeg';
import ImagemCorteParteUm from '../images/imagem_corte_1.png';
import ImagemCorteParteDois from '../images/imagem_corte_2.png';



const InicioProjUm= styled.div`
padding: 80px 0;
height: 100vh;
width: 100%;
background: url(${ImagemFundo}) no-repeat center center;
background-size: cover;
background-color: rgba(255, 63, 0, 0.5); /* Ajuste a opacidade aqui */
background-blend-mode: overlay;
`;

export const Itens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
    gap: 150px;

    @media (max-width: 1200px) {
        gap: 100px;
    }

    @media (max-width: 992px) {
        gap: 50px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

export const Caixa = styled.div`
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 400px;
    height: auto;
    text-align: left;
    margin: 0 20px;

    @media (max-width: 768px) {
        width: 90%;
        margin: 0;
    }
`;
export const MeuStrong = styled.strong`

    color: #FF3F00;

`;

function ProjetoUm() {
    return (
        <AppGeral>
            <InicioProjUm>
                <Header />
                <TextoConstrucao>MoveX-E</TextoConstrucao>
            </InicioProjUm>
            <Itens>
                <Caixa>
                    <TextoDestacado>Material</TextoDestacado>
                    <Texto>- Papelão</Texto>
                    <Texto>- Parafusos</Texto>
                    <Texto>- EVA</Texto>
                    <Texto>- ESP8266</Texto>
                    <Texto>- Servos motores</Texto>
                    <Texto>- Jumpers</Texto>
                    <Texto>- Regulador de tensão </Texto>
                </Caixa>
                <Caixa>
                    <TextoDestacado>Ferramentas</TextoDestacado>
                    <Texto>- Tesoura</Texto>
                    <Texto>- Estilete</Texto>
                    <Texto>- Pistola de cola quente</Texto>
                    <Texto>- Chaves para parafusos</Texto>
                </Caixa>
            </Itens>
            <DivTextoPageToda>
                <TextoDestacado>Informações</TextoDestacado>
                <Texto>Este projeto visa construir um robô de papel utilizando o microcontrolador ESP8266 para controle remoto.
                     O robô é movido por servos motores, que controlam as rodas e uma garra. Utilizando componentes simples e acessíveis, como papel, 
                     servos e o ESP8266, o projeto permite criar um robô funcional com controle via Wi-Fi. 
                     O objetivo é demonstrar como é possível combinar tecnologias de baixo custo para desenvolver um robô de forma prática e acessível, ideal para iniciantes em robótica.
                </Texto>
            </DivTextoPageToda>
            <DivTextoPageToda>
                <TextoDestacado>Passo 1: Montagem do Robô de Papel</TextoDestacado>
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <img src={ImagemCorteParteUm} alt="Montagem do Robô de Papel" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <img src={ImagemCorteParteDois}alt="Montagem do Robô de Papel" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <Texto>
                    <TextoDestacado>1.1. Corte e Montagem das Peças de Papelão</TextoDestacado>
                    Utilize uma cola quente e parafusos para unir as partes cortadas. Se possível, use papel cartão ou papel mais rígido para dar mais estabilidade à estrutura.
                </Texto>
                <Texto>
                    <TextoDestacado>1.2. Fixação dos servos</TextoDestacado>
                    Para as rodas, posicione os dois servos 360° na parte inferior do robô, onde as rodas serão integradas. 
                    Garanta que os servos fiquem bem alinhados para que as rodas possam se mover sem obstáculos.
                    Para a garra, oloque o servo 180° na lateral  do robô que tem um retângulo como está especificado no molde e fixa um dos lados da garra no servo. 
                    E na outra lateral, fixa com parafuso o outro lado  da garra.
                </Texto>
                <Texto>
                    <TextoDestacado>1.3. Fixação das rodas</TextoDestacado>
                    Conecte as rodas aos servos de 360°. 
                    Isso pode ser feito com o uso de adaptadores para servos ou fixação direta nas extremidades dos eixos dos servos.
                    Certifique-se de que as rodas girem livremente e de forma estável, sem obstruções.
                </Texto>
            </DivTextoPageToda>
            <DivTextoPageToda>
                <TextoDestacado>Passo 2: Conexões do circuito e programação</TextoDestacado>
                <Texto>
                    <TextoDestacado>2.1. Conexão do ESP8266 aos Componentes</TextoDestacado>
                    Para a conexão dos os servos, conecte o fio de controle (geralmente o fio amarelo ou laranja) de cada servo aos pinos digitais do ESP8266 
                    (D6 para uma roda, D7 para a outra, e D5 para a garra). O fio <MeuStrong>VCC</MeuStrong> de cada servo vai para <MeuStrong>3,3V ou Vin 5v</MeuStrong> do ESP8266.
                    O fio <MeuStrong>GND</MeuStrong> de cada servo vai para o <MeuStrong>GND</MeuStrong> do ESP8266.
                    Na conexão da fonte de energia, se estiver usando duas baterias de 3,7V, conecte-o ao regulador de tensão (se necessário) para garantir que a tensão fornecida ao ESP8266 seja 5V.
                    Mas se usar um power bank, conecte um cabo USB micro na saída e alimente o ESp8266.
                </Texto>
                <Texto>
                    <TextoDestacado>2.2. Código de Controle dos Servos</TextoDestacado>
                    Para acessar o código do projeto é só clicar GitHub do App no menu principal do site, no GitHub está
                     hospedado o código do projeto e o passo a passo de como utilizar e usar o aplicativo.
                </Texto>
            </DivTextoPageToda>
            <Footer />
        </AppGeral>
    );
}

export default ProjetoUm;