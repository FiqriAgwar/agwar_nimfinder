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
            token : '',
            linkToGo : null,
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

    handleClick = () => {
        this.setState({linkToGo : "/register"});
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.linkToGo !== prevState.linkToGo){
            this.setState({linkToGo : null})
        }
    }

    render(){
        let {username, password, code, token, message, linkToGo} = this.state;
        
        if(token === undefined || token === '' || code !== 0){
            if(linkToGo === null){    
                return(
                    <div className ="board">
                        <h2>Login Dulu Ya</h2>
                        <form onSubmit={this.handleSubmit}>
                            <p>
                                <input className="querybar" type = 'text' placeholder = 'Username' value = {username} name = 'username' onChange={this.handleInputChange} />
                            </p>

                            <p>
                                <input className="querybar" type = 'password' placeholder = 'password' value = {password} name = 'password' onChange={this.handleInputChange} />
                            </p>

                            <p>
                                <button className="btnone" onClick={this.handleSubmit}>Login</button> 
                            </p>

                            <p>
                                atau Belum Punya Akun?
                            </p>

                            <p>
                                <button className="btntwo" onClick={this.handleClick}>Go To Register</button>
                            </p>

                            <p className="message">
                                {message}
                            </p>

                        </form>
                    </div>
                );
            }
            else{
                return (<Redirect to ="/register" />)
            }
        }
        else{
            console.log(token);
            this.setState({code : 1})
            return(
                <Redirect to={{
                    pathname : '/get',
                    state : {token, username}
                }}/>
            );
        }
    }
}

export default PostLogin;