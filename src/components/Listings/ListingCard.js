import React from "react";

import SectionHeader from "../Other/SectionHeader";

import { Link } from "react-router-dom";

export default function ListingCard(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  let title = props.address.split(",", 2).join();
  
  return (
    <div className="mb-3">
      <div
        className={"listing-card " + (props.featured && "featured")}
        data-id={props.id}
      >
        {props.featured && (
          <div class="ribbon">
            <span>FEATURED</span>
          </div>
        )}
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
                <Link
                  to={"/listings/" + props.id}
                  className="text-decoration-none text-dark"
                >
                  {title}
                </Link>
              </SectionHeader>

              <p className="price">{formatter.format(props.overview.price)}</p>
              <p className="overview">
                <span
                  className={
                    "firstvalue " + props.overview.status.toLowerCase()
                  }
                >
                  {props.overview.status}
                </span>
                <span className="value">{props.overview.beds}</span> Bd
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
                    <span className="value">{props.overview.garage}</span>{" "}
                    Garage
                  </span>
                )}
                <span className="value">{props.overview.yearbuilt}</span>
                Year Built
              </p>

              <div className="mt-4">
                <Link to={"/listings/" + props.id}>
                  <button className="mb-md-0 mb-2 btn-get-started main-action text-decoration-none listing-learn-more">
                    Learn more
                  </button>
                </Link>
                <div className="w-100 d-block d-sm-none"></div>
                <a
                  href={props.mls}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-md-0 mb-3 mx-0 mx-sm-2 btn-get-started secondary-action text-decoration-none listing-learn-more"
                >
                  View on MLS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
