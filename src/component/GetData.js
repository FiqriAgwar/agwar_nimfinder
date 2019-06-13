import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Cookie from 'js-cookie'

class GetData extends Component {
    constructor(props){
      super(props);
      this.state = {
        items : [],
        load : true,
        query : "",
        size : 0,
        page : 0,
        token : this.props.location.state.token,
        code : 0,
        message : '',
        username : this.props.location.state.username
      }

      console.log(this.state.token);

      Cookie.set('token', this.state.token, {expires : 1});
    }

    checkNumber(input){
      return (input === "1" || input === "2" || input === "3" || input === "4" || input === "5" || input === "6" || input === "7" || input === "8" || input === "9" || input === "0");
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
    
    render(){
      var {load, items, code, token, username} = this.state;
      
      if(token === undefined || token === ''){
        console.log("Redirect");
        return (<Redirect to= {{
          pathname : '/login',
          state : {message : 'invalid username or password.'}
        }}
        />);
      }
      else{
        if(!load){
          return (
            <div className="titlesec">
              <h1>NIM Finder</h1>
              <h3>Hello, {username}</h3>

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
                <h1>NIM Finder</h1>
                <h3>Hello, {username}</h3>
      
                <div className="search">
                  <input className="searchbar" type="text" name="query" placeholder="Masukkan Nama/NIM" onChange={this.updateQuery.bind(this)} />
                  <button className="btn" onClick={this.handleSubmit}>Search</button>
                </div>

                <div className="queryStyle">
                    <ul>
                      {items.map(data => (
                        <li key={data.nim_jur}>{data.name} | {data.nim_tpb} | {data.nim_jur} | {data.prodi}</li>
                      ))}
                    </ul>
                </div>
              </div>
            );
          }
          else{
            return (
              <div className = "titlesec">
                <h1>NIM Finder</h1>

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
  