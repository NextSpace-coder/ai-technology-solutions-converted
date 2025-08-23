import React from "react";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="home" className="home_bg">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center">
            <div className="about_me_content">
              <h1 className="cd-headline clip">
                Advanced AI Solutions for {' '}
                <span className="cd-words-wrapper">
                  <TypeAnimation
                    sequence={[
                      "Content Creation",
                      1000,
                      "Digital Marketing",
                      1000,
                      "Business Growth",
                      1000,
                      "Smart Automation",
                      1000,
                      "Data Analysis",
                      1000,
                      "Innovation",
                      1000,
                    ]}
                    wrapper="b"
                    speed={10}
                    deletionSpeed={0}
                    // style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p>
                Transform your business with cutting-edge AI technology that delivers
                exceptional results, enhanced productivity, and innovative solutions
                for modern challenges.
              </p>
            </div>
            <div className="home_btn">
              <Link to="/contact" className="home_one">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
