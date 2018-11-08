import React from 'react';
import { Container, StyledBtn } from './styles';

const DonateLanding = () => (
    <Container>
      <span className="title">
        Have a question? Need to borrow low cost tools?
        <br />
        We’re here to help.
      </span>
      <div className="options-container">
        <div className="option-container">
          <div className="option-image" />
          <StyledBtn to="/donate-time">Donate Time</StyledBtn>
        </div>
        <div className="option-container">
          <div className="option-image" />
          <StyledBtn to="/donate-tools">Donate Tools</StyledBtn>
        </div>
      </div>
    </Container>
  );

  export default DonateLanding;