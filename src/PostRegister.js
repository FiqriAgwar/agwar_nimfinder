import React, {Component} from 'react';
import axios from 'axios';

class PostRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            message : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state; 
        console.log(data);

        axios.post('https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        console.log(response);
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