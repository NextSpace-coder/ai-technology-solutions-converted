import React from "react";
import "./partner.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import brand1 from "../../assets/img/clients/brand-1.png";
import brand2 from "../../assets/img/clients/brand-2.png";
import brand3 from "../../assets/img/clients/brand-3.png";
import brand4 from "../../assets/img/clients/brand-4.png";
import brand5 from "../../assets/img/clients/brand-5.png";

const logoList = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand1,
  brand2,
  brand3,
  brand4,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Partner = () => {
  return (
    <div className="partner-logo section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="partner_title">
              <h3>Trusted By 6,000,000+ Company Arround The World! </h3>
            </div>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              arrows={false}
              responsive={responsive}
              ssr={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListclassName="custom-dot-list-style"
              itemclassName="carousel-item-padding-40-px"
            >
              {logoList.map((img, index) => (
                <Link to={""} key={index}>
                  <img src={img} alt="image" />
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
