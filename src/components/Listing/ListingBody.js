import React from "react";
import ReactMarkdown from "react-markdown";

import SectionHeader from "../Other/SectionHeader";

export default function ListingBody(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return (
    <div className="container listing-body pb-4">
      <div className="card">
        <div className="card-header">
          <div className="row no-gutters align-content-center justify-content-between text-center">
            <div className="col-fit col-12 col-lg-4 text-lg-left">
              <span
                className={
                  "firstvalue " + props.home.overview.status.toLowerCase()
                }
              >
                {" " + props.home.overview.status}
              </span>{" "}
              {" - "}
              <b className="text-primary">
                {formatter.format(props.home.overview.price)}
              </b>
            </div>
            <div className="d-block d-lg-none m-1"> </div>
            <div className="col-12 col-lg-8 text-lg-right">
              <div className="overview">
                <span className="firstvalue text-primary">
                  {props.home.overview.beds}
                </span>{" "}
                Bd
                <span className="value">
                  {props.home.overview.baths[0]}
                  {props.home.overview.baths[1] &&
                    "/" + props.home.overview.baths[1]}
                </span>{" "}
                Ba
                <span className="value">
                  {props.home.overview.sqft.toLocaleString("en")}
                </span>{" "}
                Sq Ft
                <span className="value">
                  {props.home.overview.sqftlot.toLocaleString("en")}
                </span>{" "}
                Sq Ft Lot
                {props.home.overview.garage && (
                  <span>
                    <span className="value">{props.home.overview.garage}</span>{" "}
                    Garage
                  </span>
                )}
                <span className="value">{props.home.overview.yearbuilt}</span>{" "}
                Year Built
              </div>
            </div>
          </div>
        </div>
        <div className="card-body m-0 p-2 pb-3">
          <div className="about text-center">
            <SectionHeader light={true}>About</SectionHeader>
            <p>
              <b>
                This page mostly contains exclusive information not found on
                platforms such as Zillow or Redfin.
              </b>
              <br />
              For most standard information (image slideshows, etc.), please
              visit one of the below platforms.
            </p>
            <a
              href={props.home.links.mls}
              target="_blank"
              rel="noopener noreferrer"
              className="no-uppercase mb-2 py-1 px-3 btn-get-started secondary-action text-decoration-none listing-learn-more"
            >
              View on MLS
            </a>
            <a
              href={props.home.links.zillow}
              target="_blank"
              rel="noopener noreferrer"
              className="no-uppercase mx-2 mb-2 mb-2 py-1 px-3 btn-get-started secondary-action text-decoration-none listing-learn-more"
            >
              View on Zillow
            </a>
            <a
              href={props.home.links.redfin}
              target="_blank"
              rel="noopener noreferrer"
              className="no-uppercase mb-2 mb-2 py-1 px-3 btn-get-started secondary-action text-decoration-none listing-learn-more"
            >
              View on Redfin
            </a>
            {/* <p>
              <ReactMarkdown
                source={props.home.details.about.replace("\n", "\n")}
                renderers={{ paragraph: (props) => <div {...props} /> }}
              />
            </p> */}
            <p>
              <i>
                This page is currently being updated. Sorry for any
                inconvenience. Please visit one of the links above.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
