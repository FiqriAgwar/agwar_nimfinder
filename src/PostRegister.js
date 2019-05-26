import React, {Component} from 'react';

async function postRegister(params){
    var request = require('postman-request');
    
    try{
        console.log(JSON.stringify(params));
        request.post('https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register')
            .form(
                {
                    username : params.username,
                    password : params.password
                }
            )

    }
    catch(error){
        console.error(error);
    }
}

class PostRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state; 
        console.log(data.username + " " + data.password);

        let response = postRegister(data);
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
                </form>
            </div>
        );
    }
}

export default PostRegister;