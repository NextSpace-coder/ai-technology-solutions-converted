import React from "react";
import "./faq.css";
import Title from "../Shared/Title/Title";

const accordionList = [
  {
    id: "headingOne",
    heading: "How does it create content?",
    content: `Great value and so easy to use and saves me so much time! I
        was shocked by how much time and brain energy it saved me.
        Simple & easy gotta love that. Great value and so easy to
        use and saves me so much time! I was shocked by how much
        time and brain energy it saved me. Simple & easy gotta love
        that.`,
  },
  {
    id: "headingTwo",
    heading: "Is the content original?",
    content: `Great value and so easy to use and saves me so much time! I
        was shocked by how much time and brain energy it saved me.
        Simple & easy gotta love that. Great value and so easy to
        use and saves me so much time! I was shocked by how much
        time and brain energy it saved me. Simple & easy gotta love
        that.`,
  },
  {
    id: "headingThree",
    heading: "How to write long-form blogs?",
    content: `Great value and so easy to use and saves me so much time! I
        was shocked by how much time and brain energy it saved me.
        Simple & easy gotta love that. Great value and so easy to
        use and saves me so much time! I was shocked by how much
        time and brain energy it saved me. Simple & easy gotta love
        that.`,
  },
  {
    id: "headingFour",
    heading: "How to write long-form blogs?",
    content: `Great value and so easy to use and saves me so much time! I
        was shocked by how much time and brain energy it saved me.
        Simple & easy gotta love that. Great value and so easy to
        use and saves me so much time! I was shocked by how much
        time and brain energy it saved me. Simple & easy gotta love
        that.`,
  },
  {
    id: "headingFive",
    heading: "How to write long-form blogs?",
    content: `Great value and so easy to use and saves me so much time! I
        was shocked by how much time and brain energy it saved me.
        Simple & easy gotta love that. Great value and so easy to
        use and saves me so much time! I was shocked by how much
        time and brain energy it saved me. Simple & easy gotta love
        that.`,
  },
];
const Faq = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-12 col-xs-12">
          <div className="accordion" id="accordionExample">
            {accordionList.map(({ id, content, heading }, index) => {
              return (
                <div key={id} className="accordion-item">
                  <h2 className="accordion-header" id={id}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${id}`}
                    >
                      {heading}
                    </button>
                  </h2>
                  <div
                    id={`collapse${id}`}
                    className={`accordion-collapse ${index === 0 ? "show" : "collapse"}`}
                    aria-labelledby={id}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
