import React, { Component } from 'react';

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
            <p>Login</p>
        );
    }
}

export default Login;