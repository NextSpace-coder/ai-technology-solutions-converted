import React from "react";
import "./about.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const aboutUs = [
  {
    id: 1,
    title: "Vision & Mission",
    desc: `<p>
        A Vision Statement outlines the long-term aspirations and goals
        of an organization. It describes what the organization hopes to
        achieve in the future and serves as a guiding principle for its
        strategic decisions and actions. A well-crafted vision statement
        should be inspirational, ambitious, and forward-looking,
        inspiring both employees and stakeholders to work towards a
        common purpose.
      </p>`,
  },
  {
    id: 2,
    title: "Who we are",
    desc: `<p>
    On the other hand, as a user interacting with me, you are a
    human individual or group using this AI system to ask questions,
    seek information, or engage in a conversation. Your purpose
    could be to gain knowledge, get assistance, or explore various
    topics.
  </p>
  <p>
                AiLife, the organization behind this AI, is a research lab that
                focuses on artificial intelligence and machine learning. It aims
                to promote and develop AI technology responsibly and ensure its
                positive impact on society.
              </p>
              <p>
                Together, you, as the user, and I, as the AI language model,
                form an interactive exchange of information, ideas, and
                knowledge. It's crucial to recognize that the AI is a tool to
                augment human capabilities and should be used responsibly and
                ethically in various applications.
              </p>
  `,
  },
  {
    id: 3,
    title: "Join our team",
    desc: ` <p>
    Feel a part of the team wherever you are. Frequent company-wide
    virtual events & activities. Home office stipend. Optional
    working hubs in Austin, Salt Lake City, and Sydney. Fun company
    offsites. Email here -{" "}
    <u>
      <a href="mailto:example.com">example@yourmail.com</a>
    </u>
  </p>`,
  },
  {
    id: 4,
    title: "Get in Touch with us",
    desc: ` <p>
    We're always an email away - please say hello at{" "}
    <u>
      <a href="mailto:example.com">example@yourmail.com</a>
    </u>{" "}
    if we can be of any help or you have any questions.
  </p>`,
  },
];
const About = () => {
  return (
    <>
      <PageHeader pageName="About Us" />
      {/* -------- about start */}
      <section className="about-page section-padding">
        <div className="container">
          <div className="col-lg-10 offset-lg-1">
            {aboutUs.map(({ id, title, desc }) => {
              return (
                <div key={id} className="ap-content">
                  <h1>{title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* -------- about End */}
      <ScrollRestoration/>
    </>
  );
};

export default About;
