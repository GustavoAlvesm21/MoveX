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

export const LinkCustomizado = styled.a`
  text-decoration: none;
  color: white;
  transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const textoOpcoes = ['Github do App'];
const urls = ['https://github.com/ElismarSilva/MoveX/tree/master'];

function OpcoesHeader(){
  return(
      <Opcoes>
        {textoOpcoes.map((texto, index) => {
          return (
            <Opcao key={index}>
              <LinkCustomizado href={urls[index]} target="_blank" rel="noopener noreferrer">
                <p>{texto}</p>
              </LinkCustomizado>
            </Opcao>
          );
        })}
      </Opcoes>
  );
}

export default OpcoesHeader;
