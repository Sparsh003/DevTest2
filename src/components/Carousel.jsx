import React from "react";
import john from "../images/john.png";
import wegl from "../images/wegl.png";
import leothe from "../images/leothe.png";
import quote from "../images/quote.png";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner mt-5 ">
          <div class="carousel-item active ">
            <div className="d-flex flex-row crousel-text">
              <div>
                <img src={leothe} class="crousal-image" alt="..." />
              </div>
              <div className="d-flex align-items-center flex-column primary-color  text-light  p-5 carousal-text rounded-right">
                <div class="d-flex flex-row quote-text">
                  <div>
                    <h4>Abbie Harvay</h4>
                  </div>
                  <div>
                    <img src={quote} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam corporis tempora quae laboriosam niam quide
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex flex-row crousel-text rounded-right">
              <div>
                <img src={john} class=" crousal-image" alt="..." />
              </div>

              <div class="d-flex align-items-center flex-column  primary-color  text-light p-5 carousal-text rounded-right">
                <div class="d-flex flex-row quote-text">
                  <div>
                    <h4>John Harvay</h4>
                  </div>
                  <div>
                    <img src={quote} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam corporis tempora quae laboriosam
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex flex-row crousel-text">
              <div>
                <img src={wegl} class="crousal-image" alt="..." />
              </div>
              <div class="d-flex align-items-center flex-column primary-color  text-light p-5  carousal-text">
                <div class="d-flex flex-row quote-text">
                  <div>
                    <h4>Mariyam wegl</h4>
                  </div>
                  <div>
                    <img src={quote} class="img-fluid" alt="..." />
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam corporis tempora quae laboriosam
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
