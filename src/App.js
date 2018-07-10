import React, { Component } from 'react';
import { Route,Link,Switch} from 'react-router-dom';
import HomePage from './screens/HomePage';


class App extends Component {
  render() {
    return (
      <Route path="/" component={HomePage}>
      <Route path="signup" component={HomePage} />
      </Route>
    );
  }
}

export default App;
