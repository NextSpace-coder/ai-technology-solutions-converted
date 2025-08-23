import React from "react";
import "./usecaseDetails.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";

import usecase from "../../assets/img/usecase.jpg";
import usecase2 from "../../assets/img/usecase2.jpg";
import usecase3 from "../../assets/img/usecase3.jpg";
import usecase4 from "../../assets/img/usecase4.jpg";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import { ScrollRestoration } from "react-router-dom";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";

const list = [
  {
    id: 1,
    heading: "Step 1 — Select your own language",
    image: usecase,
    content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
  },
  {
    id: 2,
    heading: "Step 2 - Select tone",
    image: usecase2,
    case_left: true,
    content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
  },
  {
    id: 3,
    heading: "Step 3 - Choose your use case",
    image: usecase3,
    content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
  },
  {
    id: 4,
    heading: "Step 4 - Add input",
    image: usecase4,
    case_left: true,
    content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
  },
];
const UsecaseDetails = () => {
  return (
    <>
      <PageHeader pageName={"Use Case Details"} sortName={"Case Details"} />
      {/* ---------- Start use case details */}
      <section className="best-service section-padding">
        <div className="container">
          <div className="section-title-two">
            <h2>
              Just few steps to generate <span>content in minutes</span>
            </h2>
          </div>
          <div className="row">
            {list.map(({ id, heading, image, content, case_left }) => {
              return (
                <>
                  {case_left ? (
                     // ---------- Right side image
                    <div
                      key={id}
                      className="col-lg-10 offset-lg-1 col-xs-12"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <div className="ss_case_two">
                        <div className="ss_case_left">
                          <h2>{heading}</h2>
                          <p>{content}</p>
                        </div>
                        <img src={image} alt="" />
                      </div>
                    </div>
                  ) : (
                    // ---------- Left side image
                    <div
                      key={id}
                      className="col-lg-10 offset-lg-1 col-xs-12"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <div className="ss_case_one">
                        <img src={image} alt="" />

                        <h2>{heading}</h2>
                        <p>{content}</p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
       {/* ---------- End use case details */}
       <ChooseUs/>
       <WorkProcess/>
       <div className="section-padding"></div>
       <ScrollRestoration/>
    </>
  );
};

export default UsecaseDetails;
