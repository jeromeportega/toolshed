import React from 'react';

import { LandingContainer, StyledBtn } from './styles';

const Landing = () => (
    <LandingContainer>
        <div className="columns-container">
            <div className="column help">
                <div className="orange-opacity" />
                <div className="text-button-container">
                    <span className="column-title">Need Help? <br /> We've got your back.</span>
                    <span className="column-body">
                    We know that life happens, that’s why Home Depot has committed 30% of our resources to helping victims of natural disasters and low income families rebuild their communities. Learn more on how to receive help and the resources you need.
                    </span>
                    <StyledBtn to="/help-landing">Get Help</StyledBtn>

                </div>
            </div>
            <div className="column difference">
                <div className="orange-opacity" />
                <div className="text-button-container">
                    <span className="column-title">Make a difference in <br /> your community.</span>
                    <span className="column-body">
                    Give back to your community by donating tools and time to assisting people in need. We’re calling for pros across the world to help us in building the largest volunteer contractor network for crisis response. Learn more here.
                    </span>
                    <StyledBtn to="/donate">Give Back</StyledBtn>
                </div>
            </div>
        </div>
    </LandingContainer>
);

export default Landing;