import React, { Component } from "react";
import { Link, Route, Router, Switch } from 'react-router-dom';
import "../styles/login.css";
import Signup from "./signup";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            userPassword: '',
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPassWordChange = this.onPassWordChange.bind(this);
        this.onSubbmit = this.onSubbmit.bind(this);
        this.jumpToSignup = this.jumpToSignup.bind(this);
    }

    onNameChange(e) {
        console.log(e.target.value, 'onNameChange');
        this.setState({
            userName: e.target.value
        })
    }

    onPassWordChange(e) {
        console.log(e.target.value, 'onPassWordChange');
        this.setState({
            userPassword: e.target.value
        })
    }

    onSubbmit() {
        let localStorage = window.localStorage;
        let localUserName = localStorage.getItem('UserName');
        let localUserPassword = localStorage.getItem('UserPassword');
        console.log(localStorage, localUserName, localUserPassword, 'local....__-------->');
        if (!localUserName) {
            alert('User not signup, please signup');
        } else {
            if (localUserName === this.state.userName && localUserPassword === this.state.userPassword) {
                localStorage.setItem('isLogin', true);
                localStorage.setItem('userName', this.state.userName);
                localStorage.setItem('userPassword', this.state.userPassword);
            } 
        }
    }

    jumpToSignup() {

    }

    render() {
        return (
            <div className="center">
                {/* <div>登录以继续使用本网站</div> */}
                <input placeholder="please innput name" onChange={this.onNameChange}></input>
                <input placeholder="please input password" onChange={this.onPassWordChange}></input>
                <div style={{ width: 10 + 'vw' }}>
                    <button onClick={this.onSubbmit}>登录</button>
                </div>
                <Router>
                    <Link to="/signup"></Link>
                </Router>

                <Switch>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Login;