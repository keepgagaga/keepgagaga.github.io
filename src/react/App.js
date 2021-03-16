import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home";
import Antv from "./pages/antv";
import Login from "./pages/login";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }

    componentDidMount() {

    }

    getLoginStatus() {
        let localStorage = window.localStorage;
        let isLogin = localStorage.getItem('isLogin');
        this.setState({
            isLogin: isLogin
        })
    }

    render() {
        if (this.state.isLogin === true) {
            return (
                <div className="App"> 
                    <HashRouter>
                        <Switch>
                            <Route path="/home" component={Home} exact></Route>
                            <Route path="/antv" component={Antv} exact></Route>
                            <Route path="/" component={Home} exact></Route>
                        </Switch>
                    </HashRouter>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <Login></Login>
                </div>
            );
        }
        
    }
}

export default App;