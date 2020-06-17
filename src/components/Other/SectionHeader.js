import React from "react";

export default function SectionHeader(props) {
  return (
    <div className="row">
      <div className="col">
        <h1 className={"section-heading " + (props.center && "text-center")}>
          <span className="underline--magical">{props.children}</span>
        </h1>
      </div>
    </div>
  );
}
