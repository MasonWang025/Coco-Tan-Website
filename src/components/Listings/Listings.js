import React from "react";

import ListingCard from "../Listings/ListingCard";

export default function Listings(props) {
  var listingCards = [];
  if (props.homes) {
    console.log(props.homes);
    listingCards = props.homes.map((doc) => {
      let listing = doc.data();
      console.log(listing);
      return (
        <ListingCard
          key={doc.id}
          id={doc.id}
          address={listing.address}
          overview={listing.overview}
          images={listing.images}
          links={listing.links}
          featured={listing.order === 0}
        />
      );
    });
  }

  return (
    <div className="container-fluid hero-bg2 listings-container">
      <div className="container mb-4">
        {listingCards}
        <div className="listing-card dark" data-id={props.id}>
          <div className="row no-gutters align-items-center text-center">
            <div className="col">
              <div className="mb-3 mt-3 px-5">
                <p className="lead">
                  To see recent transactions and past listings, please visit
                  Coco's MLS page (or Zillow page).
                </p>
                <a
                  href="https://www.mlslistings.com/FindAnAgent/Profile/01376998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-uppercase mx-2 mb-2 btn-get-started text-white main-action text-decoration-none listing-learn-more"
                >
                  Coco's MLS Page
                </a>
                <a
                  href="https://www.zillow.com/profile/cocorealestateteam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-uppercase mb-2 btn-get-started text-white main-action text-decoration-none listing-learn-more"
                >
                  Coco's Zillow Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
