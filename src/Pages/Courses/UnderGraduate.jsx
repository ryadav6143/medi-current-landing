import React from "react";

function UnderGraduate() {
  return (
    <>
      <div className="btns">
        <div className="row row-1">
          <div className="col-md-4 BAT courses-rows">
            <div class="dropdown" style={{ border: "none", color: "black" }}>
              <button
                class="drop-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "black" }}
              >
                Bachelor's of Technology
              </button>
              <div
                class="dropdown-menu menu"
                aria-labelledby="dropdownMenuButton"
                style={{
                  border: "none",
                  fontFamily: "Gotham-Medium",
                }}
              >
                <ul>
                  <li>B.Tech. Computer Science and Engineering</li>
                  <li>B.Tech. Information Technology</li>
                  <li>B.Tech. AU-Electric Vehicle</li>
                  <li>B.Tech. Civil Engineering</li>

                  
                  <li>B.Tech. Electrical Engineering</li>
                  <li>B.Tech. Mechanical Engineering</li>
                  <li>B.Tech. Electronics & Communication</li>
                  <li>B.Tech. Robotics and Automation</li>
                  <li>B.Tech. Artificial Intelligence(AI)</li>
                  <li>B.Tech. Data Science (DS)</li>
                  <li>B.Tech. Computer Science and Buisness System (CSBS)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 courses-rows" style={{ letterSpacing: "0" }}>
            Bachelor's of Pharmacy
          </div>
          <div className="col-md-4 BAT courses-rows">
            <div class="dropdown">
              <button
                class="drop-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "black" }}
              >
                Bachelor's of Business Administration
              </button>
              <div
                class="dropdown-menu menu"
                aria-labelledby="dropdownMenuButton"
                style={{
                  border: "none",
                  fontFamily: "Gotham-Medium",
                }}
              >
                <ul>
                  <li>Foreign Trade</li>
                  <li>Human Resource</li>
                  <li>Marketing Management</li>
                  <li>Digital Marketting</li>
                  <li>Finance</li>
                  <li>Business Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="col-md-4 BAT courses-rows">
            <div class="dropdown" style={{ border: "none", color: "black" }}>
              <button
                class="drop-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bachelor's of Commerce(Hons.)
              </button>
              <div
                class="dropdown-menu menu"
                aria-labelledby="dropdownMenuButton"
                style={{ border: "none", fontFamily: "Gotham-Medium" }}
              >
                <ul>
                  {/* <li>B.Com. (Hons)</li> */}
                  <li>Accountig & Taxation</li>
                  <li>Banking & Insurance</li>
                  <li>Computer Application</li>
                  <li>B.Com. Global Finance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 courses-rows">
            Bachelor's of Computer Applications
          </div>
          <div className="col-md-4 BAT courses-rows">
            <div class="dropdown" style={{ border: "none" }}>
              <button
                class="drop-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "black" }}
              >
                Bachelor's of Science
              </button>
              <div
                class="dropdown-menu menu"
                aria-labelledby="dropdownMenuButton"
                style={{ border: "none" }}
              >
                <ul>
                  <li>B.Sc. Bio-Technology</li>
                  <li>B.Sc. Forensic Science (Hons)</li>
                  <li>B.Sc.Computer Science</li>
                  <li>B.Sc.Agriculture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="col-md-4 BAT courses-rows">
            <div class="dropdown" style={{ border: "none", color: "black" }}>
              <button
                class="drop-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Faculty of Law
              </button>
              <div
                class="dropdown-menu menu"
                aria-labelledby="dropdownMenuButton"
                style={{ border: "none", fontFamily: "Gotham-Medium" }}
              >
                <ul>
                  <li>BA-LL.B.</li>
                  <li>BBA-LL.B.</li>
                  <li>LL.B.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnderGraduate;
