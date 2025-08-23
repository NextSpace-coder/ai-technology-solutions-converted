import React from "react";
import Banner from "../Components/Banner/Banner";
import Feature from "../Components/Feature/Feature";
import Partner from "../Components/Partner/Partner";
import Services from "../Components/Services/Services";
import ChooseUs from "../Components/ChooseUs/ChooseUs";
import WorkProcess from "../Components/WorkProcess/WorkProcess";
import Testimonials from "../Components/Testimonials/Testimonials";
import Blogs from "../Components/Blogs/Blogs";
import Pracing from "../Components/Pracing/Pracing";
import Faq from "../Components/Faq/Faq";
import Title from "../Components/Shared/Title/Title";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Partner />
      <Services />
      <ChooseUs />
      <WorkProcess />
      <Testimonials />
      <Blogs />
      <section id="pricing" className="price_area section-padding">
        <div className="container">
          <Title
            mainTitle={"Pricing Plan"}
            subTitle={
              "Find a plan that's right for you. Every plan comes with a"
            }
            subTitleSpan={"30-day free trial"}
          />
        </div>

        <Pracing />
      </section>
      {/* ---------- Start Faq */}
      <section className="faq_area section-padding">
        <div className="container">
          <Title
            mainTitle={"Faq"}
            subTitle={"Check the question section to get"}
            subTitleSpan={"Resources, FAQs, & Guides"}
          />
        </div>
        <Faq />
      </section>
      {/* ----------- End Faq */}
      <ScrollRestoration />
    </>
  );
};

export default Home;
