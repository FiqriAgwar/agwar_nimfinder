import React, {Component} from 'react';

class GetData extends Component {
    constructor(props){
      super(props);
      this.state = {
        items : [],
        load : false,
        query : "",
      }
    }
  
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(resjson => {
          this.setState({
            load : true,
            items : resjson,
          })
        });
    }
  
    updateQuery(event){
      this.setState({query : event.target.value});
    }
    
    render(){
      var {load, items, query} = this.state;
  
      var filtered = items.filter(
        (item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
      )
  
      if(!load){
        return (
          <div className="queryStyle">
            Loading Data...
          </div>
        );
      }
      else{ 
        return (
          <div className="titlesec">
            <h1>NIM Finder</h1>
  
            <div className="search">
              <input type="text" name="query" placeholder="Masukkan Nama/NIM" onChange={this.updateQuery.bind(this)} />
            </div>
  
            <br></br>
  
            <div className="queryStyle">  
              <ol style={{ listStyleType : "decimal"}}>
                {filtered.map(item => (
                  <li key={item.id}>
                    {item.name} => {item.username}
                  </li>
                ))};
              </ol>
            </div>
          </div>
        );
      }
    }
  }
  
  export default GetData;
  