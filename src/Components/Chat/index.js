import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import contractorImage from './images/contractor.png';
import starsImage from './images/stars.png';

import { Container } from './styles';

const instanceLocator = 'v1:us1:06dc19cd-69e6-49fa-99cf-ad04489c9623';
const testUrl = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/06dc19cd-69e6-49fa-99cf-ad04489c9623/token';
const roomId = '19373678';


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

        this.setState({ currentUser: currentUser });

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
      <Container>
        <div className="contractor-info">
          <span className="header">ask an expert</span>
          <img className="contractor-image" src={contractorImage} alt="contractor" />
          <span className="contractor-name">jason b.</span>
          <span className="contractor-desc">
            Plumbing Contractor
            <br />
            15 Years of Experience
          </span>
          <img src={starsImage} alt="rating" />
        </div>
        <div className="chat-container">
        <div className="alert-bar">
          <span className="alert-bar-text">
            You’re talking to Jason, an expert plumber about your issue.
          </span>
        </div>
          <MessageList messages={messages} otherUserIsTyping={otherUserIsTyping} />
          <SendMessageForm
            sendMessage={this.sendMessage}
            currentUser={this.state.currentUser}
            roomId={roomId}
          />
        </div>
      </Container>
    );
  }
}

export default Chat;