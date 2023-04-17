import React from "react";
import "./Services.css";
import { useTranslation } from "react-i18next";

// import ServicesItems from "./ServicesItems";
// import { OurServicesDate } from "./ServicesData";
import {
  faBroom,
  faFan,
  faPaintbrush,
  faPlugCircleBolt,
  faSatelliteDish,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Services() {
  const [t, i18n] = useTranslation();

  return (
    <section className="service-main">
      <div className="container">
        <h1 className="simple-border">{t("main-services")}</h1>
        <div className="hLine"></div>
        <div className="row collector">
          {/* {OurServicesDate.map((item) => {
            return (
              <ServicesItems
                icon={item.icon}
                work={item.work}
                alt={item.alt}
                key={item.id}
              />
            );
          })}
        </div> */}
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faPlugCircleBolt} />
              <p>{t("electricity")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faPlugCircleBolt} />
              <p>{t("carpentry")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faFan} />
              <p>{t("conditioning")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faBroom} />
              <p>{t("Cleaning service")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faPaintbrush} />
              <p>{t("Painting")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faPlugCircleBolt} />
              <p>{t("Plastering")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faWrench} />
              <p>{t("Plumbing")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faSatelliteDish} />
              <p>{t("Satellite&Receiver")}</p>
            </div>
          </div>
          <div class="col-md-2 col-6 mt-4">
            <div
              class="service-box main-service-1"
              data-toggle="modal"
              data-target="#main-services-modal"
              data-keyboard="false"
              data-backdrop="static"
            >
              {/* <img src={img} alt={alt} /> */}
              <FontAwesomeIcon className="icon" icon={faSatelliteDish} />
              <p>{t("Home Appliances")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
