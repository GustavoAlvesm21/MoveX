import styled from "styled-components";
import PlaceHolder from "../../images/place_holder.png";

const GridProjetos = styled.div`
    margin-left: 0; 
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const BoxProjetos = styled.a`
    background-image: url(${props => props.backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 7px;
    display: flex; 
    width: 340px;
    height: 540px;
    margin: 150px;
    text-decoration: none;
    color: white; /* Adicione esta linha para garantir que o texto seja visível */
`;

function Projetos() {
    return (
        <GridProjetos>
            <BoxProjetos href="/projetoUm" backgroundImage={PlaceHolder}>
                Projeto Um
            </BoxProjetos>
        </GridProjetos>
    );
}

export default Projetos;