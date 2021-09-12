import React from "react";
import logo from "../images/logo.png";
import PeopleA from "../images/one.png";
import PeopleB from "../images/two.png";
import PeopleC from "../images/three.png";
import Wave from "./Wave";
import Contact from "./Contact-us";
import Carousel from "./Carousel";
import Container from "./Container";
import Services from "./Services";
import Watch from "./Watch";
import Footer from "./footer";
const Dashboard = () => {
  return (
    <div>
      <div className="primary-color">
        <div className="primary-color text-light primay-height">
          <nav class="navbar navbar-expand-lg text-light ">
            <div class="container-fluid ">
              <div class="d-flex flex-row  ">
                <img
                  src={logo}
                  class="img-fluid logo mr-5"
                  alt="Responsive image"
                />
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                class="collapse navbar-collapse  justify-content-end navbar-end"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item navbar-menu">
                    <a
                      class="nav-link active text-uppercase text-light "
                      aria-current="page"
                      href="#"
                    >
                      HOME
                    </a>
                  </li>
                  <li class="nav-item navbar-menu">
                    <a
                      class="nav-link active text-uppercase text-light"
                      aria-current="page"
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                  <li class="nav-item navbar-menu">
                    <a
                      class="nav-link active text-uppercase text-light"
                      aria-current="page"
                      href="#"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li class="nav-item navbar-menu ">
                    <a
                      class="nav-link active text-uppercase text-light bar"
                      aria-current="page"
                      href="#"
                    >
                      |
                    </a>
                  </li>
                  <li class="nav-item navbar-menu d-flex flex-row">
                    <a
                      class="nav-link active text-uppercase text-light"
                      aria-current="page"
                      href="#"
                    >
                      CALL NOW FOR A CONSULT
                    </a>
                    <p class=" mt-2 call">XXX.XXX.XXXX</p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="container mt-5">
          <div class="row  gx-5 ">
            <div class="col-sm intervention-heading">
              <div>
                <h1 class="heading-intervention text-uppercase text-light ">
                  Get an{" "}
                </h1>
                <h1 class="intervention text-uppercase text-light">
                  Intervention
                </h1>
                <p class="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos cupiditate cum, tempora culpa sunt nobis illum
                  eligendi fugit vero officiis velit quo dolorum nesciunt libero
                  sapiente, accusamus consequatur commodi. Nesciunt!
                </p>
              </div>
            </div>
            <div class="col-sm">
              <div class="secondary-color p-5 contact-text ">
                <Contact />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Wave />
        </div>
      </div>

      <div class="container  mt-5 p-5">
        <div class="row">
          <div class="col-sm mt-3">
            <img src={PeopleA} class="img-fluid peopleA" alt="people" />
          </div>
          <div class="col-sm mt-3">
            <img src={PeopleB} class="img-fluid" alt="people" />
          </div>
          <div class="col-sm mt-3">
            <img src={PeopleC} class="img-fluid" alt="people" />
          </div>
        </div>

        <div class="d-flex flex-row mt-5">
          <h1 className="we-text text-uppercase ">We </h1>
          <h1 className="text-uppercase ">understand</h1>
        </div>
        <div class="row">
          <div class="col-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nihil, quam amet eius nobis velit quas sed ut error officiis in modi
            accusantium. Qui laborum facere magnam aliquam dolore dicta non fuga
            aspernatur ducimus repellat? Est modi inventore exercitationem
            sapiente, nulla ad consectetur aliquid fugit aspernatur ex
            consequatur ipsam
          </div>
          <div class="col-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nihil, quam amet eius nobis velit quas sed ut error officiis in modi
            accusantium. Qui laborum facere magnam aliquam dolore dicta non fuga
            aspernatur ducimus repellat? Est modi inventore exercitationem
            sapiente, nulla ad consectetur aliquid fugit aspernatur ex
            consequatur ipsam
          </div>
          <div class="col-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nihil, quam amet eius nobis
            <div class="mt-5">
              <div
                class="icon-box we-quote"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              >
                <h4 class="title we-quote-text p-2 text-center mt-1">
                  92% Success Rate{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <Container />
      <Services />
      <Watch />
      <Footer />
    </div>
  );
};

export default Dashboard;
