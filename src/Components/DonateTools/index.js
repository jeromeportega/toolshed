import React, { Component } from 'react';
import { Container } from './styles';
import Input from '../Input';

import Autosuggest from 'react-autosuggest';

const suggestions = [
    {
        address: '1200 Barbara Jordan Blvd. Suite 100, Austin, TX 78723',
    },
    {
        address: '1200 Home Depot Blvd., Sunset Valley, TX 78745',
    },
    {
        address: '3600 S IH Frontage Rd S, Austin, TX 78704',
    },
];

const theme = {
    input: 'input',
    suggestionsContainerOpen: 'suggestions-container',
    suggestion: 'suggestion-style',
};


class DonateTools extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            mapUrl: '',
        }
    }

    onSuggestionChange = (event, { newValue }) => {
        let encodedAddress = encodeURIComponent(newValue);
        let origin = '900+barton+springs+road+austin+tx+78704';
        let newMapUrl = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyC3K0TMYFfVx88J7shtsxQ4DB7nO_zfuDw&origin=' + origin + '&destination='+ encodedAddress + '&avoid=tolls|highways';
        this.setState({ value: newValue, mapUrl: newMapUrl });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({ suggestions: getSuggestions(value) });
    }

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    }

    render() {
        const { value, mapUrl } = this.state;

        const inputProps = {
            value,
            onChange: this.onSuggestionChange,
        };

        return (
            <Container address={value}>
                 <div className="columns-container">
                    <div className="column help">
                        <div className="orange-opacity" />
                        <div className="text-button-container">
                            <span className="column-title">Donate your old<br />tools. Help<br />someone in need.</span>
                            <span className="column-body">
                            If you have old tools that you’ve since upgraded or no longer use, bring them into a Home Depot donation center. This helps us lend tools to at-risk communities and distribute resources in need during natural disasters. Learn more at our mission page.
                            </span>
                        </div>
                    </div>
                    <div className="form-column">
                        <span className="header-text">
                        Trade in your old tools.
                        </span>
                        <span className="comment-text">Type in an address to find the nearest Home Depot donation center.  Hit enter to see results.</span>
                        <div className="form-container">
                            <Autosuggest
                                theme={theme}
                                suggestions={suggestions}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            />
                        </div>
                        {
                            mapUrl &&
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
                        }

                    </div>
                </div>
            </Container>
        );
    }
}

const getSuggestionValue = suggestion => suggestion.address;
const renderSuggestion = suggestion => (
    <div>
      {suggestion.address}
    </div>
);

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();

    return inputValue;
};

export default DonateTools;