import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./Pages/HomePage.jsx";

import HomePage from "./Pages/HomePage.jsx";
import RegisteredSupportOrganization from "./Pages/RegisteredSupportOrganization.jsx";
import NamasteRecruit from "./Pages/NamasteRecruit.jsx";
import ABSEnglishConversation from "./Pages/ABSEnglishConversation.jsx";
import About from "./Pages/About.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Contact from "./Pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/registered_support_organization"
          element={<RegisteredSupportOrganization />}
        />
        <Route path="/projects/namaste_recruit" element={<NamasteRecruit />} />
        <Route
          path="/projects/abs_english_conversation"
          element={<ABSEnglishConversation />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
