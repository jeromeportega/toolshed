import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: calc(100vh - 150px);
  padding: 60px 96px;

  .title {
    font-size: 40px;
    display: block;
    text-align: center;
    font-weight: 200;
    margin-bottom: 50px;
  }

  .options-container {
    display: flex;
    justify-content: space-between;
    width: 880px;
    margin: 0 auto;
  }

  option-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .option-image {
    background-color: gray;
    width: 380px;
    height: 380px;
    margin-bottom: 40px;
  }

`;

export const StyledBtn = styled(Link)`
    width: 288px;
    height: 80px;
    margin: 0 auto;
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