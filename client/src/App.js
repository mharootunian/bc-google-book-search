import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/Search";
import Saved from "./components/saved/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <Search/>

                <Router>
                    <Switch>
                        <Route exact path={"/saved"} component={Saved} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
