import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import PostRegister from './PostRegister'
import PostLogin from './PostLogin'
import Error from './Error'
import Navigation from './Navigation'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current : 0,
      cookie : '',
      data : []
    }
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={PostLogin} />
            <Route path="/register" component={PostRegister} />     
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
