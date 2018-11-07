import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    border-bottom: 2px solid black;
    &:focus {
        outline: none;
        border-bottom: 2px solid ${props => props.theme.colors.activeOrange};
    }
    &:active {
        outline: none;
    }
`;