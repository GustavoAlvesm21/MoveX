import React from 'react';
import styled from 'styled-components';
import TextoDestacado from '../TextoDestacado';
import Texto from '../Texto';
import Walee from '../../images/walle.png';
import imagemApresentacao from '../../images/imagem_apresentacao.webp';

const ContainerApresentacao = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WaleeImg = styled.img`
  display: block;
  padding: 0 150px;
  margin-left: auto;
`;

const Deladin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;

const IntroImg = styled.img`
  margin: 50px;
  width: 724px;
  height: 599px;
  margin-left: 100px;

`;

const TextoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 100px;
  row-gap: 20px;

`;

function Apresentacao() {
  return (
    <ContainerApresentacao>
      <WaleeImg src={Walee} alt="Walee" />
      <Deladin>
        <IntroImg src={imagemApresentacao} alt="Place-Holder" />
        <TextoDiv>
          <TextoDestacado>
            Muitas pessoas que querem aprender robótica encontram dificuldades devido à complexidade dos conceitos técnicos 
            e à falta de recursos que tornem o aprendizado acessível e prático.
          </TextoDestacado>
          <Texto>
            O MoveX tem como objetivo apresentar conceitos básicos de robótica de uma maneira simples e acessível.
            O excesso de lixo é prejudicial ao meio ambiente. Os "lixões" continuam sendo o destino da maior parte dos resíduos acarretando graves prejuízos ao meio ambiente e a qualidade de vida da população. 
            Portanto, todos os projetos usam materiais recicláveis como por exemplo o papelão.
          </Texto>
        </TextoDiv>
      </Deladin>
    </ContainerApresentacao>
  );
}

export default Apresentacao;