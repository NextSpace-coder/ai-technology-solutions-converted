import React from "react";
import "./singleBlog.css";
import { Link, ScrollRestoration } from "react-router-dom";
import {
  TfiFacebook,
  TfiInstagram,
  TfiLinkedin,
  TfiTwitter,
} from "react-icons/tfi";

import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Sidebar from "../../Components/Sidebar/Sidebar";
import InputFiled from "../../Components/Shared/InputFiled/InputFiled";

import img1 from "../../assets/img/blog/3.jpg";
import img2 from "../../assets/img/blog/1.jpg";
import author from "../../assets/img/blog/author.jpg";
import comment1 from "../../assets/img/blog/c1.png";
import comment2 from "../../assets/img/blog/c2.png";
import comment3 from "../../assets/img/blog/c3.jpg";

const commentsList = [
  {
    id: 1,
    name: "Ayoub Fennouni",
    image: comment1,
    comments: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent ultricies quam nisi, vel gravida enim accumsan id.
    Praesent justo quam, auctor et lorem in, pulvinar ornare
    orci.`,
    isReplay: false,
  },
  {
    id: 2,
    name: "Kader Bhai",
    image: comment2,
    comments: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent ultricies quam nisi, vel gravida enim accumsan id.
    Praesent justo quam, auctor et lorem in, pulvinar ornare
    orci.`,
    isReplay: true,
  },
  {
    id: 3,
    name: "Mark Linomi",
    image: comment3,
    comments: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent ultricies quam nisi, vel gravida enim accumsan id.
    Praesent justo quam, auctor et lorem in, pulvinar ornare
    orci.`,
    isReplay: false,
  },
];
const SingleBlog = () => {
  return (
    <>
      <PageHeader pageName={"Single Blog"} />
      <section className="blog-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="arti_single">
                <div className="arti_img_two">
                  <img src={img1} className="img-fluid" alt="Blog image" />
                </div>
                <div className="arti_content ">
                  <p>
                    I almost couldn’t believe it was real! For my first test I
                    had generate some website copy for me. I provided about 50
                    words to describe my business along with my business name.
                    generated two variants of copy each with several paragraphs
                    of professional sounding copy. I immediately shared the
                    results with a friend who couldn’t believe it was written by
                    an AI. is worth every penny and then some. Describe my
                    business along with my business name. generated two variants
                    of copy each with several paragraphs of professional
                    sounding copy. I immediately shared the results with a
                    friend who couldn’t believe it was written by an AI. is
                    worth every penny and then some!
                  </p>
                </div>
                <div className="arti_sp">
                  <h2>
                    Enhancing Your E-commerce Store With AI Writing Assistants
                  </h2>
                  <img src={img2} className="img-fluid" alt="Blog image" />
                  <p>
                    I immediately shared the results with a friend who couldn’t
                    believe it was written by an AI. is worth every penny and
                    then some. Describe my business along with my business name.
                    generated two variants of copy each with several paragraphs
                    of professional sounding copy. I immediately shared the
                    results with a friend who couldn’t believe it was written by
                    an AI. is worth every penny and then some!
                  </p>
                </div>
                <div className="share_sp">
                  <h4>Share</h4>
                  <ul>
                    <li>
                      <Link to={""}>
                        <span>
                          <TfiFacebook />{" "}
                        </span>{" "}
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to={""}>
                        <span>
                          {" "}
                          <TfiTwitter />
                        </span>{" "}
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link to={""}>
                        <span>
                          <TfiInstagram />
                        </span>{" "}
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to={""}>
                        <span>
                          <TfiLinkedin />
                        </span>{" "}
                        Linkedin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="author_part">
                <h3 className="blog_head_title">About the author</h3>
                <div className="single_author">
                  <img src={author} alt="" />
                  <h4>Marina Mojo</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci.
                  </p>
                </div>
              </div>
              <div className="comments_part">
                <h3 className="blog_head_title">Comments</h3>
                {commentsList.map(({ id, comments, image, isReplay, name }) => {
                  return (
                    <div
                      key={id}
                      className={`single_comment ${isReplay && "sc_left"}`}
                    >
                      <img src={image} alt="" />
                      <h4>{name}</h4>
                      <p>{comments}</p>
                    </div>
                  );
                })}
              </div>
              {/* ------- Comment filed */}
              <div className="comment_form">
                <h3 className="blog_head_title">Add a Comment</h3>
                <div className="contact comment-box">
                  <form
                    id="contact-form"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <div className="row">
                      <div className=" col-md-6">
                        <InputFiled
                          label={""}
                          name={"name"}
                          placeholder={"Name"}
                          type={"text"}
                          required={true}
                        />
                      </div>
                      <div className=" col-md-6">
                        <InputFiled
                          label={""}
                          name={"email"}
                          placeholder={"Email"}
                          type={"email"}
                          required={true}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <InputFiled
                          label={""}
                          name={"subject"}
                          placeholder={"Subject"}
                          type={"text"}
                          required={true}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          rows="6"
                          name="message"
                          className="form-control"
                          id="description"
                          placeholder="Your Message"
                          required="required"
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <div className="actions">
                          <button
                            type="submit"
                            value="Send message"
                            name="submit"
                            id="submitButton"
                            className="home_one"
                            title="Submit Your Message!"
                          >
                            Submit Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* ------- Comment filed */}
            </div>
            <div className="col-lg-5 col-sm-12 col-xs-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default SingleBlog;
