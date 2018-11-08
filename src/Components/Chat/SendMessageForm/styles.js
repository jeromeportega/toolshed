import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: auto;
  display: flex;
  width: 100%;

  .send-message-form {
    display: flex;
    width: 100%;
    position: relative;

    input {
      width: 100%;
      padding: 30px 0;
      font-size: 24px;
      padding-left: 20px;
      ${props => !props.message && css`
        font-style: italic;
      `};
    }

    button {
      width: 165px;
      height: 55px;
      font-size: 24px;
      color: white;
      position: absolute;
      right: 15px;
      top: 18px;
      background-color: #00BBE5;
      &:focus {
        outline: none;
      }
    }
  }
`;