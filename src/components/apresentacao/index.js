import React from 'react';
import styled from 'styled-components';
import TextoDestacado from '../TextoDestacado';
import Texto from '../Texto';
import Walee from '../../images/walle.png';
import PlaceHolder from '../../images/place_holder.png';
import breakpoints from '../styles/breakpoints';

const ContainerApresentacao = styled.div`
  width: 100vw;
  height: 100vh;
`;

const WaleeImg = styled.img`
  display: flex;
  padding: 0 150px;
  margin-left: auto;
`;

const Deladin = styled.div`
  display: flex;
  unicode-bidi: isolate;
  flex-direction: row;
`;

const IntroImg = styled.img`
  display: flex;
  padding: 0 130px;
  margin-right: 0;
  margin-top: 50px;
  width: 724px;
  height: 599px;
  
`;

const TextoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 250px;
  margin-left: auto;
  margin-right: 0;
  row-gap: 20px;
`;

function Apresentacao() {
  return (
    <ContainerApresentacao>
      <WaleeImg src={Walee} alt="Walee" />
      <Deladin>
        <IntroImg src={PlaceHolder} alt="Place-Holder" />
        <TextoDiv>
          <TextoDestacado>
            This is a highlighted text example. It should be concise and informative.
          </TextoDestacado>
          <Texto>
            This is a regular text example. It should provide additional information and context.
          </Texto>
        </TextoDiv>
      </Deladin>
    </ContainerApresentacao>
  );
}

export default Apresentacao;