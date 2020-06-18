import React from "react";

export default function Listings() {
  return (
    <div className="container-fluid hero-bg2" id="listings">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="test"
          className="embed-responsive-item"
          loading="eager"
          src="https://www.mlslistings.com/FindAnAgent/Profile/01376998"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
