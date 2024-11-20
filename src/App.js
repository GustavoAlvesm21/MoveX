import Header from './components/header';
import Texto from './components/Texto';
import TextoDestacado from './components/TextoDestacado';
import Apresentacao from './components/apresentacao';
import styled from 'styled-components';
import Divisao from './components/divisao';
import Projetos from './components/projetos';

const Inicio = styled.div`
  padding: 80px 0;
  height: 778px;
  width: 100%;
  background-color: #FF3F00;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 60px 0;
    height: 600px;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
    height: 500px;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
    height: 400px;
  }
`;

const AppGeral = styled.div`
  font-family: "Just Me Again Down Here", cursive;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden; // Prevent horizontal scrolling
  /* Uncomment the following lines to add a background image */
  /* background-image: url('/src/images/fundo_place_holder.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
`;

const TextoConstrucao = styled.h2`
  font-family: "Just Me Again Down Here", cursive;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 55px;
  text-align: center;
  margin-top: 450px;
`;

const Titulo = styled.h2`

  margin-top: 100px;
  text-align: center;
  font-size: 50px; 

`;

function App() {
  return (
    <AppGeral>
      <Header />
      <Inicio>
        <TextoConstrucao>Introdução a robótica com projetos simples</TextoConstrucao>
      </Inicio>
      <Apresentacao />
      <Divisao />
      <Titulo> Veja nossos projetos </Titulo>
      <Projetos />
    </AppGeral>
  );
}

export default App;