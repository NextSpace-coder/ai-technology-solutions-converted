import React from "react";
import "./testimonials.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import test_img from "../../assets/img/test_img.jpg";
import img1 from "../../assets/img/testimonial/img-1.png";
import img2 from "../../assets/img/testimonial/img-2.jpg";
import img3 from "../../assets/img/testimonial/img-3.jpg";
import img4 from "../../assets/img/testimonial/img-4.png";
import Rating from "../Shared/Rating";

const reviewList = [
  {
    id: 1,
    name: "James Simmons",
    post: "Marketer",
    image: img1,
    review: `Relieve the stress of juggling multiple projects by
    providing seamless collaboration, team billing and robust
    project management features all without the hefty price
    tag.it's easy to get back to what matters: running your
    business and making sure everything runs smoothly.`,
    rating: 5,
  },
  {
    id: 2,
    name: "Shek Hasina",
    post: "Author",
    image: img2,
    review: `Relieve the stress of juggling multiple projects by
    providing seamless collaboration, team billing and robust
    project management features all without the hefty price
    tag.it's easy to get back to what matters: running your
    business and making sure everything runs smoothly.`,
    rating: 5,
  },
  {
    id: 3,
    name: "Biddut Momtaz",
    post: "Blogger",
    image: img3,
    review: `Relieve the stress of juggling multiple projects by
    providing seamless collaboration, team billing and robust
    project management features all without the hefty price
    tag.it's easy to get back to what matters: running your
    business and making sure everything runs smoothly.`,
    rating: 5,
  },
  {
    id: 3,
    name: "Kader Kaku",
    post: "CEO",
    image: img4,
    review: `Relieve the stress of juggling multiple projects by
    providing seamless collaboration, team billing and robust
    project management features all without the hefty price
    tag.it's easy to get back to what matters: running your
    business and making sure everything runs smoothly.`,
    rating: 5,
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="testimonial_slider_btn">
      <button onClick={() => next()}>
        <BsChevronLeft />
      </button>
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="test_area section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Reviews</h2>
          <p>
            All the reviews loved by Customer Satisfaction rating from
            <span>1300+ reviews on TrustPilot</span> & more
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="test_img">
              <img src={test_img} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testimonial-slider">
              <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all 3"
                // transitionDuration={3000}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px"
              >
                {reviewList.map(({ id, name, image, post, review, rating }) => {
                  return (
                    <div className="single_rev" key={id}>
                      <div className="rev_content">
                        <Rating star={rating} />
                        <p>{review}</p>
                      </div>
                      <div className="pic_content">
                        <div className="rev_pic">
                          <img src={image} className="img-fluid" alt="" />
                        </div>
                        <h4>{name}</h4>
                        <small className="post">{post}</small>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
