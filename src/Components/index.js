import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import NeedHelp from './NeedHelp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/need-help" component={NeedHelp} />
        </Switch>
      </div>
    );
  }
}

export default App;
