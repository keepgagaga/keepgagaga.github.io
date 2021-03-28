import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect, BrowserRouter as Router, Link, useParams, useRouteMatch } from "react-router-dom";
import "./styles/App.css";
// import Home from "./pages/home";
// import Antv from "./pages/antv";
// import Login from "./pages/login";

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
        return (
            <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/signup">signup</Link>
                    </li>
                    <li>
                        <Link to="/params">params</Link>
                    </li>
                    <li>
                        <Link to="/topics">topics</Link>
                    </li>
                </ul>
                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/:id" children={ <Child/> }></Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </Router>
        );
    }
}

function Topics() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>topics</h2>
            <ul>
                <li>
                    <Link to={ `${url}/rendering` }>Rendering with render</Link>
                </li>
                <li>
                    <Link to={ `${url}/components` }>Components</Link>
                </li>
                <li>
                    <Link to={ `${url}/props-v-state` }></Link>
                </li>
            </ul>
        </div>
    )
}

function Child() {
    let { id } = useParams();
    return (
        <div>
            ID: { id }
        </div>
    );
}

function Home() {
    return (
        <div>
            home
        </div>
    );
}

function Login() {
    return (
        <div>login</div>
    );
}

function Signup() {
    return (
        <div>
            signup
        </div>
    )
}

export default App;