import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const instanceLocator = 'v1:us1:06dc19cd-69e6-49fa-99cf-ad04489c9623';
const testUrl = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/06dc19cd-69e6-49fa-99cf-ad04489c9623/token'
const roomId = '19373638';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      currentUser: {},
      userId: this.props.history.location.state.username,
      otherUserIsTyping: false,
    }
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: this.state.userId,
      tokenProvider: new TokenProvider({ url: testUrl }),
    });

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser;

        currentUser.subscribeToRoom({
          roomId: roomId,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            },
            onUserStartedTyping: props => {
              this.setState({
                otherUserIsTyping: true,
              });
            },
            onUserStoppedTyping: props => {
              this.setState({
                otherUserIsTyping: false,
              });
            },
          },
          messageLimit: 10
        })
      })
      .catch(err => {
        console.log('Error on connection', err);
      })
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: roomId,
    })
  }

  render() {
    const { messages, otherUserIsTyping } = this.state;

    return (
      <div>
        <MessageList messages={messages} />
        <SendMessageForm
          sendMessage={this.sendMessage}
          currentUser={this.currentUser}
          roomId={roomId}
        />
        {
          otherUserIsTyping &&
            <p>Typing</p>
        }
      </div>
    );
  }
}

export default Chat;