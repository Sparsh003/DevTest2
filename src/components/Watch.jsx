import React from "react";
import youtube from "../images/youtube.png";
import CheckIcon from "@material-ui/icons/Check";

const Watch = () => {
  return (
    <>
      <div class="container-fluid watch-container">
        <div class="row gx-0">
          <div class="col-sm primary-color text-light watch-section ">
            <div class="d-flex flex-row watch-section ">
              <h1 className="we-text text-uppercase watch  ">Watch </h1>
              <h1 className="we-text text-uppercase text-nowrap ">the video</h1>
            </div>

            <div class="mt-4">
              <h3 class="watch-text">
                {" "}
                <span className="icon">
                  <CheckIcon style={{ fill: "green" }} />{" "}
                </span>{" "}
                Need Assesment
              </h3>
              <p className="watch-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                aspernatur atque rerum culpa non eius temporibus minus ratione
                id recusandae.
              </p>
            </div>
            <div class="mt-4">
              <h3 class="watch-text">
                {" "}
                <span>
                  <CheckIcon style={{ fill: "green" }} />{" "}
                </span>
                Insurance Advocacy
              </h3>
              <p className="watch-para">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div class="mt-4">
              <h3 class="watch-text">
                <span>
                  <CheckIcon style={{ fill: "green" }} />{" "}
                </span>
                Treatment Plannig{" "}
              </h3>
              <p className="watch-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                aspernatur atque rerum culpa non eius temporibus .
              </p>
            </div>
          </div>
          <div class="col-sm">
            <img src={youtube} class="img-fluid w-100 video-icon" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};
export default Watch;
