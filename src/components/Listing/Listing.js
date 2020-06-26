import React from "react"

import { useLocation } from "react-router-dom";

import ListingHero from "./ListingHero";
import ListingBody from "./ListingBody";

export default function Listing(props) {
  const path = useLocation().pathname; // to determine which is active
  const homeId = path.split("/")[2];
  let home;
  if (props.homes) {
    props.homes.map((doc) => {
      if (doc.id === homeId) home = doc.data();
      return null;
    });
  }

  if (home)
    return (
      <div className="listing-page">
        <ListingHero home={home} />
        <ListingBody home={home} />
      </div>
    );
  else return <div className="h-100 listing-page"></div>;
}
