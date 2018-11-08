import React from 'react';
import { Container } from './styles';

const MessageList = ({
  messages,
  otherUserIsTyping
}) => (
  <Container>
    {
      messages.map(message => (
        <div className="message" key={message.id}>
          <span className={message.senderId === 'Jason' ? 'sender jason' : 'sender'}>
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