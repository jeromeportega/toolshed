import React from 'react';

import { LandingContainer, StyledLink, StyledBtn } from './styles';
import homeDepotLogo from './images/homeDepotLogo.jpg';

const Landing = () => (
    <LandingContainer>
        <div className="nav-container">
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
        </div>
        <div className="columns-container">
            <div className="column help">
                <div className="orange-opacity" />
                <div className="text-button-container">
                    <span className="column-title">Need Help? <br /> Ask a pro.</span>
                    <span className="column-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <StyledBtn to="/talk">talk to an expert</StyledBtn>

                </div>
            </div>
            <div className="column experts">
                <div className="orange-opacity" />
                <div className="text-button-container">
                    <span className="column-title">Choose from hundreds of experts.</span>
                    <span className="column-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <StyledBtn to="/hire">hire an expert</StyledBtn>
                </div>
            </div>
            <div className="column difference">
                <div className="orange-opacity" />
                <div className="text-button-container">
                    <span className="column-title">Make a difference in your community.</span>
                    <span className="column-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <StyledBtn to="/donate">donate tools</StyledBtn>
                </div>
            </div>
        </div>
    </LandingContainer>
);

export default Landing;