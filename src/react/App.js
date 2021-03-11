import React, { Component } from "react";
import "./App.css";
import Test from "./components/test";

class App extends Component {
    render() {
        return (
            <div className="App"> 
                <h1>hello react</h1>
                <Test></Test>
            </div>
        );
    }
}

export default App;