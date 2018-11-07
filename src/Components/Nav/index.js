import React from 'react';
import homeDepotLogo from './images/homeDepotLogo.jpg';

import { NavContainer, StyledLink } from './styles';

const Nav = () => (
  <NavContainer>
    <img src={homeDepotLogo} alt="logo" className="logo" />
    <div className="title-links-container">
        <span className="title">home depot conerstone</span>
        <div className="links-container">
            <StyledLink to="/about">about</StyledLink>
            <StyledLink to="/community">community</StyledLink>
            <StyledLink to="/faqs">faqs</StyledLink>
            <StyledLink to="/join-us">join us</StyledLink>
        </div>
    </div>

  </NavContainer>

);

export default Nav;