import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    overflow-y: scroll;

    .message {
      display: flex;
      padding-left: 20px;
      padding-top: 20px;
      align-items: center;
    }

    .sender {
      font-size: 20px;
      font-weight: bold;
      width: 100px;
      min-width: 50px;
    }

    .sender-message {
      font-size: 20px;
    }

    .typing {
      max-width: 100px;
      max-height: 100px;
      background-color: #eeeeee;
      margin: 20px;
    }
`;