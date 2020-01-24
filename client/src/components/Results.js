import React from "react";
import Card from "../Card"
const axios = require("axios");

class Results extends React.Component {
    state = {
        articles: [],
        query: ""
    };

    componentDidMount() {
        console.log("done");

        this.setState({
           query: this.props.query
        });

        axios({
            method: "GET",
            url: "/api/books"
        }).then(data => {
            this.setState({
                articles: data.data
            });
            console.log(this.state.articles);
        });

    }

    render() {
        return (
            <div>

                {this.state.articles.map(article => (
                    <div key={article._id}>
                        <Card
                            title={article.title}
                            authors={article.authors[1]}
                            description={article.description}
                            image={article.image}
                            link={article.link}
                        />
                    </div>
                ))}
            </div>
        );
    }

};

export default Results;