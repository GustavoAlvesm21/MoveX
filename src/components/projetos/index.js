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
`;

function Projetos() {
    return (
        <GridProjetos>
            <BoxProjetos href="#" backgroundImage={PlaceHolder}>
                Projeto
            </BoxProjetos>
            <BoxProjetos href="#" backgroundImage={PlaceHolder}>
                Projeto
            </BoxProjetos>
        </GridProjetos>
    );
}

export default Projetos;