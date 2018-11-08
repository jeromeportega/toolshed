import styled from 'styled-components';

export const MarkerContainer = styled.div`
    display: flex;
    width: 100%;
    margin-left: 20px;
    background-color: #f6f6f6;
    border-bottom: 1px solid rgba(151, 151, 151, 0.4);
    padding: 10px;

    .address-container {
        display: flex;
        flex: 1 85%;
        flex-direction: column;
        margin-left: 20px;
    }

    .map-marker {
        object-fit: contain;
        height: 30px;
        width: 30px;
    }

    .name {
        font-weight: 600;
        font-size: 14px;
    }

    .address {
        font-size: 10px;
        margin-bottom: 2px;
    }

    .get-directions {
        outline: none;
        border: none;
        background: transparent;
        cursor: pointer;
        color: ${props => props.theme.colors.activeOrange};
        padding: 0;
        margin-bottom: 5px;
    }

    .see-more {
        outline: none;
        border: none;
        background: transparent;
        cursor: pointer;
        color: ${props => props.theme.colors.activeOrange};
        flex: 1 15%;
        padding: 0;
    }

    .hours-phone-container {
        display: flex;
        align-items: center;
    }

    .hours-text {
        font-size: 10px;
    }

    .phone-text {
        font-size: 10px;
    }

    .clock {
        height: 12px;
        width: 12px;
        margin-right: 5px;
    }

    .phone {
        height: 12px;
        width: 12px;
        margin-right: 2px;
        margin-left: 5px;
    }

    .additional-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;