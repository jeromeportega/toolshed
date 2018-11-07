import React, { Component } from 'react';
import { NeedHelpContainer } from './styles';
import Input from '../Input';

const categories = [
    'Electrician',
    'Plumber',
    'Drywall Expert',
    'Painter',
];

class NeedHelp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            category: '',
        }
    }

    handleChange = (e) => {
        if (e.currentTarget.name === 'name') this.setState({ name: e.currentTarget.value });
        else if (e.currentTarget.name === 'email') this.setState({ email: e.currentTarget.value });
        else if (e.currentTarget.name === 'category') this.setState({ category: e.currentTarget.value });
        else console.log("There was an error in the NeedHelp component.");
    }

    render() {
        const { name, email } = this.state;

        return (
            <NeedHelpContainer>
                <Input name="name" value={name} placeholder="Your Name" onChange={this.handleInputChange} />
                <Input name="email" value={email} placeholder="E-Mail Address" onChange={this.handleInputChange} />
            </NeedHelpContainer>
        );
    }
}

export default NeedHelp;