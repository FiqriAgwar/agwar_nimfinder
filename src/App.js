import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import PostRegister from './component/PostRegister'
import PostLogin from './component/PostLogin'
import GetData from './component/GetData'
import Error from './component/Error'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className>
          <div className="banner">
            <img src = "banner.png"></img>
          </div>
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
