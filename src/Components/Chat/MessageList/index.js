import React from 'react';
import { Container } from './styles';

const MessageList = ({
  messages,
  otherUserIsTyping
}) => (
  <Container>
    {
      messages.map(message => (
        <div class="message" key={message.id}>
          <span className="sender">
            {message.senderId}:
          </span>
          <span className="sender-message">
            {message.text}
          </span>
        </div>
      ))
    }
    {
      otherUserIsTyping &&
        <img className="typing" src='https://thumbs.gfycat.com/FewDearestFairybluebird-size_restricted.gif' alt="typing" />
    }
  </Container>
);

export default MessageList;