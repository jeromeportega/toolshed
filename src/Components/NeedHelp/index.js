import React, { Component } from 'react';
import { NeedHelpContainer, StyledBtn } from './styles';
import Input from '../Input';

import Autosuggest from 'react-autosuggest';

const suggestions = [
    {
        name: 'Plumbing',
    },
    {
        name: 'Electric',
    },
    {
        name: 'Heating & Cooling',
    },
    {
        name: 'Lawn & Garden',
    },
    {
        name: 'Flooring',
    },
    {
        name: 'Roofing',
    },
    {
        name: 'Paint',
    },
    {
        name: 'Home Renovation',
    },
    {
        name: 'Kitchen',
    },
    {
        name: 'Appliances and Electronics',
    },
    {   
        name: 'Mounting & Installation',
    },
];

const theme = {
    input: 'input',
};

class NeedHelp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            help: '',
            value: '',
        }
    }

    handleChange(e) {
        if (e.currentTarget.name === 'name') this.setState({ name: e.currentTarget.value });
        else if (e.currentTarget.name === 'email') this.setState({ email: e.currentTarget.value });
        else if (e.currentTarget.name === 'help') this.setState({ help: e.currentTarget.value });
        else console.log("There was an error in the NeedHelp component.");
    }

    onSuggestionChange = (event, { newValue }) => {
        console.log(event);
        this.setState({ value: newValue });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({ suggestions: getSuggestions(value) });
    }

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    }

    render() {
        const { name, email, help, value } = this.state;

        const inputProps = {
            placeholder: 'What do you need help with?',
            value,
            onChange: this.onSuggestionChange,
        };

        return (
            <NeedHelpContainer autoValue={value}>
                 <div className="columns-container">
                    <div className="column help">
                        <div className="orange-opacity" />
                        <div className="text-button-container">
                            <span className="column-title">Need Help? <br /> Ask a pro.</span>
                            <span className="column-body">
                            We’ve gathered the help of over 3500 professionals who’ve volunteered to provide free consultation services to those in need. To chat with someone live, just fill out your information and you’ll be connected to someone instantly.
                            </span>
                        </div>
                    </div>
                    <div className="form-column">
                        <span className="header-text">
                        Stuck?
                        <br />
                        We're here to help.
                        </span>
                        <div className="form-container">
                            <Input name="name" value={name} placeholder="Your Name" onChange={(e) => this.handleChange(e)} />
                            <Input name="email" value={email} placeholder="E-Mail Address" onChange={(e) => this.handleChange(e)} />
                            <Autosuggest
                                theme={theme}
                                suggestions={suggestions}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            />
                            <Input
                                name="help"
                                value={help}
                                placeholder="How can we help you build something today?"
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <StyledBtn to={{
                            pathname: "/chat",
                            state: { username: name }
                        }}>let's talk</StyledBtn>
                    </div>
                </div>
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