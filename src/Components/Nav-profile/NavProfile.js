import React from "react";
import "../Nav-bar/Navbar.css";
import "./NavProfile.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import img from "../../Shared/assets/images/2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
export default function NavbarProfile() {
  const [color, setColor] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/profile") {
      document.getElementById("profile").style.color = "#ef6214";
    }
  });

  const [t, i18n] = useTranslation();
  if (i18n.language == "en") {
    document.body.style.direction = "ltr";
  } else if (i18n.language == "ar") {
    document.body.style.direction = "rtl";
  }
  return (
    <div className=" NAV-BG">
      <div className="Main-container">
        <nav className="navbar navbar-expand-lg bg-body-transparent ">
          <div className="container-fluid">
            <a className=" Logo" href="/">
              {t("LOGO")}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-box ">
                <li className="nav-item ">
                  <NavLink
                    className="Nav "
                    id="profile"
                    aria-current="page"
                    exact
                    to="/profile"
                    activeClassName="activee"
                  >
                    {t("Services")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="Nav"
                    exact
                    to="#"
                    activeClassName="activee"
                  >
                    {t("Who-us")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="Nav"
                    exact
                    to="/contactUsProfile"
                    activeClassName="activee"
                  >
                    {t("Contact-us")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="Nav"
                    exact
                    to="#"
                    activeClassName="activee"
                  >
                    {t("Blog")}
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 in-search"
                  type="search"
                  placeholder={t("Search-placeholder")}
                  aria-label="Search"
                />
                <button className="btn btn-search" type="submit">
                  {t("Search-btn")}
                </button>
              </form>
              {i18n.language == "en" && (
                // <button
                //   onClick={() => {
                //     i18n.changeLanguage("ar");
                //   }}
                //   className="btn Lan btn-info"
                //   type="submit"
                // >
                //   AR
                // </button>
                <FontAwesomeIcon
                  icon={faEarthOceania}
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                  className="btn Lan "
                />
              )}
              {i18n.language == "ar" && (
                // <button
                //   onClick={() => {
                //     i18n.changeLanguage("en");
                //   }}
                //   className="btn Lan btn-info"
                //   type="submit"
                // >
                //   EN
                // </button>
                <FontAwesomeIcon
                  icon={faEarthOceania}
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                  className="btn Lan "
                />
              )}
              <div>
                <a className="navbar-brand before-img" href="#">
                  <img
                    src={img}
                    alt="profile-img"
                    className="profile-img"
                    onClick={() => {
                      document.getElementById("info").style.display = "flex";
                    }}
                  />
                </a>
                <div className="info" id="info">
                  <a href="#">username</a>
                  <a href="#">{t("Logout")}</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
