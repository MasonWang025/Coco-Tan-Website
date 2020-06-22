import React from "react";

export default function ListingCard(props) {
  return (
    <div className="card listing-card shadow mb-3 p-2">
      <h2>{props.address}</h2>
      <p>{props.test}</p>
    </div>
  );
}
