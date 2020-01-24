import React from "react";
const axios = require("axios");

class Saved extends React.Component {
    state = {
        articles: []
    };

    componentDidMount() {

    }

    render() {
        return  (
            <div>
                this.state.articles.map( (article) => {
                <div>
                    hello
                </div>
            });
            </div>
        );
    }

};

export default Saved;