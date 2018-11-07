import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    border-bottom: 2px solid black;
    font-size: 24px;
    ${props => !props.value && css`
        font-style: italic;
    `}
    &:focus {
        outline: none;
        border-bottom: 2px solid ${props => props.theme.colors.activeOrange};
    }
    &:active {
        outline: none;
    }
`;