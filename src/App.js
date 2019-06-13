import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import PostRegister from './PostRegister'
import PostLogin from './PostLogin'
import GetData from './GetData'
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
            <Route path="/" exact component={GetData}/>
            <Route path="/register" exact component={PostRegister} />     
            <Route path="/login" exact component={PostLogin} />     
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
