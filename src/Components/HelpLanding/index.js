import React from 'react';
import { Container, StyledBtn } from './styles';

import borrowToolsImage from './images/borrowTools.png';
import talkImage from './images/talkToUs.png';

const HelpLanding = () => (
  <Container>
    <span className="title">
      Have a question? Need to borrow low cost tools?
      <br />
      We’re here to help.
    </span>
    <div className="options-container">
      <div className="option-container">
        <div className="option-image">
          <img src={talkImage} alt="talk to us" />
        </div>
        <StyledBtn to="/need-help">let's talk</StyledBtn>
      </div>
      <div className="option-container">
        <div className="option-image">
          <img src={borrowToolsImage} alt="borrow tools" />
        </div>
        <StyledBtn to="/find-tools">borrow tools</StyledBtn>
      </div>
    </div>
  </Container>
);

export default HelpLanding;
