// src/TaskApp.js
import React from 'react';

import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatApp = () => {
  return (
    <div className="task-app">
      <h1>Task Management App</h1>
      <MessageList/>
      <MessageInput />
    </div>
  );
};

export default ChatApp;
