import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import screwsImage from './images/screws.jpg';

export const Container = styled.div`
  height: calc(100vh - 150px);
  background-image: url(${screwsImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 100px 0 100px;

  .title {
    width: 100%;
    display: block;
    font-size: 48px;
    text-align: center;
    font-weight: 200;
    margin-bottom: 20px;
  }

  .sub-text {
    width: 100%;
    display: block;
    font-size: 18px;
    text-align: center;
    font-weight: 200;
    margin-bottom: 40px;
  }

  .search-container {
    margin: 0 auto;
    max-width: 580px;
    max-height: 55px;
    position: relative;
    margin-bottom: 40px;
  }

  .search {
    width: 100%;
    height: 100%;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 40px;
    ${props => !props.searchString && css`
      font-style: italic;
    `}
    &:focus {
      outline: none;
    }
  }

  .search-image {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    right: 10px;
  }

   .options-container {
     width: 100%;
     display: flex;
     justify-content: center;
   }

  .results {
    font-size: 24px;
    font-style: italic;
    font-weight: bold;
    display: block;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const StyledBtn = styled.button`
  cursor: pointer;
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

export const StyledLink = styled(Link)`
  cursor: pointer;
  width: 280px;
  height: 280px;
  margin-top: 100px;
  text-decoration: none;
  margin 100px 60px 0 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  .orange-background {
    background-color: ${props => props.theme.colors.activeOrange};
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    opacity: .5;
    top: 0;
    left: 0;
  }

  .text {
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    font-weight: bold;
    z-index: 1;
  }
`;