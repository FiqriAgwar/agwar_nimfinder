import React, {Component} from 'react';

async function postRegister(params){
    try{
        console.log(JSON.stringify(params));
        let response = await fetch('https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register', {
            method : 'POST',
            body : JSON.stringify(params),
        });

        return response;
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
        alert(response);
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
                        <button>Register</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default PostRegister;