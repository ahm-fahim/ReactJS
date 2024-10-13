import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage";
import Root from "./components/Routes/Root/Root";
import Home from "./components/Pages/Home";
import Statistic from "./components/Pages/Statistic";
import AppliedJobs from "./components/Pages/AppliedJobs";
import Blog from "./components/Pages/Blog";
import JobDetails from "./components/others/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
