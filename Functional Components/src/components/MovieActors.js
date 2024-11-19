import React from "react";

function MovieActors(props) {
  return (
    <div className="prabhasMovie">
      <h1>Name: {props.Name}</h1>
      <img src={props.imgURL}></img>
      <h2 className="hitMovie">Hit Movie: {props.Hit}</h2>
      <h2 className="hitMovie">Flop Movie: {props.Flop}</h2>
    </div>
  );
}

export default MovieActors;
