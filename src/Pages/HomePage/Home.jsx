import React, { useState, useRef, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footers from "../../Components/Footers/Footers";
import "./AdvanceHome.css";
import money from "../../assets/logos/money.png";
import cowork from "../../assets/logos/coworking.png";
import leadership from "../../assets/logos/leadership.png";
import mlllogo from "../../assets/logos/mll logo.png";
import FAQ from "../FAQ/FAQ";
import Design from "../Box/Design";
import Design2 from "../Box/Design2";
import Maps from "../places/Maps";
import aswin from "../../assets/images/bgremove/aswin.png";
import barcouncil from "../../assets/logos/Group3007.png";
import InternsSliders from "../Sliders/InternsSliders";
import yukta from "../../assets/images/YuktaKhandari.jpg";
import toponepercent from "../../assets/logos/top.png";
import amazon from "../../assets/logos/CompanyLogos/Amazon-logo.png";
import ashish from "../../assets/images/bgremove/ashish.png";
import nezda from "../../assets/logos/CompanyLogos/nezda-logo-cropped.png";
import aicte from "../../assets/logos/Group3112.png";
import pci from "../../assets/logos/pci.png";
import icar from "../../assets/logos/icar.png";
import bci from "../../assets/logos/bci.png";
import UnderGraduate from "../Courses/UnderGraduate";
import PostGraduate from "../Courses/PostGraduate";
import Phd from "../Courses/Phd";
function Home() {
  if (!sessionStorage.getItem("hasRefreshed")) {
    sessionStorage.setItem("hasRefreshed", "true");
    window.location.reload();
  }
  const [activeButton, setActiveButton] = useState("UnderGraduate");
  let linktolaunchinglaws = `https://law.medicaps.ac.in/`;
  const [selectedComponent, setSelectedComponent] = useState();
  const showComponent = (componentName) => {
    setSelectedComponent(componentName);
    setActiveButton(componentName);
  };
  let componentToShow;
  switch (selectedComponent) {
    case "UnderGraduate":
      componentToShow = <UnderGraduate />;
      break;
    case "PostGraduate":
      componentToShow = <PostGraduate />;
      break;
    case "Phd":
      componentToShow = <Phd />;
      break;

    default:
      componentToShow = <UnderGraduate />;
      break;
  }
  const enquirform = useRef(null);
  const scrollToSection = (id) => {
    enquirform.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <>
      <Header></Header>
      <div className="container-1">
        <div className="c1-section-1">
          <div id="c1-text">
            <p>
              Join Central India's <br />
              Best Private University <br />
              for UG & PG Programs
            </p>
          </div>
          <div className="sliders">
            <div className="student">
              <div id="carouselExample" className="carousel slide job-slider">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card-item">
                      <div>
                        <p className="slider-heading">
                          Empowering Dreams <br /> through Top Placements.
                        </p>
                        <div className="slider-card-1">
                          <div>
                            <img
                              style={{
                                objectFit: "cover",
                              }}
                              src={yukta}
                              alt=""
                            />
                          </div>
                          <div className="student-detail">
                            <p> Yukta Kandhari</p>
                            <div>
                              <img src={toponepercent} alt="" />
                            </div>
                            <p id="student-batch"> Batch: 2023</p>
                            <p id="student-stream">B.Tech Computer Science</p>
                            <p id="student-stream">and Business System</p>
                            <p id="student-package"> Package: 48 LPA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="card-item">
                      <div>
                        <p className="slider-heading">
                          Empowering Dreams <br /> through Top Placements.
                        </p>
                        <div className="slider-card-1">
                          <div>
                            <img src={aswin} alt="" />
                          </div>
                          <div className="student-detail">
                            <p>Ashwin Jain</p>
                            <div>
                              <img src={amazon} alt="" />
                            </div>
                            <p id="student-batch"> Batch: 2023</p>
                            <p id="student-stream">
                              B.Tech Information Technology
                            </p>
                            <p id="student-package"> Package: 44 LPA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="card-item">
                      <div>
                        <p className="slider-heading">
                          Empowering Dreams <br /> through Top Placements.
                        </p>
                        <div className="slider-card-1">
                          <div>
                            <img src={ashish} alt="" />
                          </div>
                          <div className="student-detail">
                            <p>Ashish Banka</p>
                            <div>
                              <img src={nezda} alt="" />
                            </div>
                            <p id="student-batch"> Batch: 2024</p>
                            <p id="student-stream">MBA</p>
                            <p id="student-package"> Package: 15 LPA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev shift-btns"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next shift-btns"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="slide-card-main" style={{ marginTop: "-20px" }}>
              <div className="student">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="slide-card-main">
                        <div className="slider-card-2">
                          <div className="bar-council">
                            <p>ACCREDITED &</p>
                            <p>RECOGNIZED BY:</p>
                            <span>
                              <p>UGC </p>
                              <p>(UNIVERSITY</p>
                              <p>GRANTS</p>
                              <p>COMMISION)</p>
                            </span>
                          </div>
                          <div>
                            <img
                              className="affiliate"
                              src={barcouncil}
                              alt=""
                              style={{ marginLeft: "10px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="slide-card-main">
                        <div className="slider-card-2">
                          <div className="bar-council">
                            <p>ACCREDITED &</p>
                            <p>RECOGNIZED BY:</p>
                            <span>
                              <p>AICTE </p>
                              <p>(ALL INDIA</p>
                              <p>COUNCIL FOR</p>
                              <p>TECHNICAL</p>
                              <p>EDUCATION)</p>
                            </span>
                          </div>
                          <div>
                            <img
                              className="affiliate"
                              style={{
                                marginLeft: "10px",
                              }}
                              src={aicte}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="carousel-item">
                      <div className="slide-card-main">
                        <div className="slider-card-2">
                          <div className="bar-council">
                            <p>ACCREDITED &</p>
                            <p>RECOGNIZED BY:</p>
                            <span>
                              <p>PCI </p>
                              <p>(PHARMACY</p>
                              <p>COUNCIL OF</p>
                              <p>INDIA)</p>
                            </span>
                          </div>
                          <div>
                            <img
                              className="affiliate"
                              style={{
                                marginLeft: "10px",
                              }}
                              src={pci}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="slide-card-main">
                        <div className="slider-card-2">
                          <div className="bar-council">
                            <p>ACCREDITED &</p>
                            <p>RECOGNIZED BY:</p>
                            <span>
                              <p>ICAR</p>
                              <p>(Indian</p>
                              <p>COUNCIL OF</p>
                              <p>AGRICULTURAL</p>
                              <p>Research)</p>
                            </span>
                          </div>
                          <div>
                            <img
                              className="affiliate"
                              style={{
                                marginLeft: "-10px",
                              }}
                              src={icar}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="slide-card-main">
                        <div className="slider-card-2">
                          <div className="bar-council">
                            <p>ACCREDITED &</p>
                            <p>RECOGNIZED BY:</p>
                            <span>
                              <p>BCI </p>
                              <p>(BAR COUNCIL</p>
                              <p> OF INDIA)</p>
                            </span>
                          </div>
                          <div>
                            <img
                              className="affiliate"
                              src={bci}
                              alt=""
                              style={{ marginLeft: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev shift-btns2"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon "
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next shift-btns2"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon "
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c1-section-2" ref={enquirform}>
          <div id="med-form">
            <div
              class="npf_wgts"
              data-height="450px"
              data-w="3dd35188e1d58453c568795b929814f6"
            ></div>
          </div>
        </div>
        {/* <div className="c1-section-2" ref={enquirform}>
          <div id="med-form">
            <div
              className="npf_wgts "
              data-height="450px"
              data-w="27df0493d345ec202380c6083f61d119"
            ></div>
          </div>
        </div> */}
      </div>
      <div className="apply-btn">
        <button onClick={scrollToSection}>APPLY NOW</button>
      </div>
      <div className="container-2">
        <div className="leaf-cards">
          <div className="leaf-card">
            <div>
              <p className="card-head">RANKED 1st</p>
              <p className="rank-content">
                In Placement in Madhya-
                <br /> Pradesh by Times <br />
                Engineering Survey 2022
              </p>
            </div>
          </div>
          <div className="leaf-card">
            <div>
              <p className="card-head">RANKED 32nd</p>
              <p className="rank-content">
                In Placement in India by i3RC
                <br />
                Times Engineering <br />
                Survey 2021
              </p>
            </div>
          </div>
          <div className="leaf-card">
            <div>
              <p className="card-head"> RANKED 1st</p>
              <p className="rank-content">
                Amongst Top Private Institute <br /> in Central India by <br />
                Times of India 2020
              </p>
            </div>
          </div>
        </div>
        <div className="leaf-cards">
          <div className="leaf-card">
            <div>
              <p className="card-head">RANKED 1st</p>
              <p className="rank-content">
                In Placement & Graduating <br /> Outcomes in Central India by{" "}
                <br />
                Outlook Survey 2019
              </p>
            </div>
          </div>
          <div className="leaf-card">
            <div>
              <p className="card-head">
                HIGHEST <br /> PLACEMENTS
              </p>
              <p className="rank-content">
                Offers by The Companies <br /> in MP, CG
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-main-1">
        <div className="scholarship-section" id="why-mu">
          <div className="grab-chances-1"></div>
          <div className="mu-sat-para" style={{ fontSize: "23px" }}>
            <p>
              <span style={{ fontFamily: "Gotham-Bold" }}>MU-SAT:</span>
              Medicaps University Scholarship cum Admission Test (MU-SAT 2024)
              is a national-level entrance exam and scholarship test mandatory
              for admission in Integrated Law programs, Engineering, Management,
              Agriculture, Pharmacy, Science, and Art Humanities & Social
              Science. The amount of the scholarship depends on the performance
              of the student in MU-SAT 2024 & the fee of the program.
            </p>
          </div>
          <div className="phases">
            <div className="card">
              <p className="phase">MU-SAT-PHASE-I</p>
              <p>To be conducted on 1st & 2nd June 2024</p>
              <button>
                <a href="#">APPLY NOW</a>
              </button>
            </div>
            <div className="card">
              <p className="phase">MU-SAT-PHASE-II</p>
              <p>To be conducted on 20th & 21st June 2024 </p>
              <button>
                <a href="#">APPLY NOW</a>
              </button>
            </div>
          </div>
          <div className="phases-2">
            <div className="card">
              <p className="phase">MU-SAT-PHASE-III</p>
              <p>To be conducted on 16th & 17th August 2024 </p>
              <button>
                <a href="#">APPLY NOW</a>
              </button>
            </div>
          </div>
        </div>
        <div id="carrer">
          <InternsSliders></InternsSliders>
        </div>

        <div>
          <Maps></Maps>
        </div>
        <div className="business-venture">
          <div className="business-venture-sub-container">
            <div>
              <p className="bv-heading">
                <span style={{ border: "none" }}>WE ARE MII FOUNDATION:</span>
                <br />
                <span>TURN YOUR IDEA INTO A BUSINESS VENTURE</span>
              </p>
              <p className="bv-para">
                MII Foundation was founded in 2018 with the goal of providing
                nurturing support for any business idea or start-up. We believe
                that no business is small and every venture must have 'Limitless
                growth'. We provide need-based services such as mentorship,
                funding, networking, and workspace so that entrepreneurs can
                focus on building their ventures.
              </p>
            </div>
            <div className="images">
              <div className="box-1">
                <div className="box-1-1 colorbox">
                  <div>
                    <p>
                      <span className="num-span">6</span>Cr+
                    </p>
                  </div>
                  <div className="innovations">
                    <p>Innovation</p>
                    <p>Grants</p>
                  </div>
                </div>
                <div className="box-1-1 box-1-2">
                  <div>
                    <img src={money} className="bv-logo" alt="" />
                  </div>
                  <div className="innovations">
                    <p>Seed Funding</p>
                  </div>
                </div>
                <div className="box-1-1 box-1-2">
                  <div>
                    <img src={cowork} className="bv-logo" alt="" />
                  </div>
                  <div className="innovations">
                    <p>Workspace</p>
                  </div>
                </div>
                <div className="box-1-1 box-1-2">
                  <div>
                    <img src={leadership} className="bv-logo" alt="" />
                  </div>
                  <div className="innovations">
                    <p>Mentorship</p>
                  </div>
                </div>
              </div>
              <div className="box-2">
                <div>
                  <p>
                    10
                    <span>CR</span>
                  </p>
                  <p>Funding for Innovative Startups</p>
                  <p>(Medi-Caps University and MII Foundation)*</p>
                  <img src={mlllogo} alt="" />
                  <p className="tnc">* Terms and condtitions apply</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="launching-banner">
          <p>
            <a href={linktolaunchinglaws} target="_blank">
              <span>LAUNCHING FACULTY OF LAW 2024-2025</span>
            </a>
          </p>
          <p>
            <span>Taking Legal Legacy to The Next Level</span>
          </p>
        </div>
      </div>
      <div className="container-main-2" id="programs">
        <div className="container-main-2-subcontainer">
          <div className="course">
            <div className="section-heading">
              <p>FIND YOUR COURSE</p>
              <p>Pursue the Futuristic course of your choice </p>
            </div>

            <div className="btns">
              <div className="row top-row">
                <div
                  className={`col-md-4 courses-rows ud-row ${
                    activeButton === "UnderGraduate" ? "activeated-card-1" : ""
                  }`}
                  onClick={() => showComponent("UnderGraduate")}
                >
                  UNDER GRADUATE
                </div>
                <div
                  className={`col-md-4 courses-rows ${
                    activeButton === "PostGraduate" ? "activeated-card-1" : ""
                  }`}
                  onClick={() => showComponent("PostGraduate")}
                >
                  POST GRADUATE
                </div>
                <div
                  className={`col-md-4 courses-rows ${
                    activeButton === "Phd" ? "activeated-card-1" : ""
                  }`}
                  onClick={() => showComponent("Phd")}
                >
                  PH.D
                </div>
              </div>
              <div>{componentToShow}</div>
            </div>

            <div className="futurestic-courses">
              <p>
                Explore Our Futuristic Courses For <br /> The Future Business
                Leaders
              </p>
            </div>
            <div className="rdcs-container">
              <div className="rdcs-card-1 rdcs-1">
                <div>
                  <p className="card-head">
                    BBA/MBA in <br /> Business Analytics
                  </p>
                  <button>
                    <a href="#">APPLY NOW</a>
                  </button>
                </div>
                <div className="ft-content">
                  Our BBA/MBA in Business Analytics is a multi- disciplinary
                  program intended to equip students with analytical tools and
                  methodologies to solve business and social problems. The
                  program will enable the students to define problems, use
                  analytical tools and techniques to identify patterns, gain
                  insights, develop business strategies and make better
                  decisions.
                </div>
              </div>
              <div className="rdcs-card-1 rdcs-2">
                <div>
                  <p className="card-head">
                    B.Com in <br /> Global Finance
                  </p>
                  <button>
                    <a href="#">APPLY NOW</a>
                  </button>
                </div>
                <div className="ft-content">
                  Explore the dynamic world of finance with our B.Com in Global
                  Finance program at Medicaps University. Gain comprehensive
                  insights into international financial markets, risk
                  management, and strategic financial decision-making. Join us
                  to develop the skills needed for a successful career in global
                  finance. Enroll now for a transformative learning experience!
                </div>
              </div>
            </div>
            <div className="rdcs-container con-1">
              <div className="rdcs-card-1 rdcs-3">
                <div>
                  <p className="card-head" style={{ paddingRight: "100px" }}>
                    M.Pharma
                  </p>
                  <button>
                    <a href="#">APPLY NOW</a>
                  </button>
                </div>
                <div className="ft-content">
                  Explore cutting-edge pharmaceutical education at Medicaps
                  University's M.Pharma program. Our industry-aligned
                  curriculum, expert faculty, and state- of-the-art facilities
                  ensure a holistic learning experience. Join us to develop the
                  skills needed for a career in pharmaceutical sciences.
                </div>
              </div>
              <div className="rdcs-card-1 rdcs-4">
                <div>
                  <p className="card-head">
                    B.Sc in <br /> Biotechnology
                  </p>
                  <button>
                    <a href="#">APPLY NOW</a>
                  </button>
                </div>
                <div className="ft-content">
                  B.Sc. in Biotechnology exposes students to its diverse
                  applications in various fields. It allows the candidates to
                  learn how technology is utilized to create useful and
                  necessary products from living organisms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-main-3">
        <div className="container-heading">
          <p>Meet Our Alumni</p>
        </div>
        <div className="alumni-cards">
          <div className="alumni-card alumni-card-1 "></div>
          <div className="alumni-card alumni-card-2"></div>
        </div>
        <div className="alumni-cards">
          <div className="alumni-card alumni-card-3"></div>
          <div className="alumni-card alumni-card-4"></div>
        </div>
      </div>
      <div className="container-4" id="lifeatmu">
        <div className="c4-head">
          <span> LIFE @ MU</span>
        </div>
        <div className="c4-text">
          <p className="text-head">Meet Our Clubs</p>
          <p>
            Immerse yourself in the rhythm of culture, unleash your creativity
            in the Arts and Creativity Club, capture moments with the
            Photography & Film Club, delve into literature with the Literary
            Club, embrace sustainability with the Social & Eco Club, and more.
          </p>
        </div>
        <div className="sub-container-4">
          <div className="c4-section">
            <div className="subsections">
              <div className="big-img" style={{ marginRight: "20px" }}>
                <p className="img-text big-img-text">E-summit</p>
              </div>
              <div className="small-img">
                <div className="sml-img-1">
                  <p
                    className="img-text small-img-text"
                    style={{ marginTop: "110px" }}
                  >
                    The Sahityik <br /> Literature Fest <br /> 2023
                  </p>
                </div>
                <div className="sml-img-2">
                  <p
                    className="img-text small-img-text"
                    style={{ marginTop: "100px" }}
                  >
                    the club activities <br /> university
                    <br />
                    photograph club
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c4-section sec-2">
            <p className="img-text big-img-text">moonstone 2023</p>
          </div>
          <div className="c4-section">
            <div className="subsections subsections-2">
              <div className="small-img">
                <div className="sml-img-1 sml-img-11">
                  <p
                    className="small-img-text img-text"
                    style={{ marginTop: "120px" }}
                  >
                    sports club
                  </p>
                </div>
                <div className="sml-img-2 sml-img-22">
                  <p className="img-text small-img-text">
                    CEO Conclave <br />
                    June 10,2023
                  </p>
                </div>
              </div>
              <div className="big-img big-img-2" style={{ marginLeft: "25px" }}>
                <p className="img-text big-img-text">moonstone 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-4">
        <div className="c4-text">
          <p className="text-head">Meet Our Speakers</p>
          <p>
            Explore a wealth of knowledge with our distinguished speakers at
            Medicaps University. Our esteemed lineup of experts brings diverse
            insights and expertise to inspire, educate, and empower.
          </p>
        </div>
        <div className="sub-container-4">
          <div className="c4-section ">
            <div className="subsections">
              <div
                className="big-img sp-bgimg-2"
                style={{ marginRight: "25px" }}
              >
                <p className="img-text big-img-text">Er. Deepak Gandhi</p>
              </div>
              <div className="small-img">
                <div className="sml-img-1 sp-sml-img-1 ">
                  <p
                    className="img-text small-img-text"
                    style={{ marginTop: "120px" }}
                  >
                    Dr. Tapti Roy <br /> Yadav
                  </p>
                </div>
                <div className="sml-img-2 sp-sml-img-2">
                  <p
                    className="img-text small-img-text"
                    style={{ marginTop: "120px" }}
                  >
                    Mr. Gaurav Ghelani
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c4-section sp-sec-2">
            <p className="img-text big-img-text">Dr. Siddhart k. Rastogi</p>
          </div>

          <div className="c4-section">
            <div className="subsections subsections-2">
              <div className="small-img">
                <div className="sml-img-1 sml-img-33">
                  <p
                    className="img-text small-img-text"
                    style={{ marginTop: "130px" }}
                  >
                    Dr. Nandan Garg
                  </p>
                </div>
                <div className="sml-img-2 sml-img-44">
                  <p
                    className="img-text small-img-text"
                    style={{ marginTop: "120px" }}
                  >
                    Dr. Janak Palta <br /> McGilligan
                  </p>
                </div>
              </div>
              <div
                className="big-img sp-bgimg-22"
                style={{ marginLeft: "25px" }}
              >
                <p className="img-text big-img-text">Mr. Rahul Bhargava</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="designn-1-con">
        <Design></Design>
      </div>
      <div className="design-2-con">
        <Design2></Design2>
      </div>
      <div className="design-faq-con">
        <FAQ></FAQ>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Home;
