import React from 'react';
import { Container, StyledBtn } from './styles';

const HelpLanding = () => (
  <Container>
    <span className="title">
      Have a question? Need to borrow low cost tools?
      <br />
      We’re here to help.
    </span>
    <div className="options-container">
      <div className="option-container">
        <div className="option-image" />
        <StyledBtn to="/need-help">let's talk</StyledBtn>
      </div>
      <div className="option-container">
        <div className="option-image" />
        <StyledBtn to="/to-do">borrow tools</StyledBtn>
      </div>
    </div>
  </Container>
);

export default HelpLanding;
