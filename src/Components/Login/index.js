import React, { Component } from 'react';
import { LoginContainer } from './styles';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            isVisible: false,
            redirect: false,
        }
    }

    handleChange = (e) => {
        if (e.currentTarget.name === "username") this.setState({ username: e.currentTarget.value });
        else if (e.currentTarget.name === "password") this.setState({ password: e.currentTarget.value });
        else console.log("WTF IS WRONG HERE?!");
    }

    updateVisibleState = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    submitLogin = () => {
        if (!this.state.username) return;
        else if (!this.state.password) return;
        else {
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            this.setState({ redirect: true });
        }
    }

    render() {
        const { isVisible, redirect } = this.state;

        if (redirect) return <Redirect to="/wherever" />;

        return (
            <LoginContainer>
                <p>Login</p>
                <input
                    type="text"
                    value={this.state.username}
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                />
                {
                    isVisible ?
                        <input
                            type="text"
                            value={this.state.password}
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    :   
                        <input
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                        />
                }
                <div onClick={this.updateVisibleState}>Show</div>
                <button type="submit" onClick={this.submitLogin}>Log In</button>
            </LoginContainer>
        );
    }
}

export default Login;