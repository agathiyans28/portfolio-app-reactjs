import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Education from "../pages/education/Education";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Splash from "../pages/splash/Splash";
import NotFound from "../pages/error/NotFound";

export default function Main() {
  if (true) {
    return (
      <div>
        <BrowserRouter basename="/">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
