import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Questions from './Questions';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Questions} />
    </Switch>
  </Router>
);

export default App;
