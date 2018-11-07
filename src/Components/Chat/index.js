import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const instanceLocator = 'v1:us1:06dc19cd-69e6-49fa-99cf-ad04489c9623';
const testUrl = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/06dc19cd-69e6-49fa-99cf-ad04489c9623/token'
const user = localStorage.getItem('username');
const roomId = '19373638';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      currentUser: {},
    }
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: 'Jerry',
      tokenProvider: new TokenProvider({ url: testUrl }),
    });

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        currentUser.subscribeToRoom({
          roomId: roomId,
          hooks: {
            onMessage: message => {
              console.log(message);
              this.setState({
                messages: [...this.state.messages, message]
              });
            }
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
    const { messages } = this.state;

    return (
      <div>
        <MessageList messages={messages} />
        <SendMessageForm
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}

export default Chat;