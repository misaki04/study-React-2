import React from "react";

const Pokemon = (props) => {
  return (
    <div className="poke">
      <img src={props.url} alt="" className="box" />
      <p className="name">{props.name}</p>
    </div>
  );
};

export default Pokemon;
