import React from "react";

import { Link } from "react-router-dom";

import SectionHeader from "../Other/SectionHeader";

export default function About() {
  return (
    <div className="container-fluid about-container about-bg pb-3">
      <div className="container about-wrap shadow card card-body border-0">
        <div className="row text-lg-left text-center">
          <div className="col-xl-8 col-12">
            <div className="row">
              <div className="col-12">
                <SectionHeader>
                  <a
                    href={require("../../assets/Coco's Resume.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark text-decoration-none"
                  >
                    <b>About Coco Tan</b>
                  </a>
                </SectionHeader>
                <p>
                  <span className="lead">MBA, Broker Associate </span>- CalBRE
                  #01376998
                </p>
                <div className="d-block d-md-none">
                  <a
                    className="btn-get-started main-action no-uppercase text-decoration-none mb-4"
                    href={require("../../assets/Coco's Resume.pdf")}
                    id="view-resume"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Coco&#39;s Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="row about-info">
              <div className="col-12">
                <div>
                  <h4>Designation, Affiliations, and Education</h4>
                  <p>
                    <b>Top 50</b> Realtor Nationwide<sup>&reg;</sup> -
                    <small>As Rated by the Wall Street Journal</small>
                    <br />
                    <b>President</b>, Chinese American Real Estate Association -
                    <small>(CAREA), 2014 &ndash; 2016</small>
                    <br />
                    <b>BOD</b>, Northern CA Chinese American Building
                    Association - <small>(NCCABA), 2016</small>
                    <br />
                    <b>BOD</b>, Asian Real Estate Association of America -
                    <small> (AREAA), 2015-2016</small>
                    <br />
                    <span className="font-italic">
                      Much more information found in{" "}
                      <span className="primary">
                        <a
                          href={require("../../assets/Coco's Resume.pdf")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <b>Coco&#39;s Resume</b>
                        </a>
                        .
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12">
                <h4>Luxury Real Estate and Brand Name</h4>

                <p>
                  Very experienced and well known realtor who has sold many
                  luxury homes.
                  <br />
                  Sold the <b>most expensive home in Cupertino</b> for
                  <span className="font-italic">$12,450,000</span>.<br />
                  Sold the most expensive single family home in West San Jose
                  for $3,300,000.
                  <br />
                  <b>Large network of buyers</b> from overseas families to local
                  high tech professionals.
                  <br />
                  <span className="font-italic">
                    Much more information found in{" "}
                    <span className="primary">
                      <a
                        href={require("../../assets/Coco's Resume.pdf")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>Coco&#39;s Resume</b>.
                      </a>
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-1">
                <a
                  className="btn-get-started main-action no-uppercase text-decoration-none mb-2 mb-md-0"
                  href={require("../../assets/Coco's Resume.pdf")}
                  id="view-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Coco&#39;s Resume
                </a>
                <br className="d-block d-md-none" />
                <Link
                  to="/contact"
                  className="btn-get-started secondary-action no-uppercase text-decoration-none mx-2"
                >
                  Contact Coco
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-none d-xl-block">
            <a
              href={require("../../assets/Coco's Resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Coco Tan"
                className="img-fluid rounded shadow mt-4"
                src={require("../../assets/img/Coco's Resume Cover.jpg")}
                title="View Coco's Resume"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
