import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import qs from 'qs';

class PostRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            code : '',
            message : '',
            linkToGo : null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({message : 'Loading'})

        const url = 'https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register';

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

    handleClick = () => {
        this.setState({linkToGo : "/login"})
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.linkToGo !== prevState.linkToGo){
            this.setState({linkToGo : null})
        }
    }

    render(){
        const {username, password, code, linkToGo} = this.state;
        if(code !== 0){
            if(linkToGo === null){
                return(
                    <div className ="board">
                        <h2>
                            Daftarkan Dirimu
                        </h2>

                        <form onSubmit={this.handleSubmit}>
                            <p>
                                <input className="querybar" type = 'text' placeholder = 'Username' value = {username} name = 'username' onChange={this.handleInputChange} />
                            </p>

                            <p>
                                <input className="querybar" type = 'password' placeholder = 'password' value = {password} name = 'password' onChange={this.handleInputChange} />
                            </p>

                            <p>
                                <button className="btnone" onClick={this.handleSubmit}>Register</button> 
                            </p>

                            <p>
                                atau Sudah Punya Akun?
                            </p>

                            <p>
                                <button className="btntwo" onClick={this.handleClick}>Go To Login</button>
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
            else{
                return(
                    <Redirect to={{
                        pathname : '/login',
                        state : {username}
                    }}/>
                )
            }
        }
        else{
            return(
                <Redirect to={{
                    pathname : '/login',
                    state : {username}
                }}/>
            );
        }
    }
}

export default PostRegister;