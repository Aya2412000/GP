import React from "react";
import Navbar from "../Home/Nav-bar/Navbar";
import Footer from "../Home/Footer/Footer";
import SignUpClient from "./SignClient/SignUpClient";

export default function SignClient() {
  return (
    <div>
      <Navbar />
      <SignUpClient />
      <Footer />
    </div>
  );
}
