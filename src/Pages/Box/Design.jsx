import React from "react";
import "./Design.css";

function Design() {
  return (
    <>
      <div style={{ marginTop: "70px" }} className="design-container">
        <div className="box-container">
          <div className="box-card imgs"></div>

          <div className="box-card text-box">
            <p className="text-box-heading">Advanced CNC Lab:</p>
            <p className="text-box-data">
              Our CNC lab is equipped with state- of-the-art machinery, our lab
              offers hands-on experience in precision machining, enhancing
              skills for tomorrow's industry leaders.
            </p>
          </div>
        </div>
        <div className="box-container">
          <div className="box-card text-box">
            <p className="text-box-heading">Advanced Robotics Lab:</p>
            <p className="text-box-data">
              Explore advancements in robotics at the Medicaps University
              Advanced Robotics Lab. Our state- of-the-art facility fosters
              innovation, research, and hands-on learning for students, shaping
              future leaders in robotics technology.
            </p>
          </div>
          <div className="box-card imgs-1"></div>
        </div>

        <div className="box-container">
          <div className="box-card imgs-2"></div>
          <div className="box-card text-box">
            <p className="text-box-heading">Advanced Pharmacy Lab:</p>
            <p className="text-box-data">
              The Advanced Pharmacy Lab at Medicaps University is a state-of-
              the-art facility equipped with cutting-edge instrumentation for
              pharmaceutical research. Students gain hands-on experience in drug
              formulation, analysis, and quality control, fostering innovation
              and excellence in pharmacy education.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
