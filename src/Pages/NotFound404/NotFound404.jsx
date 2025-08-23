import React from "react";
import "./notFound404.css";
import { Link, ScrollRestoration } from "react-router-dom";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import errroimg from "../../assets/img/error.png";
const NotFound404 = () => {
  return (
    <>
      <PageHeader pageName={"Page Not Found"} sortName={"404"} />
      <section className="zero_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="error_page">
                <img src={errroimg} className="img-fluid" alt="404 error" />
                <h2>Oops! Page not found</h2>
                <p>
                  Hmm. We’re having trouble finding that site. Try again later
                  or Check your network connection.
                </p>
                <div className="home_btn">
                  <Link to="/" className="home_one">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default NotFound404;
