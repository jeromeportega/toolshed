import React, { Component } from 'react';
import { LoginContainer } from './styles';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <LoginContainer>
                <p>Login</p>
            </LoginContainer>
        );
    }
}

export default Login;