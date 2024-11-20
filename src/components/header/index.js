import Logo from '../logo';
import OpcoesHeader from '../opções-header'; 
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const HeaderStyle = styled.header`
    background-color: #FF3F00;
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