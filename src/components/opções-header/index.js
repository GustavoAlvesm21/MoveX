import styled from 'styled-components';

const Opcao = styled.li`
  color: white;
  font-family: "Just Me Again Down Here", cursive;
  font-size: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  min-width: 120px;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  margin: 0 55px;
`;

const Opcoes = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;

const textoOpcoes = ['Projetos', 'App'];

function OpcoesHeader(){
    return(
        <Opcoes>
          {textoOpcoes.map((texto) => {
            return (
              <Opcao><p>{texto}</p></Opcao>
            );
          })}
        </Opcoes>
    );
}

export default OpcoesHeader;
