import styled from "styled-components";
import estilete from "../../images/estilete.png";

const Estilete = styled.div`
    margin: 0;
`;

const DivisaoImg = styled.img`
    display: block;
    margin: 150px auto 0 auto;
    width: 724px;
    height: 150px;

    @media (max-width: 768px) {
        display: none;
    }
`;

function Divisao() {
    return (
        <Estilete>
            <DivisaoImg src={estilete} alt="estilete" />
        </Estilete>
    );
}

export default Divisao;