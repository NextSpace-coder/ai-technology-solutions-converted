import React from "react";
import Pracing from "../Components/Pracing/Pracing";
import { ScrollRestoration } from "react-router-dom";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import TitleTwo from "../Components/Shared/TitleTwo/TitleTwo";

const AllPricing = () => {
  return (
    <>
      <PageHeader pageName={"Pricing"} />
      <section className=" section-padding">
        <TitleTwo title={"Best Price for you"} />
        <Pracing />
      </section>
      <ScrollRestoration />
    </>
  );
};

export default AllPricing;
