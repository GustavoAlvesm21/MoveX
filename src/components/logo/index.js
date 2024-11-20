import logo from '../../images/logo01.svg';
import './style.css';
import styled from 'styled-components';

const Fonte = styled.p`
    font-family: "Just Me Again Down Here", cursive;
    font-weight: 400;
    font-style: normal;
    color: white;
`;

const LogoStyleImg = styled.img`
    margin-right: 10px;
    margin-left: 35px;
    height: 96px;
    width: 96px;
`;

const AppLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 50px;
`;

function Logo() {
    return (
        <AppLogo>
            <LogoStyleImg src={logo} alt="Logo" />
            <Fonte><strong>MoveX</strong></Fonte>
        </AppLogo>
    );
}

export default Logo;