import React, { useEffect } from "react";
import "./feature.css";
import { TfiUser, TfiPencilAlt, TfiMoney } from "react-icons/tfi";

const featureList = [
  {
    id: 1,
    title: "6,000,000+",
    desc: "Happy copywriters, marketers & entrepreneurs",
    icon: <TfiUser />,
    delay: "100",
  },
  {
    id: 2,
    title: "4.8/5 Reviews",
    desc: "Satisfaction rating from 1300+ reviews on TrustPilot, G2 & more.",
    icon: <TfiPencilAlt />,
    delay: "200",
  },
  {
    id: 3,
    title: "6,000,000+",
    desc: "and $700 million+ saved in content writing so far",
    icon: <TfiMoney />,
    delay: "300",
  },
];
const Feature = () => {
  return (
    <section className="top-feature">
      <div className="container">
        <div className="row text-center">
          {featureList.map(({ id, title, desc, delay, icon }) => {
            return (
              <div
                key={id}
                className="col-lg-4 col-sm-4 col-xs-12"
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="single_tf">
                  <span>{icon}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
