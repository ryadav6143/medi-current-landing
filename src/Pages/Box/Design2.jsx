import React from "react";
import "./Design.css";

function Design2() {
  return (
    <>
      <div className="sport-heading-container">
        <p className="sport-heading">
          <span>be a part of the most enriching sporting exposure</span>
        </p>
        {/* <p> State of the Art Sporting Complex</p> */}
      </div>
      <div className="sport-container">
        <div className="sport-cards">
          <div className="sport-img "></div>
          <div className="small-imgs">
            <div className="img-1 spimg-1"></div>
            <div className="img-2 spimg-2"></div>
            <div className="img-3 spimg-3"></div>
          </div>
        </div>
        <div className="sport-cards">
          <div className="sport-img big-img-1"></div>
          <div className="small-imgs">
            <div className="img-1 spimg-4"></div>
            <div className="img-2 spimg-5"></div>
            <div className="img-3 spimg-6"></div>
          </div>
        </div>
        <div className="sport-cards">
          <div className="sport-img big-img-3"></div>
          <div className="small-imgs">
            <div className="img-1 spimg-7"></div>
            <div className="img-2 spimg-8"></div>
            <div className="img-3 spimg-9"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design2;
