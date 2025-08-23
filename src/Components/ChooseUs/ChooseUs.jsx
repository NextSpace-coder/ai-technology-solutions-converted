import React from "react";
import "./chooseUs.css";
import { TfiCheck } from "react-icons/tfi";

import chosseImg from "../../assets/img/why-us-bg.jpg";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <section className="why_choose section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <div className="wc_content">
              <h2>
                Generate killer content in minutes not hour{" "}
                <span>effortlessly & faster</span>
              </h2>
              <p>
                From blogs to emails to ad copies, auto-generate catchy,
                original, and high-converting copies in popular tones &
                languages in just a few seconds. Just pick a use case, enter
                some context, and boom. your copy is ready! Get Start Now.
              </p>
              <ul>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Language AI</strong>
                  </u>{" "}
                  to generate unique content
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>30+ use cases</strong>
                  </u>{" "}
                  template for your needs
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  Scientific{" "}
                  <u>
                    <strong>copywriging formulas</strong>
                  </u>{" "}
                  to provide best quality
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  Choose from{" "}
                  <u>
                    <strong>120+ Languages</strong>
                  </u>{" "}
                  to writen content
                </li>
              </ul>
            </div>
            <div className="ss_btn">
              <Link to={"#pricing"}>Try For Free</Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <div className="wc_img">
              <img src={chosseImg} className="img-fluid" alt="image" />
              <div className="wc_year">
                <h3>
                  20 Years of Experience <br />
                  from 2002
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
