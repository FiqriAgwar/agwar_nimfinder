import React, {Component} from 'react';
import axios from 'axios';

class PostRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
        }

        this.message = '';
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const url = 'https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register';

        const data = {
            "username" : this.state.username,
            "password" : this.state.password
        }
        console.log(data);

        const config = {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        }

        axios.post(url, data)
            .then(response => {
                console.log(response)
                this.message = response.data.status;
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
                        {this.message}
                    </p>
                </form>
            </div>
        );
    }
}

export default PostRegister;