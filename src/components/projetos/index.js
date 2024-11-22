import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GifRoboUm from '../../images/robo_MoveX.gif';
import Texto from "../Texto";

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const ProjectBox = styled.a`
    display: flex;    
    background-image: url(${props => props.backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 7px;
    width: 540px;
    height: 540px;
    margin: 20px;
    text-decoration: none;
    color: white;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Titulo = styled.h2`
    display: flex;
    text-align: center;
    font-size: 50px; 
    margin-top: 20px;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

function Projects() {
    return (
        <GridContainer>
            <Titulo>Veja nosso projetos</Titulo>
            <ProjectBox 
                href="/projectOne" 
                backgroundImage={GifRoboUm}>
            </ProjectBox>
        </GridContainer>
    );
}

// PropTypes
ProjectBox.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
};

export default Projects;