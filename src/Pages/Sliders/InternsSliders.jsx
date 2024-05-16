import React, { useRef, useEffect } from "react";
import "./AdvanceIntern.css";
import amazon from "../../assets/logos/CompanyLogos/Amazon-logo.png";
import JobSlider from "./JobSlider";
import HighestIntern from "./HighestIntern";
import group from "../../assets/images/Group2620.png";
import amdocs from "../../assets/logos/ourplacementsection3/amdocs.png";
import moira from "../../assets/logos/ourplacementsection3/moira-thermex-bars-372-w410.png";
import zensar from "../../assets/logos/ourplacementsection3/ZENSARTECH.NS_BIG-943eb02e.png";
import kec from "../../assets/logos/ourplacementsection3/KEC_International_logo.svg.png";
import deloitte from "../../assets/logos/ourplacementsection3/Deloitte-logo.png";
import capgimini from "../../assets/logos/ourplacementsection3/Capgemini-Logo.png";
import tcs from "../../assets/logos/ourplacementsection3/Tata_Consultancy_Services_Logo.svg.png";
import cisco from "../../assets/logos/ourplacementsection3/ciscologo.png";
import ibm from "../../assets/logos/ourplacementsection3/IBM_logo.svg.png";
import mahindra from "../../assets/logos/ourplacementsection3/Mahindralogo.png";
import eicer from "../../assets/logos/ourplacementsection3/Eicher-logo.png";
import fusion from "../../assets/logos/ourplacementsection3/fusionglobal.png";
import byjuice from "../../assets/logos/have_a_look/Byjus-Logo.png";
import infosys from "../../assets/logos/have_a_look/infosys-logo-PNG.png";
import goldman from "../../assets/images/scroll/Someofourothertopplacements/11.png";
import valiant from "../../assets/images/scroll/Someofourothertopplacements/22.png";
import nova from "../../assets/images/scroll/Someofourothertopplacements/33.png";

function InternsSliders() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 200;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        <div className="over-flow-slider">
          <div className="sub-over-flow-slider">
            <div className="opportunities row">
              <div className="col-md-6 opport-content">
                <p>
                  countless opportunities at one place. yes! we are the
                  medicaps.
                </p>
                <p>glimpses of our jaw-dropping placement Statistics.</p>
                <p>A Brief Summary of Our Placements</p>
              </div>
              <div className="col-md-6 grp">
                <img src={group} className="grp-img" alt="" />
              </div>
            </div>
            <div>
              <div className="row companies-offers">
                <div className="col-md-3">
                  <p>2,500+</p>
                  <p>Companies Visited</p>
                </div>
                <div className="col-md-3">
                  <p>17,000+</p>
                  <p>Students Placed</p>
                </div>
                <div className="col-md-3">
                  <p>
                    INR <br /> 6LPA
                  </p>
                  <p>Average Package</p>
                </div>
                <div className="col-md-3">
                  <p>
                    INR <br /> 48LPA
                  </p>
                  <p>Highest Package</p>
                </div>
              </div>
            </div>
            <div>
              <JobSlider></JobSlider>
            </div>

            <div className="x-axis-conatiner">
              <p id="x-axis-scroll-heading">OUR PROMINIENT RECRUITERS</p>
              <div>
                <div className="x-axis-slider" ref={sliderRef}>
                  <div className="company-logo-card">
                    <img src={amdocs} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={kec} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={fusion} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={tcs} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={amazon} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={ibm} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={eicer} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={mahindra} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={cisco} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={deloitte} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={moira} alt="" />
                  </div>
                  <div className="company-logo-card">
                    <img src={capgimini} alt="" />
                  </div>
                  <div className="company-logo-card" style={{ border: "none" }}>
                    <img src={zensar} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="industry-placements">
              <div className="colab-heading">
                <span>some of our other top placements</span>
              </div>
              <div className="placement-cards">
                <div className="placement-card">
                  <div className="abt-student">
                    <div
                      className="placed-company"
                      style={{ marginTop: "-5px" }}
                    >
                      <img src={goldman} alt="" />
                    </div>
                    <div className="student-package">
                      <p>
                        24<span>LPA</span>
                      </p>
                      <p>PACKAGE</p>
                    </div>
                  </div>
                </div>
                <div className="placement-card">
                  <div className="abt-student">
                    <div
                      className="placed-company"
                      style={{ marginTop: "-10px" }}
                    >
                      <img src={valiant} alt="" />
                    </div>
                    <div className="student-package">
                      <p>
                        22<span>LPA</span>
                      </p>
                      <p>PACKAGE</p>
                    </div>
                  </div>
                </div>
                <div className="placement-card">
                  <div className="abt-student">
                    <div className="placed-company">
                      <img src={nova} alt="" />
                    </div>
                    <div className="student-package">
                      <p>
                        17<span>LPA</span>
                      </p>
                      <p>PACKAGE</p>
                    </div>
                  </div>
                </div>
                <div className="placement-card">
                  <div className="abt-student">
                    <div className="placed-company">
                      <img src={cisco} alt="" />
                    </div>
                    <div className="student-package">
                      <p>
                        15<span>LPA</span>
                      </p>
                      <p>PACKAGE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------ */}
            <div className="industry-colab">
              <div className="colab-heading">
                <span>have a look at our industry collaborations</span>
              </div>
              <div className="colab-cards">
                <div className="colab-card">
                  <div>
                    <img src={byjuice} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={infosys} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={deloitte} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={capgimini} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={tcs} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={cisco} alt="" />
                  </div>
                </div>
              </div>
              <div className="colab-cards">
                <div className="colab-card">
                  <div>
                    <img src={ibm} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={mahindra} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={eicer} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={amazon} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={amdocs} alt="" />
                  </div>
                </div>
                <div className="colab-card">
                  <div>
                    <img src={fusion} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <HighestIntern></HighestIntern>
        </div>
      </div>
    </>
  );
}

export default InternsSliders;
