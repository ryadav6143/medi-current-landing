import React from "react";
import worldmap from "../../assets/images/worldmapfinal.png";
import "./AdvanceMaps.css";
import map1 from "../../assets/logos/Canada.png";
import map2 from "../../assets/logos/unitedstates.png";
import map3 from "../../assets/logos/Brazil.png";
import map4 from "../../assets/logos/unitedkingdom.png";
import map5 from "../../assets/logos/France.png";
import map6 from "../../assets/logos/germany.png";
import map7 from "../../assets/logos/Dubai.png";
import map8 from "../../assets/logos/SouthAfrica.png";
import map9 from "../../assets/logos/hongkong.png";
import map10 from "../../assets/logos/Singapore.png";
import map11 from "../../assets/logos/Australia.png";
import oae from "../../assets/logos/UniversityLogos/WoosongUniversity.png";
import DPU from "../../assets/logos/UniversityLogos/DPUlogo.png";
import SMU from "../../assets/logos/UniversityLogos/SMU-logo.png";
import Tapai from "../../assets/logos/UniversityLogos/National-Taipei-University-of-Technology-NTU-logo.png";
import asiauniv from "../../assets/logos/UniversityLogos/Asia_University_Logo.png";
import worldmapmobile from "../../assets/images/mobile-view-map.png";

function Maps() {
  return (
    <>
      <div className="map-img">
        <div className="map-img-sub-container">
          <div className="map-text">
            <p>Study Abroad With Medicaps</p>
            <p>Look where some of our students are studying abroad! </p>
          </div>
          <div className="country-map">
            <img src={map1} className="map-logos" alt="" />
            <img src={map2} className="map-logos" alt="" />
            <img src={map3} className="map-logos" alt="" />
            <img src={map4} className="map-logos" alt="" />
            <img src={map5} className="map-logos" alt="" />
            <img src={map6} className="map-logos" alt="" />
            <img src={map7} className="map-logos" alt="" />
            <img src={map8} className="map-logos" alt="" />
            <img src={map9} className="map-logos" alt="" />
            <img src={map10} className="map-logos" alt="" />
            <img src={map11} className="map-logos" alt="" />
          </div>
          <img src={worldmap} className="forpcs" />
          <img src={worldmapmobile} className="formobile" />

          <div className="companies">
            <div className="map-bottom-head">
              <p>
                Our <br />
              </p>
              <p>
                International <br />
              </p>
              <p>Tie-ups</p>
            </div>
            <div className="company-logo">
              <div
                className="card"
                style={{
                  width: "200px",
                  padding: "0",
                  height: "200px",
                }}
              >
                <img
                  className="card-img-top"
                  src={oae}
                  alt="Card image cap"
                  style={{
                    zIndex: "100",
                    objectFit: "cover",
                    padding: "0px",
                    height: "100px",
                    marginTop: "20px",
                    marginBottom: "-20px",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    padding: "0",
                    backgroundColor: "black",
                    padding: "5px",
                  }}
                >
                  <p className="card-text">Woosong University</p>
                </div>
              </div>

              <div className="card" style={{ width: "200px", padding: "0" }}>
                <img
                  className="card-img-top"
                  src={DPU}
                  alt="Card image cap"
                  style={{
                    zIndex: "100",
                    objectFit: "cover",
                    padding: "0",
                    marginTop: "32px",
                    marginBottom: "32px",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    padding: "0",
                    backgroundColor: "black",
                    padding: "5px",
                  }}
                >
                  <p className="card-text" style={{ marginTop: "15px" }}>
                    DPU
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "200px", padding: "0" }}>
                <img
                  className="card-img-top"
                  src={SMU}
                  alt="Card image cap"
                  style={{
                    zIndex: "100",
                    objectFit: "cover",
                    padding: "0",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "10px",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    padding: "0",
                    backgroundColor: "black",
                    padding: "5px",
                  }}
                >
                  <p className="card-text" style={{ marginTop: "15px" }}>
                    SMU
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "200px", padding: "0" }}>
                <img
                  className="card-img-top"
                  src={Tapai}
                  alt="Card image cap"
                  style={{
                    zIndex: "100",
                    objectFit: "cover",
                    padding: "0",
                    height: "100px",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    padding: "0",
                    backgroundColor: "black",
                    padding: "5px",
                  }}
                >
                  <p className="card-text" style={{ marginTop: "15px" }}>
                    NTUT-Taiwan
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "200px", padding: "0" }}>
                <img
                  className="card-img-top"
                  src={asiauniv}
                  alt="Card image cap"
                  style={{
                    zIndex: "100",
                    objectFit: "cover",
                    padding: "0",
                    height: "100px",
                    width: "100px",
                    margin: "auto",
                    marginTop: "15px",
                    marginBottom: "-13px",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    padding: "0",
                    backgroundColor: "black",
                    padding: "5px",
                  }}
                >
                  <p className="card-text">Asia University Taiwan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maps;
