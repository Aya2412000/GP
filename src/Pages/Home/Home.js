import React from "react";
import Navbar from "../../Components/Nav-bar/Navbar";
import "./Home.css";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Footer from "../../Components/Footer/Footer";
import Provides from "./Provides/Provides";
import Maps from "./Maps/Maps";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function Home() {
  const [t, i18n] = useTranslation();
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.getElementById("title").innerHTML = "Home";
        break;
      default:
        document.getElementById("title").innerHTML = "React";
    }
  }, [location]);

  return (
    <div>
      <div className="background">
        <Navbar />
        <Header />
      </div>
      <Services />
      <Maps />
      <Provides />
      <Footer />
    </div>
  );
}
