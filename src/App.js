import React from 'react';
import Chatbot from 'react-chatbot-kit';

import Config from './chatbot/Config.js';
import ActionProvider from './chatbot/ActionProvider.js';
import MessageParser from './chatbot/MessageParser.js';

import './App.css';


function App() {
  return (
    <div className="App">
      <div style={{maxWidth: "300px"}}>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
