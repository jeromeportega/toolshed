import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import NeedHelp from './NeedHelp';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/need-help" component={NeedHelp} />
        <Route exact path="/chat" component={Chat} />
      </div>
    );
  }
}

export default App;
