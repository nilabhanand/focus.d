import React, { Component } from 'react'
import { Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import "firebase/auth";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="login-frame">
                <Typography style={{ padding: 16, textAlign: "center" }} variant="h1">
                FOCUS.D
                </Typography>
                <form className="login-form">
                    <div className="login-form-group">
                        <div className="login-form-input">
                            <Typography for="exampleInputEmail1" style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px" }}>Email Address</Typography>
                            <input className="login-textfield" value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" placeholder="Enter Email" />
                            <div className="space"></div>
                        
                            <Typography for="exampleInputPassword1" style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px"}}>Password</Typography>
                            <input className="login-textfield" value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
                            <div className="space"></div>
                        </div>
                        <div className="login-form-button">
                            <button className="auth-buttons" type="submit" onClick={this.login}>Login</button>
                            <div className="space"></div>
                            <button className="auth-buttons" onClick={this.signup}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
