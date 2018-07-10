import React, { Component } from 'react';
import { Route,Link} from 'react-router-dom';
import './assets/css/main.css';
import HomePage from './screens/HomePage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);
class Routes extends Component {
  render() {
    return (
     
      <Route path="/" component={HomePage} >
      <Route path="signup" component={HomePage} />
      </Route>
    );
  }
}

export default Routes;
