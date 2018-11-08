import React, { Component } from 'react';
import { Container, StyledBtn, StyledLink } from './styles';
import searchImage from './images/search.png';

import Map from '../Map';

import helpImage from './images/help.png';
import chatImage from './images/chat.jpg';
import callImage from './images/call.jpg';

class FindTools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      btnClicked: false,
    }
  };

  updateSearchString = (e) => {
    this.setState({
      searchString: e.currentTarget.value,
    })
  }

  updateBtnClicked = () => {
    this.setState({
      btnClicked: true,
    })
  }

  render() {
    const { searchString, btnClicked } = this.state;
    return(
      <Container searchString={searchString}>
        <span className="title">
          A low-cost alternative to renting tools.
        </span>
        <span className="sub-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <div className="search-container">
          <img className="search-image" src={searchImage} alt="search"/>
          <input className="search" name="searchString" value={searchString} placeholder="What are you looking for?" onChange={this.updateSearchString} />
        </div>
        <StyledBtn onClick={this.updateBtnClicked}>find tools</StyledBtn>
        {btnClicked &&
          <React.Fragment>
            <span className="results">Showing results for "{searchString}"</span>
            <Map />
          </React.Fragment>
        }
      </Container>
    )
  };

};

export default FindTools;