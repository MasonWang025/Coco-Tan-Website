import React from "react";
import { Link } from "react-router-dom";

export default function ListingHero(props) {
  let title = props.home.address.split(",", 2).join();

  return (
    <div>
      <div className="container">
        <Link to="/listings" className="listing-back btn-get-started p-2 text-decoration-none">
          Back to all{" "}
        </Link>
      </div>
      <div className="row no-gutters listing-hero">
        <div className="col-12 p-0">
          <div className="listing-bg">
            <img
              src={props.home.images.preview}
              alt="listings"
              className="img-fluid listing"
            />
            <h1 className="text-white listing-hero-title" data-aos="fade-in">
              {title}
            </h1>
            <div className="img-inset-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
