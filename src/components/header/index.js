import Logo from '../logo';
import OpcoesHeader from '../opções-header'; 
import styled from 'styled-components';

const HeaderStyle = styled.header`
    background-color: transparent;
    display: flex;
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