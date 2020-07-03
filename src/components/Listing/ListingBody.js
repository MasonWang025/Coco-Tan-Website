import React from "react";
import { Link } from "react-router-dom";
// import ReactMarkdown from "react-markdown";

import SectionHeader from "../Other/SectionHeader";

export default function ListingBody(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  console.log(props.home);

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
            <SectionHeader>About</SectionHeader>
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
            {!(props.home.youtubelinks || props.home.zillow3dhome) && (
              <p className="mt-3 mb-0 px-1 px-sm-2 px-md-5 mx-md-5">
                <i>
                  <b>We are currently updating information for this website.</b>{" "}
                  You can learn about the property using any of the links above.
                  Please contact Coco for any questions or for scheduling an
                  appointment below.
                </i>
              </p>
            )}
            <div className="listing-video">
              {props.home.youtubelinks && (
                <div>
                  <SectionHeader>Videos</SectionHeader>
                  {props.home.youtubelinks.cinematicvideo && (
                    <section>
                      <h3 className="mt-2">Property Video</h3>
                      <a
                        href={props.home.youtubelinks.cinematicvideo[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none d-block mb-1 py-1 px-3"
                      >
                        (Property Video{" "}
                        <i className="fa fa-external-link-square"></i>)
                      </a>
                      <div className="row justify-content-center px-2">
                        <div className="col col-md-10 col-lg-9 col-xl-8">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              title="3dtour"
                              className="embed-responsive-item"
                              src={props.home.youtubelinks.cinematicvideo[1]}
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}
                  {props.home.youtubelinks.featurevideo && (
                    <section>
                      <h3 className="mt-3">Feature Video</h3>
                      {props.home.youtubelinks.featurevideo[1] &&<a
                        href={props.home.youtubelinks.featurevideo[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-uppercase mb-2 btn-get-started main-action text-decoration-none"
                      >
                        English Version{" "}
                        <i className="fa fa-external-link-square"></i>
                      </a>}
                      {props.home.youtubelinks.featurevideo[0] && <a
                        href={props.home.youtubelinks.featurevideo[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-uppercase mb-2 mx-2 mb-2 btn-get-started main-action text-decoration-none"
                      >
                        Chinese Version{" "}
                        <i className="fa fa-external-link-square"></i>
                      </a>}
                    </section>
                  )}
                </div>
              )}
            </div>

            <div className="listing-3dtour">
              {props.home.zillow3dhome && (
                <div>
                  <SectionHeader>3D Tour</SectionHeader>
                  <a
                    href={props.home.zillow3dhome}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none d-block mb-1 py-1 px-3"
                  >
                    (Zillow 3D Tour{" "}
                    <i className="fa fa-external-link-square"></i>)
                  </a>
                  <div className="row justify-content-center px-2">
                    <div className="col col-md-10 col-lg-9 col-xl-8">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          title="3dtour"
                          className="embed-responsive-item"
                          src={props.home.zillow3dhome}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="listing-contact px-1 px-sm-2 px-md-5 mx-md-5 mb-1">
              <SectionHeader>Contact Coco</SectionHeader>
              Schedule an appointment or learn more about this property by
              emailing Coco at{" "}
              <a
                href="mailto:CocoTanGroup@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <b>CocoTanGroup@gmail.com</b>
              </a>
              . We're happy to answer any questions you have!
              <br />
              <Link to="/contact">
                <button className="mb-md-0 mb-4 mt-2 btn-get-started main-action text-decoration-none listing-learn-more">
                  Contact Coco
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
