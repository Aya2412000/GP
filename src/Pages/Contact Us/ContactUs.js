import React from "react";
import Navbar from "../../Components/Nav-bar/Navbar";
import Contact from "./Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ContactUs() {
    const location = useLocation();
    useEffect(() => {
      switch (location.pathname) {
        case "/contactUs":
          document.getElementById("title").innerHTML = "Contact-Us";
          break;
        default:
          document.getElementById("title").innerHTML = "defa";
      }
    }, [location]);
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
