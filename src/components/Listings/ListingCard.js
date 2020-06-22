import React from "react";

import SectionHeader from "../Other/SectionHeader";

export default function ListingCard(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  let title = props.address.split(",", 2).join();
  console.log(props.overview);
  return (
    <div className="listing-card" data-id={props.id}>
      <div className="row no-gutters align-items-center">
        {props.images.preview && (
          <div className="col-xl-4 col-3 d-none d-md-block">
            <img
              src={props.images.preview}
              alt="listing preview"
              className="img-fluid listing-preview desktop"
            />
          </div>
        )}
        <div className="col">
          <img
            src={props.images.preview}
            alt="listing preview"
            className="img-fluid listing-preview card-img-top d-block d-md-none"
          />
          <div className="mx-3 ml-xl-4">
            <SectionHeader smaller={true} light={true}>
              {title}
            </SectionHeader>

            <p className="price">{formatter.format(props.overview.price)}</p>
            <p className="overview">
              <span className="firstvalue">{props.overview.beds}</span> Bd
              <span className="value">
                {props.overview.baths[0]}
                {props.overview.baths[1] && "/" + props.overview.baths[1]}
              </span>{" "}
              Ba
              <span className="value">
                {props.overview.sqft.toLocaleString("en")}
              </span>
              Sq Ft
              <span className="value">
                {props.overview.sqftlot.toLocaleString("en")}
              </span>
              Sq Ft Lot
              {props.overview.garage && (
                <span>
                  <span className="value">{props.overview.garage}</span> Garage
                </span>
              )}
              <span className="value">
                {props.overview.yearbuilt}
              </span>
              Year Built
            </p>

            <div className="mb-3 mt-4 mt-3">
            <a
              href={props.mls}
              className="btn-get-started main-action text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
