import React from "react";
import "./AdvanceIntern.css";
import amazonlogo from "../../assets/logos/CompanyLogos/Amazon-logo.png";
import toponepercent from "../../assets/logos/CompanyLogos/toponepercentlogo.png";
import aswin from "../../assets/images/bgremove/aswin.png";
import yukta from "../../assets/images/bgremove/yukta.png";
import ashish from "../../assets/images/bgremove/ashish.png";
import nezda from "../../assets/logos/CompanyLogos/nezda-logo-cropped.png";
import comavector from "../../assets/images/coma-vector.png";

function JobSlider() {
  return (
    <>
      <div style={{ paddingTop: "30px" }}>
        <div id="carouselExampleDark" class="carousel carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <div className="card-item">
                <div className="card-img">
                  <img src={aswin} className="d-block w-100" />
                </div>

                <div className="js-content" style={{ color: "white" }}>
                  <p>
                    <img src={comavector} className="coma-vector" alt="" />
                    “I'm so greatful to have found a place where I can pursue my
                    passions and be surrounded by like-minded individuals who
                    push me to be my best.”
                  </p>
                  <div style={{ marginTop: "45px" }}>
                    <p>ASHWIN JAIN</p>
                    <p>2023 Batch</p>
                    <div className="high-pla" style={{ marginTop: "50px" }}>
                      <img src={amazonlogo} alt="" />
                    </div>
                    <p className="package">
                      44<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div className="card-item">
                <div className="card-img">
                  <img src={yukta} className="d-block w-100" alt="..." />
                </div>

                <div className="js-content" style={{ color: "white" }}>
                  <p>
                    <img src={comavector} className="coma-vector" alt="" />
                    “I couldn't have asked for a better university experience,
                    and I know that the education and connections I've gained
                    here will serve me well in the future.”
                  </p>
                  <div style={{ marginTop: "45px" }}>
                    <p>YUKTA KANDHARI</p>
                    <p>2023 Batch</p>
                    <div className="high-pla" style={{ marginTop: "50px" }}>
                      <img src={toponepercent} alt="" />
                    </div>
                    <p className="package">
                      48<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="card-item">
                <div className="card-img">
                  <img src={ashish} className="d-block w-100" alt="..." />
                </div>

                <div className="js-content" style={{ color: "white" }}>
                  <p>
                    <img src={comavector} className="coma-vector" alt="" />
                    “I'm appreciative to have found a place where I can freely
                    pursue my passions, surrounded by a collective of kindred
                    souls who inspire and propel me towards becoming the best
                    version of myself.”
                  </p>
                  <div style={{ marginTop: "45px" }}>
                    <p>ASHISH BANKA</p>
                    <p>2024 Batch</p>
                    <div className="high-pla" style={{ marginTop: "50px" }}>
                      <img src={nezda} alt="" />
                    </div>
                    <p className="package">
                      15<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default JobSlider;
