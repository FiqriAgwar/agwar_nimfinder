import React, {Component} from 'react';
import axios from 'axios'

class GetData extends Component {
    constructor(props){
      super(props);
      this.state = {
        items : [],
        load : true,
        query : "",
        size : 0,
        page : 0,
        token : props.token,
        codename : -1,
        codeid : -1
      }
    }

    checkNumber(input){
      return (input == "1" || input == "2" || input == "3" || input == "4" || input == "5" || input == "6" || input == "7" || input == "8" || input == "9" || input == "0");
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.state.load = false;

      let url = 'https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/'

      if(checkNumber(this.state.query[0])){
        url += 'byid?query=' + this.state.query 
      }
      else{
        url += 'byname?name=' + this.state.query
      }

      if(size > 0){
        url += '&count=' + this.state.size
      }

      if(page > 0){
        url += '&page=' + this.state.page
      }

      const header = {
        'Cookie' : 'token=' + this.state.token
      }

      axios.get(url, header)
        .then(result => {
            if(result.code >= 0){
              this.setState(
                {
                  items : result.payload,
                  load : true
                }
              )
            }
          }
        )
    }
  
    updateQuery(event){
      this.setState({query : event.target.value});
    }
    
    render(){
      var {load, items, query} = this.state;
  
      if(!load){
        return (
          <div className="titlesec">
            <h1>NIM Finder</h1>

            <div className="queryStyle">
              Loading Data...
            </div>
          </div>
        );
      }
      else{ 
        return (
          <div className="titlesec">
            <h1>NIM Finder</h1>
  
            <div className="search">
              <input type="text" name="query" placeholder="Masukkan Nama/NIM" onChange={this.updateQuery.bind(this)} />
              <button onClick={this.handleSubmit}>Search</button>
            </div>

            <div className="queryStyle">
              <table>
                <tr>
                  {this.state.items.map(data => (
                    <div>
                      <td key={data.nim_jur}>{data.name}</td>
                      <td key={data.nim_jur}>{data.nim_tpb}</td>
                      <td key={data.nim_jur}>{data.nim_jur}</td>
                      <td key={data.nim_jur}>{data.prodi}</td>
                    </div>
                  ))}
                </tr>
              </table>
            </div>
          </div>
        );
      }
    }
  }
  
  export default GetData;
  