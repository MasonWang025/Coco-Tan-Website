import React from "react";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-5 pt-5 text-center">
      This page is currrently being updated. We apologize for any inconveniences.
      <div className="col-md-10 mx-auto mb-3 mt-4 text-center mt-3">
        <Link className="btn-get-started main-action text-decoration-none">
          Contact Coco
        </Link>
      </div>
    </div>
  );
}
