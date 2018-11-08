import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import HelpLanding from './HelpLanding';
import NeedHelp from './NeedHelp';
import FindTools from './FindTools';
import Chat from './Chat';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/help-landing" component={HelpLanding} />
        <Route exact path="/need-help" component={NeedHelp} />
        <Route exact path="/find-tools" component={FindTools} />
        <Route exact path="/chat" component={Chat} />
      </div>
    );
  }
}

export default App;
