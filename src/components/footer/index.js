import styled from "styled-components";
import Texto from "../Texto";

const FooterStyle = styled.footer`
    display: flex;
    background-color: #FF3F00;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    position: relative;
    
    @media (max-width: 600px) {
        padding: 20px 10px;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const Link = styled.a`
    color: black;
    text-decoration: none;
    font-size: 20px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

function Footer() {
    return (
        <FooterStyle>
            <LinksContainer>
                <Link href="https://github.com/GustavoAlvesm21/MoveX" >Repositório MoveX</Link>
                <Link href="https://github.com/GustavoAlvesm21">GitHub: @GustavoAlvesm21</Link>
                <Link href="https://github.com/ElismarSilva/MoveX/tree/master">GitHub: @ElismarSilva</Link>
            </LinksContainer>
        </FooterStyle>
    );
}

export default Footer;