import React from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  const [t, i18n] = useTranslation();
  if (i18n.language == "en") {
    document.body.style.direction = "ltr";
  } else if (i18n.language == "ar") {
    document.body.style.direction = "rtl";
  }
  return (
    <div className=" nav-BG">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-box">
                <li className="nav-item">
                  <Link className="Nav " aria-current="page" to="/">
                    {t("Services")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="Nav" to="#">
                    {t("Who-us")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="Nav" to="#">
                    {t("Contact-us")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="Nav" to="#">
                    {t("Blog")}
                  </Link>
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
                {i18n.language == "en" && (
                  <button
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                    className="btn Lan btn-info"
                    type="submit"
                  >
                    AR
                  </button>
                )}
                {i18n.language == "ar" && (
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className="btn Lan btn-info"
                    type="submit"
                  >
                    EN
                  </button>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
