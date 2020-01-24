import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/Search";
import Saved from "./components/saved/Saved";
import Results from "./components/Results";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

    state = {
        query: ""
    };

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
                        <Route exact path={"/"} component={ () => <Results query={this.state.query} />} />
                        <Route exact path={"/saved"} component={Saved} />
                    </Switch>
                </Router>
            </div>
        );
    }

    searchGBooks = () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.query
        }`;
        axios
            .get(url)
            .then(res => {
                //console.log(res);
                this.displayRes(res.data);
            })
            .catch(err => console.log(err));
    };
}

export default App;
