import React from 'react';
import homeDepotLogo from './images/homeDepotLogo.jpg';

import { NavContainer, StyledLink } from './styles';

const Nav = () => (
  <NavContainer>
    <img src={homeDepotLogo} alt="logo" className="logo" />
    <div className="title-links-container">
        <span className="title">home depot cornerstone</span>
        <div className="links-container">
            <StyledLink to="/">home</StyledLink>
            <StyledLink to="/help-landing">get help</StyledLink>
            <StyledLink to="/donate">donate</StyledLink>
            <a href="https://corporate.homedepot.com/about/values" target="_blank">our mission</a>
        </div>
    </div>

  </NavContainer>

);

export default Nav;