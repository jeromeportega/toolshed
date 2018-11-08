import React, { Component } from 'react';
import { MapContainer } from './styles';
import Marker from '../Marker';

const markers = [
    {
        name: 'Home Depot - NE Austin',
        address: '1200 Barbara Jordan Blvd. Suite 100, Austin, TX 78723',
        hours: '6AM - 9PM',
        phone: '(512) 703-4110',
    },
    {
        name: 'Home Depot - Sunset Valley',
        address: '1200 Home Depot Blvd., Sunset Valley, TX 78745',
        hours: '6AM - 9PM',
        phone: '(512) 892-3035',
    },
    {
        name: 'Home Depot - SE Austin',
        address: '3600 S IH Frontage Rd S, Austin, TX 78704',
        hours: '6AM - 9PM',
        phone: '(512) 693-9811',
    },
];

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: markers,
            mapUrl: "https://www.google.com/maps/embed/v1/search?q=home%20depot%20near%20800%20barton%20springs%2C%20austin&key=AIzaSyC3K0TMYFfVx88J7shtsxQ4DB7nO_zfuDw",
        }
    }

    showDirections = (address) => {
        let encodedAddress = encodeURIComponent(address);
        let origin = '900+barton+springs+road+austin+tx+78704';
        let newMapUrl = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyC3K0TMYFfVx88J7shtsxQ4DB7nO_zfuDw&origin=' + origin + '&destination='+ encodedAddress + '&avoid=tolls|highways';

        this.setState({ mapUrl: newMapUrl });
    }

    render() {
        const { mapUrl } = this.state;

        return (
            <MapContainer>
                <iframe
                    className="map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{border: '0'}}
                    src={mapUrl}
                    allowFullScreen
                    title="map"
                />
                <div className="map-results">
                    {
                        this.state.markers.map(marker => 
                            <Marker showDirections={this.showDirections} key={marker.name} marker={marker} />
                        )
                    }
                </div>
            </MapContainer>
        );
    }
}

export default Map;