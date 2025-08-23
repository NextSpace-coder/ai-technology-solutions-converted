import React, { useEffect } from "react";
import "./services.css";

import Title from "../Shared/Title/Title";
import { Link } from "react-router-dom";
import { serviceList } from "../../Utlits/serviceList";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section id="service" className="best-service section-padding">
      <div className="container">
        <Title
          mainTitle={"Our Services"}
          subTitle={"Automatically generate high-quality content for"}
          subTitleSpan={"30+ use-cases"}
        />
        <div className="row text-center">
          {serviceList.map(({ id, title, desc, icon, delay }) => {
            return (
              <div key={id} className="col-lg-3 col-sm-4 col-xs-12">
                <ServiceCard delay={delay} desc={desc} title={title} icon={icon} />
              </div>
            );
          })}

          <div className="col-lg-12">
            <div className="ss_btn">
              <Link href="/usecase">View All Use Case</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
