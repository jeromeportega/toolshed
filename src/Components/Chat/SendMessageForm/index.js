import React, { Component } from 'react';

import { Container } from './styles';

class SendMessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        message: '',
    };
  }

  handleChange = (e) => {
    const { currentUser, roomId } = this.props;

    currentUser.isTypingIn({ roomId: roomId });

    this.setState({ message: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.sendMessage(this.state.message);

    this.setState({
        message: '',
    });
  }

  render() {
    return (
      <Container message={this.state.message}>
        <form className="send-message-form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Type your message and hit ENTER"
            type="text"
          />
          <button type="submit">send</button>
        </form>
      </Container>
    )
  }
}

export default SendMessageForm;