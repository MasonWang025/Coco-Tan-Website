import React from "react";

import SectionHeader from "../Other/SectionHeader";

export default function ListingBody(props) {
  console.log(props.home.details.about.replace(/\\n/g, "\n"));

  return (
    <div className="container listing-body">
      <div className="card card-body mx-2 p-2">
        <div className="about text-center">
          <SectionHeader light={true}>About</SectionHeader>
          <p>
            {props.home.details.about.split("\\n").map(function (item, key) {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
