import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import qs from 'qs';

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
        const {username, password, code, token, message} = this.state;
        
        if(token === undefined || token === '' || code !== 0){
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
                            {message}
                        </p>

                    </form>
                </div>
            );
        }
        else{
            console.log(token);
            return(
                <Redirect to={{
                    pathname : '/',
                    state : {token}
                }}/>
            );
        }
    }
}

export default PostLogin;