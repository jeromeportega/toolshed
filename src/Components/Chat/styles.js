import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  display: flex;

  .contractor-info {
    padding-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
  }

  .header {
    text-transform: uppercase;
    font-size: 30px;
    display: block;
    text-align: center;
    letter-spacing: 2px;
    color: ${props => props.theme.colors.activeOrange};
    margin-bottom: 65px;
    font-weight: bold;
  }

  .contractor-image {
    max-width: 269px;
    max-height: 269px;
    margin-bottom: 15px;
  }

  .contractor-name {
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .contractor-desc {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }

  .chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #eeeeee;
  }

  .alert-bar {
    padding: 50px;
    background-color: ${props => props.theme.colors.activeOrange};
  }

  .alert-bar-text {
    font-size: 24px;
    color: white;
    display: block;
    text-align: center;
  }
`;