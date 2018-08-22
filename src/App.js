import React, { Component } from 'react';

import Loadable from 'react-loadable';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Homepage = Loadable({
  loader: () => import('./homepage/Homepage'),
  loading: () => null,
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
