import React, { Component } from 'react';
import { MarkerContainer } from './styles';

import PlaceMarker from './images/place.png';
import Phone from './images/iphone.png';
import Clock from './images/clock.png';

class Marker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    openCloseAddress = () => this.setState({ open: !this.state.open })

    render() {
        const { marker, showDirections } = this.props;
        const { open } = this.state;

        return (
            <MarkerContainer>
                <div className="marker-container">
                    <img className="map-marker" src={PlaceMarker} alt="" />
                </div>
                <div className="address-container">
                    <span className="name">{marker.name}</span>
                    <span className="address">{marker.address}</span>
                    {
                        open &&
                            <div className="additional-details">
                                <button className="get-directions" type="button" onClick={() => showDirections(marker.address)}>Get Directions to this Location.</button>
                                <div className="hours-phone-container">
                                    <img className="clock" src={Clock} alt="" />
                                    <span className="hours-text">{marker.hours}</span>
                                    <img className="phone" src={Phone} alt="" />
                                    <span className="phone-text">{marker.phone}</span>
                                </div>
                            </div>
                    }
                </div>
                <button type="button" className="see-more" onClick={this.openCloseAddress}>{open ? 'See Less' : 'See More'}</button>
            </MarkerContainer>
        );
    }
}

export default Marker;