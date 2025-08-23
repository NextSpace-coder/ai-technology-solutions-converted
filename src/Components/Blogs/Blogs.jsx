import React from "react";
import "./blogs.css";
import { blogList } from "../../Utlits/blogList";
import BlogCard from "../Shared/BlogCard/BlogCard";
const Blogs = () => {
  return (
    <section className="article_area section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Aricle sample</h2>
          <p>
            All the reviews loved by{" "}
            <span>Copywriters, Marketers, Professionals</span> with others{" "}
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-8"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            {blogList
              .slice(1, 3)
              .map(({ id, heading, desc, author, date, image, tags }) => (
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
              ))}
          </div>
          <div
            className="col-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            {blogList
              .slice(2, 3)
              .map(({ id, heading, desc, author, date, image, tags }) => (
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
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
