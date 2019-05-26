import React, {Component} from 'react'; 

class PostRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    postRegister = function (params){
        try{
            let response = fetch('https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register', {
                method : 'POST',
                body : JSON.stringify(params),
            });
    
            //let responseJSON = response.json().stringify;
            return response;
        }
        catch(error){
            console.error(error);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state; 
        console.log(data);

        let response = this.postRegister(data);
        console.log(response);
        alert(response.stringify);
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