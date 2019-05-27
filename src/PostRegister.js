import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

class PostRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            code : '',
            message : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const url = 'https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register';

        const data = qs.stringify({
            username : this.state.username,
            password : this.state.password
        });

        console.log(data);

        const headers = {
            'Content-Type' : 'application/x-www-form-urlencoded'
        }

        axios.post(url, data, headers)
            .then(response => {
                console.log(response.data.code);
                this.setState(
                    {
                        message : response.data.message,
                        code : response.data.code
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
        return(
            <div className ="titlesec">
                <h2>
                    Register
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input type = 'text' placeholder = 'Username' value = {username} name = 'username' onChange={this.handleInputChange} />
                    </p>

                    <p>
                        <input type = 'password' placeholder = 'password' value = {password} name = 'password' onChange={this.handleInputChange} />
                    </p>

                    <p>
                        <button onClick={this.handleSubmit}>Register</button>
                    </p>

                    <br>
                    </br>

                    <p>
                        {this.state.message}
                    </p>
                </form>
            </div>
        );
    }
}

export default PostRegister;