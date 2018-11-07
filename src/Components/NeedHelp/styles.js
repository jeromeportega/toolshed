import styled from 'styled-components';
import helpImage from '../Landing/images/help.jpg';

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

    .form-column {
    display: flex;
    flex-direction: column;
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
`;