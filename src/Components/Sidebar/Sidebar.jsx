import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { blogList } from "../../Utlits/blogList";
import {
  FaFacebook,
  FaPinterest,
  FaRss,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    cate_name: "Technology",
    post_num: 11,
  },
  {
    id: 2,
    cate_name: "Ai Content",
    post_num: 44,
  },
  {
    id: 3,
    cate_name: "Ai Image",
    post_num: 23,
  },
  {
    id: 4,
    cate_name: "Marketing",
    post_num: 14,
  },
  {
    id: 5,
    cate_name: "Software",
    post_num: 21,
  },
  {
    id: 6,
    cate_name: "Design",
    post_num: "01",
  },
];
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-post">
        <div className="blog_search">
          <input
            type="text"
            className="form-control"
            placeholder="Type & Press Enter"
          />
        </div>
      </div>
      <div className="sidebar-post">
        <div className="newsletter-form">
          <h4>Subscribe for get updates</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ultricies quam nisi my business
          </p>
          <form action="#" className="subscribe">
            <input
              type="text"
              className="subscribe__input"
              placeholder="Email Address"
            />
            <button type="button" className="sub_btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* ------ start Poplur Blog */}
      <div className="sidebar-post">
        <div className="sidebar_title">
          <h4>Popular post</h4>
        </div>
        {blogList.map(({ heading, image }) => {
          return (
            <div className="single_popular">
              <Link to={""}>
                <img src={image} alt="" />
              </Link>
              <h5>
                <Link to={""}>{heading}</Link>
              </h5>
            </div>
          );
        })}
      </div>
      {/* ------ end Poplur Blog */}
      <div className="sidebar-post">
        <div className="sidebar_title">
          <h4>Follow us</h4>
        </div>
        <div className="single_social">
          <ul>
            <li>
              <div className="social_item b_facebook">
                <Link to={""} title="facebook">
                  <i>
                    <FaFacebook />
                  </i>
                  <span className="item-list">150K Likes</span>
                </Link>
              </div>
            </li>

            <li>
              <div className="social_item b_twitter">
                <Link to={""} title="twitter">
                  <i>
                    <FaTwitter />
                  </i>
                  <span className="item-list">138K Followers</span>
                </Link>
              </div>
            </li>

            <li>
              <div className="social_item b_youtube">
                <Link to={""} title="youtube">
                  <i>
                    <FaYoutube />
                  </i>
                  <span className="item-list">90K Subscribers</span>
                </Link>
              </div>
            </li>

            <li>
              <div className="social_item b_pinterest">
                <Link to={""} title="pinterest">
                  <i>
                    <FaPinterest />
                  </i>
                  <span className="item-list">350K Followers</span>
                </Link>
              </div>
            </li>

            <li>
              <div className="social_item b_tumblr">
                <Link to={""} title="Tumblr">
                  <i>
                    <FaTumblr />
                  </i>
                  <span className="item-list">901 Followers</span>
                </Link>
              </div>
            </li>

            <li>
              <div className="social_item b_rss">
                <Link to={""} title="rss">
                  <i>
                    <FaRss />
                  </i>
                  <span className="item-list">411 Followers</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* -------- Start categorie */}
      <div className="sidebar-post">
        <div className="sidebar_title">
          <h4>CATEGORIES</h4>
        </div>
        <div className="single_category">
          <ul>
            {categories.map(({ id, cate_name, post_num }) => {
              return (
                <li key={id}>
                  <Link to={""}>
                    {cate_name} <sup>{post_num}</sup>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
       {/* -------- End categorie */}
      <div className="sidebar-post">
        <div className="tag">
          <div className="sidebar_title">
            <h4>Popular Tag</h4>
          </div>
          <Link to={""}>ai writer</Link>
          <Link to={""}>chatbot</Link>
          <Link to={""}>content creation</Link>
          <Link to={""}>copywriting</Link>
          <Link to={""}>openai</Link>
          <Link to={""}>voice generator </Link>
          <Link to={""}>All project</Link>
          <Link to={""}>Clean Design</Link>
        </div>
      </div>
      <div className="sidebar-post">
        <div className="sidebar_title">
          <h4>Ad Banner</h4>
        </div>
        <div className="sidebar-banner">
          <Link to={""}>
            <img src="assets/img/blog/banner.jpg" className="img-fluid" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
