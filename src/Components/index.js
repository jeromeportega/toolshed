import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import HelpLanding from './HelpLanding';
import NeedHelp from './NeedHelp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/help-landing" component={HelpLanding} />
        <Route exact path="/need-help" component={NeedHelp} />
      </div>
    );
  }
}

export default App;
