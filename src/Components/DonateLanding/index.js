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
          <p className="description">
          Become a registered volunteer with Home Depot’s volunteer network by contributing  expert advice in the area of your specialty. In return, receive benefits from Home Depot’s XPro membership and more.
          </p>
          <StyledBtn to="/donate-time">Donate Your Time</StyledBtn>
        </div>
        <div className="option-container">
          <div className="option-image">
            <img src={donateToolsImage} alt="donate time" />
          </div>
          <p className="description">
          If you have old tools that you’ve since upgraded or no longer use, bring them into a Home Depot donation center. This helps us lend tools to at-risk communities and distribute resources during natural disasters.
          </p>
          <StyledBtn to="/donate-tools">Donate Tools</StyledBtn>
        </div>
      </div>
    </Container>
  );

  export default DonateLanding;