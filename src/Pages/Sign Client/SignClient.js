import React from "react";
import Navbar from "../../Components/Nav-bar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SignUpClient from "./SignClient/SignUpClient";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function SignClient() {

    const location = useLocation();
    useEffect(() => {
      switch (location.pathname) {
        case "/signup":
          document.getElementById("title").innerHTML = "SIGN-UP";
          break;
        default:
          document.getElementById("title").innerHTML = "React";
      }
    }, [location]);
  return (
    <div>
      <Navbar />
      <SignUpClient />
      <Footer />
    </div>
  );
}
