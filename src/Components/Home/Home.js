import React from "react";
import Navbar from "./Nav-bar/Navbar";
import "./Home.css";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import Provides from "./Provides/Provides";
import Maps from "./Maps/Maps";

export default function Home() {
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
