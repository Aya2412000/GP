import React from "react";
import LOGIN from "./LOG/LOGIN";
import Navbar from "../../Components/Nav-bar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function LogIn() {
    const location = useLocation();
    useEffect(() => {
      switch (location.pathname) {
        case "/login":
          document.getElementById("title").innerHTML = "LOG-IN";
          break;
        default:
          document.getElementById("title").innerHTML = "React";
      }
    }, [location]);
  return (
    <div>
      <Navbar />
      <LOGIN />
      <Footer />
    </div>
  );
}
