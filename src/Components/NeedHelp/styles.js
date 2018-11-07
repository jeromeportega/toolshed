import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import helpImage from '../Landing/images/help.png';

export const NeedHelpContainer = styled.div`
    height: calc(100vh - 150px);

    .columns-container {
        display: flex;
        justify-content: space-between;
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

    .orange-opacity {
        background-color: ${props => props.theme.colors.activeOrange};
        width: 100%;
        height: 100%;
        opacity: .5;
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

    .form-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .header-text {
        display: block;
        text-align: center;
        font-size: 40px;
        margin-top: 50px;
        font-weight: 200;
        margin-bottom: 100px;
    }

    .form-container {
        max-width: 550px;
        width: 100%;
        input {
            margin-bottom: 40px;
        }
    }

    .input {
        width: 100%;
        border: none;
        border-bottom: 2px solid black;
        font-size: 24px;
        ${props => !props.autoValue && css`
            font-style: italic;
        `}
        &:focus {
            outline: none;
            border-bottom: 2px solid ${props => props.theme.colors.activeOrange};
        }
        &:active {
            outline: none;
        }
    }
`;

export const StyledBtn = styled(Link)`
    width: 288px;
    height: 80px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    background-color: ${props => props.theme.colors.activeOrange};
    letter-spacing: 2px;
    text-transform: uppercase;
    z-index: 1;
    border: none;
    text-decoration: none;
    &:hover {
        color: black;
        background-color: white;
        border: 2px solid black;
    }
    &:active {
        outline: none;
    }
    &:focus{
        outline: none;
    }
`;