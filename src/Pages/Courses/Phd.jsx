import React from "react";

function Phd() {
  return (
    <>
      <div className="btns">
        <div className="row row-1">
          <div className="col-md-4 BAT courses-rows">Ph.D. in Engineering</div>
          <div className="col-md-4 courses-rows">Ph.D. in Management</div>
          <div className="col-md-4 courses-rows">Ph.D. in Commerce</div>
        </div>
        <div className="row row-2">
          <div className="col-md-4 courses-rows" style={{ paddingTop: "25px" }}>
            Ph.D. in Science
          </div>
          <div className="col-md-4 courses-rows" style={{ paddingTop: "25px" }}>
            Ph.D. in Pharmacy
          </div>
          <div className="col-md-4 courses-rows">
            Ph.D. in Arts, Humanities & Social Science
          </div>
        </div>
      </div>
    </>
  );
}

export default Phd;
