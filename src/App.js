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
      <BrowserRouter basename="/agwar_nimfinder">
        <div>
          <div className="banner">
            <img src = "https://github.com/SorrowInRain/agwar_nimfinder/blob/master/src/banner.png?raw=true"></img>
          </div>
          <Switch>
            <Route path="/" exact component={GetData}/>
            <Route path="/register" exact={true} component={PostRegister} />     
            <Route path="/login" exact={true} component={PostLogin} />     
            <Route path="/get" exact={true} component={GetData} />     
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
