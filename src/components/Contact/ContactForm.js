import React, { useEffect } from "react";
import $ from "jquery";

import BlobButton from "../Other/BlobButton";

export default function ContactForm() {
  useEffect(() => {
    // Detect when form-control inputs are not empty
    $(".cool-b4-form .form-control").on("input", function () {
      if ($(this).val()) {
        $(this).addClass("hasValue");
      } else {
        $(this).removeClass("hasValue");
      }
    });
  });
  return (
    <div className="contact-container container">
      <div className="contact-wrap card card-body border-0 shadow">
        <form
          autoComplete="off"
          className="cool-b4-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("yeah");
            window.location = "mailto:xyz@abc.com";
          }}
        >
          <h2 className="text-center pt-4">Contact Us</h2>
          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                />
                <label htmlFor="name">Name</label>
                <span className="input-highlight"></span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                />
                <label htmlFor="email">Email</label>
                <span className="input-highlight"></span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                />
                <label htmlFor="subject">Subject</label>
                <span className="input-highlight"></span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  required={true}
                ></textarea>
                <label htmlFor="message">Message</label>
                <span className="input-highlight"></span>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto text-center mt-3">
            <BlobButton color="primary" textColor="primary">
              <div id="submit" type="submit">Submit</div>
            </BlobButton>
          </div>
        </form>
      </div>
    </div>
  );
}
