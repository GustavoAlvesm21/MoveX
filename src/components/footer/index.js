import styled from "styled-components";
import Texto from "../Texto";

const FooterStyle = styled.footer`
    display: flex;
    background-color: #FF3F00;
    height: 150px;
    flex-direction: column;
    justify-content: center;
    padding: 20px 90px;
    position: relative;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 90px;
    top: 20px;
    display: flex;
    gap: 40px;
`;

const Link = styled.a`
    color: black;
    text-decoration: none;
    font-size: 30px;
`;

function Footer() {
    return (
        <FooterStyle>
            <Link href="https://github.com/GustavoAlvesm21/MoveX" >Repositório MoveX</Link>
            <Texto>© 2021 - Todos os direitos reservados</Texto>
            <LinksContainer>
                <Link href="https://github.com/GustavoAlvesm21">GitHub: @ElismarSilva</Link>
                <Link href="https://github.com/ElismarSilva/MoveX/tree/master">GitHub: @GustavoAlvesm21</Link>
            </LinksContainer>
        </FooterStyle>
    );
}

export default Footer;