import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

//
import App from "./App.jsx";
import RegisteredSupportOrganization from "./Pages/ABSEnglishConversation.jsx";
import NamasteRecruit from "./Pages/NamasteRecruit.jsx";
import ABSEnglishConversation from "./Pages/ABSEnglishConversation.jsx";
import About from "./Pages/About.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Contact from "./Pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/projects/registered_support_organization",
    element: <RegisteredSupportOrganization />,
  },
  {
    path: "/projects/namaste_recruit",
    element: <NamasteRecruit />,
  },
  {
    path: "/projects/abs_english_conversation",
    element: <ABSEnglishConversation />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   path: "/projects/abs_english_conversation",
  //   element: <RegisteredSupportOrganization />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
