import styled from 'styled-components';
import { Link } from 'react-router-dom';

import helpImage from './images/help.jpg';
import expertsImage from './images/experts.jpg';
import differenceImage from './images/difference.jpg';

export const LandingContainer = styled.div`
    background-color: 'white';

    .nav-container {
        display: flex;
    }

    .logo {
        width: 150px;
        height: 150px;
        min-width: 150px;
    }

    .title-links-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .title {
        text-transform: uppercase;
        font-size: 40px;
        font-weight: 200;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }

    .links-contianer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .columns-container {
        display: flex;
        width: 100%;
        height: calc(100vh - 150px);
    }

    .column {
        width: 33%;
        height: 100%;
        position: relative;
    }

    .help {
        background-image: url(${helpImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .experts {
        background-image: url(${expertsImage});
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

export const StyledLink = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 25px;
    text-decoration: none;
    letter-spacing: 2px;
    color: black;
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