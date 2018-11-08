import React, { Component } from 'react';

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
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <iframe
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{border: '0'}}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBGH0FmA8JE195xZz4IIuAl-dOGzQJrQ5A&q=Space+Needle,Seattle+WA"
                    allowfullscreen
                    title="map"
                />
            </div>
        );
    }
}

export default Map;