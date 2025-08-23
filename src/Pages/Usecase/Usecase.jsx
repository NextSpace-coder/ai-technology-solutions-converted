import React from "react";
import "./usecase.css";
import { ScrollRestoration } from "react-router-dom";

import ServiceCard from "../../Components/Shared/ServiceCard/ServiceCard";
import { serviceList } from "../../Utlits/serviceList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
const Usecase = () => {
  return (
    <>
    <PageHeader pageName={"Use Case"}/>
      <section id="service" className="best-service section-padding">
        <div className="container">
          <div className="section-title-two">
            <h2>30+ Use Cases</h2>
          </div>
          <div className="row text-center">
            {serviceList.map(({id, delay, desc, icon, title}) => {
              return (
                <div key={id} className="col-lg-4 col-sm-4 col-xs-12 ">
                  <ServiceCard delay={delay} desc={desc} icon={icon} title={title} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default Usecase;
