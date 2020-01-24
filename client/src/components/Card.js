import React from "react";

const Card = props => {
  return (
    <div>
      <div className={"card"} >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.authors}</p>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.image}</p>
          <p className="card-text">{props.link}</p>
          <a href="/yup" className="card-link">Save Article</a>
          <a href="/shu" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  );
};

export default Card;