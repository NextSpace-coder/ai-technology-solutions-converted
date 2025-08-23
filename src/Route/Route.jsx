import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
// import Team from "../Pages/Teams/Teams";
import About from "../Pages/About/About";
import AllFaq from "../Pages/AllFaq/AllFaq";
import Teams from "../Pages/Teams/Teams";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UsecaseDetails from "../Pages/UsecaseDetails/UsecaseDetails";
import Usecase from "../Pages/Usecase/Usecase";
import AllBlog from "../Pages/AllBlog/AllBlog";
import SingleBlog from "../Pages/SingleBlog/SingleBlog";
import NotFound404 from "../Pages/NotFound404/NotFound404";
import Contact from "../Pages/Contact/Contact";
import AllPricing from "../Pages/AllPricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Teams />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <AllFaq />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/usecase_details",
        element: <UsecaseDetails />,
      },
      {
        path: "/usecase",
        element: <Usecase />,
      },
      {
        path: "/all_blog",
        element: <AllBlog />,
      },
      {
        path: "/single_blog",
        element: <SingleBlog />,
      },
      {
        path: "/404",
        element: <NotFound404 />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <AllPricing />,
      },
    ],
  },
]);
