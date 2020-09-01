import React from "react";
import "./player.css";

function Player(props) {
  return (
    <div className="player" style={props.position}>
      <div className="pic">
        <img src={props.picture} alt="" />
      </div>
      <div className="name">
        {props.name}
        <br></br>
        {props.credit}
      </div>
      <div>
        <img className="coins" src="/images/coins.png" alt="" />
      </div>
    </div>
  );
}

export default Player;
