import React from "react";
export default function ListingHero(props) {
  let title = props.home.address.split(",", 2).join();

  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1 className="text-white listing-hero-title" data-aos="fade-in">{title}</h1>
          </div>
        </div>
      </div>
      <div className="row no-gutters listing-hero">
        <div className="col-12 p-0">
          <div className="listing-bg">
            <img
              src={props.home.images.preview}
              alt="listings"
              className="img-fluid listing"
            />
            <div className="img-inset-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
