import styled from 'styled-components';

import backgroundImage from './images/success.png';

export const Container = styled.div`
  height: calc(100vh - 150px);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-text {
    display: block;
    text-align: center;
    font-size: 40px;
    color: white;
    margin-bottom: 20px;
  }

  .sub-text {
    display: block;
    text-align: center;
    font-size: 18px;
    color: white;
  }
`;