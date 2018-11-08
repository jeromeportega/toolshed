import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;

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

    .links-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0 25px;
        text-decoration: none;
        letter-spacing: 2px;
        color: black;
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