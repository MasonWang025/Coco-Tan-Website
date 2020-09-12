import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import { Image } from "cloudinary-react";

import NavBarItem from "./NavBarItem";
import BlobButton from "../Other/BlobButton";

export default function NavBar() {
  const path = useLocation().pathname; // to determine which is active

  useEffect(() => {
    // clicking outside the navbar closes it
    $(document).ready(() => {
      $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
          $(".navbar-toggler").click();
        }
      });
    });
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Logo */}
        <Link to="/">
          <Image
            cloudName="masonwang"
            publicId="https://res.cloudinary.com/masonwang/image/upload/v1599875833/coco-tan-website/logo.png"
            alt="Coco Tan logo"
            id="navlogoimg"
          />
          <h1 className="navbar-brand" id="navlogotext">
            Coco Tan
          </h1>
        </Link>

        {/* Hamburger Menu for collapse */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="navbar-nav ml-auto">
            <NavBarItem title="Home" active={path === "/"} to="/" />
            <NavBarItem
              title="Listings"
              active={path.startsWith("/listings")}
              to="/listings"
            />
            <NavBarItem
              title="About Coco"
              active={path === "/about"}
              to="/about"
            />
            <NavBarItem
              title="Contact"
              active={path === "/contact"}
              to="/contact"
            />
          </div>
          <Link to="/contact" className="text-white">
            <BlobButton color="primary mt-2 mb-3 my-lg-0" textColor="white">
              <div>CocoTanGroup@gmail.com</div>
            </BlobButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}
