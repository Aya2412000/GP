import React from "react";
import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const [t, i18n] = useTranslation();

  return (
    <footer>
      <div class="container p-3">
        <div class="row">
          <div class="col-md-5 mt-3 text-center links">
            <a href="https://www.anamehani.com/ar/terms" target="_blank">
              {t("Terms")}
            </a>
            <a href="https://www.anamehani.com/privacy" target="_blank">
              {t("privacy")}
            </a>
            <a href="https://www.anamehani.com/ar/careers" target="_blank">
              {t("functions")}
            </a>
            <a
              href="https://www.anamehani.com/ar/terms#privacy-policy"
              target="_blank"
            >
              {t("policies")}
            </a>
          </div>
          <div class="col-md-2 mt-3 text-center">
            <a href="https://www.facebook.com/anamehani" target="_blank">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
            <a href="https://twitter.com/anamehani" target="_blank">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/anamehani" target="_blank">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </div>
          <div class="col-md-5 mt-3 text-center">
            <span>
              <FontAwesomeIcon icon={faPhone} /> 0223499386
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> info@anamehani.com
            </span>
          </div>
        </div>
        <div class="row pt-5" id="copyright">
          <span class="text-center border-top p-3 col-sm-12">
            {t("Herfa Ownership")}
          </span>
        </div>
      </div>
    </footer>
  );
}
