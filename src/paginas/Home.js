import Header from '../components/header';
import Apresentacao from '../components/apresentacao';
import styled from 'styled-components';
import Divisao from '../components/divisao';
import Projetos from '../components/projetos';
import ImagemFundo from '../images/fundo_place_holder.jpg';
import Footer from '../components/footer';

 const Inicio = styled.div`
  padding: 80px 0;
  height: 100vh;
  width: 100%;
  background: url(${ImagemFundo}) no-repeat center center;
  background-size: cover;
  background-color: #FF3F00;
  background-blend-mode: overlay;
`;

export const AppGeral = styled.div`
  font-family: "Just Me Again Down Here", cursive;
  overflow-x: hidden;
`;

export const TextoConstrucao = styled.h2`
  font-family: "Just Me Again Down Here", cursive;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 55px;
  text-align: center;
  margin-top: 450px;
`;



function Home() {
    return (
      <AppGeral>
        <Inicio>
            <Header />
          <TextoConstrucao>Introdução a robótica com projetos simples</TextoConstrucao>
        </Inicio>
        <Apresentacao />
        <Projetos />
        <Footer />
      </AppGeral>
    );
  }
  
  export default Home;