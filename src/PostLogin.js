import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

import GetData from './GetData'

class PostLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            code : '',
            message : '',
            token : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({message : 'Loading...'})

        const url = 'https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/login';

        const data = qs.stringify({
            username : this.state.username,
            password : this.state.password
        });

        const headers = {
            'Content-Type' : 'application/x-www-form-urlencoded'
        }

        axios.post(url, data, headers)
            .then(response => {
                this.setState(
                    {
                        message : response.data.status,
                        code : response.data.code,
                        token : response.data.token
                    }
                );
            })
            .catch(error => {
                console.log(error)
            });
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    

    render(){
        const {username, password} = this.state;
        
        if(this.state.token === ''){
            return(
                <div className ="titlesec">
                    <h2>
                        Login
                    </h2>

                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <input type = 'text' placeholder = 'Username' value = {username} name = 'username' onChange={this.handleInputChange} />
                        </p>

                        <p>
                            <input type = 'password' placeholder = 'password' value = {password} name = 'password' onChange={this.handleInputChange} />
                        </p>

                        <p>
                            <button onClick={this.handleSubmit}>Login</button>
                        </p>

                        <p>
                            {this.state.message}
                        </p>

                    </form>
                </div>
            );
        }
        else{
            return(
                <GetData token={this.state.token} />
            );
        }
    }
}

export default PostLogin;