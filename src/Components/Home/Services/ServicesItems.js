import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ServicesItems({ icon, alt, work }) {
  return (
    <div class="col-md-2 col-6 mt-4">
      <div
        class="service-box main-service-1"
        data-toggle="modal"
        data-target="#main-services-modal"
        data-keyboard="false"
        data-backdrop="static"
      >
        {/* <img src={img} alt={alt} /> */}
        <FontAwesomeIcon className="icon" icon={icon} />
        <p>{work}</p>
      </div>
    </div>
  );
}
