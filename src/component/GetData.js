import React, {Component} from 'react';
import {Redirect, NavLink} from 'react-router-dom'
import axios from 'axios'
import Cookie from 'js-cookie'
import DataTable from './DataTable'

class GetData extends Component {
    constructor(props){
      super(props);
      this.state = {
        items : [],
        load : true,
        query : "",
        size : 0,
        page : 0,
        token : null,
        code : 0,
        message : '',
        username : null
      }

      Cookie.set('token', this.state.token, {expires : 1});
    }

    checkNumber(input){
      return (input === "1" || input === "2" || input === "3" || input === "4" || input === "5" || input === "6" || input === "7" || input === "8" || input === "9" || input === "0");
    }

    componentWillMount(){
      console.log(this.props.location.state)
      if(this.props.location.state){
        this.setState({token : this.props.location.state.token, username : this.props.location.state.username})
      }
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({load : false, message : ''});

      console.log(this.state.token);

      let url = 'https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/'

      if(this.checkNumber(this.state.query[0])){
        url += 'byid?query=' + this.state.query 
      }
      else{
        url += 'byname?name=' + this.state.query
      }

      if(this.state.size > 0){
        url += '&count=' + this.state.size
      }

      if(this.state.page > 0){
        url += '&page=' + this.state.page
      }

      console.log(document.cookie)

      const config = {
        headers : {
          'Auth-Token' : this.state.token
        }
      };

      axios.get(url, config)
      .then(result => { 
        console.log(result.data);
        this.setState({
          message : result.data.status,
          code : result.data.code,
          items : result.data.payload,
          load : true
        })
      })
    }
  
    updateQuery(event){
      this.setState({query : event.target.value});
    }

    updateSize(event){
      this.setState({size : event.target.value});
    }

    updatePage(event){
      this.setState({page : event.target.value});
    }
    
    render(){
      var {load, items, code, token, username} = this.state;
      
      if(token === undefined || token === null){
        console.log("Redirect");
        this.setState({token : ''})
        return (<Redirect to="/login" />);
      }
      else{
        if(!load){
          return (
            
            <div className="titlesec">
              <div className="hello">Hello, {username}   |   <NavLink exact={true} activeClassName="hello" to="/login">Logout</NavLink></div>

              <div className="search">
                  <input className="querybar" type="text" name="query" placeholder="Masukkan Nama/NIM" onChange={this.updateQuery.bind(this)} />
                  <input className="sizebar" type="text" name="size" placeholder="Masukkan Jumlah" onChange={this.updateSize.bind(this)} />
                  <input className="pagebar" type="text" name="page" placeholder="Masukkan Halaman" onChange={this.updatePage.bind(this)} />
                  <button className="btn" onClick={this.handleSubmit}>Search</button>
                </div>

              <div className="queryStyle">
                Loading Data...
              </div>
            </div>
          );
        }
        else{
          if(code >= 0){
            return (
              <div className="titlesec">
                <div className="hello">Hello, {username}   |   <NavLink exact={true} activeClassName="hello" to="/login">Logout</NavLink></div>
      
                <div className="search">
                  <input className="querybar" type="text" name="query" placeholder="Masukkan Nama/NIM" onChange={this.updateQuery.bind(this)} />
                  <input className="sizebar" type="text" name="size" placeholder="Masukkan Jumlah" onChange={this.updateSize.bind(this)} />
                  <input className="pagebar" type="text" name="page" placeholder="Masukkan Halaman" onChange={this.updatePage.bind(this)} />
                  <button className="btn" onClick={this.handleSubmit}>Search</button>
                </div>

                  <DataTable data={items} />
              </div>
            );
          }
          else{
            return (
              <div className = "titlesec">
                <div className="hello">Hello, {username}   |   <NavLink exact={true} activeClassName="hello" to="/login">Logout</NavLink></div>

                <div className="search">
                  <input className="querybar" type="text" name="query" placeholder="Masukkan Nama/NIM" onChange={this.updateQuery.bind(this)} />
                  <input className="sizebar" type="text" name="size" placeholder="Masukkan Jumlah" onChange={this.updateSize.bind(this)} />
                  <input className="pagebar" type="text" name="page" placeholder="Masukkan Halaman" onChange={this.updatePage.bind(this)} />
                  <button className="btn" onClick={this.handleSubmit}>Search</button>
                </div>


                <div className = "queryStyle">
                  <p>Cannot Load Data</p>
                </div>
              </div>
            )
          }
        }
      }
    }
  }
  
  export default GetData;
  