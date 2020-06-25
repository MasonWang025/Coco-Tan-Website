import React from "react";
import ReactMarkdown from "react-markdown";

import SectionHeader from "../Other/SectionHeader";

export default function ListingBody(props) {
  console.log(props.home.details.about.replace(/\\n/g, "\n"));

  return (
    <div className="container listing-body pb-4">
      <div className="card card-body m-0 p-2">
        <div className="about text-center">
          <SectionHeader light={true}>About</SectionHeader>
          <p>
            <b>
              This page mostly contains exclusive information not found on
              platforms such as Zillow or Redfin.
            </b>
            <br />
            For most standard information (image slideshows, etc.), please visit
            one of the below platforms.
          </p>
          <a
            href={props.home.links.mls}
            target="_blank"
            rel="noopener noreferrer"
            className="no-uppercase mb-2 btn-get-started secondary-action text-decoration-none listing-learn-more"
          >
            View on MLS
          </a>
          <a
            href={props.home.links.zillow}
            target="_blank"
            rel="noopener noreferrer"
            className="no-uppercase mx-2 mb-2 btn-get-started secondary-action text-decoration-none listing-learn-more"
          >
            View on Zillow
          </a>
          <a
            href={props.home.links.redfin}
            target="_blank"
            rel="noopener noreferrer"
            className="no-uppercase mb-2 btn-get-started secondary-action text-decoration-none listing-learn-more"
          >
            View on Redfin
          </a>
          <p>
            <ReactMarkdown
              source={props.home.details.about.replace("\\n", "\n")}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
