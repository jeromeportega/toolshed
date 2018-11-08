import styled from 'styled-components';

export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 75%;
    height: 425px;

    .map {
        display: flex;
        flex: 1 50%;
    }

    .map-results {
        display: flex;
        flex-direction: column;
        flex: 1 50%;
    }
`;