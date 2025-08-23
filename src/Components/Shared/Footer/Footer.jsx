import React from "react";
import "./footer.css";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

const useFullLink = [
  {
    id: 1,
    title: "Solutions",
    links: [
      "AI Content",
      "Smart Analytics",
      "Automation",
      "Data Processing",
      "Business Intelligence",
    ],
  },
  {
    id: 2,
    title: "Company",
    links: [
      "About us",
      "Resources",
      "Partnership",
      "Community",
      "Technology",
    ],
  },
];
const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <a href="index.html">
                <img src={logo} alt="" />
              </a>
              <p>
                Leading AI technology company providing innovative solutions
                for modern businesses and digital transformation.
              </p>
            </div>
          </div>
          {useFullLink.map(({ id, links, title }) => {
            return (
              <div key={id} className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>{title}</h4>
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link to={""}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="single_footer">
              <h4>Connect With Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <u>Chat Now</u>
                  </a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>&copy; 2024. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
