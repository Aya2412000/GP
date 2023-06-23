import React, { useState } from "react";
import "./SignAsProvider.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
export default function SignAsProvider() {
  const [t, i18n] = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [craft, setCraft] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const RegisterNow = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost/services/create.php", {
      username,
      password,
      firstName,
      lastName,
      email,
      address,
      craft,
      phoneNumber,
    });
    alert("Admin created");
  };

  return (
    <div className="container con">
      <h1>{t("Register as a craft owner")}</h1>
      <div className="h-Line"></div>
      <div className=" form-container">
        <form className="signProviderForm" onSubmit={RegisterNow}>
          <div className="row">
            <div class="col">
              <label for="first-name" className="form-label">
                {t("first name")}
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div class="col">
              <label for="last-name" className="form-label">
                {t("last name")}
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">
              {t("user name")}
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          {/* رقم الهاتف */}
          <div className="mb-3">
            <label for="Phone-num" className="form-label">
              {t("phone number")}
            </label>

            <input
              type="tel"
              // pattern="[0-9]{01}"
              class="form-control"
              id="Phone-num"
              style={{ width: "270px" }}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              {t("email")}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              // style={{ width: "270px" }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* العنوان */}
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              {t("address")}
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder={t("placeholder")}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div class="row">
            <div class="col">
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  {t("city")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  required
                  style={{ width: "270px" }}
                />
              </div>
            </div>
            {/* <div class="col">
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  {t("state")}
                </label>
                <select
                  id="inputState"
                  class="form-select"
                  style={{ width: "200px" }}
                  required
                >
                  <option selected>{t("choose")}</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  {t("zip")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  style={{ width: "100px" }}
                  required
                />
              </div>
            </div> */}
          </div>
          {/* كلمة المرور */}
          <div className="mb-3">
            <label for="Password1" className="form-label">
              {t("password")}
            </label>
            <input
              type="password"
              className="form-control"
              id="Password1"
              style={{ width: "270px" }}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* اختيار الحِرفة */}
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            style={{ width: "270px" }}
            onChange={(e) => setCraft(e.target.value)}
          >
            <option selected> {t("choose your craft")}</option>
            <option value="electricity">{t("electricity")}</option>
            <option value="carpentry">{t("carpentry")}</option>
            <option value="conditioning">{t("conditioning")}</option>
            <option value="Cleaning service">{t("Cleaning service")}</option>
            <option value="Painting">{t("Painting")}</option>
            <option value="Plastering">{t("Plastering")}</option>
            <option value="Plumbing">{t("Plumbing")}</option>
            <option value="Home Appliances">{t("Home Appliances")}</option>
            <option value="Satellite&Receiver">
              {t("Satellite&Receiver")}
            </option>
          </select>

          <button type="submit" className="btn btn-sign">
            {t("register")}
          </button>
        </form>
      </div>
    </div>
  );
}
