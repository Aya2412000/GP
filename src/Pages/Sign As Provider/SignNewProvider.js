import React from "react";
import Navbar from "../../Components/Nav-bar/Navbar";
import SignAsProvider from "./Signup/SignAsProvider";
import Footer from "../../Components/Footer/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function SignNewProvider() {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/signAsProvider":
        document.getElementById("title").innerHTML = "Sign As Provider";
        break;
      default:
        document.getElementById("title").innerHTML = "React";
    }
  }, [location]);
  return (
    <div>
      <Navbar />
      <SignAsProvider />
      <Footer />
    </div>
  );
}
