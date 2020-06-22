import React from "react";

import ListingCard from "../Listings/ListingCard";

export default function Listings(props) {
  var listingCards = [];
  if (props.homes) {
    console.log(props.homes);
    listingCards = props.homes.map((doc) => {
      let listing = doc.data();
      return (
        <ListingCard
          key={doc.id}
          id={doc.id}
          address={listing.address}
          overview={listing.overview}
          images={listing.images}
          mls={listing.mls}
        />
      );
    });
  }

  return (
    <div className="container-fluid hero-bg2 listings-container">
      <div className="container">{listingCards}</div>
    </div>
  );
}
