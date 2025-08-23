import React from "react";
import "./allBlog.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { blogList } from "../../Utlits/blogList";
import BlogCard from "../../Components/Shared/BlogCard/BlogCard";
import { ScrollRestoration } from "react-router-dom";

const AllBlog = () => {
  return (
    <>
      <PageHeader pageName={"Latest Blog"} sortName={"Blog"} />
      <section className="article_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              {blogList.map(
                ({ id, heading, desc, author, date, image, tags }) => (
                  <BlogCard
                    key={id}
                    heading={heading}
                    desc={desc}
                    author={author}
                    date={date}
                    image={image}
                    tags={tags}
                    cardTwo={false}
                  />
                )
              )}
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              {blogList.slice(1, 4).map(
                ({ id, heading, desc, author, date, image, tags }) => (
                  <BlogCard
                    key={id}
                    heading={heading}
                    desc={desc}
                    author={author}
                    date={date}
                    image={image}
                    tags={tags}
                    cardTwo={true}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default AllBlog;
