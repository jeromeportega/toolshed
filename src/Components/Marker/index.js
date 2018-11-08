import React, { Component } from 'react';
import { MarkerContainer } from './styles';

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
                <img className="map-marker" src="" alt="" />
                <div className="address-container">
                    <span>{marker.name}</span>
                    <span>{marker.address}</span>
                    {
                        open &&
                            <div className="additional-details">
                                <button type="button" onClick={() => showDirections(marker.address)}>Get Directions to this Location.</button>
                                <img className="clock" src="" alt="" />
                                <span>{marker.hours}</span>
                                <img className="phone" src="" alt="" />
                                <span>{marker.phone}</span>
                            </div>
                    }
                </div>
                <button type="button" onClick={this.openCloseAddress}>{open ? 'See Less' : 'See More'}</button>
            </MarkerContainer>
        );
    }
}

export default Marker;