import React from "react";
import "./setting";
import ReactSlider from "react-slider";
function Setting() {
  return (
    <div className="setting">
      <div className="line"></div>
      <div className="all_in">
        ALL IN <span>1500$</span>
      </div>
      <div className="fold">
        <button className="blue">Fold</button>
        <button className="green">Call</button>

        <button className="yellow">Raise To</button>
        <input type="range" defaultValue={0} className="slider" />
      </div>
    </div>
  );
}

export default Setting;
