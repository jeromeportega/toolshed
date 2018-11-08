import React, { Component } from 'react';
import { Container } from './styles';

class FindTools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: null,
    }
  };

  render() {
    return(
      <Container>
        <span className="title">
          A low-cost alternative to renting tools.
        </span>
        <span className="sub-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <input className="search" name="" value="searchString" />
      </Container>
    )
  };

};

export default FindTools;