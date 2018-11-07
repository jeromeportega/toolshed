import styled from 'styled-components';
import { Link } from 'react-router-dom';

import helpImage from './images/help.png';
import differenceImage from './images/difference.jpg';

export const LandingContainer = styled.div`
    background-color: 'white';

    .columns-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: calc(100vh - 150px);
    }

    .column {
        width: 49.9%;
        height: 100%;
        position: relative;
    }

    .help {
        background-image: url(${helpImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .difference {
        background-image: url(${differenceImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .orange-opacity {
        background-color: ${props => props.theme.colors.activeOrange};
        width: 100%;
        height: 100%;
        opacity: .4;
        position: absolute;
    }

    .text-button-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .column-title {
        display: block;
        color: white;
        font-size: 40px;
        text-align: center;
        z-index: 1;
        margin-bottom: 65px;
    }

    .column-body {
        display: block;
        color: white;
        font-size: 18px;
        font-weight: 200;
        text-align: center;
        z-index: 1;
        padding: 0 20px;
        margin-bottom: 90px;
    }
`;

export const StyledBtn = styled(Link)`
    width: 288px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: black;
    letter-spacing: 2px;
    background-color: white;
    text-transform: uppercase;
    z-index: 1;
    border: none;
    text-decoration: none;
    &:hover {
        color: white;
        background-color: ${props => props.theme.colors.activeOrange};
    }
    &:active {
        outline: none;
    }
    &:focus{
        outline: none;
    }
`;