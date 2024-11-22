import Logo from '../logo';
import OpcoesHeader from '../opções-header'; 
import styled from 'styled-components';

const HeaderStyle = styled.header`
    background-color: transparent;
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

function Header() {
    return (
        <HeaderStyle>
            <Logo/>
            <OpcoesHeader/>
        </HeaderStyle>
    );
}

export default Header;