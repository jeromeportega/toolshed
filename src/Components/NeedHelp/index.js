import React, { Component } from 'react';
import { NeedHelpContainer } from './styles';
import Input from '../Input';

import Autosuggest from 'react-autosuggest';

const suggestions = [
    {
        name: 'Electrician',
    },
];

class NeedHelp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            category: '',
            value: '',
        }
    }

    handleChange(e) {
        if (e.currentTarget.name === 'name') this.setState({ name: e.currentTarget.value });
        else if (e.currentTarget.name === 'email') this.setState({ email: e.currentTarget.value });
        else if (e.currentTarget.name === 'category') this.setState({ category: e.currentTarget.value });
        else console.log("There was an error in the NeedHelp component.");
    }

    onSuggestionChange = (event, { newValue }) => {
        this.setState({ value: newValue });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
        suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
        suggestions: []
        });
    };

    render() {
        const { name, email, value } = this.state;

        const inputProps = {
            placeholder: 'What do you need help with?',
            value,
            onChange: this.onSuggestionChange,
          };

        return (
            <NeedHelpContainer>
                <Input name="name" value={name} placeholder="Your Name" onChange={(e) => this.handleChange(e)} />
                <Input name="email" value={email} placeholder="E-Mail Address" onChange={(e) => this.handleChange(e)} />
                <Autosuggest
                    suggestions={suggestions}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                />
            </NeedHelpContainer>
        );
    }
}

const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
);

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
  
    return inputValue;
};

export default NeedHelp;