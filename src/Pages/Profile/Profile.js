import React from "react";
import NavProfile from "../../Components/Nav-profile/NavProfile";
import Footer from "../../Components/Footer/Footer";
import ServicesSection from "../../sections/services section/js/Services-Section";
export default function Profile() {
  return (
    <div>
      <NavProfile />
      <ServicesSection />
      <Footer />
    </div>
  );
}
