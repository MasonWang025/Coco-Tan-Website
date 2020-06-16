import React from "react";

export default function BlobButton(props) {
  return (
    <button className={`blob-btn text-${props.textColor} color-${props.color}`}>
      {props.children}
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
        </span>
      </span>
    </button>
  );
}
