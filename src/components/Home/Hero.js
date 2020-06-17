import React from "react";
import TypeIt from "typeit-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="container-fluid text-center text-md-left pt-0 pt-md-5"
      id="hero"
    >
      <div className="container">
        <h1>Coco Tan</h1>
        <h2 id="slogan">
          <TypeIt
            options={{
              loop: false,
              lifeLike: false,
              speed: 69,
              html: true,
              cursor: false,
            }}
            getBeforeInit={(instance) => {
              instance
                .type(
                  "<span class='text-light'>Your</span> <span class='text-primary'>Neighbor, <br class='d-block d-md-none' /></span>",
                  {
                    delay: 375,
                  }
                )
                .type(
                  "<span class='text-light'>Your</span> <span class='text-primary'>Realtor. </span>"
                );
              return instance;
            }}
          ></TypeIt>
        </h2>
        <h2 className="more d-md-block d-none text-light">
          <b>Top 50 Realtor</b>
          <sup>&reg;</sup> Nationwide{" "}
          <small>
            {" "}
            <i>As Rated by the Wall Street Journal</i>
          </small>
          <br />
          <b>Top 1% Producer</b> for 17 Consecutive Years
        </h2>
        {/* <!-- three buttons (all .btn-get-started, but primary button has .main-action) -->*/}
        <div className="mt-3">
          <Link
            className="btn mr-0 mr-md-2 mt-2 mt-md-0 btn-get-started main-action"
            to="/listings"
          >
            Coco&#39;s Listings
          </Link>
          <br className="d-block d-md-none" />{" "}
          <Link
            className="mr-0 mr-md-2 mt-2 mt-md-0 btn btn-get-started"
            to="/about"
          >
            About Coco
          </Link>
          <br className="d-block d-md-none" />{" "}
          <Link
            to="/contact"
            className="mr-0 mr-md-2 mt-2 mt-md-0 btn btn-get-started "
          >
            Contact Coco
          </Link>
        </div>
      </div>
    </div>
  );
}
