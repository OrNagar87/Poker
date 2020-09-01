import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="back">
      <img
        className="card"
        src="/images/back.png"
        alt=""
        onClick={props.start}
      />
    </div>
  );
}
