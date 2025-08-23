import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { TfiAngleDown, TfiMenu } from "react-icons/tfi";
import logo from "../../../assets/img/logo.png";

const menuList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "#",
    name: "Pages",
    subMenu: [
      {
        id: 1,
        path: "/about",
        name: "About Us",
      },
      {
        id: 2,
        path: "/faq",
        name: "FAQ's",
      },
      {
        id: 3,
        path: "/team",
        name: "Our team",
      },
      {
        id: 4,
        path: "/404",
        name: "404 Page",
      },
      {
        id: 5,
        path: "/login",
        name: "Login",
      },
      {
        id: 6,
        path: "/register",
        name: "Register",
      },
    ],
  },
  {
    id: 3,
    path: "/pricing",
    name: "Pricing",
  },
  {
    id: 4,
    path: "#",
    name: "Usecase",
    subMenu: [
      { id: 1, path: "/usecase", name: "Usecase" },
      { id: 2, path: "/usecase_details", name: "Usecase details" },
    ],
  },
  {
    id: 5,
    path: "#",
    name: "Blog",
    subMenu: [
      { id: 1, path: "/all_blog", name: "Blog List" },
      { id: 2, path: "/single_blog", name: "Single Blog" },
    ],
  },
  {
    id: 6,
    path: "/contact",
    name: "Contact",
  },
];
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    selectId: null,
    active: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --------- scroll to top sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  // --------- scroll to top sticky navbar
  const isSticky = (e) => {
    const header = document.getElementById("navigation");
    const scrollTop = window.scrollY;

    scrollTop >= 35
      ? header.classList.add("navbar-fixed")
      : header.classList.remove("navbar-fixed");
  };
  return (
    <header
      id="navigation"
      className="fixed-top navbar-light bg-faded site-navigation"
    >
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="">
            <div className="site-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>

          <div className=" ">
            <div className="header_right ">
              <nav id="main-menu" className="ms-auto">
                <ul>
                  {menuList.map(({ id, name, path, subMenu }) => {
                    return (
                      <li key={id}>
                        <Link className="nav-link" to={path}>
                          {name}{" "}
                          {subMenu?.length && (
                            <span>
                              <TfiAngleDown />
                            </span>
                          )}
                        </Link>
                        {subMenu?.length && (
                          <ul>
                            {subMenu.map(({ name, path, id }) => {
                              return (
                                <li key={id}>
                                  <Link className="nav-link" to={path}>
                                    {name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <nav
                className={`mobile_menu ${
                  isMenuOpen ? "mobile_menu_active" : ""
                }`}
              >
                <ul>
                  {menuList.map(({ id, name, path, subMenu }) => {
                    return (
                      <li
                        key={id}
                        onClick={() =>
                          setIsDropdownOpen({
                            active: !isDropdownOpen.active,
                            selectId: id,
                          })
                        }
                      >
                        <Link className="nav-link" to={path}>
                          {name}{" "}
                          {subMenu?.length && (
                            <span>
                              <TfiAngleDown />
                            </span>
                          )}
                        </Link>
                        {subMenu?.length && (
                          <ul
                            className={` ${
                              isDropdownOpen.active === true &&
                              isDropdownOpen.selectId === id
                                ? "dropdownActive"
                                : "dropdown"
                            }`}
                          >
                            {subMenu.map(({ name, path, id }) => {
                              return (
                                <li key={id}>
                                  <Link className="nav-link" to={path}>
                                    {name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div className=" d-flex d-lg-block align-items-center">
            <div className="call_to_action">
              <Link to={"/pricing"}>Try For Free</Link>
            </div>
            <div
              className="d-lg-none d-block menu_icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <TfiMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
