import React from "react";

function PostGraduate() {
  return (
    <>
      <div>
        <div className="btns">
          <div className="row row-1">
            <div className="col-md-4 BAT courses-rows">Master of Arts</div>
            <div className="col-md-4 courses-rows">M.Pharma</div>
            <div className="col-md-4 courses-rows">
              Master of Computer Application
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
                  Master of Science
                </button>
                <div
                  class="dropdown-menu menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <ul>
                    <li>M.Sc.Physics</li>
                    <li>M.Sc.Chemistry</li>
                    <li>M.Sc.Maths</li>
                    <li>M.Sc.Forensic Science</li>
                  </ul>
                </div>
              </div>
            </div>
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
                  Master of Business Administration
                </button>
                <div
                  class="dropdown-menu menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ border: "none" }}
                >
                  <ul>
                    <li>Finance</li>
                    <li>Foreign Trade</li>
                    <li>Human Resource</li>
                    <li>Logistic Supply Chain Management</li>
                    <li>Marketing Management</li>
                    <li>Business Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
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
                  Master of Technology
                </button>
                <div
                  class="dropdown-menu menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <ul>
                    <li>M.Tech.Computer Science and Engineering</li>
                    <li>M.Tech.Civil Engineering</li>
                    <li>M.Tech.Electronics & Communication</li>
                    <li>M.Tech.Electrical Engineering</li>
                    <li>M.Tech.Information Technology</li>
                    <li>M.Tech.Mechanical Engineering</li>
                    <li>M.Tech.Nano Technology</li>
                    {/* <li>Master of Computer Application(MCA)</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-1">
            <div className="col-md-4 courses-rows">
              Bachelor of Computer Application + Master of Computer Application
              (Integrated)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostGraduate;
