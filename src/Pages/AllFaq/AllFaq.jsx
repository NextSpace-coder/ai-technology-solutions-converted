import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Faq from "../../Components/Faq/Faq";
import { ScrollRestoration } from "react-router-dom";

const AllFaq = () => {
  return (
    <>
      <PageHeader pageName={"Faq"} />
      <section className="faq_area section-padding">
        <div className="section-title-two">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Faq />
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default AllFaq;
