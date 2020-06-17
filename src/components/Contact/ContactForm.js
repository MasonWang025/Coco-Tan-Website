import React, { useEffect } from "react";
import $ from "jquery";

import useForm from "../Other/useForm";

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

  //   use form
  const [values, handleChange] = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="contact-container container">
      <div className="contact-wrap card card-body border-0 shadow mt-0 mt-md-5">
        <form
          autoComplete="off"
          className="cool-b4-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-center pt-4">Contact Coco</h2>
          <div className="row contactinfo text-center justify-content-center">
            <div className="col-fit mr-0 mr-md-3">
              <p className="lead mb-0">
                <a
                  href="mailto:CocoTanGroup@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email <b>CocoTanGroup@gmail.com</b>
                </a>{" "}
              </p>{" "}
            </div>
            <div className="w-100 d-block d-md-none"></div>
            <div className="col-fit mr-0 mr-md-3">
              <p className="lead mb-0">
                <a
                  href="tel:+14088296053"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Call <b>+1 408 829 6053</b>
                </a>
              </p>
            </div>
            <div className="w-100 d-block d-md-none"></div>
            <div className="col-fit mr-0 mr-md-3">
              <p className="lead mb-0">
                <a
                  href="https://web.wechat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wechat ID: <b>CocoTanRealEstate</b>
                </a>
              </p>
            </div>
          </div>

          {/* contact form */}
          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={(e) => handleChange(e)}
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
                  value={values.email}
                  onChange={(e) => handleChange(e)}
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
                  value={values.subject}
                  onChange={(e) => handleChange(e)}
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
                  value={values.message}
                  onChange={(e) => handleChange(e)}
                  required={true}
                ></textarea>
                <label htmlFor="message">Message</label>
                <span className="input-highlight"></span>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto mb-3 mt-4 text-center mt-3">
            <a
              href={`mailto:CocoTanGroup@gmail.com?&subject=${escape(
                values.subject
              )}&body=${escape(values.message)}`}
              id="submit"
              className="btn-get-started main-action text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
