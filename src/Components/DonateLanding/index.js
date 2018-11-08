import React from 'react';
import { Container, StyledBtn } from './styles';

import donateTimeImage from './images/donateTime.png';
import donateToolsImage from './images/tools.png';

const DonateLanding = () => (
    <Container>
      <span className="title">
        Make a difference in your community.
      </span>
      <div className="options-container">
        <div className="option-container">
          <div className="option-image">
            <img src={donateTimeImage} alt="donate time" />
          </div>
          <StyledBtn to="/donate-time">Donate Your Time</StyledBtn>
        </div>
        <div className="option-container">
          <div className="option-image">
            <img src={donateToolsImage} alt="donate time" />
          </div>
          <StyledBtn to="/donate-tools">Donate Tools</StyledBtn>
        </div>
      </div>
    </Container>
  );

  export default DonateLanding;