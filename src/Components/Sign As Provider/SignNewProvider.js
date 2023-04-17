import React from "react";
import Navbar from "../Home/Nav-bar/Navbar";
import SignAsProvider from "./Signup/SignAsProvider";
import Footer from "../Home/Footer/Footer";

export default function SignNewProvider() {
  return (
    <div>
      <Navbar />
      <SignAsProvider />
      <Footer />
    </div>
  );
}
