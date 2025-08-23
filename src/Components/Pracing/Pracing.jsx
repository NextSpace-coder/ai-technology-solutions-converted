import React from "react";
import "./pracing.css";
import {
  TfiFile,
  TfiFlag,
  TfiImage,
  TfiLightBulb,
  TfiNotepad,
  TfiStar,
} from "react-icons/tfi";

const pricingList = [
  {
    id: 1,
    planName: "Free",
    amount: 0,
    time: "Monthly",
    upgrade_price: "Upgrade as you need",
    feature: [
      {
        id: 1,
        name: "Generate 15k* characters",
        icon: <TfiNotepad />,
      },
      {
        id: 2,
        name: "Access 30+ use-cases",
        icon: <TfiFile />,
      },
      {
        id: 3,
        name: "Built in plagiarism checker",
        icon: <TfiLightBulb />,
      },

      {
        id: 4,
        name: "Access to premium community",
        icon: <TfiStar />,
      },
      {
        id: 5,
        name: "A5 images per month with AI",
        icon: <TfiImage />,
      },
      {
        id: 6,
        name: "Write in 30+ languages",
        icon: <TfiFlag />,
      },
    ],
    delay: "100",
    isStart: "Start Now",
  },
  {
    id: 2,
    planName: "Saver plan",
    amount: 29,
    time: "Monthly",
    upgrade_price: "$348 Per Year",
    feature: [
      {
        id: 1,
        name: "Generate 15k* characters",
        icon: <TfiNotepad />,
      },
      {
        id: 2,
        name: "Access 30+ use-cases",
        icon: <TfiFile />,
      },
      {
        id: 3,
        name: "Built in plagiarism checker",
        icon: <TfiLightBulb />,
      },

      {
        id: 4,
        name: "Access to premium community",
        icon: <TfiStar />,
      },
      {
        id: 5,
        name: "A5 images per month with AI",
        icon: <TfiImage />,
      },
      {
        id: 6,
        name: "Write in 30+ languages",
        icon: <TfiFlag />,
      },
    ],
    delay: "200",
    isStart: "Subscribe Now",
  },
  {
    id: 3,
    planName: "Unlimited plan",
    amount: 49,
    time: "Monthly",
    upgrade_price: "$588 Per Year",
    feature: [
      {
        id: 1,
        name: "Generate 15k* characters",
        icon: <TfiNotepad />,
      },
      {
        id: 2,
        name: "Access 30+ use-cases",
        icon: <TfiFile />,
      },
      {
        id: 3,
        name: "Built in plagiarism checker",
        icon: <TfiLightBulb />,
      },

      {
        id: 4,
        name: "Access to premium community",
        icon: <TfiStar />,
      },
      {
        id: 5,
        name: "A5 images per month with AI",
        icon: <TfiImage />,
      },
      {
        id: 6,
        name: "Write in 30+ languages",
        icon: <TfiFlag />,
      },
    ],
    delay: "300",
    isStart: "Subscribe Now",
  },
];
const Pracing = () => {
  return (
    <div className="container">
      <div className="row">
        {pricingList.map(
          ({
            id,
            planName,
            feature,
            amount,
            delay,
            time,
            upgrade_price,
            isStart,
          }) => {
            return (
              <div
                key={id}
                className="col-lg-4 col-sm-6 col-xs-12"
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="pricing_design">
                  <div className="single-pricing">
                    <div className="price-head">
                      <h2>{planName}</h2>
                      <h1 className="price">${amount}</h1>
                      <span>/{time}</span>
                      <span className="upgrade_price">{upgrade_price}</span>
                    </div>
                    <ul>
                      {feature.map(({ id, icon, name }) => {
                        return (
                          <li key={id}>
                            <span>{icon}</span> {name}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="pricing-price"></div>
                    <a href="#" className="price_btn">
                      {isStart}
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Pracing;
