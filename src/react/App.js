import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home";
import Antv from "./pages/antv";

class App extends Component {
    render() {
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
    }
}

export default App;